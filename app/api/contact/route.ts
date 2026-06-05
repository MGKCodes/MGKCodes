import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO = "hello@mgkcodes.com";
// Must be a verified sender on a domain you control in Resend.
const FROM = process.env.RESEND_FROM ?? "MGKCodes <noreply@mgkcodes.com>";

const isEmail = (v: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);

export async function POST(request: Request) {
  let body: { email?: string; message?: string; website?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { email, message, website } = body ?? {};

  // Honeypot: bots fill hidden fields. Accept silently so they don't retry.
  if (website) return NextResponse.json({ ok: true });

  if (
    typeof email !== "string" ||
    typeof message !== "string" ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json(
      { error: "Email and message are both required." },
      { status: 400 }
    );
  }
  if (!isEmail(email.trim())) {
    return NextResponse.json({ error: "Enter a valid email." }, { status: 400 });
  }
  if (message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Messaging is not configured yet." },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email.trim(),
      subject: `New message via mgkcodes.com from ${email.trim()}`,
      text: message.trim(),
    });
    if (error) {
      return NextResponse.json(
        { error: "Could not send. Please email directly." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Could not send. Please email directly." },
      { status: 502 }
    );
  }
}
