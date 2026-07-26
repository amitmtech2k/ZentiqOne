const { BrevoClient } = require('@getbrevo/brevo');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    name, company, designation, email, phone, industry,
    services, message, projectStage, timeline, contactMethod,
    meetingDate, meetingTime, consent,
    landingPageUrl, referrerUrl, submittedAt,
    website, userAgent
  } = req.body;
  // Honeypot check — if filled, it's a bot; silently pretend success
  if (website) {
    return res.status(200).json({ success: true });
  }

  const ipAddress = req.headers['x-forwarded-for']?.split(',')[0]?.trim() || req.socket?.remoteAddress || 'Unknown';
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone, code) => {
    const digits = (phone || '').replace(/\D/g, '');
    if (code === '+91') return /^[6-9]\d{9}$/.test(digits.slice(-10));
    return digits.length >= 6;
  };

  if (!validateEmail(email || '')) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  const codeMatch = (phone || '').match(/^\+\d+/);
  const code = codeMatch ? codeMatch[0] : '+91';
  const phoneDigitsOnly = (phone || '').replace(/^\+\d+\s*/, '');
  if (!validatePhone(phoneDigitsOnly, code)) {
    return res.status(400).json({ error: 'Invalid mobile number' });
  }

  if (!consent) {
    return res.status(400).json({ error: 'Consent is required' });
  }

  if (!name || !company || !designation || !industry || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const brevo = new BrevoClient({ apiKey: process.env.BREVO_API_KEY });

  const servicesList = Array.isArray(services) && services.length ? services.join(', ') : 'N/A';
  const submittedIST = submittedAt
    ? new Date(submittedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    : new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  const row = (label, value) => `<tr><td><strong>${label}</strong></td><td>${value || 'N/A'}</td></tr>`;

  const adminEmailPayload = {
    sender: { email: 'zentiqone@gmail.com', name: 'ZentiqOne' },
    to: [{ email: 'zentiqone@gmail.com' }],
    subject: `New Enquiry on ZentiqOne from ${company || name}`,
    htmlContent: `
      <h2>ZentiqOne — Banking & Payment Technology Engineering</h2>
      <hr/>
      <h3>New Consultation Request</h3>
      <table cellpadding="5" cellspacing="0" style="border-collapse:collapse; font-family:sans-serif;">
        ${row('Name', name)}
        ${row('Company / Organization', company)}
        ${row('Designation', designation)}
        ${row('Email', email)}
        ${row('Mobile', phone)}
        ${row('Industry', industry)}
        ${row('Services Interested In', servicesList)}
        ${row('Project Description', message)}
        ${row('Project Stage', projectStage)}
        ${row('Expected Timeline', timeline)}
        ${row('Preferred Contact Method', contactMethod)}
        ${row('Preferred Meeting Date', meetingDate)}
        ${row('Preferred Meeting Time', meetingTime)}
        ${row('Consent Given', consent ? 'Yes' : 'No')}
        ${row('Submitted', submittedIST)}
        ${row('Landing Page URL', landingPageUrl)}
        ${row('Referrer URL', referrerUrl)}
        ${row('IP Address', ipAddress)}
        ${row('Browser Info', userAgent)}
      </table>
      <br/>
      <p><strong>Action required:</strong> Respond within 24 hours, per the website's promise.</p>
      <hr/>
      <p>— ZentiqOne Team</p>
    `
  };
const userEmailPayload = {
    sender: { email: 'zentiqone@gmail.com', name: 'ZentiqOne' },
    to: [{ email }],
    cc: [{ email: 'amit@zentiqone.com' }],
    subject: `ZentiqOne - Consultation for ${company}`,
    htmlContent: `
      <p>Hi ${name},</p>
      <p>Got your request regarding ${servicesList} for ${company}.</p>
      <p>We have assigned one of our tech leads to discuss your requirements for the ${projectStage || 'relevant'} stage. We have you down for a ${contactMethod || 'call'} on ${meetingDate || 'a date to be confirmed'} at ${meetingTime || 'a time to be confirmed'}.</p>
      <p>Does this time still work for you, or is there a better slot?</p>
      <p>Best,<br/>
      Amit<br/>
      Founder | ZentiqOne<br/>
      +91-8750908771 | zentiqone.com | amit@zentiqone.com</p>
    `
  };

  try {
    await Promise.all([
      brevo.transactionalEmails.sendTransacEmail(adminEmailPayload),
      brevo.transactionalEmails.sendTransacEmail(userEmailPayload)
    ]);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Brevo error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};