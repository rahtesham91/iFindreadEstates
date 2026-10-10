import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import { LocLink } from "@/components/I18nProvider";
import { alternatesFor } from "@/lib/seo";
import { getDict } from "@/lib/dict";
import { isLang, type Lang } from "@/lib/i18n";
import Ornament from "@/components/Ornament";
import PortraitFrame from "@/components/PortraitFrame";
import TeamCard from "@/components/TeamCard";
import { ceo, leadership, team } from "@/lib/site";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  const t = getDict(isLang(lang) ? lang : "en").teamPage;
  return { title: { absolute: getDict(isLang(lang) ? lang : "en").seo.team.title }, description: t.description, alternates: alternatesFor(isLang(lang) ? lang : "en", "/team") };
}

const specialists = team.slice(leadership.length);

export default async function Page({ params }: P) {
  const { lang } = await params;
  const d = getDict(lang as Lang);
  const t = d.teamPage;
  const c = d.ceo;
  return (
    <>
      <section className="border-b border-line pt-20">
        <div className="container-page py-14 sm:py-24">
          <p className="eyebrow mb-5">{t.eyebrow}</p>
          <h1 className="t-h1 max-w-3xl">{t.h1}</h1>
          <div className="gold-rule mt-8" />
          <p className="t-lede mt-8 max-w-2xl">
            {t.lede}
          </p>
        </div>
      </section>

      {/* Founder & CEO: separate section */}
      <section className="relative isolate overflow-hidden py-16 sm:py-24">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(44rem 30rem at 85% 50%, rgb(var(--c-gold-500) / 0.10), transparent 65%)" }} />
        <div className="container-page grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <PortraitFrame src={ceo.photo} alt={`${c.honorific} ${c.full}, ${c.title}`} priority sizes="(min-width: 1024px) 38vw, 90vw" />
          </div>
          <div>
            <Ornament className="mb-6" />
            <p className="eyebrow mb-4">{c.title}</p>
            <h2 className="t-h2">
              {c.first}{" "}
              <span className="bg-gradient-to-b from-gold-300 via-gold-400 to-gold-500 bg-clip-text pr-[0.14em] text-transparent">{c.last}</span>
            </h2>
            <p className="t-lede mt-6 !text-ivory">{c.messageA}</p>
            <p className="t-body mt-4">{c.messageB}</p>
            <LocLink href="/about#ceo" className="btn-ghost mt-9">{t.readMore}</LocLink>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <div className="container-page">
          <div className="mb-10 flex items-end gap-6 sm:mb-14">
            <h2 className="t-h2">{t.leadership}</h2>
            <div className="mb-2 h-px flex-1 bg-line" />
          </div>
          <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((m, i) => (
              <li key={m.slug}>
                <TeamCard member={m} priority={i < 2} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-char py-16 sm:py-24">
        <div className="container-page">
          <div className="mb-10 flex items-end gap-6 sm:mb-14">
            <h2 className="t-h2">{t.specialists}</h2>
            <div className="mb-2 h-px flex-1 bg-line" />
          </div>
          <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {specialists.map((m) => (
              <li key={m.slug}>
                <TeamCard member={m} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
