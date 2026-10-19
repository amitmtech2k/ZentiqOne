import { NextRequest, NextResponse } from "next/server";
import { BrevoClient } from "@getbrevo/brevo";

interface ContactRequestBody {
  name: string;
  company: string;
  designation?: string;
  email: string;
  phone: string;
  industry?: string;
  services?: string[] | string;
  message?: string;
  notes?: string;
  projectStage?: string;
  timeline?: string;
  contactMethod?: string;
  meetingDate?: string;
  meetingTime?: string;
  consent?: boolean;
  landingPageUrl?: string;
  referrerUrl?: string;
  submittedAt?: string;
  website?: string;
  userAgent?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactRequestBody = await req.json();

    // Honeypot check: if filled, it's a bot. Silently pretend success.
    if (body.website) {
      return NextResponse.json({ success: true });
    }

    const {
      name,
      company,
      designation = "Executive / Stakeholder",
      email,
      phone,
      industry = "FinTech / Banking",
      services,
      message,
      notes,
      projectStage = "Initial Planning",
      timeline = "Within 1-3 Months",
      contactMethod = "Email / Call",
      meetingDate,
      meetingTime,
      consent = true,
      landingPageUrl,
      referrerUrl
    } = body;

    const projectMessage = message || notes || "Consultation enquiry submitted via ZentiqOne website.";

