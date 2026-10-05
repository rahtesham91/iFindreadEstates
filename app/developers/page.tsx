import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import DeveloperGrid from "@/components/DeveloperGrid";
import Ornament from "@/components/Ornament";
import Reveal from "@/components/Reveal";
import { developers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Developer Partners",
  description: "iFind Real Estate is registered with Dubai's major developers, including Emaar, Damac, Sobha, Dubai Properties, Azizi, Binghatti and Danube.",
};

export default function Page() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-line pt-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(56rem 26rem at 12% 0%, rgb(var(--c-gold-500) / 0.14), transparent 62%)" }} />
        <div className="container-page py-14 sm:py-28">
          <Ornament className="mb-7" />
          <p className="eyebrow mb-5">Developers</p>
          <h1 className="h-display max-w-4xl text-5xl sm:text-7xl lg:text-8xl">Our Developer Partners</h1>
          <div className="gold-rule mt-8" />
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mute">
            We are registered with the major developers in Dubai, giving our clients direct access to new launches and inventory.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-28">
        <div className="container-page">
          <Reveal>
            <div className="mb-10 flex items-end gap-6 sm:mb-14">
              <h2 className="font-serif text-3xl sm:text-4xl">
                {developers.length} developers
              </h2>
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
