import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Investor Services",
  description: "Investment opportunities in Dubai and the UAE for local and international investors: off-plan, ready, land, buildings and hotels.",
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="Investor Services"
      title="Investor Services"
      intro="Finding, evaluating and closing real estate investments in Dubai and across the UAE, for local and international investors."
      imageLabel="Investors hero: Dubai financial district at night"
      sectionTitle="Invest with clarity, not guesswork"
      sectionText="We help you identify opportunities that match your capital and goals, explain the numbers plainly, and carry the deal through to completion. We do not promise returns. We give you the facts so you can decide."
      offers={[
        { title: "Opportunity Sourcing", text: "Off-plan, ready, land and commercial opportunities matched to your brief." },
        { title: "Market Briefing", text: "Honest context on areas, pricing and demand before you commit." },
        { title: "Deal Evaluation", text: "Costs, fees, payment terms and exit options laid out clearly." },
        { title: "Large and Complex Deals", text: "Multiple plots, joint ventures, buildings, warehouses and hotels." },
        { title: "International Investors", text: "Remote-friendly communication and guidance on the buying process in the UAE." },
        { title: "Selling and Leasing", text: "Support when you want to sell or lease an asset you already own." },
      ]}
    />
  );
}
