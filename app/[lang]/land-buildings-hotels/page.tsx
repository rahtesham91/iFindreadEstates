import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { LocLink } from "@/components/I18nProvider";
import { whatsappLink } from "@/lib/site";
import { getDict, fill } from "@/lib/dict";
import { isLang, type Lang } from "@/lib/i18n";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  const p = getDict(isLang(lang) ? lang : "en").servicePages.land;
  return { title: p.metaTitle, description: p.metaDescription };
}

const frame = "relative overflow-hidden border border-gold-500/50 bg-char";

function Heading({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="t-h2">{title}</h2>
      <div className="gold-rule mt-6" />
      <p className="t-body mt-6">{text}</p>
    </>
  );
}

function Points({ points }: { points: { title: string; text: string }[] }) {
  return (
    <dl className="mt-8 space-y-5">
      {points.map((pt) => (
        <div key={pt.title} className="border-t border-gold-500/50 pt-4">
          <dt className="t-h4">{pt.title}</dt>
          <dd className="t-small mt-1.5">{pt.text}</dd>
        </div>
      ))}
    </dl>
  );
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  const d = getDict(lang as Lang);
  const p = d.servicePages.land;
  const sp = d.servicePage;
  const [buildings, hotels, land] = p.sections;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} text={p.intro} />

      {/* Buildings */}
      <section className="py-16 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Heading {...buildings} />
            <Points points={buildings.points} />
          </Reveal>
          <Reveal delay={150} className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className={`${frame} aspect-[3/4]`}>
              <Image src="/services/land-buildings-a.webp" alt={buildings.alts[0]} fill quality={85} sizes="(min-width: 1024px) 24vw, 45vw" className="object-cover" />
            </div>
            <div className={`${frame} mt-10 aspect-[3/4] sm:mt-14`}>
              <Image src="/services/land-buildings-b.webp" alt={buildings.alts[1]} fill quality={85} sizes="(min-width: 1024px) 24vw, 45vw" className="object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Hotels */}
      <section className="border-y border-line bg-char py-16 sm:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[7fr_5fr] lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <div className={`${frame} aspect-[3/2]`}>
              <Image src="/services/land-hotel.webp" alt={hotels.alts[0]} fill quality={85} sizes="(min-width: 1024px) 56vw, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={150} className="order-1 lg:order-2">
            <Heading {...hotels} />
            <Points points={hotels.points} />
          </Reveal>
        </div>
      </section>

      {/* Land */}
      <section className="py-16 sm:py-24">
        <div className="container-page">
          <Reveal className="max-w-2xl">
            <Heading {...land} />
          </Reveal>
          <Reveal className="mt-10 sm:mt-14">
            <div className={`${frame} aspect-[16/9] sm:aspect-[16/7]`}>
              <Image src="/services/land-plots-wide.webp" alt={land.alts[0]} fill quality={85} sizes="(min-width: 1240px) 1180px, 100vw" className="object-cover" />
            </div>
          </Reveal>
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <Points points={land.points} />
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <LocLink href="/contact" className="btn-gold">{d.common.enquireNow}</LocLink>
                <a href={whatsappLink(fill(d.wa.service, { title: p.title }))} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  {d.common.whatsappUs}
                </a>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className={`${frame} aspect-[4/3]`}>
                <Image src="/services/land-plots-map.webp" alt={land.alts[1]} fill quality={85} sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {p.closing && (
        <section className="border-t border-line bg-char py-16 sm:py-24">
          <div className="container-page max-w-3xl text-center">
            <h2 className="t-h2">{p.closing.title}</h2>
            <div className="gold-rule mx-auto mt-6" />
            <p className="t-lede mt-6">{p.closing.text}</p>
          </div>
        </section>
      )}

      <section className="py-16 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">{sp.process}</p>
            <h2 className="t-h2">{sp.processTitle}</h2>
            <div className="gold-rule mx-auto mt-6" />
          </div>
          <ol className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {d.steps.map((s, i) => (
              <li key={s.title} className="border-t border-gold-500/60 pt-6">
                <span className="t-h2 text-gold-500/80">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-h3 mt-3">{s.title}</h3>
                <p className="t-small mt-3">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
