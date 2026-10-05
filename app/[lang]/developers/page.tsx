import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import DeveloperGrid from "@/components/DeveloperGrid";
import Ornament from "@/components/Ornament";
import Reveal from "@/components/Reveal";
import { developers } from "@/lib/site";
import { getDict, fill } from "@/lib/dict";
import { isLang, type Lang } from "@/lib/i18n";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  const c = getDict(isLang(lang) ? lang : "en").developers;
  return { title: c.pageTitle, description: c.pageDescription };
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  const c = getDict(lang as Lang).developers;
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-line pt-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(56rem 26rem at 12% 0%, rgb(var(--c-gold-500) / 0.14), transparent 62%)" }} />
        <div className="container-page py-14 sm:py-28">
          <Ornament className="mb-7" />
          <p className="eyebrow mb-5">{c.eyebrow}</p>
          <h1 className="t-h1 max-w-4xl">{c.pageTitle}</h1>
          <div className="gold-rule mt-8" />
          <p className="t-lede mt-8 max-w-2xl">{c.intro}</p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 flex items-end gap-6 sm:mb-14">
              <h2 className="t-h2">{fill(c.count, { n: developers.length })}</h2>
              <div className="mb-2 h-px flex-1 bg-line" />
            </div>
          </Reveal>
          <DeveloperGrid />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
