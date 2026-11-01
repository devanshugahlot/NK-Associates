import crypto from 'crypto';
import { calculateServerOrder } from '../../server/packageConfig.js';
import { saveLead, getLead, updateLead } from '../../server/leadStore.js';

export default async function handler(req, res) {
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
    const { leadId, packageId, fullName, email, mobile, state } = req.body || {};

    if (!packageId) {
      return res.status(400).json({ error: 'Package selection is required.' });
    }

    // 1. Authoritative server-side price calculation
    const orderPricing = calculateServerOrder(packageId);

    // 2. Fetch or create lead
    let targetLeadId = leadId;
    let lead = targetLeadId ? await getLead(targetLeadId) : null;

    if (lead) {
      // Update existing lead to 'payment_pending'
      await updateLead(lead.id, {
        packageId: orderPricing.packageId,
        packageName: orderPricing.packageName,
        basePrice: orderPricing.basePrice,
        gstAmount: orderPricing.gstAmount,
        totalAmount: orderPricing.total,
        totalInPaise: orderPricing.totalInPaise,
        status: lead.status === 'paid' ? 'paid' : 'payment_pending',
      });
    } else {
      // Create new lead if none exists
      targetLeadId = 'lead_' + crypto.randomBytes(8).toString('hex');
      const cleanMobile = (mobile || '').replace(/\D/g, '');
      lead = await saveLead({
        id: targetLeadId,
        fullName: (fullName || 'Prospective Client').trim(),
        email: (email || '').trim().toLowerCase(),
        mobile: cleanMobile,
        state: state || 'Rajasthan',
        packageId: orderPricing.packageId,
        packageName: orderPricing.packageName,
        basePrice: orderPricing.basePrice,
        gstAmount: orderPricing.gstAmount,
        totalAmount: orderPricing.total,
        totalInPaise: orderPricing.totalInPaise,
        status: 'payment_pending',
        createdAt: new Date().toISOString(),
      });
    }

    // 3. Create Razorpay Order
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    let razorpayOrderId = null;

    if (keyId && keySecret) {
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
          receipt: lead.id,
          notes: {
            leadId: lead.id,
            fullName: lead.fullName,
            packageId: orderPricing.packageId,
            mobile: lead.mobile,
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
      razorpayOrderId = 'order_test_' + crypto.randomBytes(7).toString('hex');
      console.log(`[Razorpay TEST Mode] Created order ${razorpayOrderId} for ${orderPricing.packageName}`);
    }

    // Save orderId to lead
    await updateLead(lead.id, {
      razorpayOrderId,
      orderId: razorpayOrderId,
      status: 'payment_pending',
    });

    return res.status(200).json({
      success: true,
      orderId: razorpayOrderId,
      amount: orderPricing.totalInPaise,
      currency: 'INR',
      leadId: lead.id,
      keyId: keyId || 'rzp_test_placeholder',
      packageName: orderPricing.packageName,
    });
  } catch (err) {
    console.error('Error in create-order handler:', err);
    return res.status(500).json({ error: err.message || 'Server error while generating order.' });
  }
}
