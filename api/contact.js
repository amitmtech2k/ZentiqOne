import { TransactionalEmailsApi, SendSmtpEmail } from '@getbrevo/brevo';
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { name, platform, email, phone, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email and message are required' });
  }
  // Timestamp in IST
  const now = new Date();
  const submittedAt = now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const apiInstance = new TransactionalEmailsApi();
  apiInstance.setApiKey(0, process.env.BREVO_API_KEY);
  // ------------- ADMIN EMAIL (to zentiqone@gmail.com) -------------
  const adminEmail = new SendSmtpEmail();
  adminEmail.sender = { email: 'zentiqone@gmail.com', name: 'ZentiqOne' }; // must be verified
  adminEmail.to = [{ email: 'zentiqone@gmail.com' }];
  adminEmail.subject = `New Inquiry from ${name}`;
  adminEmail.htmlContent = `
    <h2>ZentiqOne — Banking & Payment Technology Engineering</h2>
    <hr/>
    <h3>New Inquiry from ${name}</h3>
    <table cellpadding="5" cellspacing="0" style="border-collapse:collapse; font-family:sans-serif;">
      <tr><td><strong>Name</strong></td><td>${name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email}</td></tr>
      <tr><td><strong>Company / Platform</strong></td><td>${platform || 'N/A'}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${phone || 'N/A'}</td></tr>
      <tr><td><strong>Message</strong></td><td>${message}</td></tr>
      <tr><td><strong>Submitted</strong></td><td>${submittedAt}</td></tr>
    </table>
    <br/>
    <p><strong>Action required:</strong> Respond within 24 hours, per the website's promise.</p>
    <hr/>
    <p>— ZentiqOne Team</p>
  `;
  // ------------- USER CONFIRMATION (to the lead) -------------
  const userEmail = new SendSmtpEmail();
  userEmail.sender = { email: 'zentiqone@gmail.com', name: 'ZentiqOne' };
  userEmail.to = [{ email }];
  userEmail.subject = 'Thank You for Your Interest in ZentiqOne';
  userEmail.htmlContent = `
    <h2>ZentiqOne — Banking & Payment Technology Engineering</h2>
    <p>Dear ${name},</p>
    <p>Thank you for your interest in <strong>ZentiqOne</strong>.</p>
    <p>We have received your details and will get in touch shortly.</p>
    <table cellpadding="5" cellspacing="0" style="border-collapse:collapse; font-family:sans-serif;">
      <tr><td><strong>Name</strong></td><td>${name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email}</td></tr>
      <tr><td><strong>Company / Platform</strong></td><td>${platform || 'N/A'}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${phone || 'N/A'}</td></tr>
      <tr><td><strong>Message</strong></td><td>${message}</td></tr>
    </table>
    <br/>
    <p>Regards,<br/><strong>Team ZentiqOne</strong><br/>
    support@zentiqone.com · zentiqone.com</p>
  `;
  try {
    await Promise.all([
      apiInstance.sendTransacEmail(adminEmail),
      apiInstance.sendTransacEmail(userEmail)
    ]);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Brevo error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}