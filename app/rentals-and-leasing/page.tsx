import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Rentals & Leasing in Dubai",
  description: "Residential and commercial leasing for tenants and landlords in Dubai and across the UAE.",
};

export default function Page() {
  return (
    <ServicePage
      eyebrow="Rentals & Leasing"
      title="Rentals & Leasing"
      intro="Residential and commercial leasing for tenants and landlords, handled with clarity and discretion."
      imageLabel="Rentals hero: bright modern apartment interior"
      sectionTitle="The right tenant. The right place."
      sectionText="We connect landlords with reliable tenants and tenants with properties that suit their needs and budget, and we keep the process straightforward from viewing to signing."
      offers={[
        { title: "For Tenants", text: "A focused shortlist matched to your budget, location and lifestyle." },
        { title: "For Landlords", text: "Marketing, viewings and tenant screening to place your property well." },
        { title: "Commercial Leasing", text: "Offices, retail units, warehouses and other commercial spaces." },
        { title: "Rental Guidance", text: "Realistic rent expectations based on current comparable listings." },
        { title: "Tenancy Paperwork", text: "Support with contracts and registration so everything is in order." },
        { title: "Long and Short Term", text: "Options to suit different lease lengths and requirements." },
      ]}
    />
  );
}
