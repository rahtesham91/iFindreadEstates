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
  const p = getDict(l).investorPage;
  return {
    title: { absolute: p.metaTitle },
    description: p.metaDescription,
    alternates: { canonical: localize(l, "/investor-services"), languages: { en: localize("en", "/investor-services"), ar: localize("ar", "/investor-services"), "x-default": localize("en", "/investor-services") } },
  };
}

const no = (i: number) => String(i).padStart(2, "0");

function Head({ n, title }: { n: number; title: string }) {
  return (
    <>
      <p className="eyebrow mb-4">{no(n)}</p>
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

function Block({ n, title, paragraphs, label, points, tone }: { n: number; title: string; paragraphs: string[]; label: string; points: string[]; tone: "plain" | "tint" }) {
  return (
    <section className={`py-16 sm:py-24 ${tone === "tint" ? "border-y border-line bg-char" : ""}`}>
      <div className="container-page grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
        <Reveal><Head n={n} title={title} /></Reveal>
        <Reveal delay={150}>
          <Paras items={paragraphs} />
          <Chips label={label} items={points} />
        </Reveal>
      </div>
    </section>
  );
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  const d = getDict(lang as Lang);
  const p = d.investorPage;
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-line pt-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(56rem 26rem at 12% 0%, rgb(var(--c-gold-500) / 0.16), transparent 62%)" }} />
        <div className="container-page grid gap-10 py-14 sm:py-24 lg:grid-cols-[7fr_5fr] lg:gap-20">
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
      </section>

      {/* 01 Strategy */}
      <section className="py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Head n={1} title={p.strategy.title} />
            <div className="mt-6"><Paras items={p.strategy.paragraphs} /></div>
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow mb-4">{p.strategy.lead}</p>
            <ol className="border border-line">
              {p.strategy.items.map((it, i) => (
                <li key={it.title} className="grid gap-2 border-b border-line bg-char p-6 last:border-b-0 sm:grid-cols-[3rem_1fr] sm:gap-5 sm:p-7">
                  <span className="t-h4 text-gold-500">{no(i + 1)}</span>
                  <div>
                    <h3 className="t-h4">{it.title}</h3>
                    <p className="t-body mt-2">{it.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 02 Financing */}
      <Block n={2} tone="tint" title={p.financing.title} paragraphs={p.financing.paragraphs} label={p.financing.pointsLabel} points={p.financing.points} />

      {/* 03 Due diligence */}
      <Block n={3} tone="plain" title={p.diligence.title} paragraphs={p.diligence.paragraphs} label={p.diligence.pointsLabel} points={p.diligence.points} />

      {/* 04 Legal */}
      <Block n={4} tone="tint" title={p.legal.title} paragraphs={p.legal.paragraphs} label={p.legal.pointsLabel} points={p.legal.points} />

      {/* 05 Transaction management */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
            <Reveal><Head n={5} title={p.transaction.title} /></Reveal>
            <Reveal delay={150}><Paras items={p.transaction.paragraphs} /></Reveal>
          </div>
          <Reveal className="mt-12">
            <p className="eyebrow mb-4">{p.transaction.stepsLabel}</p>
            <ol className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
              {p.transaction.steps.map((s, i) => (
                <li key={s} className="flex items-baseline gap-4 bg-ink p-6">
                  <span className="t-h4 text-gold-500">{no(i + 1)}</span>
                  <span className="t-body !text-ivory">{s}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 06 Portfolio */}
      <Block n={6} tone="tint" title={p.portfolio.title} paragraphs={p.portfolio.paragraphs} label={p.portfolio.pointsLabel} points={p.portfolio.points} />

      {/* 07 Advice */}
      <section className="py-16 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Head n={7} title={p.advice.title} />
            <div className="mt-6"><Paras items={p.advice.paragraphs} /></div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative aspect-[4/3] overflow-hidden border border-gold-500/50">
              <Image src="/services/investors-meeting.webp" alt={p.advice.imageAlt} fill quality={85} sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="border-t border-line bg-char py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Reveal>
            <h2 className="t-h2">{p.closing.title}</h2>
            <div className="gold-rule mt-6" />
          </Reveal>
          <Reveal delay={150}>
            <p className="t-body t-justify">{p.closing.text}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {p.closing.tags.map((t) => (
                <li key={t} className="border border-gold-500/50 bg-ink px-3 py-1.5 text-base text-ivory">{t}</li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <LocLink href="/contact" className="btn-gold">{d.common.enquireNow}</LocLink>
              <a href={whatsappLink(d.wa.general)} target="_blank" rel="noopener noreferrer" className="btn-ghost">{d.common.whatsappUs}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-10">
        <div className="container-page">
          <p className="t-body t-justify max-w-4xl">{p.disclaimer}</p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
