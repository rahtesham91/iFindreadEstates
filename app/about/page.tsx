import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import TeamCard from "@/components/TeamCard";
import { aboutIntro, ceo, developers, mission, services, site, team, values, vision } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About iFind Real Estate LLC, a Dubai brokerage helping clients buy, sell and lease property across the UAE. Meet our Founder & CEO, our vision, mission, values and team.",
};

const stats = [
  { value: "8+", label: "Years of founder experience in Dubai and international real estate" },
  { value: String(team.length), label: "Team members" },
  { value: String(developers.length), label: "Developers we are registered with" },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-line pt-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-10 top-1/2 -z-10 w-[26rem] -translate-y-1/2 opacity-[0.07] sm:right-6 sm:w-[34rem]">
          <Image src="/brand/logo-icon-light.svg" alt="" width={235} height={270} unoptimized className="hidden h-auto w-full dark:block" />
          <Image src="/brand/logo-icon-dark.svg" alt="" width={235} height={270} unoptimized className="h-auto w-full dark:hidden" />
        </div>
        <div className="container-page py-16 sm:py-28">
          <p className="eyebrow mb-5">iFind Real Estate LLC</p>
          <h1 className="h-display text-5xl sm:text-7xl lg:text-[5.5rem]">About Us</h1>
          <div className="gold-rule mt-8" />
          <p className="mt-8 max-w-3xl font-serif text-2xl leading-snug text-ivory/90 sm:text-[2rem] sm:leading-snug">
            Specializing in mid-range to luxury properties, our multinational team brings a global perspective and deep local expertise to every transaction in Dubai.
          </p>
        </div>
      </section>

      {/* Founder & CEO */}
      <section className="bg-char py-16 sm:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-[5fr_7fr] lg:gap-24">
          <div className="relative mx-auto w-full max-w-md pb-3 pr-3 lg:max-w-none lg:pb-5 lg:pr-5">
            <div aria-hidden="true" className="absolute bottom-0 right-0 top-6 w-[calc(100%-1.5rem)] border border-gold-500/60 lg:top-8 lg:w-[calc(100%-1.25rem)]" />
            <div className="relative aspect-[4/5] overflow-hidden bg-panel shadow-2xl">
              <Image
                src={ceo.photo}
                alt={`${ceo.honorific} ${ceo.name}, ${ceo.title}`}
                fill
                priority
                quality={92}
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          <figure>
            <figcaption>
              <p className="eyebrow mb-5">{ceo.title}</p>
              <h2 className="h-display text-5xl sm:text-6xl">{ceo.name}</h2>
              <div className="gold-rule mt-7" />
            </figcaption>
            <svg viewBox="0 0 48 36" className="mb-4 mt-9 h-8 w-11 text-gold-500/80" fill="currentColor" aria-hidden="true">
              <path d="M0 36V21.6C0 9.6 6.6 2.4 18 0l1.8 4.8C13.2 7.2 10.2 11.4 10.2 16.2H18V36H0Zm27 0V21.6C27 9.6 33.6 2.4 45 0l1.8 4.8C40.2 7.2 37.2 11.4 37.2 16.2H45V36H27Z" />
            </svg>
            <blockquote className="font-serif text-[1.45rem] leading-relaxed text-ivory/95 sm:text-[1.75rem] sm:leading-relaxed">
              {ceo.message}
            </blockquote>
            <p className="mt-10 font-serif text-3xl italic text-gold-400">{ceo.name}</p>
            <p className="mt-1 text-[0.7rem] uppercase tracking-luxe text-mute">{ceo.title}, {site.legalName}</p>
          </figure>
        </div>
      </section>

      {/* Figures */}
      <section className="border-y border-line">
        <dl className="container-page grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="px-2 py-9 text-center sm:px-8 sm:py-14">
              <dt className="font-serif text-6xl text-gold-400 sm:text-7xl">{s.value}</dt>
              <dd className="mx-auto mt-3 max-w-[16rem] text-[0.7rem] uppercase leading-relaxed tracking-[0.2em] text-mute">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Who we are */}
      <section className="py-16 sm:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-24">
          <div>
            <p className="eyebrow mb-5">Who We Are</p>
            <h2 className="h-display text-4xl sm:text-5xl">A Dubai brokerage built on honest advice</h2>
            <div className="gold-rule mt-7" />
            <p className="mt-8 text-sm uppercase tracking-[0.16em] text-gold-400">{site.orn}</p>
            <p className="mt-2 text-sm text-mute">{site.address}</p>
          </div>
          <div className="space-y-6 text-base leading-[1.85] text-mute sm:text-lg">
            {aboutIntro.map((p, i) => (
              <p key={i} className={i === 0 ? "font-serif text-2xl leading-relaxed text-ivory sm:text-[1.7rem] sm:leading-relaxed" : i === aboutIntro.length - 1 ? "border-l-2 border-gold-500/70 pl-6 font-serif text-xl italic text-ivory/90" : ""}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Vision and mission */}
      <section className="border-y border-line bg-char py-16 sm:py-24">
        <div className="container-page">
          <div className="grid gap-px bg-line md:grid-cols-2">
          {[
            { n: "01", label: "Our Vision", text: vision },
            { n: "02", label: "Our Mission", text: mission },
          ].map((b) => (
            <article key={b.label} className="relative overflow-hidden bg-char p-8 sm:p-14">
              <span aria-hidden="true" className="absolute -right-2 -top-6 font-serif text-[9rem] leading-none text-gold-500/10">{b.n}</span>
              <p className="eyebrow relative mb-6">{b.label}</p>
              <p className="relative font-serif text-2xl leading-snug sm:text-[2rem] sm:leading-snug">{b.text}</p>
            </article>
          ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-28">
        <div className="container-page">
          <p className="eyebrow mb-5">What We Stand For</p>
          <h2 className="h-display text-4xl sm:text-5xl">Our values</h2>
          <div className="gold-rule mt-7" />
          <dl className="mt-12 grid gap-x-10 gap-y-10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <div key={v.title} className="border-t border-gold-500/60 pt-5">
                <span className="text-[0.7rem] font-medium tracking-luxe text-gold-500">{String(i + 1).padStart(2, "0")}</span>
                <dt className="mt-2 font-serif text-2xl">{v.title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-mute">{v.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Leadership preview */}
      <section className="border-t border-line bg-char py-16 sm:py-28">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-5">Leadership</p>
              <h2 className="h-display text-4xl sm:text-5xl">Meet the team</h2>
              <div className="gold-rule mt-7" />
            </div>
            <Link href="/team" className="btn-ghost self-start sm:self-auto">View Full Team</Link>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-16 sm:gap-x-8 lg:grid-cols-4">
            {team.slice(0, 4).map((m) => (
              <li key={m.slug}>
                <TeamCard member={m} compact />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 sm:py-28">
        <div className="container-page">
          <p className="eyebrow mb-5">What We Do</p>
          <h2 className="h-display text-4xl sm:text-5xl">Buy. Sell. Lease.</h2>
          <div className="gold-rule mt-7" />
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
