import Image from "next/image";
import Reveal from "./Reveal";
import { LocLink } from "./I18nProvider";
import { memberContact, team } from "@/lib/site";
import { fill } from "@/lib/dict";
import type { Dict } from "@/lib/dict";

const no = (i: number) => String(i).padStart(2, "0");

function Head({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="t-h2">{title}</h2>
      <div className="gold-rule mt-6" />
      {lead && <p className="t-body mt-6">{lead}</p>}
    </div>
  );
}

// A one-off profile page for Ehtesham Nazir: built like a personal landing page rather than the standard team layout.
export default function EhteshamProfile({ d }: { d: Dict }) {
  const t = d.ehteshamPage;
  const m = team.find((x) => x.slug === "ehtesham-nazir")!;
  const person = d.people["ehtesham-nazir"];
  const { tel, wa } = memberContact(m, fill(d.wa.person, { name: person.name }));
  const phone = m.phone ?? "";
  const ticker = [...t.ticker, ...t.ticker];
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(60rem 32rem at 90% 10%, rgb(var(--c-gold-500) / 0.20), transparent 62%), radial-gradient(40rem 24rem at 0% 100%, rgb(var(--c-gold-500) / 0.10), transparent 60%)" }} />
        <div className="container-page grid items-center gap-12 py-12 sm:py-20 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-5">{t.eyebrow}</p>
            <h1 className="t-hero">{t.h1}</h1>
            <div className="gold-rule mt-7" />
            <p className="t-lede mt-7 max-w-2xl">{t.lede}</p>
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

      {/* Ticker */}
      <section aria-hidden="true" className="overflow-hidden border-y border-line bg-char py-4">
        <div className="ticker-track">
          {ticker.map((w, i) => (
            <span key={i} className="flex items-center whitespace-nowrap font-serif text-xl text-ivory">
              <span className="px-8">{w}</span>
              <span className="text-gold-500">&#10022;</span>
            </span>
          ))}
        </div>
      </section>

      {/* Figures */}
      <section className="border-b border-line">
        <dl className="container-page grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {t.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="px-2 py-9 text-center sm:px-8 sm:py-12">
              <dt className="t-figure text-gold-400">{s.value}</dt>
              <dd className="t-small mx-auto mt-3 max-w-[16rem]">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* About */}
      <section className="py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">{t.about.eyebrow}</p>
            <h2 className="t-h2">{t.about.title}</h2>
            <div className="gold-rule mt-6" />
          </Reveal>
          <Reveal delay={150} className="space-y-5">
            {t.about.paragraphs.map((p, i) => (
              <p key={p} className={`t-body t-justify ${i === t.about.paragraphs.length - 1 ? "border-s-2 border-gold-500/70 ps-5 !text-ivory" : ""}`}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Expertise */}
      <section className="border-y border-line bg-char py-16 sm:py-24">
        <div className="container-page">
          <Reveal><Head eyebrow={t.expertise.eyebrow} title={t.expertise.title} lead={t.expertise.lead} /></Reveal>
          <ol className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {t.expertise.items.map((it, i) => (
              <Reveal key={it.title} delay={(i % 4) * 80} className="bg-ink p-7 transition-colors hover:bg-panel">
                <span className="t-h2 text-gold-500/80">{no(i + 1)}</span>
                <h3 className="t-h3 mt-4">{it.title}</h3>
                <p className="t-small mt-3">{it.text}</p>
              </Reveal>
            ))}
            <Reveal delay={240} className="flex flex-col justify-between bg-gold-400 p-7 text-ink">
              <div>
                <h3 className="t-h3 !text-white">{t.expertise.cardTitle}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">{t.expertise.cardText}</p>
              </div>
              <a href={tel} className="mt-8 inline-flex items-center justify-center border border-white/70 px-4 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-gold-500">
                {t.cta}
              </a>
            </Reveal>
          </ol>
        </div>
      </section>

      {/* Track record */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal><Head eyebrow={t.track.eyebrow} title={t.track.title} lead={t.track.lead} /></Reveal>
          <ol className="relative mt-12 space-y-0 border-s border-gold-500/50 ps-8 sm:ps-12">
            {t.track.roles.map((r, i) => (
              <Reveal key={r.title + r.period} delay={i * 80} className="relative pb-12 last:pb-0">
                <span aria-hidden="true" className="absolute -start-[2.55rem] top-1.5 h-3 w-3 rotate-45 bg-gold-500 sm:-start-[3.55rem]" />
                <p className="eyebrow">{r.period}</p>
                <h3 className="t-h3 mt-2">{r.title}</h3>
                <p className="mt-1 text-base font-medium text-gold-400">{r.company}</p>
                <p className="t-body t-justify mt-3 max-w-3xl">{r.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-line bg-char py-16 sm:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">{t.contact.eyebrow}</p>
            <h2 className="t-h2">{t.contact.title}</h2>
            <div className="gold-rule mt-6" />
            <p className="t-body mt-6 max-w-2xl">{t.contact.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={tel} className="btn-gold">{t.cta}</a>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-ghost">{t.ctaWhatsApp}</a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <dl className="border border-gold-500/50 bg-ink">
              <div className="border-b border-line p-6">
                <dt className="eyebrow mb-1">{t.contact.call}</dt>
                <dd><a href={tel} dir="ltr" className="ltr-text text-lg text-ivory hover:text-gold-400">{phone}</a></dd>
              </div>
              {m.email && (
                <div className="border-b border-line p-6">
                  <dt className="eyebrow mb-1">{t.contact.email}</dt>
                  <dd><a href={`mailto:${m.email}`} dir="ltr" className="ltr-text break-all text-lg text-ivory hover:text-gold-400">{m.email}</a></dd>
                </div>
              )}
              <div className="p-6">
                <a href="https://iamehtesham.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-base font-medium text-gold-400 hover:text-gold-300">
                  {t.portfolio}
                  <svg viewBox="0 0 24 8" className="h-2 w-6 rtl:-scale-x-100" fill="none" stroke="currentColor" aria-hidden="true"><path d="M0 4h22M18 1l4 3-4 3" /></svg>
                </a>
              </div>
            </dl>
            <LocLink href="/team" className="mt-6 inline-block text-sm text-mute hover:text-gold-400">{d.team.profile.back}</LocLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
