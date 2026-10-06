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
  const p = getDict(l).readyPage;
  const path = "/ready-and-luxury";
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

function Chips({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="mt-8">
      <p className="eyebrow mb-3">{label}</p>
      <ul className="flex flex-wrap gap-2">
        {items.map((c) => (
          <li key={c} className="border border-gold-500/50 bg-ink px-3 py-1.5 text-base text-ivory">{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  const d = getDict(lang as Lang);
  const p = d.readyPage;
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-line pt-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(56rem 26rem at 12% 0%, rgb(var(--c-gold-500) / 0.16), transparent 62%)" }} />
        <div className="container-page py-14 sm:py-24">
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
          <ul className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {p.pillars.map((t, i) => (
              <li key={t} className="flex items-baseline gap-3 bg-char p-5">
                <span className="t-h4 text-gold-500">{no(i + 1)}</span>
                <span className="t-body !text-ivory">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sellers */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
            <Reveal><Heading eyebrow={p.sellers.eyebrow} title={p.sellers.title} /></Reveal>
            <Reveal delay={150}><Paras items={p.sellers.paragraphs} /></Reveal>
          </div>
          <Reveal className="mt-12">
            <p className="eyebrow mb-3">{p.sellers.stepsLabel}</p>
            <ol className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
              {p.sellers.steps.map((s, i) => (
                <li key={s} className="bg-char p-5">
                  <span className="t-h4 text-gold-500">{no(i + 1)}</span>
                  <p className="t-body mt-2 !text-ivory">{s}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Luxury */}
      <section className="border-y border-line bg-char py-16 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Heading eyebrow={p.luxury.eyebrow} title={p.luxury.title} />
            <div className="mt-8"><Paras items={p.luxury.paragraphs} /></div>
            <Chips label={p.luxury.audienceLabel} items={p.luxury.audience} />
          </Reveal>
          <Reveal delay={150}>
            <div className="relative aspect-[4/5] overflow-hidden border border-gold-500/50">
              <Image src="/services/luxury-hero.webp" alt={p.luxury.imageAlt} fill quality={85} sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
            <p className="t-body t-justify mt-6 border-s-2 border-gold-500/70 ps-5 !text-ivory">{p.luxury.statement}</p>
          </Reveal>
        </div>
      </section>

      {/* Buyers */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
            <Reveal><Heading eyebrow={p.buyers.eyebrow} title={p.buyers.title} /></Reveal>
            <Reveal delay={150}><Paras items={p.buyers.paragraphs} /></Reveal>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <Reveal className="border border-line bg-char p-7 sm:p-9">
              <p className="eyebrow mb-4">{p.buyers.understandLabel}</p>
              <ol className="space-y-3">
                {p.buyers.understand.map((t, i) => (
                  <li key={t} className="flex items-baseline gap-4">
                    <span className="t-h4 text-gold-500">{no(i + 1)}</span>
                    <span className="t-body !text-ivory">{t}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={150} className="border border-line bg-char p-7 sm:p-9">
              <p className="eyebrow mb-4">{p.buyers.supportLabel}</p>
              <ol className="space-y-3">
                {p.buyers.support.map((t, i) => (
                  <li key={t} className="flex items-baseline gap-4">
                    <span className="t-h4 text-gold-500">{no(i + 1)}</span>
                    <span className="t-body !text-ivory">{t}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="border-y border-line bg-char py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Reveal><Heading eyebrow={p.journey.eyebrow} title={p.journey.title} /></Reveal>
          <Reveal delay={150}>
            <Paras items={p.journey.paragraphs} />
            <div className="mt-8 border border-gold-500/50 bg-ink p-6 sm:p-8">
              <h3 className="t-h3">{p.journey.after.title}</h3>
              <p className="t-body t-justify mt-3">{p.journey.after.text}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="t-h2">{p.closing.title}</h2>
            <div className="gold-rule mx-auto mt-6" />
            <p className="t-body t-justify mt-6">{p.closing.text}</p>
            <ul className="mt-8 flex flex-wrap justify-center gap-2">
              {p.closing.tags.map((t) => (
                <li key={t} className="border border-gold-500/50 bg-ink px-3 py-1.5 text-base text-ivory">{t}</li>
              ))}
            </ul>
            <p className="eyebrow mt-8">{p.closing.signoff}</p>
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
