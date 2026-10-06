import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import DeveloperLeadForm from "@/components/DeveloperLeadForm";
import Reveal from "@/components/Reveal";
import { LocLink } from "@/components/I18nProvider";
import { developers, site } from "@/lib/site";
import { getDict, fill } from "@/lib/dict";
import { isLang, localize, locales, type Lang } from "@/lib/i18n";

type P = { params: Promise<{ lang: string; slug: string }> };

export const generateStaticParams = () => locales.flatMap((lang) => developers.map((d) => ({ lang, slug: d.slug })));

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, slug } = await params;
  const dev = developers.find((x) => x.slug === slug);
  if (!isLang(lang) || !dev) return {};
  const d = getDict(lang);
  const name = d.developers.names[slug] ?? dev.name;
  const path = `/developers/${slug}`;
  return {
    title: { absolute: fill(d.devLanding.metaTitle, { name }) },
    description: fill(d.devLanding.metaDescription, { name }),
    alternates: { canonical: localize(lang, path), languages: { en: localize("en", path), ar: localize("ar", path), "x-default": localize("en", path) } },
  };
}

export default async function Page({ params }: P) {
  const { lang: raw, slug } = await params;
  const dev = developers.find((x) => x.slug === slug);
  if (!isLang(raw) || !dev) notFound();
  const lang: Lang = raw;
  const d = getDict(lang);
  const t = d.devLanding;
  const name = d.developers.names[slug] ?? dev.name;
  const v = { name };
  const url = `${site.url}${localize(lang, `/developers/${slug}`)}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: d.brand, item: `${site.url}${localize(lang, "/")}` },
      { "@type": "ListItem", position: 2, name: t.breadcrumb, item: `${site.url}${localize(lang, "/developers")}` },
      { "@type": "ListItem", position: 3, name, item: url },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative isolate overflow-hidden pt-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(60rem 30rem at 85% 20%, rgb(var(--c-gold-500) / 0.16), transparent 62%), radial-gradient(40rem 26rem at 0% 100%, rgb(var(--c-gold-500) / 0.10), transparent 60%)" }} />
        <div className="container-page py-10 sm:py-16">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-mute sm:mb-12">
            <LocLink href="/developers" className="transition-colors hover:text-gold-400">{t.breadcrumb}</LocLink>
            <span aria-hidden="true" className="mx-2 text-gold-500">/</span>
            <span className="text-ivory/80">{name}</span>
          </nav>

          <div className="grid items-start gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
            <div>
              <div className="w-56 overflow-hidden border border-gold-500/50 bg-white sm:w-72">
                <Image src={`/developers/${slug}.webp`} alt={fill(t.logoAlt, v)} width={800} height={480} quality={95} priority sizes="288px" className="block h-auto w-full" />
              </div>
              <p className="eyebrow mb-4 mt-9">{t.welcomeEyebrow}</p>
              <h1 className="t-hero">{fill(t.welcomeTitle, v)}</h1>
              <div className="gold-rule mt-7" />
              <p className="t-lede mt-7 max-w-xl">{fill(t.welcomeLead, v)}</p>

              <ul className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-3">
                {t.points.map((p, i) => (
                  <li key={p.title} className="bg-char p-5">
                    <span className="t-h4 text-gold-500">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="t-h4 mt-2">{p.title}</h2>
                    <p className="t-small mt-2">{fill(p.text, v)}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-gold-500/60 bg-char p-6 shadow-[0_30px_70px_-40px_rgb(var(--c-gold-500)/0.6)] sm:p-9 lg:sticky lg:top-28">
              <p className="eyebrow mb-3">{t.formEyebrow}</p>
              <h2 className="t-h2">{t.formTitle}</h2>
              <div className="gold-rule mt-5" />
              <p className="t-body mb-7 mt-5">{t.formText}</p>
              <DeveloperLeadForm slug={slug} name={name} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-char py-16 sm:py-20">
        <div className="container-page">
          <h2 className="t-h2">{t.stepsTitle}</h2>
          <div className="gold-rule mt-6" />
          <ol className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
            {t.steps.map((s, i) => (
              <li key={s.title} className="bg-ink p-7">
                <span className="t-h2 text-gold-500/80">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-h4 mt-3">{s.title}</h3>
                <p className="t-body mt-2">{fill(s.text, v)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-10">
        <div className="container-page">
          <p className="t-small max-w-4xl">{fill(t.disclaimer, v)}</p>
          <LocLink href="/developers" className="btn-ghost mt-6">{t.browse}</LocLink>
        </div>
      </section>
    </>
  );
}
