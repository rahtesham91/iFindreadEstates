"use client";

import { FormEvent, useRef, useState } from "react";
import { useI18n } from "./I18nProvider";
import { fill } from "@/lib/dict";
import { otherEmails } from "@/lib/site";

type Status = "idle" | "sending" | "done" | "error";
const MAX_TOTAL = 4 * 1024 * 1024;
const OK_EXT = [".pdf", ".doc", ".docx"];
const okFile = (f: File) => OK_EXT.some((e) => f.name.toLowerCase().endsWith(e));

function Select({ id, label, placeholder, options, required }: { id: string; label: string; placeholder: string; options: { value: string; label: string }[]; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">{label}</label>
      <select id={id} name={id} required={required} defaultValue="" className="field">
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

function Legend({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5 mt-10 flex items-center gap-4 first:mt-0">
      <h3 className="t-h4">{children}</h3>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

function FilePick({ id, label, hint, multiple, required, files, onChange }: { id: string; label: string; hint?: string; multiple?: boolean; required?: boolean; files: File[]; onChange: (f: File[]) => void }) {
  const { dict } = useI18n();
  const c = dict.careers;
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="border border-dashed border-gold-500/60 bg-ink p-4">
      <label htmlFor={id} className="block text-sm font-medium text-ivory">{label}</label>
      {hint && <p className="t-small mt-1">{hint}</p>}
      <input
        ref={ref}
        id={id}
        type="file"
        accept=".pdf,.doc,.docx"
        multiple={multiple}
        required={required && files.length === 0}
        className="sr-only"
        onChange={(e) => {
          const picked = Array.from(e.target.files ?? []);
          onChange(multiple ? [...files, ...picked].slice(0, 4) : picked.slice(0, 1));
          e.target.value = "";
        }}
      />
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => ref.current?.click()} className="btn-ghost !px-4 !py-2.5">
          {multiple ? c.chooseFiles : c.chooseFile}
        </button>
        {files.length === 0 && <span className="t-small">{c.noFile}</span>}
      </div>
      {files.length > 0 && (
        <ul className="mt-3 space-y-2">
          {files.map((f, i) => (
            <li key={`${f.name}-${i}`} className="flex items-center justify-between gap-3 border border-line bg-char px-3 py-2 text-sm">
              <span className="min-w-0 truncate" dir="ltr">{f.name} <span className="text-mute">({(f.size / 1024).toFixed(0)} KB)</span></span>
              <button type="button" onClick={() => onChange(files.filter((_, j) => j !== i))} className="shrink-0 text-xs font-medium text-gold-400 hover:text-gold-300">
                {c.remove}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CareerForm() {
  const { lang, dict } = useI18n();
  const c = dict.careers;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [cv, setCv] = useState<File[]>([]);
  const [cover, setCover] = useState<File[]>([]);
  const [others, setOthers] = useState<File[]>([]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const all = [...cv, ...cover, ...others];
    if (cv.length === 0) return setError(c.errors.cvMissing), setStatus("error");
    if (!all.every(okFile)) return setError(c.errors.fileType), setStatus("error");
    if (all.reduce((n, f) => n + f.size, 0) > MAX_TOTAL) return setError(c.errors.fileSize), setStatus("error");

    const fd = new FormData(form);
    ["cv", "coverLetter", "otherDocs"].forEach((k) => fd.delete(k));
    cv.forEach((f) => fd.append("cv", f));
    cover.forEach((f) => fd.append("coverLetter", f));
    others.forEach((f) => fd.append("otherDocs", f));
    fd.set("lang", lang);

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/careers", { method: "POST", body: fd });
      const json = (await res.json().catch(() => ({ ok: false }))) as { ok: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setError(json.error === "unavailable" ? fill(c.errors.unavailable, { email: otherEmails.hr }) : json.error ?? c.errors.generic);
        setStatus("error");
        return;
      }
      setStatus("done");
      form.reset();
      setCv([]);
      setCover([]);
      setOthers([]);
    } catch {
      setError(c.errors.generic);
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="border border-gold-500/60 bg-char p-10 text-center" role="status">
        <p className="t-h2 text-gold-400">{c.thankTitle}</p>
        <p className="t-body mx-auto mt-4 max-w-md">{c.thankText}</p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-ghost mt-8">{c.another}</button>
      </div>
    );
  }

  const input = (name: string, ph: string, extra: Record<string, string | boolean> = {}) => (
    <div>
      <label htmlFor={name} className="sr-only">{ph}</label>
      <input id={name} name={name} placeholder={ph} className="field" {...extra} />
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate={false} className="border border-line bg-char p-6 sm:p-10">
      <Legend>{c.sectionPersonal}</Legend>
      <div className="grid gap-4 sm:grid-cols-2">
        {input("name", c.fullName, { required: true, autoComplete: "name" })}
        {input("email", c.email, { required: true, type: "email", autoComplete: "email", dir: "ltr" })}
        {input("phone", c.phone, { required: true, type: "tel", autoComplete: "tel", dir: "ltr" })}
        {input("nationality", c.nationality)}
        <div className="sm:col-span-2">{input("location", c.location)}</div>
      </div>

      <Legend>{c.sectionProfessional}</Legend>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Select id="position" label={c.position} placeholder={c.position} options={c.positions} required />
        </div>
        <Select id="experience" label={c.experience} placeholder={c.experience} options={c.experienceOptions} />
        {input("employer", c.employer)}
        {input("brn", c.brn, { dir: "ltr" })}
        <Select id="visa" label={c.visa} placeholder={c.visa} options={c.visaOptions} />
        <Select id="availability" label={c.availability} placeholder={c.availability} options={c.availabilityOptions} />
        {input("salary", c.salary, { inputMode: "numeric", dir: "ltr" })}
        <div className="sm:col-span-2">
          <fieldset>
            <legend className="mb-3 text-sm font-medium text-ivory">{c.languages}</legend>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {c.languageOptions.map((l) => (
                <label key={l.value} className="flex items-center gap-2 text-sm text-mute">
                  <input type="checkbox" name="languages" value={l.value} className="h-4 w-4 accent-[rgb(var(--c-gold-400))]" />
                  {l.label}
                </label>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="sm:col-span-2">{input("linkedin", c.linkedin, { type: "url", dir: "ltr" })}</div>
        <div className="sm:col-span-2">
          <label htmlFor="note" className="sr-only">{c.note}</label>
          <textarea id="note" name="note" rows={5} placeholder={c.note} className="field resize-y" />
        </div>
      </div>

      <Legend>{c.sectionDocuments}</Legend>
      <div className="grid gap-4">
        <FilePick id="cv" label={c.cv} hint={c.cvHint} required files={cv} onChange={setCv} />
        <FilePick id="coverLetter" label={c.coverLetter} files={cover} onChange={setCover} />
        <FilePick id="otherDocs" label={c.otherDocs} multiple files={others} onChange={setOthers} />
      </div>
      <p className="t-small mt-3">{c.limits}</p>

      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <label className="mt-8 flex items-start gap-3 text-sm text-mute">
        <input type="checkbox" name="consent" value="yes" required className="mt-1 h-4 w-4 accent-[rgb(var(--c-gold-400))]" />
        <span>{c.consent}</span>
      </label>

      {status === "error" && <p role="alert" className="mt-5 text-sm text-red-700">{error}</p>}

      <button type="submit" disabled={status === "sending"} className="btn-gold mt-8 w-full disabled:opacity-60">
        {status === "sending" ? c.sending : c.submit}
      </button>
    </form>
  );
}
