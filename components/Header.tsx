"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { nav, site, whatsappLink } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const active = (href: string) => pathname === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Background lives on its own layer: backdrop-filter on the header itself would trap the fixed mobile menu. */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 transition-colors duration-300 ${
          scrolled || open ? "border-b border-line bg-ink/95 backdrop-blur" : "bg-gradient-to-b from-ink/80 to-transparent"
        }`}
      />
      <div className="container-page relative flex h-20 items-center justify-between">
        <Link href="/" aria-label="iFind home">
          <Logo priority />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1.5 py-7 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-ivory/90 transition-colors hover:text-gold-300"
                  aria-haspopup="true"
                >
                  {item.label}
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M2 4l4 4 4-4" />
                  </svg>
                </button>
                <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 translate-y-1 border border-line bg-ink opacity-0 shadow-2xl transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="h-px bg-gold-500" />
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className={`block px-6 py-3.5 text-sm transition-colors hover:bg-panel hover:text-gold-300 ${
                        active(c.href) ? "text-gold-400" : "text-ivory/85"
                      }`}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.78rem] font-medium uppercase tracking-[0.16em] transition-colors hover:text-gold-300 ${
                  active(item.href) ? "text-gold-400" : "text-ivory/90"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <ThemeToggle />
          <Link href="/contact" className="btn-gold !px-6 !py-3">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
        <ThemeToggle className="!border-0" />
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-ivory"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 7h18M3 12h18M3 17h18" />}
          </svg>
        </button>
        </div>
      </div>

      {open && (
        <nav
          className="fixed inset-x-0 bottom-0 top-20 flex flex-col overflow-y-auto bg-ink px-6 pb-8 pt-2 lg:hidden"
          aria-label="Mobile"
        >
          {(() => {
            let n = 0;
            const row = (label: string, href: string) => {
              n += 1;
              return (
                <li key={href} className="menu-item" style={{ "--i": n } as React.CSSProperties}>
                  <Link
                    href={href}
                    className={`group flex items-center border-b border-line py-[1.1rem] font-serif text-[1.65rem] leading-none transition-colors hover:text-gold-300 ${
                      active(href) ? "text-gold-400" : "text-ivory"
                    }`}
                  >
                    <span className="w-10 font-sans text-[0.7rem] font-medium tracking-luxe text-gold-500">
                      {String(n).padStart(2, "0")}
                    </span>
                    <span className="flex-1">{label}</span>
                    <svg viewBox="0 0 24 8" className="h-2 w-6 text-gold-500 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" aria-hidden="true">
                      <path d="M0 4h22M18 1l4 3-4 3" />
                    </svg>
                  </Link>
                </li>
              );
            };
            return (
              <>
                {nav.map((item) =>
                  item.children ? (
                    <div key={item.label} className="mt-5">
                      <p className="eyebrow pb-1">{item.label}</p>
                      <ul>{item.children.map((c) => row(c.label, c.href))}</ul>
                    </div>
                  ) : null
                )}
                <div className="mt-8">
                  <p className="eyebrow pb-1">Explore</p>
                  <ul>
                    {nav.filter((i) => !i.children).map((i) => row(i.label, i.href))}
                  </ul>
                </div>
              </>
            );
          })()}

          <div className="menu-item mt-auto pt-10" style={{ "--i": 9 } as React.CSSProperties}>
            <Link href="/contact" className="btn-gold w-full">
              Contact Us
            </Link>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn-ghost !px-3 !py-3.5">
                Call Us
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-3 !py-3.5">
                WhatsApp
              </a>
            </div>
            <p className="mt-8 text-center text-[0.7rem] uppercase tracking-luxe text-gold-500">{site.tagline}</p>
          </div>
        </nav>
      )}
    </header>
  );
}
