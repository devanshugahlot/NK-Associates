import crypto from 'crypto';
import { updateLead, getLead } from '../../server/leadStore.js';
import { calculateServerOrder } from '../../server/packageConfig.js';
import { sendOrderNotifications } from '../../server/mailer.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
    const webhookSignature = req.headers['x-razorpay-signature'];

    // Verify webhook signature if secret is configured
    if (webhookSecret && webhookSignature) {
      const rawBody = typeof req.body === 'string' ? req.body : JSON.stringify(req.body);
      const expectedSignature = crypto
        .createHmac('sha256', webhookSecret)
        .update(rawBody)
        .digest('hex');

      if (expectedSignature !== webhookSignature) {
        console.warn('[Webhook] Invalid Razorpay webhook signature');
        return res.status(400).json({ error: 'Invalid webhook signature.' });
      }
    }

    const event = req.body?.event;
    const payload = req.body?.payload;

    if (event === 'payment.captured' || event === 'order.paid') {
      const paymentEntity = payload?.payment?.entity;
      const orderId = paymentEntity?.order_id;
      const paymentId = paymentEntity?.id;
      const leadId = paymentEntity?.notes?.leadId;

      const targetId = leadId || orderId;
      if (targetId) {
        const lead = await getLead(targetId);
        // Idempotency check: if already paid, return 200 immediately
        if (lead && lead.status === 'paid') {
          return res.status(200).json({ received: true, alreadyProcessed: true });
        }

        if (lead) {
          const updated = await updateLead(lead.id, {
            status: 'paid',
            razorpayOrderId: orderId,
            razorpayPaymentId: paymentId,
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

          console.log(`[Webhook] Idempotently recorded paid order: ${orderId}`);
        }
      }
    }

    return res.status(200).json({ received: true });
  } catch (err) {
    console.error('Error in webhook handler:', err);
    return res.status(500).json({ error: 'Internal server error processing webhook.' });
  }
}
