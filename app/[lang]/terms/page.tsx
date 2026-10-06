import type { Metadata } from "next";
import { site } from "@/lib/site";
import { getDict } from "@/lib/dict";
import { isLang, localize, type Lang } from "@/lib/i18n";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  const l = isLang(lang) ? lang : "en";
  const t = getDict(l).terms;
  return {
    title: { absolute: t.metaTitle },
    description: t.metaDescription,
    alternates: { canonical: localize(l, "/terms"), languages: { en: localize("en", "/terms"), ar: localize("ar", "/terms"), "x-default": localize("en", "/terms") } },
  };
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  const d = getDict(lang as Lang);
  const t = d.terms;
  const last = t.sections.length - 1;
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-line pt-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(56rem 24rem at 12% 0%, rgb(var(--c-gold-500) / 0.14), transparent 62%)" }} />
        <div className="container-page py-14 sm:py-20">
          <p className="eyebrow mb-5">{t.eyebrow}</p>
          <h1 className="t-h1">{t.h1}</h1>
          <div className="gold-rule mt-7" />
          <div className="t-small mt-7 space-y-1">
            <p className="font-medium text-ivory">{d.legalName}</p>
            <p>{d.orn}</p>
            <p>{d.address}</p>
            <p className="pt-2 text-gold-400">{t.updated}</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[3fr_8fr] lg:gap-20">
          <aside className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto">
            <p className="eyebrow mb-4">{t.onThisPage}</p>
            <nav aria-label={t.onThisPage}>
              <ol className="space-y-2 border-s border-line ps-5 text-sm">
                {t.sections.map((s, i) => (
                  <li key={s.title}>
                    <a href={`#t${i + 1}`} className="text-mute transition-colors hover:text-gold-400">
                      <span className="me-2 text-gold-500">{String(i + 1).padStart(2, "0")}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="max-w-3xl">
            {t.sections.map((s, i) => (
              <section key={s.title} id={`t${i + 1}`} className="scroll-mt-28 border-t border-line py-8 first:border-t-0 first:pt-0">
                <h2 className="t-h3 flex items-baseline gap-4">
                  <span className="t-h4 text-gold-500">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                <div className="mt-4 space-y-3">
                  {s.body.map((p) => (
                    <p key={p} className="t-small">{p}</p>
                  ))}
                  {s.list.length > 0 && (
                    <ul className="space-y-1.5">
                      {s.list.map((li) => (
                        <li key={li} className="t-small flex gap-3">
                          <span aria-hidden="true" className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-500" />
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.after.map((p) => (
                    <p key={p} className="t-small">{p}</p>
                  ))}
                  {i === last && (
                    <address className="mt-2 border border-gold-500/50 bg-char p-6 not-italic">
                      <p className="eyebrow mb-3">{t.contactCard}</p>
                      <p className="text-base text-ivory">{d.legalName}</p>
                      <p className="t-small mt-1">{d.orn}</p>
                      <p className="t-small">{t.office}</p>
                      <p className="mt-4 text-sm">
                        <a href={`mailto:${site.email}`} dir="ltr" className="ltr-text text-gold-400 hover:text-gold-300">{site.email}</a>
                      </p>
                      <p className="mt-1 text-sm">
                        <a href={`tel:${site.landline.replace(/\s/g, "")}`} dir="ltr" className="ltr-text text-ivory hover:text-gold-400">{site.landline}</a>
                      </p>
                    </address>
                  )}
                </div>
              </section>
            ))}
            <p className="t-small border-t border-line pt-6">{t.copyright}</p>
          </article>
        </div>
      </section>
    </>
  );
}
