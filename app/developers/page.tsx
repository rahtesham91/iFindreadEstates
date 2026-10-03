import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { developers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Developer Partners",
  description: "iFind Real Estate is registered with Dubai's major developers.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Developers"
        title="Our Developer Partners"
        text="We are registered with the major developers in Dubai, giving our clients direct access to new launches and inventory."
        imageLabel="Developers hero: Dubai skyline"
      />
      <section className="py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading eyebrow="Partners" title="Registered with Dubai's major developers" />
          {/* Developer logos: replace each text tile with the official logo file when supplied. */}
          <ul className="mt-16 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
            {developers.map((d) => (
              <li key={d} className="flex h-40 items-center justify-center bg-ink px-4 text-center font-serif text-2xl tracking-wide text-mute transition-colors hover:bg-panel hover:text-gold-300">
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
