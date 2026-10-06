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
  const p = getDict(l).landPage;
  const path = "/land-buildings-hotels";
  return {
    title: { absolute: p.metaTitle },
    description: p.metaDescription,
    alternates: { canonical: localize(l, path), languages: { en: localize("en", path), ar: localize("ar", path), "x-default": localize("en", path) } },
  };
}

type Sub = { title: string; lead: string[]; kind: string; label: string; items: string[]; after: string[] };

const frame = "relative overflow-hidden border border-gold-500/50 bg-char";
const no = (i: number) => String(i).padStart(2, "0");

function Paras({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((t) => (
        <p key={t} className="t-body t-justify">{t}</p>
      ))}
    </div>
  );
}

function Heading({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="t-h2">{title}</h2>
      <div className="gold-rule mt-6" />
    </>
  );
}

// One content block: lead paragraphs, then a list / tag cloud / flow of steps, then closing paragraphs.
function Body({ s }: { s: Sub }) {
  return (
    <div>
      <Paras items={s.lead} />
      {s.kind === "list" && (
        <div className="mt-6">
          {s.label && <p className="eyebrow mb-3">{s.label}</p>}
          <ul className="space-y-3">
            {s.items.map((li) => (
              <li key={li} className="t-body flex gap-3">
                <span aria-hidden="true" className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-500" />
                <span>{li}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {s.kind === "chips" && (
        <ul className="mt-6 flex flex-wrap gap-2">
          {s.items.map((c) => (
            <li key={c} className="border border-gold-500/50 bg-ink px-3 py-1.5 text-base text-ivory">{c}</li>
          ))}
        </ul>
      )}
      {s.kind === "flow" && (
        <ol className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-3">
          {s.items.map((c, i) => (
            <li key={c} className="flex items-baseline gap-3 bg-ink p-4">
              <span className="t-h4 text-gold-500">{no(i + 1)}</span>
              <span className="t-body !text-ivory">{c}</span>
            </li>
          ))}
        </ol>
      )}
      {s.after.length > 0 && <div className="mt-6"><Paras items={s.after} /></div>}
    </div>
  );
}

function Img({ src, alt, ratio, sizes }: { src: string; alt: string; ratio: string; sizes: string }) {
  return (
    <div className={`${frame} ${ratio}`}>
      <Image src={src} alt={alt} fill quality={85} sizes={sizes} className="object-cover" />
    </div>
  );
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  const d = getDict(lang as Lang);
  const p = d.landPage;
  const L = p.labels;
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-line pt-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(56rem 26rem at 12% 0%, rgb(var(--c-gold-500) / 0.16), transparent 62%)" }} />
        <div className="container-page grid gap-10 py-14 sm:py-24 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <div>
            <p className="eyebrow mb-5">{p.eyebrow}</p>
            <h1 className="t-h1">{p.h1}</h1>
            <div className="gold-rule mt-7" />
          </div>
          <p className="t-body self-end border-s-2 border-gold-500/70 ps-5 !text-ivory">{p.statement}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="max-w-4xl"><Paras items={p.intro} /></div>
        </div>
      </section>

      {/* For property owners */}
      <section className="border-y border-line bg-char py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-4">{p.owners.eyebrow}</p>
            <p className="eyebrow mb-3 !text-mute">{L.challenge}</p>
            <h2 className="t-h2">{p.owners.challenge.title}</h2>
            <div className="gold-rule mt-6" />
          </Reveal>
          <Reveal delay={100} className="mt-8 max-w-3xl"><Body s={p.owners.challenge} /></Reveal>

          <Reveal className="mt-16 max-w-3xl border-t border-line pt-12">
            <p className="eyebrow mb-3 !text-mute">{L.solution}</p>
            <h3 className="t-h2">{p.owners.solution.title}</h3>
            <div className="gold-rule mt-6" />
            <div className="mt-8"><Body s={p.owners.solution} /></div>
          </Reveal>

          <div className="mt-12 grid gap-px border border-line bg-line lg:grid-cols-2">
            {p.owners.subs.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 100} className={`bg-ink p-7 sm:p-9 ${i < 3 ? "lg:col-span-2" : ""}`}>
                <h3 className="t-h3 mb-5 flex items-baseline gap-4"><span className="t-h4 text-gold-500">{no(i + 1)}</span>{s.title}</h3>
                <Body s={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* For investors and buyers */}
      <section className="py-16 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">{p.investors.eyebrow}</p>
            <p className="eyebrow mb-3 !text-mute">{L.challenge}</p>
            <h2 className="t-h2">{p.investors.challenge.title}</h2>
            <div className="gold-rule mt-6" />
            <div className="mt-8"><Body s={p.investors.challenge} /></div>
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow mb-3 !text-mute lg:mt-9">{L.solution}</p>
            <h3 className="t-h2">{p.investors.solution.title}</h3>
            <div className="gold-rule mt-6" />
            <div className="mt-8"><Body s={p.investors.solution} /></div>
          </Reveal>
        </div>
      </section>

      {/* Acquisition strategy */}
      <section className="border-y border-line bg-char py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="max-w-3xl">
            <Heading eyebrow={p.strategy.eyebrow} title={p.strategy.title} />
          </Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal><Body s={p.strategy.mandate} /></Reveal>
            <Reveal delay={150}>
              <h3 className="t-h3 mb-5">{p.strategy.analysis.title}</h3>
              <Body s={p.strategy.analysis} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Due diligence */}
      <section className="py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Reveal><Heading eyebrow={p.diligence.eyebrow} title={p.diligence.title} /></Reveal>
          <Reveal delay={150}><Body s={p.diligence.body} /></Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-line bg-char py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
            <Reveal><Heading eyebrow={p.process.eyebrow} title={p.process.title} /></Reveal>
            <Reveal delay={150}><Paras items={p.process.paragraphs} /></Reveal>
          </div>
          <Reveal className="mt-12">
            <h3 className="t-h3 mb-6">{p.process.stepsTitle}</h3>
            <ol className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
              {p.process.steps.map((s, i) => (
                <li key={s.title} className="bg-ink p-6">
                  <span className="t-h4 text-gold-500">{no(i + 1)}</span>
                  <h4 className="t-h4 mt-3">{s.title}</h4>
                  <p className="t-body mt-2">{s.text}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Land */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
            <Reveal><Heading eyebrow={p.land.eyebrow} title={p.land.title} /></Reveal>
            <Reveal delay={150}><Body s={p.land.body} /></Reveal>
          </div>
          <Reveal className="mt-12 grid gap-6 lg:grid-cols-[7fr_5fr]">
            <Img src="/services/land-plots-wide.webp" alt={L.imagesLand[0]} ratio="aspect-[16/9] lg:aspect-auto lg:min-h-[22rem]" sizes="(min-width: 1024px) 58vw, 100vw" />
            <Img src="/services/land-plots-map.webp" alt={L.imagesLand[1]} ratio="aspect-[4/3] lg:aspect-auto lg:min-h-[22rem]" sizes="(min-width: 1024px) 42vw, 100vw" />
          </Reveal>
        </div>
      </section>

      {/* Buildings */}
      <section className="border-y border-line bg-char py-16 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Heading eyebrow={p.buildings.eyebrow} title={p.buildings.title} />
            <div className="mt-8"><Body s={p.buildings.body} /></div>
          </Reveal>
          <Reveal delay={150} className="grid grid-cols-2 gap-4 sm:gap-6">
            <Img src="/services/land-buildings-a.webp" alt={L.imagesBuildings[0]} ratio="aspect-[3/4]" sizes="(min-width: 1024px) 24vw, 45vw" />
            <div className="mt-10 sm:mt-14"><Img src="/services/land-buildings-b.webp" alt={L.imagesBuildings[1]} ratio="aspect-[3/4]" sizes="(min-width: 1024px) 24vw, 45vw" /></div>
          </Reveal>
        </div>
      </section>

      {/* Hotels */}
      <section className="py-16 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <Img src="/services/land-hotel.webp" alt={L.imageHotel} ratio="aspect-[3/2]" sizes="(min-width: 1024px) 56vw, 100vw" />
          </Reveal>
          <Reveal delay={150} className="order-1 lg:order-2">
            <Heading eyebrow={p.hotels.eyebrow} title={p.hotels.title} />
            <div className="mt-8"><Paras items={p.hotels.paragraphs} /></div>
          </Reveal>
        </div>
      </section>

      {/* Why iFind */}
      <section className="border-y border-line bg-char py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Reveal><Heading eyebrow={p.why.eyebrow} title={p.why.title} /></Reveal>
          <Reveal delay={150}>
            <Paras items={p.why.paragraphs} />
            <p className="t-h3 mt-6 border-s-2 border-gold-500/70 ps-5 text-gold-400">{p.why.statement}</p>
          </Reveal>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 sm:py-24">
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
              <a href={whatsappLink(d.wa.service.replace("{title}", p.eyebrow))} target="_blank" rel="noopener noreferrer" className="btn-ghost">{d.common.whatsappUs}</a>
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
