"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { nav } from "@/lib/site";

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
        <nav className="fixed inset-x-0 top-20 bottom-0 overflow-y-auto bg-ink px-5 pb-10 pt-6 lg:hidden" aria-label="Mobile">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <>
                    <p className="eyebrow px-1 pb-2 pt-4">{item.label}</p>
                    <ul className="border-l border-line">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className="block px-5 py-3 font-serif text-2xl text-ivory hover:text-gold-300">
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={item.href} className="block border-t border-line px-1 py-4 font-serif text-3xl text-ivory hover:text-gold-300">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn-gold mt-8 w-full">
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
