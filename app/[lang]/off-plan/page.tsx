import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { LocLink } from "@/components/I18nProvider";
import { whatsappLink } from "@/lib/site";
import { getDict } from "@/lib/dict";
import { isLang, localize, type Lang } from "@/lib/i18n";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  const l = isLang(lang) ? lang : "en";
  const p = getDict(l).offplanPage;
  const path = "/off-plan";
  return {
    title: { absolute: p.metaTitle },
    description: p.metaDescription,
    alternates: { canonical: localize(l, path), languages: { en: localize("en", path), ar: localize("ar", path), "x-default": localize("en", path) } },
  };
}

const no = (i: number) => String(i).padStart(2, "0");

function Heading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="t-h2">{title}</h2>
      <div className="gold-rule mt-6" />
    </>
  );
}

function Paras({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((t) => (
        <p key={t} className="t-body t-justify">{t}</p>
      ))}
    </div>
  );
}

function Chips({ label, items, tone = "ink" }: { label?: string; items: string[]; tone?: "ink" | "char" }) {
  return (
    <div className="mt-8">
      {label && <p className="eyebrow mb-3">{label}</p>}
      <ul className="flex flex-wrap gap-2">
        {items.map((c) => (
          <li key={c} className={`border border-gold-500/50 px-3 py-1.5 text-base text-ivory ${tone === "ink" ? "bg-ink" : "bg-char"}`}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  const d = getDict(lang as Lang);
  const p = d.offplanPage;
  return (
    <>
      {/* Hero: text on a clean background, photo as its own band (no text over the picture) */}
      <section className="relative isolate overflow-hidden border-b border-line pt-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(56rem 26rem at 12% 0%, rgb(var(--c-gold-500) / 0.16), transparent 62%)" }} />
        <div className="container-page py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[7fr_5fr] lg:gap-20">
            <div>
              <p className="eyebrow mb-5">{p.eyebrow}</p>
              <h1 className="t-h1">{p.h1}</h1>
              <div className="gold-rule mt-7" />
            </div>
            <div className="space-y-4 lg:pt-10">
              {p.intro.map((t) => (
                <p key={t} className="t-body t-justify">{t}</p>
              ))}
            </div>
          </div>
          <p className="t-h3 mt-10 border-s-2 border-gold-500/70 ps-5 text-gold-400">{p.advice}</p>
          <div className="relative mt-10 aspect-[16/10] overflow-hidden border border-gold-500/50 sm:aspect-[21/9]">
            <Image src="/services/offplan-hero-v2.webp" alt={p.imageAlts[0]} fill priority quality={85} sizes="(min-width: 1240px) 1180px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Why invest */}
      <section className="py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Reveal><Heading eyebrow={p.why.eyebrow} title={p.why.title} /></Reveal>
          <Reveal delay={150}>
            <Paras items={p.why.paragraphs} />
            <ol className="mt-6 border border-line">
              {p.why.items.map((t, i) => (
                <li key={t} className="flex items-baseline gap-4 border-b border-line bg-char px-5 py-4 last:border-b-0">
                  <span className="t-h4 text-gold-500">{no(i + 1)}</span>
                  <span className="t-body !text-ivory">{t}</span>
                </li>
              ))}
            </ol>
            <div className="mt-6 space-y-3">
              {p.why.after.map((t, i) => (
                <p key={t} className={`t-body t-justify ${i === 1 ? "border-s-2 border-gold-500/70 ps-5 !text-ivory" : ""}`}>{t}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why iFind */}
      <section className="border-y border-line bg-char py-16 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Heading eyebrow={p.choose.eyebrow} title={p.choose.title} />
            <div className="mt-8"><Paras items={p.choose.paragraphs} /></div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative aspect-[4/3] overflow-hidden border border-gold-500/50">
              <Image src="/services/offplan-feature-v2.webp" alt={p.imageAlts[1]} fill quality={85} sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <Chips label={p.choose.startLabel} items={p.choose.start} tone="char" />
            <p className="t-body t-justify mt-6 border-s-2 border-gold-500/70 ps-5 !text-ivory">{p.choose.after}</p>
          </Reveal>
        </div>
      </section>

      {/* Compare */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
            <Reveal><Heading eyebrow={p.compare.eyebrow} title={p.compare.title} /></Reveal>
            <Reveal delay={150}><p className="t-body t-justify">{p.compare.lead}</p></Reveal>
          </div>
          <ol className="mt-10 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-6">
            {p.compare.factors.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 100} className={`bg-char p-7 sm:p-8 ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"} ${i === 4 ? "md:col-span-2 lg:col-span-3" : ""}`}>
                <span className="t-h4 text-gold-500">{no(i + 1)}</span>
                <h3 className="t-h3 mt-3">{f.title}</h3>
                <p className="t-body mt-3">{f.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* SPA */}
      <section className="border-y border-line bg-char py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
            <Reveal><Heading eyebrow={p.spa.eyebrow} title={p.spa.title} /></Reveal>
            <Reveal delay={150}><Paras items={p.spa.paragraphs} /></Reveal>
          </div>
          <Reveal className="mt-10">
            <p className="eyebrow mb-3">{p.spa.stepsLabel}</p>
            <ol className="grid gap-px border border-line bg-line sm:grid-cols-3">
              {p.spa.steps.map((s, i) => (
                <li key={s} className="flex items-baseline gap-4 bg-ink p-6">
                  <span className="t-h4 text-gold-500">{no(i + 1)}</span>
                  <span className="t-body !text-ivory">{s}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Framework */}
      <section className="py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Reveal><Heading eyebrow={p.framework.eyebrow} title={p.framework.title} /></Reveal>
          <Reveal delay={150}>
            <Paras items={p.framework.paragraphs} />
            <Chips label={p.framework.checksLabel} items={p.framework.checks} />
          </Reveal>
        </div>
      </section>

      {/* Handover */}
      <section className="border-y border-line bg-char py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Reveal><Heading eyebrow={p.handover.eyebrow} title={p.handover.title} /></Reveal>
          <Reveal delay={150}>
            <Paras items={p.handover.paragraphs} />
            <Chips label={p.handover.optionsLabel} items={p.handover.options} tone="char" />
          </Reveal>
        </div>
      </section>

      {/* Final */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
            <Reveal><Heading eyebrow={p.final.eyebrow} title={p.final.title} /></Reveal>
            <Reveal delay={150}>
              <Paras items={p.final.paragraphs} />
              <ul className="mt-6 flex flex-wrap gap-2">
                {p.final.chips.map((c) => (
                  <li key={c} className="border border-gold-500/50 bg-ink px-3 py-1.5 text-base text-ivory">{c}</li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal className="mx-auto mt-14 max-w-3xl text-center">
            <h2 className="t-h2">{p.final.statement}</h2>
            <div className="gold-rule mx-auto mt-6" />
            <p className="eyebrow mt-8">{p.final.company}</p>
            <p className="t-h3 mt-2 text-gold-400">{p.final.tagline}</p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <LocLink href="/contact" className="btn-gold">{d.common.enquireNow}</LocLink>
              <a href={whatsappLink(d.wa.service.replace("{title}", p.eyebrow))} target="_blank" rel="noopener noreferrer" className="btn-ghost">{d.common.whatsappUs}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
