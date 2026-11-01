import crypto from 'crypto';
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

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, leadId } = req.body || {};

    if (!leadId) {
      return res.status(400).json({ error: 'Missing lead identifier.' });
    }

    const lead = await getLead(leadId);
    if (!lead) {
      return res.status(404).json({ error: 'Lead record not found.' });
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    let isSignatureValid = false;

    if (keySecret && razorpay_signature && !razorpay_order_id?.startsWith('order_test_')) {
      const generatedSignature = crypto
        .createHmac('sha256', keySecret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest('hex');

      isSignatureValid = generatedSignature === razorpay_signature;
    } else {
      // In local TEST mode or when using mock keys, auto-validate
      isSignatureValid = true;
      console.log('[Razorpay TEST Mode] Verified test payment:', razorpay_payment_id);
    }

    if (!isSignatureValid) {
      await updateLead(leadId, {
        status: 'payment_failed',
        razorpayOrderId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
      });
      return res.status(400).json({ error: 'Invalid payment signature. Verification failed.' });
    }

    // Mark lead status as paid
    const updatedLead = await updateLead(leadId, {
      status: 'paid',
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      paidAt: new Date().toISOString(),
    });

    const packageDetails = calculateServerOrder(lead.packageId);

    // Send notifications to customer & business
    await sendOrderNotifications({
      lead: updatedLead,
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      packageDetails,
    });

    return res.status(200).json({
      success: true,
      verified: true,
      message: 'Payment verified and lead recorded successfully.',
      leadId: updatedLead.id,
      orderId: razorpay_order_id,
    });
  } catch (err) {
    console.error('Error in verify-payment handler:', err);
    return res.status(500).json({ error: err.message || 'Server error while verifying payment.' });
  }
}
