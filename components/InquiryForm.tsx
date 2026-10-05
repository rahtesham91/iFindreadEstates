"use client";

import { FormEvent, useState } from "react";
import { whatsappLink } from "@/lib/site";
import { useI18n } from "./I18nProvider";

type Status = "idle" | "sending" | "done" | "error";

export default function InquiryForm({ defaultInterest = "" }: { defaultInterest?: string }) {
  const { lang, dict } = useI18n();
  const f = dict.form;
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
        body: JSON.stringify({ ...data, source: "form", lang }),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error ?? f.error);
      setStatus("done");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : f.error);
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="border border-gold-500/60 bg-char p-10 text-center" role="status">
        <p className="h-display text-3xl text-gold-300">{f.thankTitle}</p>
        <p className="mx-auto mt-4 max-w-sm text-mute">
          {f.thankText}
        </p>
        <a href={whatsappLink(dict.wa.general)} target="_blank" rel="noopener noreferrer" className="btn-ghost mt-8">
          {f.continueWhatsApp}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="sr-only">{f.fullName}</label>
          <input id="name" name="name" required autoComplete="name" placeholder={f.fullName} className="field" />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">{f.phone}</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder={f.phone} dir="ltr" className="field rtl:text-right" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only">{f.email}</label>
        <input id="email" name="email" type="email" autoComplete="email" placeholder={f.email} dir="ltr" className="field rtl:text-right" />
      </div>
      <div>
        <label htmlFor="interest" className="sr-only">{f.interest}</label>
        <select id="interest" name="interest" defaultValue={defaultInterest} className="field">
          <option value="">{f.interest}</option>
          {dict.interests.map((i) => (
            <option key={i.value} value={i.value}>{i.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="sr-only">{f.message}</label>
        <textarea id="message" name="message" rows={5} placeholder={f.message} className="field resize-y" />
      </div>
      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">{error}</p>
      )}

      <button type="submit" disabled={status === "sending"} className="btn-gold w-full disabled:opacity-60">
        {status === "sending" ? f.sending : f.send}
      </button>
      <p className="text-xs text-mute/70">
        {f.note}
      </p>
    </form>
  );
}
