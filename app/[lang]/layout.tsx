import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Cairo, Manrope, Noto_Naskh_Arabic, Playfair_Display } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatLoader from "@/components/ChatLoader";
import { I18nProvider } from "@/components/I18nProvider";
import { site } from "@/lib/site";
import { getDict } from "@/lib/dict";
import { isLang, locales, localize, type Lang } from "@/lib/i18n";

// Variable fonts (one file each). The Arabic pair is not preloaded, so English visitors never download it.
const serifEn = Playfair_Display({ subsets: ["latin"], variable: "--font-serif-en", display: "swap" });
const sansEn = Manrope({ subsets: ["latin"], variable: "--font-sans-en", display: "swap" });
const serifAr = Noto_Naskh_Arabic({ subsets: ["arabic"], variable: "--font-serif-ar", display: "swap", preload: false });
const sansAr = Cairo({ subsets: ["arabic", "latin"], variable: "--font-sans-ar", display: "swap", preload: false });

export const dynamicParams = false;
export const generateStaticParams = () => locales.map((lang) => ({ lang }));

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const d = getDict(lang);
  return {
    metadataBase: new URL(site.url),
    title: { default: d.meta.siteTitle, template: d.meta.titleTemplate },
    description: d.meta.description,
    alternates: { languages: { en: localize("en", "/"), ar: localize("ar", "/") } },
    openGraph: {
      title: d.meta.siteTitle,
      description: d.meta.description,
      siteName: d.legalName,
      type: "website",
      locale: d.meta.ogLocale,
      images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: d.legalName }],
    },
    twitter: { card: "summary_large_image", title: d.meta.siteTitle, description: d.meta.description, images: ["/og-default.jpg"] },
    robots: { index: true, follow: true },
    verification: { google: "j2HPBm97cyzS7IszpLG-le2hc5mpocHZ1H6VSz0zpxU" },
    icons: { icon: "/icon.svg" },
  };
}

export const viewport: Viewport = { themeColor: "#FAF7F2" };

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang: raw } = await params;
  if (!isLang(raw)) notFound();
  const lang: Lang = raw;
  const d = getDict(lang);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: d.legalName,
    slogan: d.tagline,
    url: site.url,
    telephone: [site.phone, site.landline],
    email: site.email,
    inLanguage: lang,
    logo: `${site.url}/brand/logo-original.png`,
    image: `${site.url}/og-default.jpg`,
    sameAs: site.social.map((x) => x.href),
    address: { "@type": "PostalAddress", streetAddress: d.streetAddress, addressLocality: lang === "ar" ? "دبي" : "Dubai", addressCountry: "AE" },
  };
  return (
    <html lang={d.htmlLang} dir={d.dir} className={`${serifEn.variable} ${sansEn.variable} ${serifAr.variable} ${sansAr.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-ink"
        >
          {d.common.skip}
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <I18nProvider lang={lang} dict={d}>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <ChatLoader />
        </I18nProvider>
      </body>
    </html>
  );
}
