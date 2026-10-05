"use client";

import Link from "next/link";
import { ComponentProps, createContext, useContext } from "react";
import { Lang, localize } from "@/lib/i18n";
import type { Dict } from "@/lib/dict/en";

type Ctx = { lang: Lang; dict: Dict };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ lang, dict, children }: Ctx & { children: React.ReactNode }) {
  return <I18nContext.Provider value={{ lang, dict }}>{children}</I18nContext.Provider>;
}

export function useI18n(): Ctx {
  const c = useContext(I18nContext);
  if (!c) throw new Error("useI18n must be used inside I18nProvider");
  return c;
}

// next/link that keeps the visitor in the current language.
export function LocLink({ href, ...props }: ComponentProps<typeof Link>) {
  const { lang } = useI18n();
  return <Link href={typeof href === "string" ? localize(lang, href) : href} {...props} />;
}
