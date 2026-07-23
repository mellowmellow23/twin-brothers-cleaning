import { NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  message: string;
}

/**
 * IMPORTANT — this route currently only validates and logs the submission.
 * It does NOT email, SMS, or WhatsApp anyone yet. Before launch, wire this
 * to a real delivery mechanism, e.g.:
 *   - an email provider (Resend, SendGrid) sending to info@twinbrotherscleaning.co.ke
 *   - or forward to WhatsApp via the WhatsApp Business Cloud API
 * Until one of those is added, submitted quote requests will not reach
 * Twin Brothers staff.
 */
export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!payload.name?.trim() || !payload.phone?.trim() || !payload.message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: replace with real email/WhatsApp delivery before launch.
  console.log("[contact-form submission]", payload);

  return NextResponse.json({ ok: true });
}
