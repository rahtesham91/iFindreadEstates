import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Placeholder from "@/components/Placeholder";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { team, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the registered brokers of iFind Real Estate LLC, Dubai.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet Our Brokers"
        text="Every consultant at iFind is a registered broker. Speak to the right person for your requirement."
        imageLabel="Team hero: team or office"
      />

      <section className="border-t border-line bg-char py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading eyebrow="Our Team" title="Registered brokers" text="Each of our consultants holds a valid Broker Registration Number (BRN)." />
          <ul className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <li key={i} className="group">
                <Placeholder label="Broker portrait" size="800 x 1000" className="aspect-[4/5]" />
                <h3 className="mt-5 font-serif text-2xl">{m.name}</h3>
                <p className="mt-1 text-sm text-mute">{m.role}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.14em] text-gold-400">BRN {m.brn}</p>
                <p className="mt-1 text-xs text-mute/80">{m.languages}</p>
                <a href={whatsappLink(`Hello, I would like to speak with ${m.name}.`)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:text-gold-300">
                  WhatsApp &rarr;
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