    // Basic Validations
    const validateEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    if (!validateEmail(email || "")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    if (!name || !company) {
      return NextResponse.json({ error: "Missing required fields (Name or Company)" }, { status: 400 });
    }

    const ipAddress = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "Unknown";
    const userAgent = req.headers.get("user-agent") || body.userAgent || "Unknown";

    const servicesList = Array.isArray(services) && services.length
      ? services.join(", ")
      : (typeof services === "string" && services.trim().length > 0 ? services : "Banking & Payment Solutions");

    const submittedIST = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const row = (label: string, value: string | undefined | null) =>
      `<tr><td style="padding: 8px 12px; border: 1px solid #e2e8f0; background: #f8fafc; width: 35%; font-weight: bold; color: #334155;">${label}</td><td style="padding: 8px 12px; border: 1px solid #e2e8f0; color: #0f172a;">${value || "N/A"}</td></tr>`;

    // 1. Notification Email to ZentiqOne Admin Team
    const adminEmailPayload = {
      sender: { email: "zentiqone@gmail.com", name: "ZentiqOne" },
      to: [{ email: "zentiqone@gmail.com" }],
      subject: `New Enquiry on ZentiqOne from ${company || name}`,
      htmlContent: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #1e293b; background: #ffffff; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <div style="border-bottom: 2px solid #FD7902; padding-bottom: 12px; margin-bottom: 16px;">
            <h2 style="color: #0f172a; margin: 0; font-size: 20px;">ZentiqOne: Banking & Payment Technology Engineering</h2>
            <p style="color: #64748b; margin: 4px 0 0 0; font-size: 13px;">New Consultation &amp; Lead Request Received</p>
          </div>
          
          <table cellpadding="0" cellspacing="0" style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 16px;">
            ${row("Name", name)}
            ${row("Company / Organization", company)}
            ${row("Designation", designation)}
            ${row("Email Address", email)}
            ${row("Mobile Number", phone)}
            ${row("Industry", industry)}
            ${row("Services Interested In", servicesList)}
            ${row("Project Description / Notes", projectMessage)}
            ${row("Project Stage", projectStage)}
            ${row("Expected Timeline", timeline)}
            ${row("Preferred Contact Method", contactMethod)}
            ${row("Preferred Meeting Date", meetingDate)}
            ${row("Preferred Meeting Time", meetingTime)}
            ${row("Consent Given", consent ? "Yes" : "No")}
            ${row("Submission Time (IST)", submittedIST)}
            ${row("Landing Page URL", landingPageUrl)}
            ${row("Referrer URL", referrerUrl || "Direct")}
            ${row("IP Address", ipAddress)}
            ${row("Browser Info", userAgent)}
          </table>

          <div style="margin-top: 24px; background: #fff7ed; padding: 14px; border-left: 4px solid #FD7902; border-radius: 4px;">
            <p style="margin: 0; font-size: 13px; color: #9a3412;">
              <strong>Action required:</strong> Respond within 24 hours, per the website's commitment.
            </p>
          </div>

          <div style="margin-top: 24px; pt: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center;">
            <p style="margin: 0;">ZentiqOne Technology Solutions • Internal Lead Dispatch</p>
          </div>
        </div>
      `
    };

    // 2. Instant Confirmation Email to Customer
    const userEmailPayload = {
      sender: { email: "zentiqone@gmail.com", name: "ZentiqOne" },
      to: [{ email }],
      cc: [{ email: "amit@zentiqone.com" }],
      subject: `ZentiqOne - Consultation for ${company}`,
      htmlContent: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff;">
          <p style="font-size: 15px; margin-top: 0;">Hi ${name},</p>
          <p style="font-size: 15px;">Got your request regarding <strong>${servicesList}</strong> for <strong>${company}</strong>.</p>
          <p style="font-size: 15px;">We have assigned one of our tech leads to discuss your requirements for the <strong>${projectStage || "relevant"}</strong> stage. We have you down for a <strong>${contactMethod || "call"}</strong> on <strong>${meetingDate || "a date to be confirmed"}</strong> at <strong>${meetingTime || "a time to be confirmed"}</strong>.</p>
          <p style="font-size: 15px;">Does this time still work for you, or is there a better slot?</p>
          <br/>
          <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; margin-top: 20px;">
            <p style="margin: 0; font-size: 14px; color: #334155;">Best regards,</p>
            <p style="margin: 4px 0 0 0; font-weight: bold; font-size: 15px; color: #0f172a;">Amit</p>
            <p style="margin: 2px 0 0 0; font-size: 13px; color: #64748b;">Founder | ZentiqOne</p>
            <p style="margin: 4px 0 0 0; font-size: 13px; color: #64748b;">
              <a href="tel:+918750908771" style="color: #FD7902; text-decoration: none;">+91-8750908771</a> &bull; 
              <a href="https://zentiqone.com" style="color: #FD7902; text-decoration: none;">zentiqone.com</a> &bull; 
              <a href="mailto:amit@zentiqone.com" style="color: #FD7902; text-decoration: none;">amit@zentiqone.com</a>
            </p>
          </div>
        </div>
      `
    };

    const isProduction = process.env.NODE_ENV === "production";
    const apiKey = process.env.BREVO_API_KEY;

    if (!apiKey) {
      if (isProduction) {
        console.error("CRITICAL: BREVO_API_KEY is not defined in production environment variables.");
        return NextResponse.json(
          { 
            error: "Email delivery service is currently unconfigured. Please email zentiqone@gmail.com directly or call +91-8750908771.",
            success: false 
          },
          { status: 503 }
        );
      }

      // ONLY in local development mode without a key:
      console.warn("⚠️ [DEV ONLY] BREVO_API_KEY is not set. Simulating form submission.");
      console.log("Admin email simulation:", adminEmailPayload.subject);
      console.log("User email simulation:", userEmailPayload.subject);
      return NextResponse.json({
        success: true,
        mock: true,
        message: "Enquiry recorded (Local Dev Simulated)"
      });
    }

    const brevo = new BrevoClient({ apiKey });

    await Promise.all([
      brevo.transactionalEmails.sendTransacEmail(adminEmailPayload),
      brevo.transactionalEmails.sendTransacEmail(userEmailPayload)
    ]);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Brevo contact API error:", error);
    return NextResponse.json(
      { 
        error: "Failed to dispatch consultation email. Please retry or contact zentiqone@gmail.com directly.",
        details: error?.message || "Internal transmission error",
        success: false
      },
      { status: 500 }
    );
  }
}
