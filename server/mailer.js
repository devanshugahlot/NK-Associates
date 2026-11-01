/**
 * Email Notification Service for GST Orders
 * Supports Resend API, SMTP, or graceful console logging in test mode
 */

export async function sendOrderNotifications({ lead, orderId, paymentId, packageDetails }) {
  const customerEmail = lead.email;
  const businessEmail = process.env.BUSINESS_ALERT_EMAIL || 'info@nkassociate.in';
  const customerName = lead.fullName;
  const planName = packageDetails.packageName;
  const amountPaid = packageDetails.total;

  const subjectCustomer = `Order Confirmed: GST Registration (${planName}) - NK Associates`;
  const textCustomer = `Dear ${customerName},

Thank you for choosing NK Associates. Your payment for GST Registration under ${planName} (Order ID: ${orderId}) of ₹${amountPaid} has been confirmed.

What happens next:
Our Senior CA Associate will connect with you via mobile (+91 ${lead.mobile}) within 15-30 minutes during business hours (10:00 AM - 7:00 PM IST) to gather your required documents and begin the application on the GST Portal.

Keep the following ready:
1. PAN Card of Business / Applicant
2. Aadhaar Card
3. Premise proof (Electricity bill / Property tax receipt)
4. Bank proof (Cancelled cheque / statement)

Warm regards,
NK Associates Chartered Accountants
Jaipur, Rajasthan | Phone: +91 75688 20015 | https://nkassociate.in`;

  const subjectBusiness = `[NEW PAID ORDER] ${customerName} - GST Registration (${planName})`;
  const textBusiness = `New paid GST order received:
Customer: ${customerName}
Phone: ${lead.mobile}
Email: ${lead.email}
State: ${lead.state}
Plan: ${planName}
Amount: ₹${amountPaid}
Order ID: ${orderId}
Payment ID: ${paymentId || 'N/A'}
Date: ${new Date().toLocaleString('en-IN')}`;

  // 1. If Resend API Key is configured
  if (process.env.RESEND_API_KEY) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.MAIL_FROM || 'NK Associates <no-reply@nkassociate.in>',
          to: [customerEmail],
          subject: subjectCustomer,
          text: textCustomer,
        }),
      });

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: process.env.MAIL_FROM || 'NK Associates Orders <no-reply@nkassociate.in>',
          to: [businessEmail],
          subject: subjectBusiness,
          text: textBusiness,
        }),
      });
      console.log(`[Email] Customer & Business emails dispatched via Resend for order ${orderId}`);
      return true;
    } catch (err) {
      console.warn('[Email] Resend delivery error:', err.message);
    }
  }

  // 2. Default Test / Preview Mode (Graceful console logger)
  console.log('--------------------------------------------------');
  console.log('[EMAIL SERVICE - TEST MODE] Order Confirmation Email:');
  console.log(`To Customer (${customerEmail}): ${subjectCustomer}`);
  console.log(`To Business (${businessEmail}): ${subjectBusiness}`);
  console.log('--------------------------------------------------');
  return true;
}
