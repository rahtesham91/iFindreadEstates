import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Ornament from "@/components/Ornament";
import PortraitFrame from "@/components/PortraitFrame";
import Reveal from "@/components/Reveal";
import { aboutIntro, ceo, developers, mission, services, site, team, values, vision } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About iFind Real Estate LLC, a Dubai brokerage helping clients buy, sell and lease property across the UAE. Meet our Founder & CEO Avaid Lateef, our Managing Director, vision, mission and values.",
};

const md = team[0];
const goldText = "bg-gradient-to-b from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent";
// Italic glyphs overhang their box, so pad the right edge or the last letter is clipped by the gradient.
const goldItalic = `italic pr-[0.14em] ${goldText}`;

const stats = [
  { value: "8+", label: "Years of founder experience in Dubai and international real estate" },
  { value: String(team.length), label: "Team members" },
  { value: String(developers.length), label: "Developers we are registered with" },
];

export default function Page() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative isolate overflow-hidden border-b border-line pt-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(60rem 28rem at 15% 0%, rgb(var(--c-gold-500) / 0.16), transparent 62%), radial-gradient(40rem 30rem at 100% 100%, rgb(var(--c-gold-500) / 0.08), transparent 60%)" }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-1/2 -z-10 w-[26rem] -translate-y-1/2 opacity-[0.08] sm:right-4 sm:w-[36rem]">
          <Image src="/brand/logo-icon-dark.svg" alt="" width={235} height={270} unoptimized className="h-auto w-full" />
        </div>
        <div className="container-page py-16 sm:py-32">
          <Ornament className="mb-8" />
          <p className="eyebrow mb-6">iFind Real Estate LLC &middot; Dubai</p>
          <h1 className="h-display text-[3.6rem] leading-[0.95] sm:text-8xl lg:text-[9rem]">
            About <span className={`${goldItalic}`}>Us</span>
          </h1>
          <p className="mt-9 max-w-2xl font-serif text-2xl leading-snug text-ivory/90 sm:mt-12 sm:text-[2rem] sm:leading-snug">
            Specializing in mid-range to luxury properties, our multinational team brings a global perspective and deep local expertise to every transaction.
          </p>
        </div>
      </section>

      {/* 2. Founder & CEO: its own section */}
      <section id="ceo" className="relative isolate overflow-hidden bg-char py-16 sm:py-32">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(50rem 36rem at 80% 40%, rgb(var(--c-gold-500) / 0.10), transparent 65%)" }} />
        <span aria-hidden="true" className="pointer-events-none absolute -left-4 top-4 -z-10 select-none font-serif text-[9rem] leading-none text-gold-500/[0.05] sm:text-[18rem]">CEO</span>
        <div className="container-page grid items-center gap-14 lg:grid-cols-[6fr_6fr] lg:gap-24">
          <Reveal className="mx-auto w-full max-w-md lg:max-w-none">
            <PortraitFrame src={ceo.photo} alt={`${ceo.honorific} ${ceo.name}, ${ceo.title}`} priority />
          </Reveal>

          <Reveal delay={150}>
            <figure>
              <figcaption>
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-px w-12 bg-gold-500" />
                  <span className="eyebrow">{ceo.title}</span>
                </div>
                <h2 className="h-display text-[3.4rem] leading-[0.98] sm:text-7xl lg:text-[5.5rem]">
                  Avaid <span className={`${goldItalic}`}>Lateef</span>
                </h2>
              </figcaption>
              <svg viewBox="0 0 48 36" className="mb-5 mt-10 h-8 w-11 text-gold-500/80 sm:mt-12" fill="currentColor" aria-hidden="true">
                <path d="M0 36V21.6C0 9.6 6.6 2.4 18 0l1.8 4.8C13.2 7.2 10.2 11.4 10.2 16.2H18V36H0Zm27 0V21.6C27 9.6 33.6 2.4 45 0l1.8 4.8C40.2 7.2 37.2 11.4 37.2 16.2H45V36H27Z" />
              </svg>
              <blockquote className="space-y-6">
                <p className="font-serif text-[1.5rem] italic leading-[1.5] text-ivory sm:text-[1.9rem] sm:leading-[1.5]">{ceo.message[0]}</p>
                <p className="text-base leading-[1.9] text-mute sm:text-lg">{ceo.message[1]}</p>
              </blockquote>
              <div className="mt-10 flex items-center gap-5 border-t border-line pt-8">
                <p className="font-serif text-3xl italic text-gold-400 sm:text-4xl">{ceo.name}</p>
                <span className="h-px flex-1 bg-gradient-to-r from-gold-500/50 to-transparent" />
              </div>
              <p className="mt-2 text-[0.7rem] uppercase tracking-luxe text-mute">{ceo.title}, {site.legalName}</p>
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
            <p className="eyebrow mb-5">Who We Are</p>
            <h2 className="h-display text-4xl sm:text-6xl">A Dubai brokerage built on honest advice</h2>
            <div className="mt-8 border-l border-gold-500/60 pl-5">
              <p className="text-sm uppercase tracking-[0.16em] text-gold-400">{site.orn}</p>
              <p className="mt-2 text-sm leading-relaxed text-mute">{site.address}</p>
            </div>
          </Reveal>
          <Reveal delay={150} className="space-y-7 text-base leading-[1.9] text-mute sm:text-lg">
            {aboutIntro.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-serif text-[1.6rem] leading-[1.5] text-ivory first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:leading-[0.85] first-letter:text-gold-400 sm:text-[1.9rem]"
                    : i === aboutIntro.length - 1
                      ? "border-l-2 border-gold-500/70 pl-6 font-serif text-xl italic text-ivory/90 sm:text-2xl"
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
              <span className="eyebrow">{md.role}</span>
            </div>
            <h2 className="h-display text-[3.2rem] leading-[0.98] sm:text-7xl">
              {md.name.split(" ")[0]} <span className={`${goldItalic}`}>{md.name.split(" ").slice(1).join(" ")}</span>
            </h2>
            <p className="mt-9 font-serif text-xl italic leading-[1.6] text-ivory/95 sm:text-[1.65rem] sm:leading-[1.6]">{md.bio}</p>
            <Link href="/team" className="btn-ghost mt-10">Meet the Full Team</Link>
          </Reveal>
          <Reveal delay={150} className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-none">
            <PortraitFrame src={md.photo} alt={`${md.name}, ${md.role}`} />
          </Reveal>
        </div>
      </section>

      {/* 6. Vision and mission */}
      <section className="py-16 sm:py-32">
        <div className="container-page">
          <Reveal className="mb-12 text-center sm:mb-16">
            <Ornament align="center" className="mb-6" />
            <p className="eyebrow mb-4">Purpose</p>
            <h2 className="h-display text-4xl sm:text-6xl">Our vision and mission</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { n: "I", label: "Our Vision", text: vision },
              { n: "II", label: "Our Mission", text: mission },
            ].map((b, i) => (
              <Reveal key={b.label} delay={i * 150}>
                <article className="relative h-full overflow-hidden border border-gold-500/40 bg-char p-8 sm:p-14">
                  <span aria-hidden="true" className="absolute -right-2 -top-8 font-serif text-[10rem] leading-none text-gold-500/[0.08]">{b.n}</span>
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
            <p className="eyebrow mb-4">What We Stand For</p>
            <h2 className="h-display text-4xl sm:text-6xl">Our values</h2>
          </Reveal>
          <dl className="mt-12 grid gap-x-10 gap-y-10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
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
            <p className="eyebrow mb-4">What We Do</p>
            <h2 className="h-display text-4xl sm:text-6xl">Buy. Sell. Lease.</h2>
          </Reveal>
          <ul className="mt-12 grid gap-px border border-line bg-line sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <li key={s.slug} className="bg-ink">
                <Link href={s.href} className="group block h-full p-8 transition-colors hover:bg-panel">
                  <h3 className="font-serif text-2xl transition-colors group-hover:text-gold-300">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">{s.short}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
