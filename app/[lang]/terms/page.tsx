import type { Metadata } from "next";
import { getDict, fill } from "@/lib/dict";
import { isLang, type Lang } from "@/lib/i18n";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  return { title: getDict(isLang(lang) ? lang : "en").legal.termsTitle };
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  const d = getDict(lang as Lang);
  return (
    <section className="pt-20">
      <div className="container-page max-w-3xl py-24">
        <p className="eyebrow mb-5">{d.legal.eyebrow}</p>
        <h1 className="h-display text-5xl">{d.legal.termsTitle}</h1>
        <div className="gold-rule mt-8" />
        {/* TODO(client): replace with the approved legal text */}
        <p className="mt-8 text-lg leading-relaxed text-mute">
          {fill(d.legal.placeholder, { doc: d.legal.termsTitle, company: d.legalName })}
        </p>
      </div>
    </section>
  );
}
