export const locales = ["en", "ar"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "en";

export const isLang = (v: string): v is Lang => (locales as readonly string[]).includes(v);

// English URLs stay unprefixed (/about); Arabic lives under /ar (/ar/about).
export function localize(lang: Lang, href: string): string {
  if (lang === "en" || !href.startsWith("/") || href.startsWith("/ar")) return href;
  return href === "/" ? "/ar" : `/ar${href}`;
}

// Path of the same page in the other language, from the browser pathname.
export function switchPath(lang: Lang, pathname: string): string {
  if (lang === "en") return pathname === "/" ? "/ar" : `/ar${pathname}`;
  const p = pathname.replace(/^\/ar(?=\/|$)/, "");
  return p === "" ? "/" : p;
}
