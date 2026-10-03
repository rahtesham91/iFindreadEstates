import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import Placeholder from "@/components/Placeholder";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Speak with iFind Real Estate LLC in Dubai about off-plan, ready, luxury, rentals, land, buildings and hotels.",
};

export default function Page() {
  return (
    <section className="pt-20">
      <div className="container-page grid gap-16 py-20 sm:py-28 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="eyebrow mb-5">Contact Us</p>
          <h1 className="h-display text-5xl sm:text-6xl">Let&rsquo;s talk.</h1>
          <div className="gold-rule mt-8" />
          <p className="mt-8 max-w-md text-lg leading-relaxed text-mute">
            Tell us what you are looking for. A registered consultant will get back to you shortly.
          </p>

          <dl className="mt-12 space-y-7 text-sm">
            <div>
              <dt className="eyebrow mb-2">Mobile / WhatsApp</dt>
              <dd><a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-lg hover:text-gold-300">{site.phone}</a></dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">Office Landline</dt>
              <dd><a href={`tel:${site.landline.replace(/\s/g, "")}`} className="text-lg hover:text-gold-300">{site.landline}</a></dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">WhatsApp</dt>
              <dd><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-gold-300">Message us on WhatsApp</a></dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">Email</dt>
              <dd><a href={`mailto:${site.email}`} className="text-lg hover:text-gold-300">{site.email}</a></dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">Office</dt>
              <dd className="text-lg text-ivory/90">{site.legalName}<br />{site.address}</dd>
            </div>
          </dl>

          <Placeholder label="Map or office photo" size="1000 x 600" className="mt-12 aspect-[5/3]" />
        </div>

        <div className="border border-line bg-char p-7 sm:p-10">
          <h2 className="font-serif text-3xl">Send an enquiry</h2>
          <div className="gold-rule mb-8 mt-4" />
          <InquiryForm />
        </div>
      </div>
    </section>
  );
}
