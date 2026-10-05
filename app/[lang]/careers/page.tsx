import type { Metadata } from "next";
import CareerForm from "@/components/CareerForm";
import Reveal from "@/components/Reveal";
import { getDict } from "@/lib/dict";
import { isLang, localize, type Lang } from "@/lib/i18n";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  const l = isLang(lang) ? lang : "en";
  const c = getDict(l).careers;
  return {
    title: { absolute: c.metaTitle },
    description: c.metaDescription,
    alternates: { canonical: localize(l, "/careers"), languages: { en: localize("en", "/careers"), ar: localize("ar", "/careers"), "x-default": localize("en", "/careers") } },
  };
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  const d = getDict(lang as Lang);
  const c = d.careers;
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-line pt-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(56rem 26rem at 12% 0%, rgb(var(--c-gold-500) / 0.16), transparent 62%)" }} />
        <div className="container-page py-14 sm:py-24">
          <p className="eyebrow mb-5">{c.eyebrow}</p>
          <h1 className="t-h1 max-w-3xl">{c.h1}</h1>
          <div className="gold-rule mt-7" />
          <p className="t-lede mt-7 max-w-2xl">{c.lede}</p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-4">{c.whyEyebrow}</p>
            <h2 className="t-h2">{c.whyTitle}</h2>
            <div className="gold-rule mt-6" />
          </Reveal>
          <ul className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {c.why.map((w) => (
              <li key={w.title} className="bg-ink p-8">
                <div className="mb-5 h-px w-10 bg-gold-500" />
                <h3 className="t-h3">{w.title}</h3>
                <p className="t-small mt-3">{w.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-char py-16 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">{c.areasEyebrow}</p>
            <h2 className="t-h2">{c.areasTitle}</h2>
            <div className="gold-rule mt-6" />
            <p className="t-body mt-6">{c.areasText}</p>
            <ul className="mt-7 space-y-2.5">
              {c.positions.map((r) => (
                <li key={r.value} className="flex items-center gap-3 text-base text-ivory">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-500" />
                  {r.label}
                </li>
              ))}
            </ul>
          </Reveal>
          <div id="apply" className="scroll-mt-28">
            <p className="eyebrow mb-4">{c.formEyebrow}</p>
            <h2 className="t-h2">{c.formTitle}</h2>
            <div className="gold-rule mt-6" />
            <p className="t-body mb-8 mt-6">{c.formText}</p>
            <CareerForm />
          </div>
        </div>
      </section>
    </>
  );
}
