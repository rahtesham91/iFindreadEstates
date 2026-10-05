"use client";

import PageHero from "./PageHero";
import Placeholder from "./Placeholder";
import SectionHeading from "./SectionHeading";
import CtaBand from "./CtaBand";
import { whatsappLink } from "@/lib/site";
import { LocLink, useI18n } from "./I18nProvider";
import { fill } from "@/lib/dict";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  imageLabel: string;
  sectionTitle: string;
  sectionText: string;
  offers: { title: string; text: string }[];
  closing?: { title: string; text: string };
};

export default function ServicePage({ eyebrow, title, intro, imageLabel, sectionTitle, sectionText, offers, closing }: Props) {
  const { dict } = useI18n();
  const sp = dict.servicePage;
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} text={intro} imageLabel={imageLabel} />

      <section className="py-16 sm:py-24">
        <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow={sp.whatWeDo} title={sectionTitle} text={sectionText} />
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <LocLink href="/contact" className="btn-gold">{dict.common.enquireNow}</LocLink>
              <a href={whatsappLink(fill(dict.wa.service, { title }))} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                {dict.common.whatsappUs}
              </a>
            </div>
          </div>
          <Placeholder label={fill(dict.placeholder.featureImage, { title })} size="1200 x 900" className="aspect-[4/3]" />
        </div>
      </section>

      <section className="border-y border-line bg-char py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading eyebrow={sp.ourService} title={sp.howWeHelp} align="center" />
          <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {offers.map((o) => (
              <article key={o.title} className="bg-char p-9 transition-colors hover:bg-panel">
                <div className="mb-6 h-px w-10 bg-gold-500" />
                <h3 className="t-h3 text-ivory">{o.title}</h3>
                <p className="t-body mt-3">{o.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {closing && (
        <section className="py-16 sm:py-24">
          <div className="container-page max-w-3xl text-center">
            <h2 className="t-h2">{closing.title}</h2>
            <div className="gold-rule mx-auto mt-6" />
            <p className="t-lede mt-6">{closing.text}</p>
          </div>
        </section>
      )}

      <section className="border-t border-line py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading eyebrow={sp.process} title={sp.processTitle} align="center" />
          <ol className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {dict.steps.map((s, i) => (
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
