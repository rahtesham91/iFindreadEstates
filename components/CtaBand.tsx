"use client";

import { LocLink, useI18n } from "./I18nProvider";
import { whatsappLink } from "@/lib/site";

export default function CtaBand() {
  const { dict } = useI18n();
  const [first, second] = dict.taglineParts;
  return (
    <section className="border-y border-line bg-char">
      <div className="container-page flex flex-col items-start justify-between gap-8 py-16 sm:py-20 lg:flex-row lg:items-center">
        <div>
          <p className="eyebrow mb-4">{dict.cta.eyebrow}</p>
          <h2 className="t-h2">
            {first}
            <br />
            <span className="text-gold-400">{second}</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <LocLink href="/contact" className="btn-gold">
            {dict.common.enquireNow}
          </LocLink>
          <a href={whatsappLink(dict.wa.general)} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            {dict.common.whatsappUs}
          </a>
        </div>
      </div>
    </section>
  );
}
