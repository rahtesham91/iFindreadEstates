import Image from "next/image";
import Reveal from "./Reveal";
import { LocLink } from "./I18nProvider";
import { memberContact, team } from "@/lib/site";
import { fill } from "@/lib/dict";
import type { Dict } from "@/lib/dict";

const no = (i: number) => String(i).padStart(2, "0");

// Ehtesham Nazir's profile: short and to the point, only the skills that matter for iFind.
export default function EhteshamProfile({ d }: { d: Dict }) {
  const t = d.ehteshamPage;
  const m = team.find((x) => x.slug === "ehtesham-nazir")!;
  const person = d.people["ehtesham-nazir"];
  const { tel, wa } = memberContact(m, fill(d.wa.person, { name: person.name }));
  const phone = m.phone ?? "";
  return (
    <>
      <section className="relative isolate overflow-hidden pt-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(60rem 32rem at 90% 10%, rgb(var(--c-gold-500) / 0.20), transparent 62%), radial-gradient(40rem 24rem at 0% 100%, rgb(var(--c-gold-500) / 0.10), transparent 60%)" }} />
        <div className="container-page grid items-center gap-12 py-12 sm:py-20 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-5">{t.eyebrow}</p>
            <h1 className="t-hero">{t.h1}</h1>
            <div className="gold-rule mt-7" />
            <p className="t-lede mt-7 max-w-xl">{t.lede}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={tel} className="btn-gold">{t.cta}</a>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-ghost">{t.ctaWhatsApp}</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div aria-hidden="true" className="absolute -bottom-4 -end-4 h-full w-full border border-gold-500/40" />
            <div className="relative aspect-[4/5] overflow-hidden border border-gold-500/60 bg-white">
              {m.photo && <Image src={m.photo} alt={t.photoAlt} fill priority quality={92} sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover object-top" />}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-char py-16 sm:py-20">
        <div className="container-page">
          <p className="eyebrow mb-4">{t.skills.eyebrow}</p>
          <h2 className="t-h2">{t.skills.title}</h2>
          <div className="gold-rule mt-6" />
          <ol className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {t.skills.items.map((it, i) => (
              <Reveal key={it.title} delay={(i % 3) * 80} className="bg-ink p-7 transition-colors hover:bg-panel">
                <span className="t-h4 text-gold-500">{no(i + 1)}</span>
                <h3 className="t-h3 mt-3">{it.title}</h3>
                <p className="t-body mt-2">{it.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <dl className="grid gap-4 sm:grid-cols-2 sm:gap-10">
            <div>
              <dt className="eyebrow mb-1">{t.contact.call}</dt>
              <dd><a href={tel} dir="ltr" className="ltr-text text-lg text-ivory hover:text-gold-400">{phone}</a></dd>
            </div>
            {m.email && (
              <div>
                <dt className="eyebrow mb-1">{t.contact.email}</dt>
                <dd><a href={`mailto:${m.email}`} dir="ltr" className="ltr-text break-all text-lg text-ivory hover:text-gold-400">{m.email}</a></dd>
              </div>
            )}
          </dl>
          <div className="flex flex-col gap-3 sm:items-end">
            <a href="https://iamehtesham.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-base font-medium text-gold-400 hover:text-gold-300">
              {t.portfolio}
              <svg viewBox="0 0 24 8" className="h-2 w-6 rtl:-scale-x-100" fill="none" stroke="currentColor" aria-hidden="true"><path d="M0 4h22M18 1l4 3-4 3" /></svg>
            </a>
            <LocLink href="/team" className="text-sm text-mute hover:text-gold-400">{d.team.profile.back}</LocLink>
          </div>
        </div>
      </section>
    </>
  );
}
