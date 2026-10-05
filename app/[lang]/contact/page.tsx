import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import OfficeMap from "@/components/OfficeMap";
import { site, whatsappLink } from "@/lib/site";
import { getDict } from "@/lib/dict";
import { isLang, type Lang } from "@/lib/i18n";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  const c = getDict(isLang(lang) ? lang : "en").contact;
  return { title: c.title, description: c.description };
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  const d = getDict(lang as Lang);
  const c = d.contact;
  const ltr = "ltr-text";
  return (
    <section className="pt-20">
      <div className="container-page grid gap-16 py-20 sm:py-28 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow mb-5">{c.eyebrow}</p>
          <h1 className="h-display text-5xl sm:text-6xl">{c.h1}</h1>
          <div className="gold-rule mt-8" />
          <p className="mt-8 max-w-md text-lg leading-relaxed text-mute">{c.lede}</p>

          <dl className="mt-12 space-y-7 text-sm">
            <div>
              <dt className="eyebrow mb-2">{c.mobile}</dt>
              <dd><a href={`tel:${site.phone.replace(/\s/g, "")}`} dir="ltr" className={`${ltr} text-lg hover:text-gold-300`}>{site.phone}</a></dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">{c.landline}</dt>
              <dd><a href={`tel:${site.landline.replace(/\s/g, "")}`} dir="ltr" className={`${ltr} text-lg hover:text-gold-300`}>{site.landline}</a></dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">{c.whatsapp}</dt>
              <dd><a href={whatsappLink(d.wa.general)} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gold-300">{c.whatsappLink}</a></dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">{c.email}</dt>
              <dd><a href={`mailto:${site.email}`} dir="ltr" className={`${ltr} text-lg hover:text-gold-300`}>{site.email}</a></dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">{c.office}</dt>
              <dd className="text-lg text-ivory/90">{d.legalName}<br />{d.address}</dd>
            </div>
          </dl>

          <OfficeMap className="mt-12" />
        </div>

        <div className="border border-line bg-char p-7 sm:p-10">
          <h2 className="font-serif text-3xl">{c.formTitle}</h2>
          <div className="gold-rule mb-8 mt-4" />
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
