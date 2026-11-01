import crypto from 'crypto';
import { calculateServerOrder } from '../../server/packageConfig.js';
import { saveLead } from '../../server/leadStore.js';

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { fullName, email, mobile, state, packageId, honeypot } = req.body || {};

    // 1. Anti-Bot honeypot check
    if (honeypot) {
      return res.status(400).json({ error: 'Automated submission detected.' });
    }

    // 2. Validate input fields
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      return res.status(400).json({ error: 'Valid full name is required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return res.status(400).json({ error: 'Valid email address is required.' });
    }

    const cleanMobile = (mobile || '').replace(/\D/g, '');
    if (!cleanMobile || !/^[6-9]\d{9}$/.test(cleanMobile)) {
      return res.status(400).json({ error: 'Valid 10-digit Indian mobile number is required.' });
    }

    if (!state) {
      return res.status(400).json({ error: 'State of business is required.' });
    }

    // 3. Server-side authoritative price lookup
    const orderPricing = calculateServerOrder(packageId);

    // 4. Save lead with status 'payment_pending' BEFORE Razorpay order creation
    const leadId = 'lead_' + crypto.randomBytes(8).toString('hex');
    await saveLead({
      id: leadId,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      mobile: cleanMobile,
      state,
      packageId: orderPricing.packageId,
      packageName: orderPricing.packageName,
      basePrice: orderPricing.basePrice,
      gstAmount: orderPricing.gstAmount,
      totalAmount: orderPricing.total,
      totalInPaise: orderPricing.totalInPaise,
      status: 'payment_pending',
      createdAt: new Date().toISOString(),
    });

    // 5. Create Razorpay Order
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    let razorpayOrderId = null;

    if (keyId && keySecret) {
      // Connect to official Razorpay API
      const authHeader = 'Basic ' + Buffer.from(`${keyId}:${keySecret}`).toString('base64');
      const rzpRes = await fetch('https://api.razorpay.com/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': authHeader,
        },
        body: JSON.stringify({
          amount: orderPricing.totalInPaise,
          currency: 'INR',
          receipt: leadId,
          notes: {
            leadId,
            fullName: fullName.trim(),
            packageId: orderPricing.packageId,
            mobile: cleanMobile,
          },
        }),
      });

      if (!rzpRes.ok) {
        const errorText = await rzpRes.text();
        console.error('Razorpay API error:', errorText);
        throw new Error('Failed to create Razorpay payment order.');
      }

      const rzpData = await rzpRes.json();
      razorpayOrderId = rzpData.id;
    } else {
      // Test / development fallback order
      razorpayOrderId = 'order_test_' + crypto.randomBytes(7).toString('hex');
      console.log(`[Razorpay TEST Mode] Generated test order ${razorpayOrderId} for ${orderPricing.packageName}`);
    }

    return res.status(200).json({
      success: true,
      orderId: razorpayOrderId,
      amount: orderPricing.totalInPaise,
      currency: 'INR',
      leadId,
      keyId: keyId || 'rzp_test_placeholder',
      packageName: orderPricing.packageName,
    });
  } catch (err) {
    console.error('Error in create-order handler:', err);
    return res.status(500).json({ error: err.message || 'Server error while generating order.' });
  }
}
