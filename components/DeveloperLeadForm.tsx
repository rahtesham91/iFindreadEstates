"use client";

import { FormEvent, useState } from "react";
import { LocLink, useI18n } from "./I18nProvider";
import { fill } from "@/lib/dict";
import { whatsappLink } from "@/lib/site";

type Status = "idle" | "sending" | "done" | "error";

export default function DeveloperLeadForm({ slug, name }: { slug: string; name: string }) {
  const { lang, dict } = useI18n();
  const t = dict.devLanding;
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
        body: JSON.stringify({ ...data, developer: name, interest: `Developer: ${name}`, source: `developer:${slug}`, lang }),
      });
      const json = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error ?? dict.form.error);
      setStatus("done");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.form.error);
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="border border-gold-500/60 bg-ink p-8 text-center sm:p-10" role="status">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/60 text-gold-400">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
        </span>
        <p className="t-h3 mt-5 text-gold-400">{t.thankTitle}</p>
        <p className="t-body mx-auto mt-3 max-w-sm">{fill(t.thankText, { name })}</p>
        <div className="mt-7 flex flex-col justify-center gap-3">
          <a href={whatsappLink(fill(t.waText, { name }))} target="_blank" rel="noopener noreferrer" className="btn-gold">{dict.form.continueWhatsApp}</a>
          <LocLink href="/developers" className="btn-ghost">{t.browse}</LocLink>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="sr-only">{t.name}</label>
        <input id="name" name="name" required autoComplete="name" placeholder={t.name} className="field" />
      </div>
      <div>
        <label htmlFor="phone" className="sr-only">{t.phone}</label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder={t.phone} dir="ltr" className="field rtl:text-right" />
      </div>
      <div>
        <label htmlFor="budget" className="sr-only">{t.budget}</label>
        <select id="budget" name="budget" required defaultValue="" className="field">
          <option value="">{t.budgetPlaceholder}</option>
          {t.budgets.map((b) => (
            <option key={b.value} value={b.value}>{b.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="sr-only">{t.note}</label>
        <textarea id="message" name="message" rows={3} placeholder={t.note} className="field resize-y" />
      </div>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {status === "error" && <p role="alert" className="text-sm text-red-700">{error}</p>}
      <button type="submit" disabled={status === "sending"} className="btn-gold w-full disabled:opacity-60">
        {status === "sending" ? t.sending : t.submit}
      </button>
      <p className="t-small text-center">{t.privacy}</p>
    </form>
  );
}
