import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Page() {
  return (
    <section className="pt-20">
      <div className="container-page max-w-3xl py-24">
        <p className="eyebrow mb-5">Legal</p>
        <h1 className="h-display text-5xl">Privacy Policy</h1>
        <div className="gold-rule mt-8" />
        {/* TODO(client): replace with the approved legal text */}
        <p className="mt-8 text-lg leading-relaxed text-mute">
          This page is a placeholder. The final Privacy Policy for {site.legalName} will be published here.
        </p>
      </div>
    </section>
  );
}
