import { getLead, updateLead } from '../../server/leadStore.js';
import { calculateServerOrder } from '../../server/packageConfig.js';
import { sendOrderNotifications } from '../../server/mailer.js';

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

  // Support both POST (from modal callback) and GET (from return_url query)
  const orderId = req.method === 'GET'
    ? req.query?.order_id || req.query?.orderId
    : req.body?.orderId || req.body?.order_id;
  const leadId = req.method === 'GET' ? req.query?.leadId : req.body?.leadId;

  if (!orderId && !leadId) {
    return res.status(400).json({ error: 'Missing order or lead identifier.' });
  }

  try {
    const lead = await getLead(leadId || orderId);
    if (!lead) {
      return res.status(404).json({ error: 'Lead record not found.' });
    }

    // Idempotency: if already verified as paid, return early
    if (lead.status === 'paid') {
      return res.status(200).json({
        success: true,
        verified: true,
        alreadyProcessed: true,
        message: 'Order already verified.',
        leadId: lead.id,
        orderId: lead.orderId || orderId,
      });
    }

    const packageDetails = calculateServerOrder(lead.packageId);

    const appId = process.env.CASHFREE_APP_ID;
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const env = (process.env.CASHFREE_ENV || 'sandbox').toLowerCase();
    const apiVersion = process.env.CASHFREE_API_VERSION || '2023-08-01';

    const baseUrl = env === 'production'
      ? 'https://api.cashfree.com'
      : 'https://sandbox.cashfree.com';

    let isVerifiedPaid = false;
    let paymentDetails = null;

    if (appId && secretKey && !orderId?.startsWith('order_test_')) {
      const cfRes = await fetch(`${baseUrl}/pg/orders/${encodeURIComponent(orderId)}`, {
        method: 'GET',
        headers: {
          'x-client-id': appId,
          'x-client-secret': secretKey,
          'x-api-version': apiVersion,
        },
      });

      if (!cfRes.ok) {
        const errorText = await cfRes.text();
        console.error('Cashfree Get Order error:', errorText);
        return res.status(400).json({ error: 'Failed to verify order status with Cashfree.' });
      }

      const cfData = await cfRes.json();
      paymentDetails = cfData;

      // Check status is PAID and amount matches authoritative server calculation
      const isPaid = cfData.order_status === 'PAID';
      const amountMatches = Math.abs(Number(cfData.order_amount) - packageDetails.total) < 0.05;

      if (isPaid && amountMatches) {
        isVerifiedPaid = true;
      } else {
        console.warn(`[Payment Verification Mismatch] Status: ${cfData.order_status}, Amount: ${cfData.order_amount}, Expected: ${packageDetails.total}`);
      }
    } else {
      // Test / mock mode verification
      isVerifiedPaid = true;
      console.log('[Cashfree TEST Mode] Verified test order:', orderId);
    }

    if (!isVerifiedPaid) {
      await updateLead(lead.id, {
        status: 'payment_pending',
        lastVerificationAttempt: new Date().toISOString(),
      });
      return res.status(400).json({
        error: 'Payment has not been confirmed by the gateway yet or amount mismatch.',
        status: paymentDetails?.order_status || 'PENDING',
      });
    }

    // Mark lead status as paid
    const updatedLead = await updateLead(lead.id, {
      status: 'paid',
      orderId,
      cashfreeOrderId: orderId,
      paidAt: new Date().toISOString(),
      paymentDetails,
    });

    // Send notifications to customer & firm idempotently
    await sendOrderNotifications({
      lead: updatedLead,
      orderId,
      paymentId: paymentDetails?.cf_payment_id || orderId,
      packageDetails,
    });

    return res.status(200).json({
      success: true,
      verified: true,
      message: 'Payment verified and lead recorded successfully.',
      leadId: updatedLead.id,
      orderId,
    });
  } catch (err) {
    console.error('Error in verify-payment handler:', err);
    return res.status(500).json({ error: err.message || 'Server error while verifying payment.' });
  }
}
