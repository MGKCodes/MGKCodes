import { NextResponse } from "next/server";
import { Resend } from "resend";

// Where contact messages are delivered. On Resend's free plan (no verified
// domain) this must be your Resend account email.
const TO = process.env.CONTACT_TO ?? "hello@mgkcodes.com";
// Sender. Free path: "onboarding@resend.dev". Verified-domain path: an address
// on a domain you control in Resend.
const FROM = process.env.RESEND_FROM ?? "onboarding@resend.dev";

const isEmail = (v: string) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);

const escapeHtml = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[c] as string
  );

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

  const cleanEmail = email.trim();
  const cleanMessage = message.trim();

  // Request context for triage.
  const ip =
    (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const userAgent = request.headers.get("user-agent") ?? "unknown";
  const page = request.headers.get("referer") ?? "https://mgkcodes.com/contact";
  const received = new Date().toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/London",
  });

  const meta: [string, string][] = [
    ["From", cleanEmail],
    ["Received", `${received} (London)`],
    ["Page", page],
    ["IP", ip],
    ["Browser", userAgent],
  ];

  const text = [
    "New message via the mgkcodes.com contact form.",
    "",
    ...meta.map(([k, v]) => `${k.padEnd(9)} ${v}`),
    "",
    "----------------------------------------",
    "",
    cleanMessage,
  ].join("\n");

  // Email clients render on a light background, so use dark text. Accent is kept
  // for the header only, where contrast is fine.
  const rows = meta
    .map(
      ([k, v]) =>
        `<tr><td style="padding:3px 16px 3px 0;color:#6b7280;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:3px 0;color:#1f2937;word-break:break-word">${escapeHtml(v)}</td></tr>`
    )
    .join("");

  const html = `<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:560px;color:#1f2937;font-size:14px;line-height:1.5">
  <p style="font-size:12px;letter-spacing:1px;text-transform:uppercase;color:#4a7ab8;font-weight:600;margin:0 0 16px">New message via mgkcodes.com</p>
  <table style="border-collapse:collapse;margin-bottom:20px">${rows}</table>
  <div style="border-top:1px solid #e5e7eb;padding-top:20px;font-size:15px;line-height:1.6;white-space:pre-wrap;color:#111827">${escapeHtml(cleanMessage)}</div>
</div>`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: cleanEmail,
      subject: `New message via mgkcodes.com from ${cleanEmail}`,
      text,
      html,
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
