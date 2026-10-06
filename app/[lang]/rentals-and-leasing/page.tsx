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
  const p = getDict(l).rentalsPage;
  const path = "/rentals-and-leasing";
  return {
    title: { absolute: p.metaTitle },
    description: p.metaDescription,
    alternates: { canonical: localize(l, path), languages: { en: localize("en", path), ar: localize("ar", path), "x-default": localize("en", path) } },
  };
}

const no = (i: number) => String(i).padStart(2, "0");

export default async function Page({ params }: P) {
  const { lang } = await params;
  const d = getDict(lang as Lang);
  const p = d.rentalsPage;
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
          <div className="mt-12">
            <p className="eyebrow mb-3">{p.typesLabel}</p>
            <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
              {p.types.map((t, i) => (
                <li key={t} className="flex items-baseline gap-3 bg-char p-5">
                  <span className="t-h4 text-gold-500">{no(i + 1)}</span>
                  <span className="t-body !text-ivory">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {p.stages.map((s, i) => {
        const tint = i % 2 === 0;
        return (
          <section key={s.title} className={`py-16 sm:py-24 ${tint ? "" : "border-y border-line bg-char"}`}>
            <div className={`container-page grid gap-10 lg:gap-20 ${i === 0 ? "items-center lg:grid-cols-2" : "lg:grid-cols-[4fr_8fr]"}`}>
              <Reveal>
                <p className="eyebrow mb-4">{s.eyebrow}</p>
                <h2 className="t-h2">{s.title}</h2>
                <div className="gold-rule mt-6" />
                {i === 0 && (
                  <div className="relative mt-8 aspect-[4/3] overflow-hidden border border-gold-500/50">
                    <Image src="/services/rentals-feature.webp" alt={p.imageAlt} fill quality={85} sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                  </div>
                )}
              </Reveal>
              <Reveal delay={150}>
                <div className="space-y-4">
                  {s.paragraphs.map((t) => (
                    <p key={t} className="t-body t-justify">{t}</p>
                  ))}
                </div>
                {s.points.length > 0 && (
                  <div className="mt-8">
                    <p className="eyebrow mb-3">{s.label}</p>
                    <ul className="flex flex-wrap gap-2">
                      {s.points.map((c) => (
                        <li key={c} className={`border border-gold-500/50 px-3 py-1.5 text-base text-ivory ${tint ? "bg-char" : "bg-ink"}`}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Reveal>
            </div>
          </section>
        );
      })}

      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="t-h2">{p.closing.title}</h2>
            <div className="gold-rule mx-auto mt-6" />
            <p className="t-body t-justify mt-6">{p.closing.text}</p>
          </Reveal>
          <Reveal className="mt-10">
            <p className="eyebrow mb-3 text-center">{p.journeyLabel}</p>
            <ol className="grid gap-px border border-line bg-line sm:grid-cols-4 lg:grid-cols-7">
              {p.journey.map((t, i) => (
                <li key={t} className="bg-char p-5 text-center">
                  <span className="t-h4 text-gold-500">{no(i + 1)}</span>
                  <p className="t-body mt-2 !text-ivory">{t}</p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal className="mx-auto mt-10 max-w-3xl text-center">
            <p className="eyebrow">{p.closing.signoff}</p>
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
