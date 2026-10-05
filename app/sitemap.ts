import type { MetadataRoute } from "next";
import { site, team } from "@/lib/site";
import { localize } from "@/lib/i18n";

const paths = ["/", "/off-plan", "/ready-and-luxury", "/rentals-and-leasing", "/land-buildings-hotels", "/investor-services", "/developers", "/about", "/team", "/contact", ...team.map((m) => `/team/${m.slug}`)];

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (lang: "en" | "ar", p: string) => {
    const l = localize(lang, p);
    return `${site.url}${l === "/" ? "" : l}`;
  };
  return paths.map((p) => ({
    url: u("en", p),
    lastModified: new Date(),
    alternates: { languages: { en: u("en", p), ar: u("ar", p) } },
  }));
}
