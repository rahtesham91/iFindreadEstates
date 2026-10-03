import type { Metadata } from "next";
import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { ceo, mission, services, site, values, vision } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About iFind Real Estate LLC, a Dubai brokerage helping clients buy, sell and lease property across the UAE. A message from our CEO, our vision, mission and values.",
};

export default function Page() {
  return (
    <>
      {/* CEO message: first thing on the page */}
      <section className="border-b border-line pt-20">
        <div className="container-page py-14 sm:py-24">
          <h1 className="eyebrow mb-6 sm:mb-8">About Us</h1>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
            <div className="mx-auto w-full max-w-[13rem] sm:max-w-sm lg:max-w-none">
              <Placeholder label="CEO portrait" size="1000 x 1250" className="aspect-[4/5]" />
            </div>
            <figure>
              <figcaption className="eyebrow mb-5">A Message from Our CEO</figcaption>
              <svg viewBox="0 0 48 36" className="mb-5 h-9 w-12 text-gold-500" fill="currentColor" aria-hidden="true">
                <path d="M0 36V21.6C0 9.6 6.6 2.4 18 0l1.8 4.8C13.2 7.2 10.2 11.4 10.2 16.2H18V36H0Zm27 0V21.6C27 9.6 33.6 2.4 45 0l1.8 4.8C40.2 7.2 37.2 11.4 37.2 16.2H45V36H27Z" />
              </svg>
              <blockquote className="space-y-5 font-serif text-[1.45rem] leading-snug text-ivory sm:text-3xl sm:leading-snug">
                {ceo.message.map((p, i) => (
                  <p key={i} className={i === 0 ? "" : "text-ivory/85"}>
                    {p}
                  </p>
                ))}
              </blockquote>
              <div className="mt-8 flex items-center gap-5">
                <div className="h-px w-12 bg-gold-500" />
                <div>
                  <p className="font-serif text-2xl">{ceo.name}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-[0.18em] text-gold-400">{ceo.title}</p>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-16 sm:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionHeading eyebrow="Who We Are" title="A Dubai brokerage built on honest advice" />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-mute sm:text-lg">
              <p>
                {site.legalName} is a full-service real estate brokerage based in Business Bay, Dubai. We help clients buy, sell and lease: off-plan and ready properties, luxury and everyday homes, rentals, land, buildings and hotels.
              </p>
              <p>
                We work with Dubai&rsquo;s leading developers and with private owners, investors and tenants from the UAE and around the world.
              </p>
            </div>
            <p className="mt-8 text-sm uppercase tracking-[0.16em] text-gold-400">{site.orn}</p>
          </div>
          <Placeholder label="Office or team photo" size="1200 x 1000" className="aspect-[6/5]" />
        </div>
      </section>

      {/* Vision and mission */}
      <section className="border-y border-line bg-char py-16 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Purpose" title="Our vision and mission" align="center" />
          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2 sm:mt-16">
            <article className="bg-char p-8 sm:p-12">
              <p className="eyebrow mb-5">Our Vision</p>
              <p className="font-serif text-2xl leading-snug sm:text-3xl">{vision}</p>
            </article>
            <article className="bg-char p-8 sm:p-12">
              <p className="eyebrow mb-5">Our Mission</p>
              <p className="font-serif text-2xl leading-snug sm:text-3xl">{mission}</p>
            </article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="What We Stand For" title="Our values" />
          <dl className="mt-12 grid gap-x-10 gap-y-10 sm:mt-16 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v, i) => (
              <div key={v.title} className="border-t border-gold-500/60 pt-5">
                <span className="font-sans text-[0.7rem] font-medium tracking-luxe text-gold-500">{String(i + 1).padStart(2, "0")}</span>
                <dt className="mt-2 font-serif text-2xl">{v.title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-mute">{v.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* What we do */}
      <section className="border-t border-line bg-char py-16 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="What We Do" title="Buy. Sell. Lease." />
          <ul className="mt-12 grid gap-px border border-line bg-line sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <li key={s.slug} className="bg-char">
                <Link href={s.href} className="group block h-full p-8 transition-colors hover:bg-panel">
                  <h3 className="font-serif text-2xl transition-colors group-hover:text-gold-300">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">{s.short}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/team" className="btn-ghost mt-10">Meet Our Team</Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
