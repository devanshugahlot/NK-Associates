import crypto from 'crypto';
import { updateLead, getLead } from '../../server/leadStore.js';
import { calculateServerOrder } from '../../server/packageConfig.js';
import { sendOrderNotifications } from '../../server/mailer.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const secretKey = process.env.CASHFREE_SECRET_KEY;
    const timestamp = req.headers['x-webhook-timestamp'];
    const signature = req.headers['x-webhook-signature'];

    // Retrieve raw body string
    const rawBody = req.rawBody || (typeof req.body === 'string' ? req.body : JSON.stringify(req.body));

    // Verify Cashfree webhook signature if secret and headers are provided
    if (secretKey && signature && timestamp) {
      const expectedSignature = crypto
        .createHmac('sha256', secretKey)
        .update(timestamp + rawBody)
        .digest('base64');

      let isValid = false;
      try {
        const sigBuf = Buffer.from(signature, 'utf8');
        const expectedBuf = Buffer.from(expectedSignature, 'utf8');
        if (sigBuf.length === expectedBuf.length && crypto.timingSafeEqual(sigBuf, expectedBuf)) {
          isValid = true;
        }
      } catch (e) {
        isValid = false;
      }

      if (!isValid) {
        console.warn('[Webhook] Invalid Cashfree webhook signature verification failure');
        return res.status(400).json({ error: 'Invalid webhook signature.' });
      }
    }

    const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const eventType = payload?.type;
    const data = payload?.data;

    // Cashfree v3 Payment Success Webhook
    if (eventType === 'PAYMENT_SUCCESS_WEBHOOK' || eventType === 'ORDER_PAID') {
      const orderId = data?.order?.order_id || data?.order_id;
      const paymentId = data?.payment?.cf_payment_id || data?.payment_id;

      if (orderId) {
        const lead = await getLead(orderId);

        // Idempotency check: if already paid, return 200 immediately
        if (lead && lead.status === 'paid') {
          return res.status(200).json({ received: true, alreadyProcessed: true });
        }

        if (lead) {
          const updated = await updateLead(lead.id, {
            status: 'paid',
            orderId,
            cashfreeOrderId: orderId,
            paymentId,
            paidViaWebhook: true,
            paidAt: new Date().toISOString(),
          });

          const packageDetails = calculateServerOrder(lead.packageId);
          await sendOrderNotifications({
            lead: updated,
            orderId,
            paymentId,
            packageDetails,
          });

          console.log(`[Webhook] Idempotently recorded paid Cashfree order: ${orderId}`);
        }
      }
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    console.error('Error in Cashfree webhook handler:', err);
    return res.status(500).json({ error: 'Internal server error processing webhook.' });
  }
}
