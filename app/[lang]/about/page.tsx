import type { Metadata } from "next";
import Image from "next/image";
import { LocLink } from "@/components/I18nProvider";
import { getDict, fill } from "@/lib/dict";
import { isLang, type Lang } from "@/lib/i18n";
import CtaBand from "@/components/CtaBand";
import PortraitFrame from "@/components/PortraitFrame";
import Reveal from "@/components/Reveal";
import { ceo, developers, services, team } from "@/lib/site";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  const a = getDict(isLang(lang) ? lang : "en").about;
  return { title: a.pageTitle, description: a.pageDescription };
}

const md = team[0];

export default async function Page({ params }: P) {
  const { lang } = await params;
  const d = getDict(lang as Lang);
  const a = d.about;
  const c = d.ceo;
  const mdp = d.people[md.slug];
  const stats = a.stats.map((x) => ({ ...x, value: fill(x.value, { team: team.length, dev: developers.length }) }));
  return (
    <>
      {/* 1. Intro */}
      <section className="relative isolate overflow-hidden border-b border-line pt-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(60rem 28rem at 15% 0%, rgb(var(--c-gold-500) / 0.14), transparent 62%)" }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -end-16 top-1/2 -z-10 w-[26rem] -translate-y-1/2 opacity-[0.07] sm:end-4 sm:w-[32rem]">
          <Image src="/brand/logo-icon-dark.svg" alt="" width={235} height={270} unoptimized className="h-auto w-full" />
        </div>
        <div className="container-page py-14 sm:py-24">
          <p className="eyebrow mb-5">{a.heroEyebrow}</p>
          <h1 className="t-h1">
            {a.heroH1a} <span className="text-gold-400">{a.heroH1b}</span>
          </h1>
          <div className="gold-rule mt-7" />
          <p className="t-body mt-7 max-w-2xl">{a.lede}</p>
        </div>
      </section>

      {/* 2. Founder & CEO */}
      <section id="ceo" className="relative isolate overflow-hidden bg-char py-16 sm:py-24">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(50rem 36rem at 80% 40%, rgb(var(--c-gold-500) / 0.10), transparent 65%)" }} />
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="mx-auto w-full max-w-md lg:max-w-none">
            <PortraitFrame src={ceo.photo} alt={`${c.honorific} ${c.full}, ${c.title}`} priority />
          </Reveal>

          <Reveal delay={150}>
            <figure>
              <figcaption>
                <p className="eyebrow mb-4">{c.title}</p>
                <h2 className="t-h2">
                  {c.first} <span className="text-gold-400">{c.last}</span>
                </h2>
                <div className="gold-rule mt-6" />
              </figcaption>
              <blockquote className="mt-7 space-y-5">
                <p className="t-body t-justify !text-ivory">{c.messageA}</p>
                <p className="t-body t-justify">{c.messageB}</p>
              </blockquote>
              <p className="mt-8 border-t border-line pt-6 text-base font-medium text-gold-400">
                {c.full}
                <span className="block pt-1 text-base font-normal text-mute">{c.signatureLine}</span>
              </p>
              <a href={`mailto:${ceo.email}`} dir="ltr" className="ltr-text mt-3 text-base text-mute transition-colors hover:text-gold-400">{ceo.email}</a>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 3. Figures */}
      <section className="border-y border-line">
        <dl className="container-page grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="px-2 py-10 text-center sm:px-8 sm:py-14">
              <dt className="t-figure text-gold-400">{s.value}</dt>
              <dd className="t-body mx-auto mt-4 max-w-[16rem]">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* 4. Who we are */}
      <section className="py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">{a.whoEyebrow}</p>
            <h2 className="t-h2">{a.whoTitle}</h2>
            <div className="gold-rule mt-6" />
          </Reveal>
          <Reveal delay={150} className="space-y-5">
            {a.intro.map((p, i) => (
              <p key={i} className="t-body t-justify">{p}</p>
            ))}
            <p className="pt-2 text-base font-medium text-gold-400">{a.signoff}</p>
            <p className="t-body border-t border-line pt-5">{a.whoMeta}</p>
          </Reveal>
        </div>
      </section>

      {/* 5. Managing Director */}
      <section className="relative isolate overflow-hidden border-y border-line bg-char py-16 sm:py-24">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(46rem 34rem at 15% 60%, rgb(var(--c-gold-500) / 0.09), transparent 65%)" }} />
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <p className="eyebrow mb-4">{mdp.role}</p>
            <h2 className="t-h2">
              {mdp.name.split(" ")[0]} <span className="text-gold-400">{mdp.name.split(" ").slice(1).join(" ")}</span>
            </h2>
            <div className="gold-rule mt-6" />
            <p className="t-body t-justify mt-7">{d.mdBio}</p>
            <LocLink href="/team/abid-khan" className="btn-ghost mt-8">{a.mdProfile}</LocLink>
            <LocLink href="/team" className="btn-ghost mt-3 sm:ms-3">{a.mdButton}</LocLink>
          </Reveal>
          <Reveal delay={150} className="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
            {md.photo && <PortraitFrame src={md.photo} alt={`${mdp.name}, ${mdp.role}`} />}
          </Reveal>
        </div>
      </section>

      {/* 6. Vision */}
      <section id="vision" className="py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">{a.purposeEyebrow}</p>
            <h2 className="t-h2">{a.visionLabel}</h2>
            <div className="gold-rule mt-6" />
          </Reveal>
          <Reveal delay={150} className="space-y-5">
            {a.visionText.map((t, i) => (
              <p key={i} className={i === a.visionText.length - 1 ? "t-body t-justify border-s-2 border-gold-500/70 ps-5 !text-ivory/90" : "t-body t-justify"}>
                {t}
              </p>
            ))}
            <p className="pt-2 text-base font-medium text-gold-400">{a.signoff}</p>
          </Reveal>
        </div>
      </section>

      {/* 7. Mission */}
      <section id="mission" className="border-y border-line bg-char py-16 sm:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow mb-4">{a.purposeEyebrow}</p>
            <h2 className="t-h2">{a.missionLabel}</h2>
            <div className="gold-rule mt-6" />
          </Reveal>
          <Reveal delay={150} className="space-y-5">
            {a.missionText.map((t, i) => (
              <p key={i} className={i === a.missionText.length - 1 ? "t-body t-justify border-s-2 border-gold-500/70 ps-5 !text-ivory/90" : "t-body t-justify"}>
                {t}
              </p>
            ))}
            <p className="pt-2 text-base font-medium text-gold-400">{a.signoff}</p>
          </Reveal>
        </div>
      </section>

      {/* 8. Values */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-4">{a.valuesEyebrow}</p>
            <h2 className="t-h2">{a.valuesTitle}</h2>
            <div className="gold-rule mt-6" />
          </Reveal>
          <dl className="mt-10 grid gap-x-8 gap-y-10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-5">
            {a.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="border-t border-gold-500/60 pt-5">
                  <span className="t-h4 text-gold-500">{String(i + 1).padStart(2, "0")}</span>
                  <dt className="t-h3 mt-2">{v.title}</dt>
                  <dd className="t-body mt-3">{v.text}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* 9. What we do */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-4">{a.doEyebrow}</p>
            <h2 className="t-h2">{a.doTitle}</h2>
            <div className="gold-rule mt-6" />
          </Reveal>
          <ul className="mt-10 grid gap-px border border-line bg-line sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <li key={s.slug} className="bg-ink">
                <LocLink href={s.href} className="group block h-full p-8 transition-colors hover:bg-panel">
                  <h3 className="t-h3 transition-colors group-hover:text-gold-400">{d.services[i].title}</h3>
                  <p className="t-body mt-3">{d.services[i].short}</p>
                </LocLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
