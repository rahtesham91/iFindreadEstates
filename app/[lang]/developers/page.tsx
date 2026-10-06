import type { Metadata } from "next";
import DeveloperGrid from "@/components/DeveloperGrid";
import Reveal from "@/components/Reveal";
import { LocLink } from "@/components/I18nProvider";
import { developers, whatsappLink } from "@/lib/site";
import { getDict, fill } from "@/lib/dict";
import { isLang, localize, type Lang } from "@/lib/i18n";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  const l = isLang(lang) ? lang : "en";
  const p = getDict(l).developersPage;
  return {
    title: { absolute: p.metaTitle },
    description: p.metaDescription,
    alternates: { canonical: localize(l, "/developers"), languages: { en: localize("en", "/developers"), ar: localize("ar", "/developers"), "x-default": localize("en", "/developers") } },
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

export default async function Page({ params }: P) {
  const { lang } = await params;
  const d = getDict(lang as Lang);
  const p = d.developersPage;
  const c = d.developers;
  return (
    <>
      {/* Hero */}
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
          <div className="mt-12">
            <p className="eyebrow mb-3">{p.inputsLabel}</p>
            <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {p.inputs.map((t, i) => (
                <li key={t} className="flex items-baseline gap-3 bg-char p-5">
                  <span className="t-h4 text-gold-500">{no(i + 1)}</span>
                  <span className="t-body !text-ivory">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
            <Reveal><Heading eyebrow={p.compare.eyebrow} title={p.compare.title} /></Reveal>
            <Reveal delay={150}><p className="t-body t-justify">{p.compare.lead}</p></Reveal>
          </div>
          <Reveal className="mt-10">
            <ol className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
              {p.compare.items.map((t, i) => (
                <li key={t} className="bg-char p-6">
                  <span className="t-h4 text-gold-500">{no(i + 1)}</span>
                  <p className="t-body mt-3 !text-ivory">{t}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal className="mt-8 max-w-3xl">
            <p className="t-body t-justify border-s-2 border-gold-500/70 ps-5 !text-ivory">{p.compare.after}</p>
          </Reveal>
        </div>
      </section>

      {/* Advice */}
      <section className="border-y border-line bg-char py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Reveal><Heading eyebrow={p.advice.eyebrow} title={p.advice.title} /></Reveal>
          <Reveal delay={150}>
            <div className="space-y-4">
              {p.advice.paragraphs.map((t) => (
                <p key={t} className="t-body t-justify">{t}</p>
              ))}
            </div>
            <div className="mt-8">
              <p className="eyebrow mb-3">{p.advice.tagsLabel}</p>
              <ul className="flex flex-wrap gap-2">
                {p.advice.tags.map((t) => (
                  <li key={t} className="border border-gold-500/50 bg-ink px-3 py-1.5 text-base text-ivory">{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Developer partners */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mb-10 max-w-3xl sm:mb-14">
            <Heading eyebrow={p.partnersEyebrow} title={fill(c.count, { n: developers.length })} />
            <p className="t-body mt-6">{c.intro}</p>
          </Reveal>
          <DeveloperGrid />
        </div>
      </section>

      {/* Our role */}
      <section className="border-y border-line bg-char py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
            <Reveal><Heading eyebrow={p.role.eyebrow} title={p.role.title} /></Reveal>
            <Reveal delay={150}>
              <div className="space-y-4">
                {p.role.paragraphs.map((t) => (
                  <p key={t} className="t-body t-justify">{t}</p>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal className="mt-12">
            <p className="eyebrow mb-3">{p.role.stepsLabel}</p>
            <ol className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-6">
              {p.role.steps.map((s, i) => (
                <li key={s} className="bg-ink p-5">
                  <span className="t-h4 text-gold-500">{no(i + 1)}</span>
                  <p className="t-body mt-3 !text-ivory">{s}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            {p.statement.map((t, i) => (
              <p key={t} className={i === 0 ? "t-body" : "t-h3 mt-3 text-gold-400"}>{t}</p>
            ))}
            <div className="gold-rule mx-auto mt-8" />
            <p className="eyebrow mt-8">{p.closing.company}</p>
            <h2 className="t-h2 mt-3">{p.closing.tagline}</h2>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <LocLink href="/contact" className="btn-gold">{d.common.enquireNow}</LocLink>
              <a href={whatsappLink(d.wa.general)} target="_blank" rel="noopener noreferrer" className="btn-ghost">{d.common.whatsappUs}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
