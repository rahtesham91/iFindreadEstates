import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Off-Plan Properties in Dubai",
  description: "Early access to off-plan launches from Dubai's leading developers, with clear guidance on payment plans and handover.",
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="Off-Plan"
      title="Off-Plan Properties"
      intro="Early access to new launches from Dubai's established developers, explained clearly before you commit."
      imageLabel="Off-plan hero: Dubai skyline with new developments"
      sectionTitle="Buy early, with clear eyes"
      sectionText="Off-plan can offer attractive entry points, but every project has its own payment plan, timeline and risk profile. We help you compare launches side by side and understand exactly what you are signing."
      offers={[
        { title: "Launch Access", text: "Information on new and upcoming launches from the developers we are registered with." },
        { title: "Payment Plan Review", text: "A plain-language breakdown of instalments, milestones and handover terms." },
        { title: "Project Comparison", text: "Location, developer track record, unit mix and specification compared fairly." },
        { title: "Unit Selection", text: "Help choosing the right unit, floor and view for your goal, whether living or investing." },
        { title: "Resale and Assignment", text: "Guidance if you want to sell an off-plan unit before handover." },
        { title: "Documentation", text: "Support through reservation, SPA and registration, step by step." },
      ]}
    />
  );
}
