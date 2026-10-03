import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { developers, steps, services, site, team, whatsappLink } from "@/lib/site";

const why = [
  { title: "Licensed Brokers", text: "Every consultant is a registered broker, with their BRN shown openly on our Team page." },
  { title: "Honest Advice", text: "We tell you what is worth your money, and what is not, even when it costs us a deal." },
  { title: "UAE and Beyond", text: "Access across the UAE, with the ability to discuss opportunities outside it." },
  { title: "Complex Deals", text: "Experience with plots, joint ventures, buildings, hotels and warehouses." },
];

export default function Home() {
  const [first, second] = site.tagline.split(". ");
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden pt-20 sm:items-center">
        <Placeholder label="Hero: Dubai skyline at dusk" size="2400 x 1400" className="absolute inset-0 -z-20 !border-0" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/40 sm:bg-gradient-to-r sm:from-ink sm:via-ink/80 sm:to-ink/20" />
        <div className="container-page pb-20 pt-32 sm:py-32">
          <p className="eyebrow mb-6">Dubai, United Arab Emirates</p>
          <h1 className="h-display max-w-4xl text-[3.4rem] sm:text-7xl lg:text-[6.5rem]">
            {first}.
            <br />
            <span className="text-gold-400">{second}</span>
          </h1>
          <div className="gold-rule mt-10" />
          <p className="mt-8 max-w-xl text-sm uppercase tracking-[0.2em] text-ivory/75">
            Off-Plan &middot; Ready &middot; Luxury &middot; Rentals &middot; Land &middot; Buildings &middot; Hotels
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn-gold">Enquire Now</Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost">WhatsApp Us</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Services"
            title="Every kind of property deal, in one place"
            text="We help you buy, sell and lease, from a first apartment to a hotel."
          />
          <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2">
            {services.map((s, i) => (
              <Link key={s.slug} href={s.href} className="group relative flex min-h-[18rem] flex-col justify-between bg-ink p-9 transition-colors hover:bg-panel sm:p-12">
                <div>
                  <span className="font-serif text-5xl text-gold-500/70">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-6 font-serif text-3xl sm:text-4xl">{s.title}</h3>
                  <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-mute">{s.short}</p>
                </div>
                <span className="mt-10 inline-flex items-center gap-3 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-gold-400 transition-all group-hover:gap-5 group-hover:text-gold-300">
                  Learn more
                  <svg viewBox="0 0 24 8" className="h-2 w-6" fill="none" stroke="currentColor" aria-hidden="true"><path d="M0 4h22M18 1l4 3-4 3" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="border-y border-line bg-char py-24 sm:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Placeholder label="Why iFind: team or Dubai architecture" size="1200 x 1400" className="aspect-[4/5]" />
          <div>
            <SectionHeading eyebrow="Why iFind" title="Built on trust, driven by value" />
            <dl className="mt-12 grid gap-10 sm:grid-cols-2">
              {why.map((w) => (
                <div key={w.title} className="border-t border-gold-500/60 pt-5">
                  <dt className="font-serif text-2xl">{w.title}</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-mute">{w.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Developers */}
      <section className="py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading eyebrow="Developers" title="Registered with Dubai's leading developers" align="center" />
          <ul className="mt-16 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
            {developers.map((d) => (
              <li key={d} className="flex h-28 items-center justify-center bg-ink px-4 text-center font-serif text-xl tracking-wide text-mute transition-colors hover:bg-panel hover:text-gold-300">
                {d}
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link href="/developers" className="btn-ghost">View All Developers</Link>
          </div>
        </div>
      </section>

      {/* Investors */}
      <section className="border-y border-line bg-char py-24 sm:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Investor Services"
              title="Opportunities for serious investors"
              text="Local and international investors rely on us to identify opportunities, evaluate them honestly and close the deal, whether that is a single unit, a plot or a whole building."
            />
            <Link href="/investor-services" className="btn-gold mt-10">Investor Services</Link>
          </div>
          <Placeholder label="Investors: city skyline or meeting" size="1400 x 1000" className="aspect-[7/5]" />
        </div>
      </section>

      {/* Process */}
      <section className="py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading eyebrow="Our Process" title="Clear steps. No surprises." align="center" />
          <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="border-t border-gold-500/60 pt-6">
                <span className="font-serif text-5xl text-gold-500/80">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team preview */}
      <section className="border-t border-line bg-char py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading eyebrow="Our Team" title="Registered brokers you can trust" />
          <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <li key={i}>
                <Placeholder label="Broker portrait" size="800 x 1000" className="aspect-[4/5]" />
                <h3 className="mt-5 font-serif text-2xl">{m.name}</h3>
                <p className="mt-1 text-sm text-mute">{m.role}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-gold-400">BRN {m.brn}</p>
              </li>
            ))}
          </ul>
          <Link href="/team" className="btn-ghost mt-12">Meet the Team</Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
