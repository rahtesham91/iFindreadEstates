// Central place for company details and page content.
// Replace the placeholder values below with the real ones when available.

export const site = {
  brand: "iFind",
  legalName: "iFind Real Estate LLC",
  tagline: "Finding Value. Building Trust.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ifind.example",
  phone: "+971 50 984 3209",
  landline: "+971 4 835 1268",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "971509843209",
  email: "info@ifindrealestates.com",
  address: "Office 1810, Churchill Tower, Business Bay, Dubai, UAE",
  orn: "ORN: 45937",
  social: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};

export const whatsappLink = (text = "Hello iFind, I would like to make an enquiry.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export type Service = {
  slug: string;
  title: string;
  short: string;
  href: string;
};

export const services: Service[] = [
  {
    slug: "off-plan",
    title: "Off-Plan",
    short: "Early access to new launches from Dubai's leading developers, with clear guidance on payment plans and handover.",
    href: "/off-plan",
  },
  {
    slug: "ready-luxury",
    title: "Ready & Luxury",
    short: "Move-in-ready homes and prime luxury residences, from everyday apartments to signature villas and penthouses.",
    href: "/ready-and-luxury",
  },
  {
    slug: "rentals",
    title: "Rentals & Leasing",
    short: "Residential and commercial leasing for tenants and landlords, handled with clarity and discretion.",
    href: "/rentals-and-leasing",
  },
  {
    slug: "land",
    title: "Land, Buildings & Hotels",
    short: "Single plots, multiple plots, joint ventures and complex deals across the UAE, including warehouses, buildings and hotels.",
    href: "/land-buildings-hotels",
  },
];

export const nav = [
  { label: "Services", href: "/off-plan", children: services.map((s) => ({ label: s.title, href: s.href })) },
  { label: "Developers", href: "/developers" },
  { label: "Investors", href: "/investor-services" },
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
];

export const developers = [
  "Emaar",
  "DAMAC",
  "Nakheel",
  "Sobha Realty",
  "Meraas",
  "Dubai Properties",
  "Aldar",
  "Binghatti",
  "Danube",
  "Azizi",
  "Ellington",
  "Omniyat",
];

export const steps = [
  { title: "Consultation", text: "We listen first: your goals, budget, timeline and the kind of asset you have in mind." },
  { title: "Options", text: "A focused shortlist of opportunities that fit, with the numbers laid out honestly." },
  { title: "Negotiation", text: "We represent your interest in every conversation, from price to payment terms." },
  { title: "Closing", text: "Paperwork, transfers and registrations handled step by step until the deal is complete." },
];

export const interests = [
  "Off-Plan",
  "Ready / Luxury Property",
  "Rental / Leasing",
  "Land, Building or Hotel",
  "Investment Opportunity",
  "Selling My Property",
  "Something Else",
];

export const team = [
  { name: "Team Member Name", role: "Senior Property Consultant", brn: "00000", languages: "English, Arabic" },
  { name: "Team Member Name", role: "Property Consultant", brn: "00000", languages: "English, Hindi, Urdu" },
  { name: "Team Member Name", role: "Property Consultant", brn: "00000", languages: "English, Russian" },
  { name: "Team Member Name", role: "Leasing Consultant", brn: "00000", languages: "English, Arabic" },
];

// About page content. DRAFT copy: to be approved or replaced by the company.
export const ceo = {
  name: "CEO Name", // TODO(client): real name
  title: "Chief Executive Officer",
  message: [
    "At iFind, our name says what we do. We find value for the people who trust us, whether that is a first apartment, a well-located plot or a large commercial asset.",
    "A property decision is one of the biggest anyone makes. So we start by listening, we tell you honestly what we see in the market, and we stay with you until the deal is complete.",
    "Trust is not something we claim. It is something we earn, one conversation and one client at a time. Thank you for considering iFind.",
  ],
};

export const vision =
  "To be the real estate advisor people in the UAE and beyond trust first, known for honest advice and lasting relationships.";

export const mission =
  "To help our clients buy, sell and lease property with clarity, integrity and expert guidance, from the first consultation to the day the deal closes.";

export const values = [
  { title: "Integrity", text: "We say what is true, even when it is not what you hoped to hear." },
  { title: "Value", text: "Every recommendation is measured against what it is genuinely worth to you." },
  { title: "Clarity", text: "Prices, fees and terms laid out plainly, with no surprises later." },
  { title: "Service", text: "Responsive, respectful and available when you need us." },
  { title: "Expertise", text: "Registered brokers with real knowledge of the Dubai and UAE market." },
];
