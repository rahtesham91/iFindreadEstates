import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Ready & Luxury Properties in Dubai",
  description: "Move-in-ready homes and prime luxury residences across Dubai: apartments, villas, townhouses and penthouses.",
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="Ready & Luxury"
      title="Ready & Luxury Properties"
      intro="From well-priced everyday homes to signature residences in Dubai's most sought-after addresses."
      imageLabel="Luxury hero: premium villa or penthouse interior"
      sectionTitle="Find the right home, at the right value"
      sectionText="Whether you want a practical apartment or a landmark penthouse, we work from your brief and show you what is genuinely worth your attention, not simply what is available."
      offers={[
        { title: "Apartments", text: "Studios to multi-bedroom residences across Dubai's established and emerging communities." },
        { title: "Villas and Townhouses", text: "Family homes with space, privacy and strong community amenities." },
        { title: "Luxury Residences", text: "Prime penthouses, branded residences and waterfront homes at the top end of the market." },
        { title: "Private Viewings", text: "Scheduled around you, with honest feedback on each property." },
        { title: "Price Guidance", text: "Comparable-based advice so you buy and sell with confidence." },
        { title: "Selling Your Property", text: "Positioning, pricing and presentation to reach serious buyers." },
      ]}
    />
  );
}
