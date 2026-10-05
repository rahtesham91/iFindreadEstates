import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_TOTAL = 4 * 1024 * 1024; // keeps the request under the serverless body limit
const ALLOWED = [".pdf", ".doc", ".docx"];

const text = (v: FormDataEntryValue | null, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

// Checks the first bytes so a renamed .exe cannot pass as a CV.
function looksLikeDocument(name: string, bytes: Uint8Array) {
  const ext = name.toLowerCase().slice(name.lastIndexOf("."));
  if (!ALLOWED.includes(ext)) return false;
  const head = Array.from(bytes.slice(0, 8));
  const isPdf = head[0] === 0x25 && head[1] === 0x50 && head[2] === 0x44 && head[3] === 0x46; // %PDF
  const isZip = head[0] === 0x50 && head[1] === 0x4b; // docx
  const isOle = head[0] === 0xd0 && head[1] === 0xcf && head[2] === 0x11 && head[3] === 0xe0; // doc
  if (ext === ".pdf") return isPdf;
  if (ext === ".docx") return isZip;
  return isOle;
}

const safeName = (n: string) => n.replace(/[^\w.\- ]+/g, "_").slice(0, 100);

export async function POST(req: Request) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
  const ar = text(form.get("lang"), 5) === "ar";
  const fail = (en: string, arabic: string, status = 400) => NextResponse.json({ ok: false, error: ar ? arabic : en }, { status });

  // Bots fill the hidden field; pretend success.
  if (text(form.get("website"), 50)) return NextResponse.json({ ok: true });

  const data = {
    name: text(form.get("name"), 120),
    email: text(form.get("email"), 160),
    phone: text(form.get("phone"), 40),
    nationality: text(form.get("nationality"), 80),
    location: text(form.get("location"), 120),
    position: text(form.get("position"), 80),
    experience: text(form.get("experience"), 40),
    employer: text(form.get("employer"), 120),
    brn: text(form.get("brn"), 40),
    visa: text(form.get("visa"), 60),
    availability: text(form.get("availability"), 60),
    salary: text(form.get("salary"), 40),
    languages: form.getAll("languages").map((v) => text(v, 30)).filter(Boolean).join(", "),
    linkedin: text(form.get("linkedin"), 200),
    note: text(form.get("note"), 3000),
  };

  if (data.name.length < 2 || data.phone.replace(/\D/g, "").length < 7 || !data.position || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return fail("Please complete all required fields with valid details.", "يرجى إكمال جميع الحقول الإلزامية ببيانات صحيحة.");
  }
  if (text(form.get("consent"), 10) !== "yes") return fail("Please accept the consent statement.", "يرجى الموافقة على الإقرار.");

  const files = ["cv", "coverLetter", "otherDocs"].flatMap((key) =>
    form.getAll(key).filter((v): v is File => typeof v !== "string" && v.size > 0).map((file) => ({ key, file })),
  );
  const cv = files.find((f) => f.key === "cv");
  if (!cv) return fail("Please upload your CV.", "يرجى رفع سيرتك الذاتية.");
  if (files.length > 6) return fail("Too many files.", "عدد الملفات كبير جداً.");
  if (files.reduce((n, f) => n + f.file.size, 0) > MAX_TOTAL) return fail("Your files are too large. Please keep the total under 4 MB.", "حجم ملفاتك كبير. يرجى ألا يتجاوز الإجمالي 4 ميغابايت.", 413);

  const attachments: { filename: string; content: string }[] = [];
  for (const { key, file } of files) {
    const bytes = new Uint8Array(await file.arrayBuffer());
    if (!looksLikeDocument(file.name, bytes)) return fail("Only PDF, DOC and DOCX files are accepted.", "نقبل ملفات PDF وDOC وDOCX فقط.");
    attachments.push({ filename: `${key === "cv" ? "CV" : key === "coverLetter" ? "Cover-letter" : "Document"}-${safeName(file.name)}`, content: Buffer.from(bytes).toString("base64") });
  }

  // Email settings are added later in the hosting environment (see .env.example). Until then applications cannot be
  // delivered, so the form says so instead of accepting files that would be lost.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CAREERS_TO_EMAIL ?? process.env.INQUIRY_TO_EMAIL;
  if (!apiKey || !to) {
    console.warn("[careers] email is not configured; application from", data.email, "was not delivered");
    return NextResponse.json({ ok: false, error: "unavailable" }, { status: 503 });
  }

  const from = process.env.INQUIRY_FROM_EMAIL ?? "iFind Website <onboarding@resend.dev>";
  const body = [
    "New job application from the website",
    "",
    `Position: ${data.position}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone / WhatsApp: ${data.phone}`,
    `Nationality: ${data.nationality || "-"}`,
    `Location: ${data.location || "-"}`,
    `Experience: ${data.experience || "-"}`,
    `Current / last employer: ${data.employer || "-"}`,
    `BRN: ${data.brn || "-"}`,
    `Visa status: ${data.visa || "-"}`,
    `Available: ${data.availability || "-"}`,
    `Expected salary (AED): ${data.salary || "-"}`,
    `Languages: ${data.languages || "-"}`,
    `LinkedIn: ${data.linkedin || "-"}`,
    `Form language: ${ar ? "Arabic" : "English"}`,
    "",
    "Note from the applicant:",
    data.note || "(none)",
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()),
        reply_to: data.email,
        subject: `Job application: ${data.name} (${data.position})`,
        text: body,
        attachments,
      }),
    });
    if (!res.ok) {
      console.error("[careers] email provider error", res.status, await res.text());
      return fail("Something went wrong. Please try again in a moment.", "حدث خطأ ما. يرجى المحاولة مرة أخرى بعد قليل.", 502);
    }
  } catch (err) {
    console.error("[careers] email send failed", err);
    return fail("Something went wrong. Please try again in a moment.", "حدث خطأ ما. يرجى المحاولة مرة أخرى بعد قليل.", 502);
  }
  return NextResponse.json({ ok: true });
}
