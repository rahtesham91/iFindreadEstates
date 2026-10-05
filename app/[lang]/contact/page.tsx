import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import OfficeMap from "@/components/OfficeMap";
import Reveal from "@/components/Reveal";
import { site, whatsappLink } from "@/lib/site";
import { getDict } from "@/lib/dict";
import { isLang, type Lang } from "@/lib/i18n";

type P = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { lang } = await params;
  const c = getDict(isLang(lang) ? lang : "en").contact;
  return { title: c.title, description: c.description };
}

const icon = {
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
  mail: "M3 6h18v12H3V6Zm0 0 9 7 9-7",
  pin: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Zm0-8.5a2.500 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
};

function Glyph({ d, fill = false }: { d?: string; fill?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill={fill ? "currentColor" : "none"} stroke={fill ? "none" : "currentColor"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}

export default async function Page({ params }: P) {
  const { lang } = await params;
  const d = getDict(lang as Lang);
  const c = d.contact;
  const wa = "M12.04 2a9.9 9.9 0 0 0-8.5 14.9L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.1.9.93-3-.2-.31a8.2 8.2 0 1 1 6.87 3.74Zm4.5-6.1c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.12-.56.12s-.64.8-.78.96c-.15.17-.29.19-.54.06a6.7 6.7 0 0 1-1.98-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25 0-.38.1-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31s-.87.85-.87 2.07.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.24 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.17.2-.58.2-1.07.14-1.17-.06-.1-.23-.17-.48-.29Z";
  const cards = [
    { label: c.mobile, value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, ltr: true, g: <Glyph d={icon.phone} /> },
    { label: c.landline, value: site.landline, href: `tel:${site.landline.replace(/\s/g, "")}`, ltr: true, g: <Glyph d={icon.phone} /> },
    { label: c.whatsapp, value: c.whatsappLink, href: whatsappLink(d.wa.general), external: true, g: <Glyph d={wa} fill /> },
    { label: c.email, value: site.email, href: `mailto:${site.email}`, ltr: true, g: <Glyph d={icon.mail} /> },
  ];
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-line pt-20">
        <div aria-hidden="true" className="absolute inset-0 -z-10" style={{ background: "radial-gradient(56rem 24rem at 12% 0%, rgb(var(--c-gold-500) / 0.14), transparent 62%)" }} />
        <div className="container-page py-14 sm:py-24">
          <p className="eyebrow mb-5">{c.eyebrow}</p>
          <h1 className="h-display max-w-3xl text-5xl sm:text-6xl lg:text-7xl">{c.h1}</h1>
          <div className="gold-rule mt-8" />
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-mute">{c.lede}</p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="container-page">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((k, i) => (
              <li key={k.label}>
                <Reveal delay={i * 80} className="h-full">
                  <a
                    href={k.href}
                    {...(k.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex h-full items-start gap-4 border border-line bg-char p-6 transition-colors hover:border-gold-500/70"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/60 text-gold-400 transition-colors group-hover:bg-gold-400 group-hover:text-ink">{k.g}</span>
                    <span className="min-w-0">
                      <span className="eyebrow block">{k.label}</span>
                      <span {...(k.ltr ? { dir: "ltr" } : {})} className={`mt-2 block break-words text-[0.95rem] text-ivory ${k.ltr ? "ltr-text" : ""}`}>{k.value}</span>
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid items-stretch gap-8 lg:grid-cols-2">
            <div className="border border-line bg-char p-7 sm:p-10">
              <h2 className="font-serif text-3xl">{c.formTitle}</h2>
              <div className="gold-rule mb-8 mt-4" />
              <InquiryForm />
            </div>

            <div className="flex flex-col">
              <div className="mb-5 flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/60 text-gold-400"><Glyph d={icon.pin} /></span>
                <div>
                  <p className="eyebrow mb-1">{c.office}</p>
                  <p className="text-base leading-relaxed text-ivory/90">{d.legalName}<br />{d.address}</p>
                </div>
              </div>
              <OfficeMap className="flex-1" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
