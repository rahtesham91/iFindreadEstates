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

// Developer list as published on the company's previous website.
export const developers = [
  "Dubai Properties",
  "Emaar",
  "Damac",
  "Sobha",
  "Nshama",
  "Azizi Developers",
  "Reportage Developers",
  "BNW Developers",
  "Fakhr-al-Din Properties",
  "Danube Properties",
  "BT Properties",
  "Binghatti",
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
  bio: string;
  photo: string;
  languages?: string[];
  brn?: string; // shown only when provided
};

// Team details and photos taken from the company's previous website (about page).
export const team: TeamMember[] = [
  {
    slug: "abid-khan",
    name: "Abid Khan",
    role: "Managing Director",
    photo: "/team/abid-khan.webp",
    bio: "Abid Khan has 12+ years of sales experience, including 8 in Dubai real estate. With a BBA and hospitality background, he leads iFind Real Estate LLC with a focus on client satisfaction, smart investments, and trusted service.",
  },
  {
    slug: "farwa-khan",
    name: "Farwa Khan",
    role: "Associate Director",
    photo: "/team/farwa-khan.webp",
    languages: ["English", "Urdu", "Hindi"],
    bio: "Farwa Khan brings extensive expertise in both real estate sales and operations, specializing in both off-plan and secondary market sales. With a focus on client satisfaction and smooth transactions, she is dedicated to helping clients find the right properties while driving business growth.",
  },
  {
    slug: "muzamal-hameed",
    name: "Muzamal Hameed",
    role: "Sales Manager",
    photo: "/team/muzamal-hameed.webp",
    bio: "Muzamal Hameed is a skilled Sales Manager dedicated to helping clients find the perfect property. With strong market knowledge and a client-focused approach, he ensures smooth and successful real estate transactions.",
  },
  {
    slug: "fahad-ahmed",
    name: "Fahad Ahmed",
    role: "Marketing Director",
    photo: "/team/fahad-ahmed.webp",
    bio: "Fahad drives our marketing efforts with creativity and precision, connecting clients to Dubai's best real estate opportunities.",
  },
  {
    slug: "meher-ahmed",
    name: "Meher Ahmed",
    role: "Luxury Properties Specialist",
    photo: "/team/meher-ahmed.webp",
    bio: "Meher Ahmed brings expertise and dedication to Dubai's luxury real estate market. She is passionate about helping clients find exceptional homes and premium investments, offering personalized service with a focus on excellence.",
  },
  {
    slug: "waqar-shah",
    name: "Waqar Shah",
    role: "Real Estate Expert",
    photo: "/team/waqar-shah.webp",
    languages: ["English", "Urdu", "Pashtu", "Punjabi"],
    bio: "Waqar Shah is a real estate expert in Dubai's off-plan market, with 2 years of experience and an IT background since 2014. He offers smart, tech-driven investment guidance. Known for integrity and clear communication, he supports a diverse clientele. Whether you're a buyer or investor, Waqar helps you unlock top opportunities.",
  },
  {
    slug: "ekaterina",
    name: "Ekaterina",
    role: "Real Estate Expert",
    photo: "/team/ekaterina.webp",
    languages: ["Russian", "Spanish", "English"],
    bio: "Originally a professional figure skater with 9 years of experience and participation in national championships in Russia, Ekaterina brings the same discipline, precision, and drive to her career in Dubai real estate. She now helps clients navigate the Dubai property market with the dedication of a true athlete.",
  },
  {
    slug: "essam-nabil",
    name: "Essam Nabil",
    role: "Real Estate Expert",
    photo: "/team/essam-nabil.webp",
    languages: ["Arabic", "English"],
    bio: "Property Consultant with a strong hospitality background, specialized in guiding clients through every step of the real estate journey, whether buying, selling, or investing. He provides strategic advice, transparent communication, and tailored property solutions to meet each client's unique needs.",
  },
  {
    slug: "nyi-linn-htet",
    name: "Nyi Linn Htet",
    role: "Real Estate Expert",
    photo: "/team/nyi-linn-htet.webp",
    bio: "Experienced real estate professional specializing in luxury properties in Dubai, with a strong background in market analysis, client relations, and property sales. Provides tailored solutions to help clients buy, sell, and invest in prime real estate, and is committed to delivering exceptional service and results.",
  },
  {
    slug: "umar-bin-masood",
    name: "Umar Bin Masood",
    role: "Admin & Accounts",
    photo: "/team/umar-bin-masood.webp",
    bio: "Umar Bin Masood is an experienced professional with over 10 years in administration and accounts, including one year in Dubai's real estate sector. He holds a BBA degree and handles administrative and financial operations at iFind Real Estate LLC, ensuring efficiency and accuracy in daily business functions.",
  },
];

// Founder & CEO: wording from the company's previous website, with the company name updated.
export const ceo = {
  name: "Avaid Lateef",
  honorific: "Mr.",
  title: "Founder & CEO",
  photo: "/team/avaid-lateef.webp",
  message:
    "With over 8 years of real estate experience in Dubai and internationally, Mr. Avaid Lateef leads iFind Real Estate LLC with a clear vision: to deliver personalized, high-value property solutions with excellence and integrity. His global perspective, deep market knowledge, and client-first approach have established the company as a trusted name in Dubai's real estate sector.",
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
