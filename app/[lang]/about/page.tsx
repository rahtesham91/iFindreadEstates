import type { Metadata } from "next";
import Image from "next/image";
import { LocLink } from "@/components/I18nProvider";
import { getDict, fill } from "@/lib/dict";
import { isLang, type Lang } from "@/lib/i18n";
import CtaBand from "@/components/CtaBand";
import Ornament from "@/components/Ornament";
import PortraitFrame from "@/components/PortraitFrame";
import Reveal from "@/components/Reveal";
import { ceo, developers, services, site, team } from "@/lib/site";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  const a = getDict(isLang(lang) ? lang : "en").about;
  return { title: a.pageTitle, description: a.pageDescription };
}

const md = team[0];
const goldText = "bg-gradient-to-b from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent";
// Italic glyphs overhang their box, so pad the right edge or the last letter is clipped by the gradient.
const goldItalic = `pr-[0.14em] ${goldText}`;

export default async function Page({ params }: P) {
  const { lang } = await params;
  const d = getDict(lang as Lang);
  const a = d.about;
  const c = d.ceo;
  const mdp = d.people[md.slug];
  const stats = a.stats.map((x) => ({ ...x, value: fill(x.value, { team: team.length, dev: developers.length }) }));
  return (
    <>
      {/* 1. Hero */}
      <section className="relative isolate overflow-hidden border-b border-line pt-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(60rem 28rem at 15% 0%, rgb(var(--c-gold-500) / 0.16), transparent 62%), radial-gradient(40rem 30rem at 100% 100%, rgb(var(--c-gold-500) / 0.08), transparent 60%)" }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -end-16 top-1/2 -z-10 w-[26rem] -translate-y-1/2 opacity-[0.08] sm:end-4 sm:w-[36rem]">
          <Image src="/brand/logo-icon-dark.svg" alt="" width={235} height={270} unoptimized className="h-auto w-full" />
        </div>
        <div className="container-page py-16 sm:py-32">
          <Ornament className="mb-8" />
          <p className="eyebrow mb-6">{a.heroEyebrow}</p>
          <h1 className="h-display text-[3.6rem] leading-[0.95] sm:text-8xl lg:text-[9rem]">
            {a.heroH1a} <span className={`${goldItalic}`}>{a.heroH1b}</span>
          </h1>
          <p className="mt-9 max-w-2xl font-serif text-2xl leading-snug text-ivory/90 sm:mt-12 sm:text-[2rem] sm:leading-snug">
            {a.lede}
          </p>
        </div>
      </section>

      {/* 2. Founder & CEO: its own section */}
      <section id="ceo" className="relative isolate overflow-hidden bg-char py-16 sm:py-32">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(50rem 36rem at 80% 40%, rgb(var(--c-gold-500) / 0.10), transparent 65%)" }} />
        <span aria-hidden="true" className="pointer-events-none absolute -start-4 top-4 -z-10 select-none font-serif text-[9rem] leading-none text-gold-500/[0.05] sm:text-[18rem]">CEO</span>
        <div className="container-page grid items-center gap-14 lg:grid-cols-[6fr_6fr] lg:gap-24">
          <Reveal className="mx-auto w-full max-w-md lg:max-w-none">
            <PortraitFrame src={ceo.photo} alt={`${c.honorific} ${c.full}, ${c.title}`} priority />
          </Reveal>

          <Reveal delay={150}>
            <figure>
              <figcaption>
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-px w-12 bg-gold-500" />
                  <span className="eyebrow">{c.title}</span>
                </div>
                <h2 className="h-display text-[3.4rem] leading-[0.98] sm:text-7xl lg:text-[5.5rem]">
                  {c.first} <span className={`${goldItalic}`}>{c.last}</span>
                </h2>
              </figcaption>
              <svg viewBox="0 0 48 36" className="mb-5 mt-10 h-8 w-11 text-gold-500/80 sm:mt-12" fill="currentColor" aria-hidden="true">
                <path d="M0 36V21.6C0 9.6 6.6 2.4 18 0l1.8 4.8C13.2 7.2 10.2 11.4 10.2 16.2H18V36H0Zm27 0V21.6C27 9.6 33.6 2.4 45 0l1.8 4.8C40.2 7.2 37.2 11.4 37.2 16.2H45V36H27Z" />
              </svg>
              <blockquote className="space-y-6">
                <p className="font-serif text-[1.5rem] leading-[1.5] text-ivory sm:text-[1.9rem] sm:leading-[1.5]">{c.messageA}</p>
                <p className="text-base leading-[1.9] text-mute sm:text-lg">{c.messageB}</p>
              </blockquote>
              <div className="mt-10 flex items-center gap-5 border-t border-line pt-8">
                <p className="font-serif text-3xl text-gold-400 sm:text-4xl">{c.full}</p>
                <span className="h-px flex-1 bg-gradient-to-r rtl:bg-gradient-to-l from-gold-500/50 to-transparent" />
              </div>
              <p className="mt-2 text-[0.7rem] uppercase tracking-luxe text-mute">{c.signatureLine}</p>
              <a href={`mailto:${ceo.email}`} dir="ltr" className="ltr-text mt-3 text-sm text-mute transition-colors hover:text-gold-400">{ceo.email}</a>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* 3. Figures */}
      <section className="border-y border-line">
        <dl className="container-page grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120} className="px-2 py-10 text-center sm:px-8 sm:py-16">
              <dt className={`font-serif text-7xl sm:text-8xl ${goldText}`}>{s.value}</dt>
              <dd className="mx-auto mt-4 max-w-[16rem] text-[0.7rem] uppercase leading-relaxed tracking-[0.22em] text-mute">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* 4. Who we are */}
      <section className="py-16 sm:py-32">
        <div className="container-page grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-24">
          <Reveal>
            <Ornament className="mb-6" />
            <p className="eyebrow mb-5">{a.whoEyebrow}</p>
            <h2 className="h-display text-4xl sm:text-6xl">{a.whoTitle}</h2>
            <div className="mt-8 border-s border-gold-500/60 ps-5">
              <p className="text-sm uppercase tracking-[0.16em] text-gold-400">{d.orn}</p>
              <p className="mt-2 text-sm leading-relaxed text-mute">{d.address}</p>
            </div>
          </Reveal>
          <Reveal delay={150} className="space-y-7 text-base leading-[1.9] text-mute sm:text-lg">
            {a.intro.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-serif text-[1.6rem] leading-[1.5] text-ivory first-letter:float-start first-letter:me-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.85] first-letter:text-gold-400 sm:text-[1.9rem]"
                    : i === a.intro.length - 1
                      ? "border-s-2 border-gold-500/70 ps-6 font-serif text-xl text-ivory/90 sm:text-2xl"
                      : ""
                }
              >
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 5. Managing Director */}
      <section className="relative isolate overflow-hidden border-y border-line bg-char py-16 sm:py-32">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(46rem 34rem at 15% 60%, rgb(var(--c-gold-500) / 0.09), transparent 65%)" }} />
        <div className="container-page grid items-center gap-14 lg:grid-cols-[6fr_5fr] lg:gap-24">
          <Reveal className="order-2 lg:order-1">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-gold-500" />
              <span className="eyebrow">{mdp.role}</span>
            </div>
            <h2 className="h-display text-[3.2rem] leading-[0.98] sm:text-7xl">
              {mdp.name.split(" ")[0]} <span className={`${goldItalic}`}>{mdp.name.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="mt-9 font-serif text-xl leading-[1.6] text-ivory/95 sm:text-[1.65rem] sm:leading-[1.6]">{d.mdBio}</p>
            <LocLink href="/team" className="btn-ghost mt-10">{a.mdButton}</LocLink>
          </Reveal>
          <Reveal delay={150} className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none">
            {md.photo && <PortraitFrame src={md.photo} alt={`${mdp.name}, ${mdp.role}`} />}
          </Reveal>
        </div>
      </section>

      {/* 6. Vision and mission */}
      <section className="py-16 sm:py-32">
        <div className="container-page">
          <Reveal className="mb-12 text-center sm:mb-16">
            <Ornament align="center" className="mb-6" />
            <p className="eyebrow mb-4">{a.purposeEyebrow}</p>
            <h2 className="h-display text-4xl sm:text-6xl">{a.purposeTitle}</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { n: "I", label: a.visionLabel, text: a.vision },
              { n: "II", label: a.missionLabel, text: a.mission },
            ].map((b, i) => (
              <Reveal key={b.label} delay={i * 150}>
                <article className="relative h-full overflow-hidden border border-gold-500/40 bg-char p-8 sm:p-14">
                  <span aria-hidden="true" className="absolute -end-2 -top-8 font-serif text-[10rem] leading-none text-gold-500/[0.08]">{b.n}</span>
                  <div className="relative mb-7 flex items-center gap-4">
                    <span className="h-px w-10 bg-gold-500" />
                    <p className="eyebrow">{b.label}</p>
                  </div>
                  <p className="relative font-serif text-2xl leading-snug sm:text-[2rem] sm:leading-snug">{b.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Values */}
      <section className="border-t border-line bg-char py-16 sm:py-28">
        <div className="container-page">
          <Reveal>
            <Ornament className="mb-6" />
            <p className="eyebrow mb-4">{a.valuesEyebrow}</p>
            <h2 className="h-display text-4xl sm:text-6xl">{a.valuesTitle}</h2>
          </Reveal>
          <dl className="mt-12 grid gap-x-10 gap-y-10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-5">
            {a.values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="border-t border-gold-500/60 pt-5">
                  <span className="font-serif text-4xl text-gold-500/80">{String(i + 1).padStart(2, "0")}</span>
                  <dt className="mt-3 font-serif text-2xl">{v.title}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-mute">{v.text}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* 8. What we do */}
      <section className="py-16 sm:py-28">
        <div className="container-page">
          <Reveal>
            <Ornament className="mb-6" />
            <p className="eyebrow mb-4">{a.doEyebrow}</p>
            <h2 className="h-display text-4xl sm:text-6xl">{a.doTitle}</h2>
          </Reveal>
          <ul className="mt-12 grid gap-px border border-line bg-line sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <li key={s.slug} className="bg-ink">
                <LocLink href={s.href} className="group block h-full p-8 transition-colors hover:bg-panel">
                  <h3 className="font-serif text-2xl transition-colors group-hover:text-gold-300">{d.services[i].title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">{d.services[i].short}</p>
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
