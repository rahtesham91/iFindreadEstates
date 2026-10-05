import { LocLink } from "@/components/I18nProvider";
import { getDict } from "@/lib/dict";
import type { Lang } from "@/lib/i18n";
import Placeholder from "@/components/Placeholder";
import TeamCard from "@/components/TeamCard";
import DeveloperGrid from "@/components/DeveloperGrid";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { leadership, services, whatsappLink } from "@/lib/site";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const d = getDict(lang as Lang);
  const h = d.home;
  const [first, second] = d.taglineParts;
  return (
    <>
      {/* Hero */}
      <section className="relative isolate flex items-center overflow-hidden pt-20 sm:min-h-[100svh]">
        <Placeholder label={d.placeholder.heroHome} size="2400 x 1400" className="absolute inset-0 -z-20 !border-0" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/75 to-ink/40 sm:bg-gradient-to-r sm:rtl:bg-gradient-to-l sm:from-ink sm:via-ink/80 sm:to-ink/20" />
        <div className="container-page pb-14 pt-12 sm:py-32">
          <p className="eyebrow mb-4 sm:mb-6">{h.eyebrow}</p>
          <h1 className="h-display max-w-4xl text-[3.1rem] leading-[1.02] sm:text-7xl lg:text-[6.5rem]">
            {first}
            <br />
            <span className="text-gold-400">{second}</span>
          </h1>
          <div className="gold-rule mt-6 sm:mt-10" />
          <p className="mt-5 max-w-xl text-[0.72rem] uppercase leading-relaxed tracking-[0.16em] text-ivory/75 sm:mt-8 sm:text-sm sm:tracking-[0.2em]">
            {h.keywords.join(" · ")}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:flex sm:gap-4">
            <LocLink href="/contact" className="btn-gold !px-3 sm:!px-7">{d.common.enquireNow}</LocLink>
            <a href={whatsappLink(d.wa.general)} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-3 sm:!px-7">{d.common.whatsappUs}</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading
            eyebrow={h.servicesEyebrow}
            title={h.servicesTitle}
            text={h.servicesText}
          />
          <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2">
            {services.map((s, i) => (
              <LocLink key={s.slug} href={s.href} className="group relative flex min-h-[18rem] flex-col justify-between bg-ink p-9 transition-colors hover:bg-panel sm:p-12">
                <div>
                  <span className="font-serif text-5xl text-gold-500/70">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-6 font-serif text-3xl sm:text-4xl">{d.services[i].title}</h3>
                  <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-mute">{d.services[i].short}</p>
                </div>
                <span className="mt-10 inline-flex items-center gap-3 text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-gold-400 transition-all group-hover:gap-5 group-hover:text-gold-300">
                  {d.common.learnMore}
                  <svg viewBox="0 0 24 8" className="h-2 w-6 rtl:-scale-x-100" fill="none" stroke="currentColor" aria-hidden="true"><path d="M0 4h22M18 1l4 3-4 3" /></svg>
                </span>
              </LocLink>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="border-y border-line bg-char py-24 sm:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Placeholder label={d.placeholder.whyHome} size="1200 x 1400" className="aspect-[4/5]" />
          <div>
            <SectionHeading eyebrow={h.whyEyebrow} title={h.whyTitle} />
            <dl className="mt-12 grid gap-10 sm:grid-cols-2">
              {h.why.map((w) => (
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
          <SectionHeading eyebrow={d.developers.eyebrow} title={d.developers.homeTitle} align="center" />
          <div className="mt-12 sm:mt-16">
            <DeveloperGrid />
          </div>
          <div className="mt-10 text-center">
            <LocLink href="/developers" className="btn-ghost">{d.developers.viewAll}</LocLink>
          </div>
        </div>
      </section>

      {/* Investors */}
      <section className="border-y border-line bg-char py-24 sm:py-32">
        <div className="container-page grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow={h.investorsEyebrow}
              title={h.investorsTitle}
              text={h.investorsText}
            />
            <LocLink href="/investor-services" className="btn-gold mt-10">{h.investorsButton}</LocLink>
          </div>
          <Placeholder label={d.placeholder.investorsHome} size="1400 x 1000" className="aspect-[7/5]" />
        </div>
      </section>

      {/* Process */}
      <section className="py-24 sm:py-32">
        <div className="container-page">
          <SectionHeading eyebrow={h.processEyebrow} title={h.processTitle} align="center" />
          <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {d.steps.map((s, i) => (
              <li key={s.title} className="border-t border-gold-500/60 pt-6">
                <span className="font-serif text-5xl text-gold-500/80">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-serif text-2xl">{d.services[i].title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team preview */}
      <section className="border-t border-line bg-char py-16 sm:py-28">
        <div className="container-page">
          <SectionHeading eyebrow={h.teamEyebrow} title={h.teamTitle} />
          <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-16 sm:gap-x-8 lg:grid-cols-4">
            {leadership.map((m) => (
              <li key={m.slug}>
                <TeamCard member={m} compact />
              </li>
            ))}
          </ul>
          <LocLink href="/team" className="btn-ghost mt-12">{h.teamButton}</LocLink>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
