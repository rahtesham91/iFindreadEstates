import Link from "next/link";
import Logo from "./Logo";
import { nav, services, site, whatsappLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-char">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link href="/" aria-label="iFind home">
            <Logo variant="stacked" className="h-auto w-44" />
          </Link>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Services</h3>
          <ul className="space-y-3 text-sm text-mute">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="transition-colors hover:text-gold-300">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Company</h3>
          <ul className="space-y-3 text-sm text-mute">
            {nav
              .filter((n) => !n.children)
              .map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="transition-colors hover:text-gold-300">
                    {n.label}
                  </Link>
                </li>
              ))}
            <li>
              <Link href="/contact" className="transition-colors hover:text-gold-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5">Contact</h3>
          <ul className="space-y-3 text-sm text-mute">
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-gold-300">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold-300">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold-300">
                {site.email}
              </a>
            </li>
            <li>{site.address}</li>
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
            &copy; {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p className="flex flex-wrap gap-x-5 gap-y-1">
            <span>{site.orn}</span>
            <Link href="/privacy" className="hover:text-gold-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold-300">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
