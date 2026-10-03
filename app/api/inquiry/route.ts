import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  interest?: unknown;
  message?: unknown;
  source?: unknown;
  website?: unknown; // honeypot
};

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Bots fill the hidden field; pretend success.
  if (clean(body.website, 50)) return NextResponse.json({ ok: true });

  const lead = {
    name: clean(body.name, 120),
    phone: clean(body.phone, 40),
    email: clean(body.email, 160),
    interest: clean(body.interest, 80),
    message: clean(body.message, 2000),
    source: clean(body.source, 40) || "form",
    receivedAt: new Date().toISOString(),
  };

  if (lead.name.length < 2) {
    return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 });
  }
  if (lead.phone.replace(/\D/g, "").length < 7) {
    return NextResponse.json({ ok: false, error: "Please enter a valid phone number." }, { status: 400 });
  }
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  // Always log so no lead is lost (visible in Vercel runtime logs).
  console.log("[inquiry]", JSON.stringify(lead));

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  if (apiKey && to) {
    const from = process.env.INQUIRY_FROM_EMAIL ?? "iFind Website <onboarding@resend.dev>";
    const text = [
      `Name: ${lead.name}`,
      `Phone: ${lead.phone}`,
      `Email: ${lead.email || "-"}`,
      `Interested in: ${lead.interest || "-"}`,
      `Source: ${lead.source}`,
      "",
      lead.message || "(no message)",
    ].join("\n");

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: to.split(",").map((s) => s.trim()),
          reply_to: lead.email || undefined,
          subject: `New enquiry: ${lead.name} (${lead.interest || "General"})`,
          text,
        }),
      });
      if (!res.ok) console.error("[inquiry] email provider error", res.status, await res.text());
    } catch (err) {
      console.error("[inquiry] email send failed", err);
    }
  }

  return NextResponse.json({ ok: true });
}
