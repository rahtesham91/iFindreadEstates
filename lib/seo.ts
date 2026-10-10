import type { Metadata } from "next";
import { localize, type Lang } from "./i18n";

// Canonical URL plus English/Arabic alternates for a page path.
export function alternatesFor(lang: Lang, path: string): NonNullable<Metadata["alternates"]> {
  return {
    canonical: localize(lang, path),
    languages: { en: localize("en", path), ar: localize("ar", path), "x-default": localize("en", path) },
  };
}
