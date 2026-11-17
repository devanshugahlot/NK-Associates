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

    // 1. Authoritative server-side price calculation (base + 18% GST in INR)
    const orderPricing = calculateServerOrder(packageId);

    // 2. Fetch or create lead
    let targetLeadId = leadId;
    let lead = targetLeadId ? await getLead(targetLeadId) : null;

    if (lead) {
      await updateLead(lead.id, {
        packageId: orderPricing.packageId,
        packageName: orderPricing.packageName,
        basePrice: orderPricing.basePrice,
        gstAmount: orderPricing.gstAmount,
        totalAmount: orderPricing.total,
        status: lead.status === 'paid' ? 'paid' : 'payment_pending',
      });
    } else {
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
        status: 'payment_pending',
        createdAt: new Date().toISOString(),
      });
    }

    // 3. Cashfree API Configuration
    const appId = process.env.CASHFREE_APP_ID;
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const env = (process.env.CASHFREE_ENV || 'sandbox').toLowerCase();
    const apiVersion = process.env.CASHFREE_API_VERSION || '2023-08-01';

    const baseUrl = env === 'production'
      ? 'https://api.cashfree.com'
      : 'https://sandbox.cashfree.com';

    let orderId = `NKGST_${lead.id.replace(/[^a-zA-Z0-9]/g, '')}_${Date.now()}`.slice(0, 45);
    let paymentSessionId = null;

    if (appId && secretKey) {
      const cleanPhone = (lead.mobile || '').replace(/\D/g, '');
      const validPhone = cleanPhone.length === 10 ? cleanPhone : '9876543210';

      const cashfreePayload = {
        order_id: orderId,
        order_amount: orderPricing.total,
        order_currency: 'INR',
        customer_details: {
          customer_id: lead.id.replace(/[^a-zA-Z0-9_]/g, '_'),
          customer_name: lead.fullName || 'Prospective Client',
          customer_email: lead.email || 'care@nkassociate.in',
          customer_phone: validPhone,
        },
        order_meta: {
          return_url: 'https://nkassociate.in/services/gst?order_id={order_id}',
          notify_url: 'https://nkassociate.in/api/gst/webhook',
        },
        order_note: orderPricing.packageName,
      };

      const cfRes = await fetch(`${baseUrl}/pg/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-client-id': appId,
          'x-client-secret': secretKey,
          'x-api-version': apiVersion,
        },
        body: JSON.stringify(cashfreePayload),
      });

      if (!cfRes.ok) {
        const errorText = await cfRes.text();
        console.error('Cashfree Create Order error:', errorText);
        throw new Error('Failed to create Cashfree payment order.');
      }

      const cfData = await cfRes.json();
      orderId = cfData.order_id;
      paymentSessionId = cfData.payment_session_id;
    } else {
      // Mock / sandbox test mode when keys are not yet configured
      orderId = 'order_test_' + crypto.randomBytes(7).toString('hex');
      paymentSessionId = 'session_test_' + crypto.randomBytes(12).toString('hex');
      console.log(`[Cashfree TEST Mode] Created test order ${orderId} for ${orderPricing.packageName}`);
    }

    // Save order details to lead
    await updateLead(lead.id, {
      orderId,
      cashfreeOrderId: orderId,
      paymentSessionId,
      status: 'payment_pending',
    });

    return res.status(200).json({
      success: true,
      orderId,
      paymentSessionId,
      leadId: lead.id,
      amount: orderPricing.total,
      packageName: orderPricing.packageName,
    });
  } catch (err) {
    console.error('Error in create-order handler:', err);
    return res.status(500).json({ error: err.message || 'Server error while generating order.' });
  }
}
