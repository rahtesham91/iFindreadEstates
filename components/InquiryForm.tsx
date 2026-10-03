"use client";

import { FormEvent, useState } from "react";
import { interests, whatsappLink } from "@/lib/site";

type Status = "idle" | "sending" | "done" | "error";

export default function InquiryForm({ defaultInterest = "" }: { defaultInterest?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "form" }),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error ?? "Something went wrong.");
      setStatus("done");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try WhatsApp.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="border border-gold-500/60 bg-char p-10 text-center" role="status">
        <p className="h-display text-3xl text-gold-300">Thank you.</p>
        <p className="mx-auto mt-4 max-w-sm text-mute">
          We have received your enquiry and one of our consultants will contact you shortly.
        </p>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-8">
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">Full name</label>
          <input id="name" name="name" required autoComplete="name" placeholder="Full name *" className="field" />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">Phone or WhatsApp</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="Phone / WhatsApp *" className="field" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" placeholder="Email (optional)" className="field" />
      </div>
      <div>
        <label htmlFor="interest" className="sr-only">I am interested in</label>
        <select id="interest" name="interest" defaultValue={defaultInterest} className="field">
          <option value="">I am interested in...</option>
          {interests.map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="sr-only">Message</label>
        <textarea id="message" name="message" rows={5} placeholder="Tell us briefly what you are looking for" className="field resize-y" />
      </div>
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">{error}</p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-gold w-full disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Send Enquiry"}
      </button>
      <p className="text-xs text-mute/70">
        By sending this form you agree to be contacted about your enquiry.
      </p>
    </form>
  );
}
