import crypto from 'crypto';
import { saveLead, getLead, updateLead } from '../../server/leadStore.js';
import { calculateServerOrder } from '../../server/packageConfig.js';

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
    const { leadId: incomingLeadId, fullName, email, mobile, state, packageId, honeypot } = req.body || {};

    if (honeypot) {
      return res.status(400).json({ error: 'Automated submission detected.' });
    }

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

    const pkgDetails = calculateServerOrder(packageId || 'smart-plan');

    // If existing lead ID provided, update it; otherwise create new
    let leadId = incomingLeadId;
    if (leadId) {
      const existing = await getLead(leadId);
      if (existing) {
        await updateLead(leadId, {
          fullName: fullName.trim(),
          email: email.trim().toLowerCase(),
          mobile: cleanMobile,
          state,
          packageId: pkgDetails.packageId,
          packageName: pkgDetails.packageName,
          basePrice: pkgDetails.basePrice,
          gstAmount: pkgDetails.gstAmount,
          totalAmount: pkgDetails.total,
          totalInPaise: pkgDetails.totalInPaise,
          status: existing.status === 'paid' ? 'paid' : 'details_submitted',
        });
        return res.status(200).json({ success: true, leadId });
      }
    }

    leadId = 'lead_' + crypto.randomBytes(8).toString('hex');
    await saveLead({
      id: leadId,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      mobile: cleanMobile,
      state,
      packageId: pkgDetails.packageId,
      packageName: pkgDetails.packageName,
      basePrice: pkgDetails.basePrice,
      gstAmount: pkgDetails.gstAmount,
      totalAmount: pkgDetails.total,
      totalInPaise: pkgDetails.totalInPaise,
      status: 'details_submitted',
      createdAt: new Date().toISOString(),
    });

    return res.status(200).json({ success: true, leadId });
  } catch (err) {
    console.error('Error in save-lead handler:', err);
    return res.status(500).json({ error: err.message || 'Server error while saving lead.' });
  }
}
