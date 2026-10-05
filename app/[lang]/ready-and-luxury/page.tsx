import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { getDict } from "@/lib/dict";
import { isLang, type Lang } from "@/lib/i18n";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  const p = getDict(isLang(lang) ? lang : "en").servicePages.readyLuxury;
  return { title: p.metaTitle, description: p.metaDescription };
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  const p = getDict(lang as Lang).servicePages.readyLuxury;
  return <ServicePage {...p} featureImage="/services/luxury-feature.webp" heroImage="/services/luxury-hero.webp" closing={p.closing ?? undefined} />;
}
