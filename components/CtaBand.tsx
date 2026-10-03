import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="border-y border-line bg-char">
      <div className="container-page flex flex-col items-start justify-between gap-8 py-16 sm:py-20 lg:flex-row lg:items-center">
        <div>
          <p className="eyebrow mb-4">iFind</p>
          <h2 className="h-display text-4xl sm:text-5xl">
            {site.tagline.split(". ")[0]}.
            <br />
            <span className="text-gold-400">{site.tagline.split(". ")[1]}</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className="btn-gold">
            Enquire Now
          </Link>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
