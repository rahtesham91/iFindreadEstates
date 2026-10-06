import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Ornament from "@/components/Ornament";
import PortraitFrame from "@/components/PortraitFrame";
import CtaBand from "@/components/CtaBand";
import { LocLink } from "@/components/I18nProvider";
import { site, team, memberContact } from "@/lib/site";
import { getDict, fill } from "@/lib/dict";
import { isLang, localize, locales, type Lang } from "@/lib/i18n";

type P = { params: Promise<{ lang: string; slug: string }> };

export const generateStaticParams = () => locales.flatMap((lang) => team.map((m) => ({ lang, slug: m.slug })));

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang, slug } = await params;
  const m = team.find((x) => x.slug === slug);
  if (!isLang(lang) || !m) return {};
  const d = getDict(lang);
  const person = d.people[slug];
  const v = { name: person.name, role: person.role };
  const path = `/team/${slug}`;
  const title = fill(d.team.profile.metaTitle, v);
  const description = fill(d.team.profile.metaDescription, v);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: localize(lang, path), languages: { en: localize("en", path), ar: localize("ar", path), "x-default": localize("en", path) } },
    openGraph: { title, description, type: "profile", locale: d.meta.ogLocale, images: m.photo ? [{ url: m.photo, width: 1200, height: 1500, alt: fill(d.team.profile.photoAlt, v) }] : undefined },
  };
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1 border-t border-line py-4 sm:flex-row sm:items-baseline sm:gap-8">
      <dt className="eyebrow w-40 shrink-0">{label}</dt>
      <dd className="text-base text-ivory">{children}</dd>
    </div>
  );
}

export default async function Page({ params }: P) {
  const { lang: raw, slug } = await params;
  const m = team.find((x) => x.slug === slug);
  if (!isLang(raw) || !m) notFound();
  const lang: Lang = raw;
  const d = getDict(lang);
  const t = d.team;
  const person = d.people[slug];
  const v = { name: person.name, role: person.role };
  const { tel, wa } = memberContact(m, fill(d.wa.person, { name: person.name }));
  const bio = t.bios[slug] ?? (slug === "abid-khan" ? [d.mdBio] : undefined);
  const specs = t.specializations[slug];
  const phone = m.phone ?? site.phone;
  const url = `${site.url}${localize(lang, `/team/${slug}`)}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: m.name,
      jobTitle: m.role,
      image: m.photo ? `${site.url}${m.photo}` : undefined,
      email: m.email,
      telephone: phone,
      url,
      worksFor: { "@type": "RealEstateAgent", name: site.legalName, url: site.url },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: d.brand, item: `${site.url}${localize(lang, "/")}` },
        { "@type": "ListItem", position: 2, name: t.profile.breadcrumb, item: `${site.url}${localize(lang, "/team")}` },
        { "@type": "ListItem", position: 3, name: person.name, item: url },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="relative isolate overflow-hidden pt-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(48rem 30rem at 85% 40%, rgb(var(--c-gold-500) / 0.10), transparent 65%)" }} />
        <div className="container-page py-10 sm:py-16">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-mute sm:mb-12">
            <LocLink href="/team" className="transition-colors hover:text-gold-400">{t.profile.breadcrumb}</LocLink>
            <span aria-hidden="true" className="mx-2 text-gold-500">/</span>
            <span className="text-ivory/80">{person.name}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[5fr_7fr] lg:gap-20">
            <div className="mx-auto w-full max-w-sm lg:max-w-none">
              {m.photo ? (
                <PortraitFrame src={m.photo} alt={fill(t.profile.photoAlt, v)} priority sizes="(min-width: 1024px) 40vw, 90vw" />
              ) : (
                <div className="flex aspect-[4/5] items-center justify-center border border-gold-500/50 bg-white font-serif text-7xl text-gold-500">
                  {m.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </div>
              )}
            </div>

            <div>
              <Ornament className="mb-6" />
              <p className="eyebrow mb-4">{person.role}</p>
              <h1 className="t-h1">{person.name}</h1>
              <div className="gold-rule mt-7" />

              {bio && (
                <section aria-label={fill(t.profile.about, v)} className="mt-7">
                  <div className="max-w-2xl space-y-4">{bio.map((b) => <p key={b} className="t-body">{b}</p>)}</div>
                </section>
              )}

              {specs && (
                <div className="mt-6 max-w-2xl">
                  <p className="eyebrow mb-3">{t.profile.specialization}</p>
                  <ul className="flex flex-wrap gap-2">
                    {specs.map((sp) => (
                      <li key={sp} className="border border-gold-500/50 px-3 py-1.5 text-sm text-ivory">{sp}</li>
                    ))}
                  </ul>
                </div>
              )}

              <dl className="mt-8 max-w-2xl border-b border-line">
                {m.brn && <Row label={t.brn}>{m.brn}</Row>}
                <Row label={t.profile.mobile}>
                  <a href={tel} dir="ltr" className="ltr-text transition-colors hover:text-gold-400">{phone}</a>
                </Row>
                {m.email && (
                  <Row label={t.profile.email}>
                    <a href={`mailto:${m.email}`} dir="ltr" className="ltr-text break-all transition-colors hover:text-gold-400">{m.email}</a>
                  </Row>
                )}
                {m.languages && <Row label={t.languages}>{m.languages.map((l) => t.languageNames[l] ?? l).join(lang === "ar" ? "، " : ", ")}</Row>}
              </dl>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={tel} className="btn-gold">{fill(t.profile.callName, v)}</a>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-ghost">{fill(t.profile.whatsappName, v)}</a>
              </div>
              <LocLink href="/team" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition-colors hover:text-gold-300">
                <svg viewBox="0 0 24 8" className="h-2 w-6 -scale-x-100 rtl:scale-x-100" fill="none" stroke="currentColor" aria-hidden="true"><path d="M0 4h22M18 1l4 3-4 3" /></svg>
                {t.profile.back}
              </LocLink>
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
