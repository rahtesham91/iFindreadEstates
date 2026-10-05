import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Link from "next/link";
import Ornament from "@/components/Ornament";
import PortraitFrame from "@/components/PortraitFrame";
import TeamCard from "@/components/TeamCard";
import { ceo, leadership, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the iFind Real Estate LLC team in Dubai: our Managing Director, directors, managers and property specialists.",
};

const specialists = team.slice(leadership.length);

export default function Page() {
  return (
    <>
      <section className="border-b border-line pt-20">
        <div className="container-page py-14 sm:py-24">
          <p className="eyebrow mb-5">Our Team</p>
          <h1 className="h-display max-w-3xl text-5xl sm:text-6xl lg:text-7xl">The people behind iFind</h1>
          <div className="gold-rule mt-8" />
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mute">
            A multinational team with a global perspective and deep local expertise, committed to personalised, honest service on every deal.
          </p>
        </div>
      </section>

      {/* Founder & CEO: separate section */}
      <section className="relative isolate overflow-hidden py-16 sm:py-28">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(44rem 30rem at 85% 50%, rgb(var(--c-gold-500) / 0.10), transparent 65%)" }} />
        <div className="container-page grid items-center gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <PortraitFrame src={ceo.photo} alt={`${ceo.honorific} ${ceo.name}, ${ceo.title}`} priority sizes="(min-width: 1024px) 38vw, 90vw" />
          </div>
          <div>
            <Ornament className="mb-6" />
            <p className="eyebrow mb-4">{ceo.title}</p>
            <h2 className="h-display text-[3.2rem] leading-[0.98] sm:text-6xl lg:text-7xl">
              Avaid{" "}
              <span className="bg-gradient-to-b from-gold-300 via-gold-400 to-gold-500 bg-clip-text pr-[0.14em] italic text-transparent">Lateef</span>
            </h2>
            <p className="mt-8 font-serif text-xl italic leading-[1.6] text-ivory/95 sm:text-2xl sm:leading-[1.6]">{ceo.message[0]}</p>
            <p className="mt-5 text-base leading-[1.9] text-mute">{ceo.message[1]}</p>
            <Link href="/about#ceo" className="btn-ghost mt-9">Read More</Link>
          </div>
        </div>
      </section>

      <section className="border-t border-line py-16 sm:py-24">
        <div className="container-page">
          <div className="mb-10 flex items-end gap-6 sm:mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl">Leadership</h2>
            <div className="mb-2 h-px flex-1 bg-line" />
          </div>
          <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
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
            <h2 className="font-serif text-3xl sm:text-4xl">Specialists &amp; Support</h2>
            <div className="mb-2 h-px flex-1 bg-line" />
          </div>
          <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
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
