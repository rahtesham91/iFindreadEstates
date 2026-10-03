import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const paths = ["", "/off-plan", "/ready-and-luxury", "/rentals-and-leasing", "/land-buildings-hotels", "/investor-services", "/developers", "/about", "/team", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() }));
}
