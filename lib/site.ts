// Central place for company details and page content.
// Replace the placeholder values below with the real ones when available.

export const site = {
  brand: "iFind",
  legalName: "iFind Real Estate LLC",
  tagline: "Finding Value. Building Trust.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ifindrealestate.vercel.app",
  phone: "+971 50 984 3209",
  landline: "+971 4 835 1268",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "971509843209",
  email: "info@ifindrealestates.com",
  address: "Office No. 1810, Churchill Tower, Business Bay, Dubai, UAE",
  orn: "ORN: 45937",
  // Taken from the company's own previous website.
  social: [
    { label: "Instagram", href: "https://www.instagram.com/ifindrealestates" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/ifindrealestates/" },
    { label: "Facebook", href: "https://www.facebook.com/ifindrealestates" },
  ],

};

export const whatsappLink = (text = "Hello iFind, I would like to make an enquiry.", number: string = site.whatsapp) =>
  `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;

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

// Developer partners (names from the company's previous website). Each logo is an identical 800x480 card image
// in /public/developers/<slug>.webp, edited from the logos supplied by the company.
export type Developer = { slug: string; name: string; url: string }; // url = developer's official website only
export const developers: Developer[] = [
  { slug: "emaar", name: "Emaar", url: "https://www.emaar.com/en" },
  { slug: "damac", name: "Damac", url: "https://www.damacproperties.com" },
  { slug: "sobha", name: "Sobha", url: "https://sobharealty.com" },
  { slug: "dubai-properties", name: "Dubai Properties", url: "https://www.dp.ae" },
  { slug: "azizi", name: "Azizi", url: "https://www.azizidevelopments.com" },
  { slug: "binghatti", name: "Binghatti", url: "https://www.binghatti.com" },
  { slug: "danube", name: "Danube Properties", url: "https://danubeproperties.com" },
  { slug: "nshama", name: "Nshama", url: "https://nshama.ae" },
  { slug: "fakhruddin", name: "Fakhruddin Properties", url: "https://www.fakhruddinproperties.com" },
  { slug: "bt-properties", name: "BT Properties", url: "https://btproperties.ae" },
  { slug: "bnw", name: "BNW Developments", url: "https://bnw.ae/en" },
  { slug: "reportage", name: "Reportage", url: "https://reportageuae.com" },
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

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio?: string;
  photo?: string; // a monogram is shown until a photo is supplied
  languages?: string[];
  brn?: string; // shown only when provided
  email?: string; // shown only when provided
  // Personal numbers, international format (e.g. "+971 50 123 4567"). Until provided, the company number is used.
  phone?: string;
  whatsapp?: string;
};

export const memberContact = (m: TeamMember, waText: string) => {
  const call = m.phone ?? site.phone;
  const wa = m.whatsapp ?? m.phone ?? site.whatsapp;
  return {
    tel: `tel:${call.replace(/[^\d+]/g, "")}`,
    wa: whatsappLink(waText, wa),
  };
};

// Team names and photos from the company's previous website. The bios and languages are kept here for later use but are not
// shown on the cards. Some designations below (Waqar, Essam, Dario) are placeholders until the company confirms them.
export const team: TeamMember[] = [
  {
    slug: "abid-khan",
    name: "Abid Khan",
    role: "Managing Director",
    photo: "/team/abid-khan-v3.webp",
    email: "abid@ifindrealestates.com",
    bio: "Abid Khan has 12+ years of sales experience, including 8 in Dubai real estate. With a BBA and hospitality background, he leads iFind Real Estate LLC with a focus on client satisfaction, smart investments, and trusted service.",
  },
  {
    slug: "farwa-khan",
    name: "Farwa Khan",
    role: "Commercial Sales Manager",
    photo: "/team/farwa-khan-v3.webp",
    languages: ["English", "Urdu", "Hindi"],
    brn: "93124",
    email: "farwa@ifindrealestates.com",
    phone: "+971 50 882 8241",
    bio: "Farwa Khan brings extensive expertise in both real estate sales and operations, specializing in both off-plan and secondary market sales. With a focus on client satisfaction and smooth transactions, she is dedicated to helping clients find the right properties while driving business growth.",
  },
  {
    slug: "muzamal-hameed",
    name: "Muzamal Hameed",
    role: "Sales Manager",
    photo: "/team/muzamal-hameed-v3.webp",
    email: "muzamal@ifindrealestates.com",
    bio: "Muzamal Hameed is a skilled Sales Manager dedicated to helping clients find the perfect property. With strong market knowledge and a client-focused approach, he ensures smooth and successful real estate transactions.",
  },
  {
    slug: "ehtesham-nazir",
    name: "Ehtesham Nazir",
    role: "Digital Marketing Manager",
    email: "ehtesham@ifindrealestates.com",
    phone: "+971 54 500 1576",
    photo: "/team/ehtesham-nazir-v4.webp",
  },
  {
    slug: "dario-linus",
    name: "Dario Linus",
    role: "Property Consultant", // placeholder designation until confirmed
    photo: "/team/dario-linus-v4.webp",
    brn: "100955",
    email: "dario@ifindrealestates.com",
    phone: "+971 58 517 1717",
  },
  {
    slug: "ishtiaq-ahmed",
    name: "Ishtiaq Ahmed",
    role: "Property Consultant – Secondary Market",
    photo: "/team/ishtiaq-ahmed-v3.webp",
    languages: ["English", "Hindi", "Urdu", "Punjabi"],
    email: "ishtiaq@ifindrealestates.com",
    phone: "+971 56 550 4547",
  },
  {
    slug: "waqar-shah",
    name: "Waqar Shah",
    role: "Sales Consultant",
    photo: "/team/waqar-shah-v3.webp",
    languages: ["English", "Urdu", "Pashtu", "Punjabi"],
    email: "waqar@ifindrealestates.com",
    bio: "Waqar Shah is a real estate expert in Dubai's off-plan market, with 2 years of experience and an IT background since 2014. He offers smart, tech-driven investment guidance. Known for integrity and clear communication, he supports a diverse clientele. Whether you're a buyer or investor, Waqar helps you unlock top opportunities.",
  },
  {
    slug: "fayyaz-khan",
    name: "Fayyaz Khan",
    role: "Public Relations Officer (PRO)",
    photo: "/team/fayyaz-khan-v5.webp",
    email: "fayaz@ifindrealestates.com",
    phone: "+971 55 744 7287",
  },
  {
    slug: "essam-nabil",
    name: "Essam Nabil",
    role: "Senior Sales Executive",
    photo: "/team/essam-nabil-v3.webp",
    languages: ["Arabic", "English"],
    email: "essam@ifindrealestates.com",
    bio: "Property Consultant with a strong hospitality background, specialized in guiding clients through every step of the real estate journey, whether buying, selling, or investing. He provides strategic advice, transparent communication, and tailored property solutions to meet each client's unique needs.",
  },
];

export const leadership = team.slice(0, 4);

// Founder & CEO: wording from the company's previous website, with the company name updated.
export const ceo = {
  name: "Avaid Lateef",
  honorific: "Mr.",
  title: "Founder & CEO",
  email: "avaid@ifindrealestates.com",
  photo: "/team/avaid-lateef-v4.webp",
  message: [
    "With over 8 years of real estate experience in Dubai and internationally, Mr. Avaid Lateef leads iFind Real Estate LLC with a clear vision: to deliver personalized, high-value property solutions with excellence and integrity.",
    "His global perspective, deep market knowledge, and client-first approach have established the company as a trusted name in Dubai's real estate sector.",
  ],
};

// Company introduction: from the previous website's About page, lightly trimmed.
export const aboutIntro = [
  "At iFind Real Estate LLC, we are passionate about helping you find the perfect property and investment opportunities in the vibrant city of Dubai. Specializing in mid-range to luxury properties, our multinational team brings a global perspective and deep local expertise to every transaction.",
  "Founded by real estate expert Mr. Avaid Lateef, with over 8 years of industry experience, we have built a reputation for integrity, excellence, and personalized service. Whether you are buying your dream home, selling a prime property, or looking for sound investment opportunities, we are committed to making your real estate journey smooth, rewarding, and hassle-free.",
  "Our services span residential sales, commercial property brokerage, investment advisory, and prime land sourcing. With access to the city's most prestigious locations, we help you unlock the best opportunities in one of the world's safest and fastest-growing markets.",
  "At iFind, your success is our priority. We don't just find you a property. We help you build a prosperous future.",
];

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

// Other company mailboxes supplied by the company, not yet placed on the site.
// accounts@ and hr@ are department mailboxes; fayaz@ belongs to a person who is not on the Team page yet.
export const otherEmails = {
  accounts: "accounts@ifindrealestates.com",
  hr: "hr@ifindrealestates.com",
  fayaz: "fayaz@ifindrealestates.com",
};
