import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import TeamCard from "@/components/TeamCard";
import { team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the iFind Real Estate LLC team in Dubai: our Managing Director, directors, managers and property specialists.",
};

const leadership = team.slice(0, 4);
const specialists = team.slice(4);

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

      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="mb-10 flex items-end gap-6 sm:mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl">Leadership</h2>
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
