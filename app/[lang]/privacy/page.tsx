import type { Metadata } from "next";
import { site } from "@/lib/site";
import { getDict } from "@/lib/dict";
import { isLang, localize, type Lang } from "@/lib/i18n";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  const l = isLang(lang) ? lang : "en";
  const p = getDict(l).privacy;
  return {
    title: { absolute: p.metaTitle },
    description: p.metaDescription,
    alternates: { canonical: localize(l, "/privacy"), languages: { en: localize("en", "/privacy"), ar: localize("ar", "/privacy"), "x-default": localize("en", "/privacy") } },
  };
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  const d = getDict(lang as Lang);
  const p = d.privacy;
  const last = p.sections.length - 1;
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-line pt-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(56rem 24rem at 12% 0%, rgb(var(--c-gold-500) / 0.14), transparent 62%)" }} />
        <div className="container-page py-14 sm:py-20">
          <p className="eyebrow mb-5">{p.eyebrow}</p>
          <h1 className="t-h1">{p.h1}</h1>
          <div className="gold-rule mt-7" />
          <p className="t-lede mt-7 max-w-2xl">{p.lede}</p>
          <p className="t-small mt-5">{p.updated}</p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[3fr_8fr] lg:gap-20">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-4">{p.onThisPage}</p>
            <nav aria-label={p.onThisPage}>
              <ol className="space-y-2.5 border-s border-line ps-5 text-sm">
                {p.sections.map((s, i) => (
                  <li key={s.title}>
                    <a href={`#s${i + 1}`} className="text-mute transition-colors hover:text-gold-400">
                      <span className="me-2 text-gold-500">{String(i + 1).padStart(2, "0")}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="max-w-3xl">
            {p.sections.map((s, i) => (
              <section key={s.title} id={`s${i + 1}`} className="scroll-mt-28 border-t border-line py-9 first:border-t-0 first:pt-0">
                <h2 className="t-h3 flex items-baseline gap-4">
                  <span className="t-h4 text-gold-500">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((t) => (
                    <p key={t} className="t-body">{t}</p>
                  ))}
                  {s.list.length > 0 && (
                    <ul className="space-y-3">
                      {s.list.map((li) => (
                        <li key={li} className="t-body flex gap-3">
                          <span aria-hidden="true" className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold-500" />
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {"after" in s && s.after && <p className="t-body">{s.after}</p>}
                  {i === last && (
                    <address className="mt-2 border border-gold-500/50 bg-char p-6 not-italic">
                      <p className="eyebrow mb-3">{p.contactCard}</p>
                      <p className="text-base text-ivory">{d.legalName}</p>
                      <p className="t-small mt-1">{d.address}</p>
                      <p className="mt-4 text-base">
                        <a href={`mailto:${site.email}`} dir="ltr" className="ltr-text text-gold-400 hover:text-gold-300">{site.email}</a>
                      </p>
                      <p className="mt-1 text-base">
                        <a href={`tel:${site.landline.replace(/\s/g, "")}`} dir="ltr" className="ltr-text text-ivory hover:text-gold-400">{site.landline}</a>
                      </p>
                    </address>
                  )}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
