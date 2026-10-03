import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Land, Buildings & Hotels in the UAE",
  description: "Buy and sell plots, enter joint ventures and complete complex deals across the UAE, including warehouses, buildings and hotels.",
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="Land, Buildings & Hotels"
      title="Land, Buildings & Hotels"
      intro="Plots, joint ventures and complex commercial deals across the UAE, including opportunities beyond it."
      imageLabel="Land hero: aerial view of plots or development site"
      sectionTitle="Complex deals, handled with experience"
      sectionText="Land and large assets need careful structuring. We work on single plots and multiple plots, joint ventures, and transactions involving warehouses, buildings and hotels. We source, evaluate and negotiate on your behalf."
      offers={[
        { title: "Plot Sales and Purchases", text: "Residential, commercial and mixed-use land across the UAE." },
        { title: "Multiple Plots", text: "Assembling or selling several plots together as a single transaction." },
        { title: "Joint Ventures", text: "Introductions and deal structuring between landowners and developers." },
        { title: "Buildings", text: "Whole-building acquisitions and sales for investors and end users." },
        { title: "Hotels and Hospitality", text: "Hotel and hospitality assets for qualified buyers and sellers." },
        { title: "Warehouses", text: "Industrial and logistics properties for sale or lease." },
      ]}
      closing={{
        title: "Looking outside the UAE?",
        text: "We can also discuss land opportunities beyond the UAE. Tell us what you are looking for and we will let you know honestly what we can do.",
      }}
    />
  );
}
