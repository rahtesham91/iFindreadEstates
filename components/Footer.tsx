"use client";

import Logo from "./Logo";
import { services, site, whatsappLink } from "@/lib/site";
import { LocLink, useI18n } from "./I18nProvider";

export default function Footer() {
  const { dict } = useI18n();
  const company = [
    { label: dict.nav.developers, href: "/developers" },
    { label: dict.nav.investors, href: "/investor-services" },
    { label: dict.nav.about, href: "/about" },
    { label: dict.nav.team, href: "/team" },
    { label: dict.nav.contact, href: "/contact" },
  ];
  return (
    <footer className="border-t border-line bg-char">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <LocLink href="/" aria-label={dict.nav.home}>
            <Logo variant="stacked" className="h-auto w-44" />
          </LocLink>
        </div>

        <div>
          <h3 className="eyebrow mb-5">{dict.footer.services}</h3>
          <ul className="space-y-3 text-sm text-mute">
            {services.map((s, i) => (
              <li key={s.href}>
                <LocLink href={s.href} className="transition-colors hover:text-gold-300">
                  {dict.services[i].title}
                </LocLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">{dict.footer.company}</h3>
          <ul className="space-y-3 text-sm text-mute">
            {company.map((n) => (
              <li key={n.href}>
                <LocLink href={n.href} className="transition-colors hover:text-gold-300">
                  {n.label}
                </LocLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">{dict.footer.contact}</h3>
          <ul className="space-y-3 text-sm text-mute">
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-gold-300">
                <span dir="ltr" className="ltr-text">{site.phone}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${site.landline.replace(/\s/g, "")}`} className="transition-colors hover:text-gold-300">
                <span dir="ltr" className="ltr-text">{site.landline}</span> <span className="text-mute/60">{dict.footer.office}</span>
              </a>
            </li>
            <li>
              <a href={whatsappLink(dict.wa.general)} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold-300">
                {dict.footer.whatsapp}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold-300">
                <span dir="ltr" className="ltr-text">{site.email}</span>
              </a>
            </li>
            <li>{dict.address}</li>
          </ul>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.14em] text-mute">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="transition-colors hover:text-gold-300">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-mute/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {dict.legalName}. {dict.footer.rights}
          </p>
          <p className="flex flex-wrap gap-x-5 gap-y-1">
            <span>{dict.orn}</span>
            <LocLink href="/privacy" className="hover:text-gold-300">
              {dict.footer.privacy}
            </LocLink>
            <LocLink href="/terms" className="hover:text-gold-300">
              {dict.footer.terms}
            </LocLink>
          </p>
        </div>
      </div>
    </footer>
  );
}
