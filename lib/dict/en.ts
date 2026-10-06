// All visible English text. The Arabic dictionary (ar.ts) must have exactly the same shape.

const interests = [
  { value: "Off-Plan", label: "Off-Plan" },
  { value: "Ready / Luxury Property", label: "Ready / Luxury Property" },
  { value: "Rental / Leasing", label: "Rental / Leasing" },
  { value: "Land, Building or Hotel", label: "Land, Building or Hotel" },
  { value: "Investment Opportunity", label: "Investment Opportunity" },
  { value: "Selling My Property", label: "Selling My Property" },
  { value: "Something Else", label: "Something Else" },
];

export const en = {
  htmlLang: "en",
  dir: "ltr" as "ltr" | "rtl",
  meta: {
    siteTitle: "iFind | Finding Value. Building Trust.",
    titleTemplate: "%s | iFind",
    description: "iFind Real Estate LLC, Dubai. Off-plan, ready and luxury properties, rentals, land, buildings and hotels across the UAE.",
    ogLocale: "en_AE",
  },
  brand: "iFind",
  legalName: "iFind Real Estate LLC",
  tagline: "Finding Value. Building Trust.",
  taglineParts: ["Finding Value.", "Building Trust."],
  orn: "ORN: 45937",
  address: "Office No. 1810, Churchill Tower, Business Bay, Dubai, UAE",
  streetAddress: "Office No. 1810, Churchill Tower, Business Bay",
  common: {
    skip: "Skip to content",
    enquireNow: "Enquire Now",
    whatsappUs: "WhatsApp Us",
    contactUs: "Contact Us",
    call: "Call",
    callUs: "Call Us",
    whatsapp: "WhatsApp",
    chat: "Chat",
    learnMore: "Learn more",
    image: "Image",
    close: "Close",
  },
  wa: {
    general: "Hello iFind, I would like to make an enquiry.",
    service: "Hello iFind, I would like to know more about {title}.",
    person: "Hello, I would like to speak with {name}.",
  },
  nav: {
    services: "Services",
    developers: "Developers",
    investors: "Investors",
    about: "About Us",
    team: "Our Team",
    contact: "Contact Us",
    careers: "Careers",
    explore: "Explore",
    home: "iFind home",
    main: "Main",
    mobile: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLabel: "العربية",
    switchAria: "Switch to Arabic",
  },
  services: [
    { slug: "off-plan", title: "Off-Plan", short: "Early access to new launches from Dubai's leading developers, with clear guidance on payment plans and handover." },
    { slug: "ready-luxury", title: "Ready & Luxury", short: "Move-in-ready homes and prime luxury residences, from everyday apartments to signature villas and penthouses." },
    { slug: "rentals", title: "Rentals & Leasing", short: "Residential and commercial leasing for tenants and landlords, handled with clarity and discretion." },
    { slug: "land", title: "Land, Buildings & Hotels", short: "Single plots, multiple plots, joint ventures and complex deals across the UAE, including warehouses, buildings and hotels." },
  ],
  steps: [
    { title: "Consultation", text: "We listen first: your goals, budget, timeline and the kind of asset you have in mind." },
    { title: "Options", text: "A focused shortlist of opportunities that fit, with the numbers laid out honestly." },
    { title: "Negotiation", text: "We represent your interest in every conversation, from price to payment terms." },
    { title: "Closing", text: "Paperwork, transfers and registrations handled step by step until the deal is complete." },
  ],
  footer: {
    services: "Services",
    company: "Company",
    contact: "Contact",
    office: "(Office)",
    whatsapp: "WhatsApp",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Terms",
  },
  cta: { eyebrow: "iFind" },
  placeholder: {
    heroHome: "Hero: Dubai skyline at dusk",
    whyHome: "Why iFind: team or Dubai architecture",
    investorsHome: "Investors: city skyline or meeting",
    contactMap: "Map or office photo",
    featureImage: "{title}: feature image",
  },
  interests,
  chat: {
    label: "Chat with iFind",
    greeting: "Hello! How may I assist you today?",
    chatWithUs: "Chat with us",
    askName: "Wonderful. May I have your name, please?",
    askPhone: "Thank you, {name}. What is the best phone or WhatsApp number to reach you on?",
    thanks: "Thank you. One of our consultants will contact you shortly.",
    failed: "Sorry, that did not go through. Please check the number or message us on WhatsApp.",
    yourName: "Your name",
    yourPhone: "Phone / WhatsApp",
    openWhatsApp: "Chat on WhatsApp",
    closeChat: "Close chat",
    openChat: "Open chat",
    dismiss: "Dismiss",
    send: "Send",
  },
  form: {
    fullName: "Full name *",
    phone: "Phone / WhatsApp *",
    email: "Email (optional)",
    interest: "I am interested in...",
    message: "Tell us briefly what you are looking for",
    send: "Send Enquiry",
    sending: "Sending...",
    note: "By sending this form you agree to be contacted about your enquiry.",
    thankTitle: "Thank you.",
    thankText: "We have received your enquiry and one of our consultants will contact you shortly.",
    continueWhatsApp: "Continue on WhatsApp",
    error: "Something went wrong. Please try WhatsApp.",
  },
  team: {
    brn: "BRN",
    languages: "Languages",
    languageNames: { English: "English", Urdu: "Urdu", Hindi: "Hindi", Punjabi: "Punjabi", Pashtu: "Pashto", Arabic: "Arabic", Italian: "Italian", Farsi: "Farsi", French: "French", German: "German" } as Record<string, string>,
    profile: {
      breadcrumb: "Our Team",
      mobile: "Direct line",
      email: "Email",
      callName: "Call {name}",
      whatsappName: "WhatsApp {name}",
      back: "Back to the team",
      specialization: "Specialization",
      about: "About {name}",
      metaTitle: "{name}, {role} | iFind Real Estate Dubai",
      metaDescription: "{name} is {role} at iFind Real Estate LLC, Dubai. Speak with {name} about off-plan, ready and luxury property, rentals, land, buildings and hotels in the UAE.",
      photoAlt: "{name}, {role} at iFind Real Estate",
    },
    bios: {
      "dario-ceglia": ["Dario worked in Monte Carlo’s real estate market from 2015 to 2019 before moving to Dubai in 2020. At iFind Real Estate, he focuses on residential properties and commercial opportunities with long-term growth potential.", "Fluent in Italian, English, Farsi, French, and German, he offers personalized advice to international clients."],
      "farwa-khan": ["With a strong focus on Dubai’s commercial real estate market, Farwa specializes in helping businesses, investors, and property owners navigate commercial Lease & sales opportunities across key business districts.", "As Commercial Sales Manager at I Find Real Estate LLC, she focuses on commercial offices and investment opportunities, providing clients with market insights, property selection, negotiation support, and end-to-end guidance throughout the transaction."],
      "ishtiaq-ahmed": ["Specialized in secondary sales and leasing across JBR, Dubai Marina, JLT, Downtown Dubai, and Business Bay. Helping property owners, buyers, tenants, and investors with property listings, market analysis, negotiations, and successful transactions."],
      "essam-nabil": ["With over 7 years of experience in Dubai’s real estate market. Specializes in properties across Meydan and Dubai Creek Harbour. He supports property owners, buyers, tenants, and investors with professional property listings, accurate market analysis, strong negotiations, and smooth, successful transactions."],
      "muzamal-hameed": ["Muzamal Hameed is the Sales Manager for the Secondary Market at iFind Real Estate LLC, bringing over 7 years of proven sales experience. Known for his strategic approach, strong negotiation skills, and commitment to exceptional client service, Muzamal provides tailored guidance to buyers, sellers, and investors across Dubai’s property market. Fluent in English and Urdu/Hindi, he combines professionalism, market insight, and a relationship-driven approach to deliver a seamless real estate experience."],
      "shah-waqar": ["With 5 years of experience in real estate, I specialize in residential and commercial property sales, investment advisory, market analysis, and negotiations. I help clients make informed decisions through tailored strategies, market insights, and seamless transaction management.", "Committed to professionalism, integrity, and results, I focus on delivering exceptional value and building long-term client relationships."],
      "fayyaz-khan": ["With 25 years of professional experience in Dubai, Fayyaz Khan brings extensive knowledge of the UAE’s business environment, government procedures, and administrative requirements.", "With nearly 10 years of dedicated experience in PRO services, Fayyaz plays an important role at iFind Real Estate L.L.C., overseeing the company’s government relations, visa and immigration procedures, licensing and regulatory documentation, and other legal and administrative formalities.", "His strong understanding of local procedures and government requirements enables iFind to manage essential corporate processes efficiently and in compliance with applicable regulations.", "At iFind, Fayyaz is the trusted point of contact for PRO, government liaison, visa, and regulatory matters—helping ensure that the company’s administrative operations run smoothly and professionally."],
    } as Record<string, string[]>,
    specializations: {
      "farwa-khan": ["Commercial Lease & Sales", "Office Investments", "Business Bay", "Downtown Dubai"],
    } as Record<string, string[]>,
  },
  people: {
    "abid-khan": { name: "Abid Khan", role: "Managing Director" },
    "farwa-khan": { name: "Farwa Khan", role: "Commercial Sales Manager" },
    "muzamal-hameed": { name: "Muzamal Hameed", role: "Sales Manager – Secondary Market" },
    "ehtesham-nazir": { name: "Ehtesham Nazir", role: "Digital Marketing Manager" },
    "dario-ceglia": { name: "Dario Ceglia", role: "Real Estate Consultant" },
    "ishtiaq-ahmed": { name: "Ishtiaq Ahmed", role: "Property Consultant – Secondary Market" },
    "shah-waqar": { name: "Shah Waqar", role: "Business Specialist | Real Estate Professional" },
    "fayyaz-khan": { name: "Fayyaz Khan", role: "Public Relations Officer (PRO)" },
    "essam-nabil": { name: "Essam Nabil", role: "Property Consultant" },
  } as Record<string, { name: string; role: string }>,
  ceo: {
    first: "Avaid",
    last: "Lateef",
    full: "Avaid Lateef",
    honorific: "Mr.",
    title: "Founder & CEO",
    messageA:
      "With over 15 years of experience across sales, business development, real estate, technology, and entrepreneurship, Mr. Avaid Lateef leads iFind Real Estate LLC with a clear vision: to deliver personalized, high-value property solutions with excellence and integrity.",
    messageB:
      "His global perspective, deep market knowledge, and client-first approach have established the company as a trusted name in Dubai's real estate sector.",
    signatureLine: "Founder & CEO, iFind Real Estate LLC",
  },
  mdBio:
    "Abid Khan has 12+ years of sales experience, including 8 in Dubai real estate. With a BBA and hospitality background, he leads iFind Real Estate LLC with a focus on client satisfaction, smart investments, and trusted service.",
  developers: {
    names: {
      emaar: "Emaar",
      damac: "Damac",
      sobha: "Sobha",
      "dubai-properties": "Dubai Properties",
      azizi: "Azizi",
      binghatti: "Binghatti",
      danube: "Danube Properties",
      nshama: "Nshama",
      fakhruddin: "Fakhruddin Properties",
      "bt-properties": "BT Properties",
      bnw: "BNW Developments",
      reportage: "Reportage",
    } as Record<string, string>,
    logo: "{name} logo",
    visit: "Visit the official {name} website",
    pageTitle: "Our Developer Partners",
    pageDescription: "iFind Real Estate is registered with Dubai's major developers, including Emaar, Damac, Sobha, Dubai Properties, Azizi, Binghatti and Danube.",
    eyebrow: "Developers",
    intro: "We are registered with the major developers in Dubai, giving our clients direct access to new launches and inventory.",
    count: "{n} developers",
    homeTitle: "Registered with Dubai's leading developers",
    viewAll: "View All Developers",
  },
  home: {
    eyebrow: "Dubai, United Arab Emirates",
    keywords: ["Off-Plan", "Ready", "Luxury", "Rentals", "Land", "Buildings", "Hotels"],
    servicesEyebrow: "Our Services",
    servicesTitle: "Every kind of property deal, in one place",
    servicesText: "We help you buy, sell and lease, from a first apartment to a hotel.",
    whyEyebrow: "Why iFind",
    whyTitle: "Built on trust, driven by value",
    why: [
      { title: "Licensed Brokers", text: "Every consultant is a registered broker, with their BRN shown openly on our Team page." },
      { title: "Honest Advice", text: "We tell you what is worth your money, and what is not, even when it costs us a deal." },
      { title: "UAE and Beyond", text: "Access across the UAE, with the ability to discuss opportunities outside it." },
      { title: "Complex Deals", text: "Experience with plots, joint ventures, buildings, hotels and warehouses." },
    ],
    investorsEyebrow: "Investor Services",
    investorsTitle: "Opportunities for serious investors",
    investorsText:
      "Local and international investors rely on us to identify opportunities, evaluate them honestly and close the deal, whether that is a single unit, a plot or a whole building.",
    investorsButton: "Investor Services",
    processEyebrow: "Our Process",
    processTitle: "Clear steps. No surprises.",
    teamEyebrow: "Our Team",
    teamTitle: "The people behind iFind",
    teamButton: "Meet the Team",
    alt: {
      hero: "Aerial view of Dubai skyscrapers",
      why: "Luxury interior with a glass and marble staircase",
      investors: "Dubai skyline and the Burj Khalifa at sunset",
    },
  },
  about: {
    pageTitle: "About Us",
    pageDescription:
      "About iFind Real Estate LLC, a Dubai brokerage helping clients buy, sell and lease property across the UAE. Meet our Founder & CEO Avaid Lateef, our Managing Director, vision, mission and values.",
    heroEyebrow: "iFind Real Estate LLC · Dubai",
    heroH1a: "About",
    heroH1b: "Us",
    lede: "A multinational team of experienced professionals, working across the full spectrum of the Dubai real estate market.",
    stats: [
      { value: "15+", label: "Years of founder experience across sales, real estate and technology" },
      { value: "{team}", label: "Team members" },
      { value: "{dev}", label: "Developers we are registered with" },
    ],
    whoEyebrow: "Who We Are",
    whoTitle: "A Dubai Real Estate Company Built on Trust, Expertise & Value",
    intro: [
      "At iFind Real Estate LLC, we believe real estate is about more than property — it is about understanding value, simplifying complexity, and building relationships based on trust.",
      "Based in Business Bay, Dubai, our multinational team of experienced professionals operates across the full spectrum of the market — from residential and mid-market properties to commercial assets, ultra-luxury real estate, investment opportunities, prime land, and complex high-value transactions.",
      "Founded by Avaid Lateef, with over 15 years of experience across sales, business development, real estate, technology, and entrepreneurship, iFind was built around one fundamental principle: our word matters.",
      "We believe in quality over quantity, honest advice, carefully selected opportunities, and delivering what we promise. Our culture is equally important — creating an environment where every team member is respected, empowered, and encouraged to excel.",
      "Our goal is simple: to become one of the UAE’s most trusted and respected real estate companies, known for the value we create and the relationships we build.",
    ],
    whoMeta: "ORN: 45937 | Office 1810, Churchill Tower, Business Bay, Dubai, UAE",
    mdButton: "Meet the Full Team",
    mdProfile: "About the Managing Director",
    purposeEyebrow: "Purpose",
    visionLabel: "Our Vision",
    missionLabel: "Our Mission",
    visionText: [
      "At iFind Real Estate, our vision is to make real estate simpler, smarter, and more transparent — especially where transactions become complex.",
      "From prime land and large-scale development opportunities to commercial assets, ultra-luxury properties, off-plan investments, and the wider residential market, we aim to connect the right people with the right opportunities across every segment of Dubai real estate.",
      "We specialize in navigating transactions that require more than traditional brokerage — bringing together landowners, investors, developers, institutions, and end users, while simplifying negotiations, structuring opportunities, and helping move complex deals from possibility to completion.",
      "Our ambition is to build a real estate company known not simply for closing transactions, but for solving challenges, uncovering opportunities, creating long-term value, and earning trust at every stage.",
    ],
    missionText: [
      "At iFind Real Estate, our mission is to build a real estate company where our word is our reputation.",
      "We want the name iFind Real Estate to stand for trust, integrity, professionalism, and commitment — so that when clients, investors, developers, landowners, or partners deal with us, they know they are dealing with people who mean what they say and deliver what they promise.",
      "Our mission is not to become the biggest by chasing numbers. We believe in quality over quantity — carefully selected opportunities, meaningful relationships, exceptional service, and transactions built around genuine value.",
      "We are equally committed to building a different kind of real estate ecosystem from within: one where every team member is respected, valued, empowered, and given the opportunity to grow. We believe that when people are treated with dignity and work with purpose, excellence naturally follows.",
      "From everyday real estate requirements to prime land, complex transactions, commercial opportunities, investment assets, and ultra-luxury properties, our purpose is to simplify the process, find solutions where others see complexity, and protect the trust placed in us.",
      "Our ambition is clear: to establish iFind Real Estate as one of the UAE’s most respected and trusted real estate companies — recognized not only for the deals we close, but for the values we refuse to compromise.",
    ],
    signoff: "iFind Real Estate — Finding Value. Building Trust.",
    valuesEyebrow: "What We Stand For",
    valuesTitle: "Our values",
    values: [
      { title: "Integrity", text: "We say what is true, even when it is not what you hoped to hear." },
      { title: "Value", text: "Every recommendation is measured against what it is genuinely worth to you." },
      { title: "Clarity", text: "Prices, fees and terms laid out plainly, with no surprises later." },
      { title: "Service", text: "Responsive, respectful and available when you need us." },
      { title: "Expertise", text: "Registered brokers with real knowledge of the Dubai and UAE market." },
    ],
    doEyebrow: "What We Do",
    doTitle: "Buy. Sell. Lease.",
  },
  teamPage: {
    title: "Our Team",
    description: "Meet the iFind Real Estate LLC team in Dubai: our Managing Director, directors, managers and property specialists.",
    eyebrow: "Our Team",
    h1: "The people behind iFind",
    lede: "A multinational team with a global perspective and deep local expertise, committed to personalised, honest service on every deal.",
    leadership: "Leadership",
    specialists: "Specialists & Support",
    readMore: "Read More",
  },
  contact: {
    title: "Contact Us",
    description: "Speak with iFind Real Estate LLC in Dubai about off-plan, ready, luxury, rentals, land, buildings and hotels.",
    eyebrow: "Contact Us",
    h1: "Let’s talk.",
    lede: "Tell us what you are looking for. A registered consultant will get back to you shortly.",
    mobile: "Mobile / WhatsApp",
    landline: "Office Landline",
    whatsapp: "WhatsApp",
    whatsappLink: "Message us on WhatsApp",
    email: "Email",
    office: "Office",
    formTitle: "Send an enquiry",
    mapTitle: "iFind Real Estate office location on Google Maps",
    openMap: "Open in Google Maps",
  },
  devLanding: {
    "metaTitle": "{name} Properties in Dubai: Your Private Shortlist | iFind Real Estate",
    "metaDescription": "Interested in {name}? Tell iFind your budget and our brokers will compare the best {name} options and alternatives across Dubai for you. No obligation.",
    "breadcrumb": "Developers",
    "welcomeEyebrow": "{name} · Priority Service",
    "welcomeTitle": "Your Best {name} Options, Handpicked for You.",
    "welcomeLead": "You are one step away from a personal shortlist. Share your budget and one of our brokers will prepare the strongest {name} opportunities for you, and compare alternatives so you can choose with confidence.",
    "pointsLabel": "What you get",
    "points": [
      {
        "title": "Handpicked for you",
        "text": "A personal shortlist of {name} opportunities that fit your budget and goals."
      },
      {
        "title": "Compared, not just presented",
        "text": "Price, payment plan, location, handover and value weighed fairly, with alternatives where relevant."
      },
      {
        "title": "A dedicated broker",
        "text": "One broker who knows your requirements and puts your interest first."
      }
    ],
    "formEyebrow": "Priority request · No obligation",
    "formTitle": "Request Your Private Shortlist",
    "formText": "Tell us your budget and your broker will send your best {name} options on WhatsApp.",
    "name": "Your name *",
    "phone": "Mobile / WhatsApp number *",
    "budget": "Your budget *",
    "budgetPlaceholder": "Select your budget",
    "budgets": [
      {
        "value": "Below AED 1 million",
        "label": "Below AED 1 million"
      },
      {
        "value": "AED 1 to 2 million",
        "label": "AED 1 to 2 million"
      },
      {
        "value": "AED 2 to 5 million",
        "label": "AED 2 to 5 million"
      },
      {
        "value": "AED 5 to 10 million",
        "label": "AED 5 to 10 million"
      },
      {
        "value": "Above AED 10 million",
        "label": "Above AED 10 million"
      }
    ],
    "note": "Anything else we should know? (optional)",
    "submit": "Request My Shortlist",
    "sending": "Sending...",
    "privacy": "We use your details only to contact you about your enquiry.",
    "thankTitle": "Your request is received.",
    "thankText": "Your dedicated broker will contact you personally on WhatsApp with the best {name} options for your budget.",
    "browse": "Browse all developers",
    "stepsTitle": "What happens next",
    "steps": [
      {
        "title": "You share your budget",
        "text": "Your name, number and budget are all we need."
      },
      {
        "title": "We compare for you",
        "text": "Your broker reviews {name} projects and relevant alternatives."
      },
      {
        "title": "You receive your shortlist",
        "text": "Your best options arrive on WhatsApp, ready to discuss."
      }
    ],
    "disclaimer": "{name} and its logo belong to their respective owner and are shown to identify the developer. iFind Real Estate LLC is an independent real estate brokerage. Availability, prices and payment plans are subject to change and to the developer's confirmation.",
    "waText": "Hello iFind, I am interested in {name} properties.",
    "logoAlt": "{name} logo"
  },

  developersPage: {
    "metaTitle": "Developer Properties in Dubai: Compare Developers & Projects | iFind Real Estate",
    "metaDescription": "Compare Dubai developers and projects by price, location, payment plan, yield and handover before you buy. iFind brokers represent your requirements first.",
    "eyebrow": "Developer Properties",
    "h1": "Your Budget. Your Goals. The Right Dubai Property.",
    "intro": [
      "With hundreds of projects and multiple developers competing across Dubai, choosing the right property should not be based on one project presentation alone.",
      "At iFind Real Estate LLC, we work as professional real estate brokers representing the client's requirements first.",
      "Tell us your budget, preferred payment structure, investment timeline and objectives, and our team evaluates suitable opportunities across multiple developers and projects in the Dubai market."
    ],
    "inputsLabel": "Tell us your",
    "inputs": [
      "Budget",
      "Preferred payment structure",
      "Investment timeline",
      "Objectives"
    ],
    "compare": {
      "eyebrow": "Our Method",
      "title": "We Compare Before We Recommend",
      "lead": "Instead of presenting you with only one developer or one project, we compare relevant options based on factors such as:",
      "items": [
        "Property price and overall value",
        "Location and future development potential",
        "Developer track record",
        "Payment plans and financing considerations",
        "Expected rental demand and potential yield",
        "Capital appreciation potential",
        "Project quality, amenities and positioning",
        "Handover timeline",
        "Service charges and other relevant ownership costs",
        "Exit and resale considerations"
      ],
      "after": "Based on this analysis, we shortlist the opportunities that best match your budget, risk profile and investment objectives."
    },
    "advice": {
      "eyebrow": "Your Advisor",
      "title": "Investment Advice Built Around You",
      "paragraphs": [
        "A property that works for one investor may not necessarily be right for another.",
        "Whether your objective is rental income, long-term capital appreciation, a flexible payment plan, portfolio diversification or purchasing a future home, our brokers help you understand the available choices before you make a commitment.",
        "Where appropriate, we can also compare different unit types, communities and developers to help identify opportunities with stronger potential based on current market information and your individual requirements."
      ],
      "tagsLabel": "Your objective may be",
      "tags": [
        "Rental income",
        "Long-term capital appreciation",
        "A flexible payment plan",
        "Portfolio diversification",
        "Purchasing a future home"
      ]
    },
    "role": {
      "eyebrow": "Our Role",
      "title": "We Don't Just Sell a Project. We Help You Choose the Right One.",
      "paragraphs": [
        "Our role is to simplify the Dubai property market for you.",
        "From understanding your requirements and comparing developers to project selection, negotiation, booking and transaction coordination, iFind Real Estate provides professional guidance throughout your investment journey."
      ],
      "stepsLabel": "Your journey with iFind",
      "steps": [
        "Understanding your requirements",
        "Comparing developers",
        "Project selection",
        "Negotiation",
        "Booking",
        "Transaction coordination"
      ]
    },
    "statement": [
      "Because a good investment decision isn't about buying what's being promoted the most.",
      "It's about finding what makes the most sense for you."
    ],
    "closing": {
      "company": "iFind Real Estate LLC",
      "tagline": "Compare Better. Choose Smarter. Invest with Confidence."
    },
    "partnersEyebrow": "Our Developer Partners"
  },
  offplanPage: {
    "metaTitle": "Off-Plan Properties in Dubai: Invest with the Right Advice | iFind Real Estate",
    "metaDescription": "Off-plan investment in Dubai guided by comparison across developers: project and unit selection, payment plans, reservation to SPA, escrow framework, handover and after-handover support.",
    "eyebrow": "Off-Plan Properties",
    "h1": "Invest in the Future — With the Right Advice Today",
    "intro": [
      "Buying an off-plan property can be one of the most attractive ways to enter Dubai's real estate market — but choosing the right project, developer and unit requires more than simply selecting a property from a brochure.",
      "Unlike a ready property, an off-plan investment is a commitment to something that is still being developed. The decision therefore needs to consider not only today's price, but also the developer, location, master community, payment plan, construction timeline, unit selection, future supply, expected demand, end-user appeal and long-term investment potential."
    ],
    "advice": "This is where professional advice matters.",
    "why": {
      "eyebrow": "The Opportunity",
      "title": "Why Invest in Off-Plan?",
      "paragraphs": [
        "Off-plan properties can provide investors and future homeowners with access to newly launched developments, modern communities and flexible payment structures.",
        "Depending on the project and individual circumstances, an off-plan purchase may offer:"
      ],
      "items": [
        "Attractive launch-stage pricing",
        "Flexible or construction-linked payment plans",
        "Access to newly released units and preferred layouts",
        "Potential capital appreciation during the development period",
        "Modern amenities and contemporary property specifications",
        "Opportunities in emerging and developing communities",
        "The ability to plan an investment over a longer payment horizon"
      ],
      "after": [
        "However, not every off-plan project is the right investment — and not every attractive payment plan represents the best opportunity.",
        "The right property depends on the buyer."
      ]
    },
    "choose": {
      "eyebrow": "Why iFind",
      "title": "Why Choose iFind Real Estate for Off-Plan?",
      "paragraphs": [
        "At iFind Real Estate LLC, we do not believe in simply selling the project that is being launched today.",
        "We believe in finding the project that makes sense for you.",
        "iFind Real Estate is an official channel partner with more than 100 developers, giving our clients access to a broad range of off-plan opportunities across Dubai.",
        "This allows our advisors to compare projects across multiple developers rather than limiting a client to a single developer or development."
      ],
      "startLabel": "We begin with your",
      "start": [
        "Budget",
        "Investment objective",
        "Preferred location",
        "Payment capacity",
        "Property type",
        "Expected holding period",
        "Personal requirements"
      ],
      "after": "We then compare suitable opportunities and help you understand which project may better align with your objectives."
    },
    "compare": {
      "eyebrow": "Our Method",
      "title": "We Compare Before We Recommend",
      "lead": "A beautiful presentation does not necessarily make a great investment. Our advisors assess relevant factors such as:",
      "factors": [
        {
          "title": "Developer Profile & Track Record",
          "text": "We consider the developer, previous projects, delivery history and overall market positioning."
        },
        {
          "title": "Location & Future Potential",
          "text": "We assess connectivity, surrounding infrastructure, community development, future supply and the characteristics that may influence long-term demand."
        },
        {
          "title": "Price & Market Positioning",
          "text": "We compare the project's pricing and offering with relevant alternatives to help determine whether the opportunity makes commercial sense."
        },
        {
          "title": "Payment Plan",
          "text": "A payment plan should fit your financial position — not force your financial position to fit the project. We help clients understand the payment structure, construction-linked or scheduled instalments, applicable fees and financial commitments associated with the purchase."
        },
        {
          "title": "Unit Selection",
          "text": "Within the same project, two units can have very different investment characteristics. Layout, floor, orientation, view, size, positioning and future resale or rental appeal can all matter. Our role is to help you select not only the right project, but also the right unit within that project."
        }
      ]
    },
    "spa": {
      "eyebrow": "The Transaction",
      "title": "From Reservation to SPA",
      "paragraphs": [
        "Once the appropriate property has been selected, our team guides you through the transaction process, including the reservation and booking stages and coordination of the Sale and Purchase Agreement (SPA).",
        "We help clients understand the commercial terms and key property information before proceeding and coordinate with the developer throughout the purchase process.",
        "Where appropriate, buyers should obtain independent legal, financial or tax advice on matters requiring specialist professional advice."
      ],
      "stepsLabel": "The purchase path",
      "steps": [
        "Property selection",
        "Reservation and booking",
        "Sale and Purchase Agreement (SPA)"
      ]
    },
    "framework": {
      "eyebrow": "The Regulated Framework",
      "title": "Understanding Dubai's Off-Plan Framework",
      "paragraphs": [
        "Dubai's off-plan market operates within a regulated framework.",
        "As part of a responsible purchase process, relevant matters can include confirming the project's registration and status, the developer's authorization, the project's designated escrow account and the applicable registration requirements.",
        "Buyer payments for off-plan projects are subject to Dubai's project escrow framework, and off-plan transactions are registered through the applicable Dubai Land Department systems and procedures.",
        "At iFind Real Estate, we help our clients navigate these requirements and understand the documentation and transaction journey before making a commitment."
      ],
      "checksLabel": "A responsible purchase can include confirming",
      "checks": [
        "The project's registration and status",
        "The developer's authorization",
        "The project's designated escrow account",
        "The applicable registration requirements"
      ]
    },
    "handover": {
      "eyebrow": "After the SPA",
      "title": "From Purchase to Handover",
      "paragraphs": [
        "Our relationship does not have to end when the SPA is signed.",
        "Throughout the development period, we can remain a point of contact between our client and the developer, assisting with relevant communications, payment-plan coordination and project-related updates.",
        "As the project approaches completion, we can also guide clients through the applicable handover process, final payment requirements, inspection or snagging coordination where applicable, and the transition toward ownership and occupancy, subject to the developer's procedures and applicable regulations.",
        "And once the property is handed over, iFind can continue supporting the owner.",
        "Whether your objective is to move into the property, lease it, hold it as a long-term investment or consider a future resale, our team can assist with the next stage of your real estate journey."
      ],
      "optionsLabel": "After handover, you may choose to",
      "options": [
        "Move into the property",
        "Lease it",
        "Hold it as a long-term investment",
        "Consider a future resale"
      ]
    },
    "final": {
      "eyebrow": "Why iFind?",
      "title": "Compare Before You Commit",
      "paragraphs": [
        "Because buying off-plan should not be about choosing the project with the biggest advertisement.",
        "It should be about choosing the right developer, right project, right location, right unit and right payment structure — for the right buyer.",
        "With access to 100+ developer partnerships, extensive knowledge of Dubai's real estate market and a client-first advisory approach, iFind Real Estate gives investors the ability to compare before they commit."
      ],
      "chips": [
        "Right developer",
        "Right project",
        "Right location",
        "Right unit",
        "Right payment structure"
      ],
      "statement": "One Market. Hundreds of Projects. One Decision That Needs to Be Right.",
      "company": "iFind Real Estate LLC",
      "tagline": "Finding Value. Building Trust."
    },
    "imageAlts": [
      "Villas under construction at a new Dubai development site",
      "High-rise towers under construction in Dubai at sunset"
    ]
  },
  rentalsPage: {
    "metaTitle": "Rental & Leasing in Dubai: Search, Ejari, DEWA & Move-In | iFind Real Estate",
    "metaDescription": "Rent or lease residential and commercial property in Dubai with iFind. Property search, viewings, negotiation, tenancy contract and Ejari, DEWA and move-in support, renewal and move-out.",
    "eyebrow": "Rental & Leasing",
    "h1": "From Property Search to Move-In — We Handle the Journey",
    "intro": [
      "At iFind Real Estate LLC, we make renting and leasing property in Dubai simple, transparent and professionally managed. Whether you are looking for a residential apartment, villa, commercial office, retail space or another leasing opportunity, our experienced brokers support you throughout the process.",
      "We begin by understanding your budget, preferred location, property requirements and lifestyle or business needs. Instead of presenting random options, we shortlist suitable properties from the market and arrange convenient viewings, helping you compare each option before making a decision."
    ],
    "types": [
      "Residential apartment",
      "Villa",
      "Commercial office",
      "Retail space",
      "Other leasing opportunity"
    ],
    "typesLabel": "We help you lease",
    "stages": [
      {
        "eyebrow": "Viewings & Negotiation",
        "title": "Viewings, Negotiation & Deal Closing",
        "paragraphs": [
          "Once you identify the right property, our broker assists with the negotiation between tenant and landlord, including the rental value, payment terms, number of cheques, security deposit, commencement date and other agreed tenancy conditions.",
          "Our objective is to create a clear and efficient transaction while protecting the interests of all parties and ensuring that the leasing process follows the applicable requirements and procedures in Dubai."
        ],
        "label": "Negotiation covers",
        "points": [
          "Rental value",
          "Payment terms",
          "Number of cheques",
          "Security deposit",
          "Commencement date",
          "Other agreed tenancy conditions"
        ]
      },
      {
        "eyebrow": "Contract & Registration",
        "title": "Tenancy Contract & Ejari Assistance",
        "paragraphs": [
          "After the terms are agreed, we assist with preparing and coordinating the tenancy documentation and guide you through the Ejari registration process in accordance with the applicable Dubai Land Department requirements.",
          "Our team helps ensure that the required information and documentation are properly organized so that the transition from agreed offer to registered tenancy is as smooth as possible."
        ],
        "label": "",
        "points": [] as string[]
      },
      {
        "eyebrow": "Moving In",
        "title": "DEWA & Move-In Support",
        "paragraphs": [
          "Our service does not end when the tenancy contract is signed.",
          "Once the tenancy is registered, we can guide tenants through the next steps required for occupying the property, including DEWA electricity and water activation, building or community move-in procedures, access requirements and other relevant handover formalities.",
          "Where applicable, we also coordinate between the tenant, landlord, property management and building management to help make the move-in process easier and more organized."
        ],
        "label": "Move-in support includes",
        "points": [
          "DEWA electricity and water activation",
          "Building or community move-in procedures",
          "Access requirements",
          "Other relevant handover formalities"
        ]
      },
      {
        "eyebrow": "Moving Out",
        "title": "Move-Out & End-of-Tenancy Support",
        "paragraphs": [
          "When a tenancy comes to an end, our team can also guide tenants and landlords through the relevant move-out procedures, property handover, utility-related formalities, key return and tenancy closure requirements, subject to the tenancy agreement and applicable regulations."
        ],
        "label": "Support includes",
        "points": [
          "Move-out procedures",
          "Property handover",
          "Utility-related formalities",
          "Key return",
          "Tenancy closure requirements"
        ]
      },
      {
        "eyebrow": "Renewal",
        "title": "Renewal & Rental Advisory",
        "paragraphs": [
          "Our relationship with our clients continues throughout the tenancy.",
          "As the contract approaches expiry, iFind Real Estate can assist with renewal discussions, rental negotiations and the preparation and coordination of renewal documentation.",
          "Where rental terms are being reconsidered, we help our clients understand the applicable Dubai rental framework and guide both landlords and tenants toward a transparent and properly documented renewal."
        ],
        "label": "Renewal support includes",
        "points": [
          "Renewal discussions",
          "Rental negotiations",
          "Renewal documentation"
        ]
      }
    ],
    "journeyLabel": "The rental journey",
    "journey": [
      "Search",
      "View",
      "Negotiate",
      "Lease",
      "Register",
      "Move In",
      "Renew"
    ],
    "closing": {
      "title": "Complete Rental Support. One Trusted Team.",
      "text": "From your first property search to your final move-in — and from annual renewal to eventual move-out — iFind Real Estate is there throughout the rental journey.",
      "signoff": "iFind Real Estate LLC — Finding Value. Building Trust."
    },
    "imageAlt": "Modern residence with a terrace and pool"
  },
  readyPage: {
    "metaTitle": "Ready & Luxury Properties in Dubai: Sell, Buy & Invest | iFind Real Estate",
    "metaDescription": "Sell, buy or invest in ready and luxury properties in Dubai. Structured sales strategy, discreet off-market access to global buyers, and one point of contact from first consultation to transfer.",
    "eyebrow": "Ready & Luxury Properties",
    "h1": "A Smarter Way to Sell, Buy & Invest in Dubai",
    "intro": [
      "At iFind Real Estate LLC, we understand that every property requires a different strategy. A ready apartment or villa targeting the wider market cannot be marketed in the same way as an exclusive luxury residence designed for a highly selective buyer.",
      "Our approach combines market knowledge, professional brokerage, strategic marketing and access to local and international buyers — providing a complete solution from the initial instruction to the successful completion of the transaction and beyond."
    ],
    "pillars": [
      "Market knowledge",
      "Professional brokerage",
      "Strategic marketing",
      "Local and international buyers"
    ],
    "sellers": {
      "eyebrow": "For Sellers",
      "title": "From Listing to Successful Sale",
      "paragraphs": [
        "Whether you are selling an apartment, villa, townhouse, penthouse or other ready property in Dubai, iFind provides a structured sales strategy based on the property's location, value, condition and target buyer.",
        "For mid-market and mainstream properties, we can create a strong market presence through leading property portals such as Property Finder and dubizzle, including premium or high-visibility advertising where appropriate. All property marketing is carried out subject to the owner's authorization and applicable Dubai real estate advertising requirements.",
        "Our team supports the seller throughout the process — from property evaluation and pricing strategy to Form A, marketing preparation, buyer enquiries, viewings, offer management, negotiation, documentation and coordination through to transfer and completion."
      ],
      "stepsLabel": "Your sale, step by step",
      "steps": [
        "Property evaluation",
        "Pricing strategy",
        "Form A",
        "Marketing preparation",
        "Buyer enquiries",
        "Viewings",
        "Offer management",
        "Negotiation",
        "Documentation",
        "Transfer and completion"
      ]
    },
    "luxury": {
      "eyebrow": "Luxury Properties",
      "title": "Discreet Access to Global Buyers",
      "paragraphs": [
        "Luxury real estate requires a different level of positioning.",
        "For premium villas, penthouses, signature residences and other high-value properties, iFind can provide a more discreet and targeted approach rather than relying solely on public property portals.",
        "Our dedicated marketing and brokerage team can professionally position selected properties and introduce them directly to our network of high-net-worth individuals, investors, family offices and qualified international buyers across key global markets.",
        "Where privacy is important, we can pursue an off-market or discreet marketing strategy, subject to the owner's instructions and applicable regulatory requirements. This allows selected properties to be presented directly to relevant prospects without unnecessary mass-market exposure."
      ],
      "audienceLabel": "Our network",
      "audience": [
        "High-net-worth individuals",
        "Investors",
        "Family offices",
        "Qualified international buyers"
      ],
      "statement": "Our objective is not simply to advertise a luxury property — it is to identify the right audience, position the asset correctly and create a professional route towards a successful transaction.",
      "imageAlt": "Luxury waterfront villa with a pool at sunset"
    },
    "buyers": {
      "eyebrow": "For Buyers",
      "title": "One Point of Contact, Complete Support",
      "paragraphs": [
        "Buying a ready or luxury property in Dubai involves much more than finding an attractive listing.",
        "At iFind Real Estate, we first understand the buyer's requirements, preferred locations, budget, lifestyle objectives and investment expectations. Our brokers then identify suitable opportunities from the market as well as selected properties available through our professional network.",
        "For luxury and investment-focused buyers, our network can also provide access to selected off-market and privately marketed opportunities that may not be widely promoted through conventional property portals.",
        "Once the right property is identified, our team assists with the transaction process — including negotiations, relevant RERA forms, documentation coordination, MOU/Form F process where applicable, NOC and transfer coordination, and communication with the relevant parties until completion."
      ],
      "understandLabel": "We start by understanding",
      "understand": [
        "Your requirements",
        "Preferred locations",
        "Budget",
        "Lifestyle objectives",
        "Investment expectations"
      ],
      "supportLabel": "We then assist with",
      "support": [
        "Negotiations",
        "Relevant RERA forms",
        "Documentation coordination",
        "MOU / Form F process where applicable",
        "NOC and transfer coordination",
        "Communication with the relevant parties until completion"
      ]
    },
    "journey": {
      "eyebrow": "Our Journey with You",
      "title": "From Search to Transfer — and Beyond",
      "paragraphs": [
        "Dubai property transactions can involve multiple parties, documents, approvals and procedures. As professional real estate brokers, our role is to make that journey as organized and convenient as possible for both buyers and sellers.",
        "From the first consultation and Form A through marketing, negotiations, transaction documentation and closing, iFind coordinates the brokerage process in accordance with applicable Dubai Land Department (DLD) and RERA requirements."
      ],
      "after": {
        "title": "Our relationship does not end at transfer.",
        "text": "Through our after-sales support, we remain available to assist clients with property-related coordination and connect them with relevant professional services where required."
      }
    },
    "closing": {
      "title": "One Property. One Strategy. One Trusted Partner.",
      "text": "Whether you are selling a ready apartment, privately marketing a luxury residence, searching for your next home or acquiring a premium investment, iFind Real Estate provides one professional point of contact throughout the journey.",
      "tags": [
        "Ready Properties",
        "Luxury Residences",
        "Private Opportunities",
        "Professional Execution"
      ],
      "signoff": "iFind Real Estate LLC — Finding Value. Building Trust."
    }
  },
  landPage: {
    "metaTitle": "Land, Buildings & Private Investment Assets in Dubai | iFind Real Estate",
    "metaDescription": "Private and off-market sale and acquisition of buildings, hotels, land, villas and investment assets in Dubai, coordinated from strategy and due diligence to final transfer under DLD and RERA requirements.",
    "eyebrow": "Land, Buildings & Private Investment Assets",
    "h1": "Private Access. Serious Capital. Complete Execution.",
    "statement": "Some real estate assets should not be marketed to everyone.",
    "intro": [
      "At iFind Real Estate LLC, our Land & Buildings division is designed for owners and investors dealing with substantial real estate assets — including residential and commercial buildings, investment properties, hotels and hospitality assets, villas and villa portfolios, development plots, commercial land and other high-value real estate opportunities across Dubai.",
      "Through our established relationships with private investors, family offices, high-net-worth individuals, institutional buyers, developers and investment groups in the UAE and internationally, we create a direct connection between serious assets and serious capital.",
      "Our role extends beyond introducing a buyer and seller. We coordinate the transaction from initial strategy and commercial assessment through negotiations, due diligence, documentation and final transfer, working within the applicable Dubai Land Department and RERA framework."
    ],
    "owners": {
      "eyebrow": "For Property Owners",
      "challenge": {
        "title": "Selling a Major Asset Without Exposing It to the Entire Market",
        "lead": [
          "Selling a building, hotel, land parcel or substantial investment asset is very different from selling a conventional residential property.",
          "For many owners, widespread advertising is neither necessary nor desirable."
        ],
        "kind": "list",
        "label": "An owner may want to:",
        "items": [
          "Maintain complete discretion around the proposed sale.",
          "Avoid unnecessary exposure across multiple property portals.",
          "Protect tenants, employees, operators or existing commercial relationships.",
          "Avoid circulating sensitive financial and property information publicly.",
          "Reach genuine investors rather than receiving unqualified enquiries.",
          "Establish the right market positioning before approaching buyers.",
          "Negotiate with parties who have the financial capacity to complete.",
          "Manage complex legal, commercial and transaction documentation professionally."
        ],
        "after": [] as string[]
      },
      "solution": {
        "title": "Private & Targeted Asset Disposal",
        "lead": [
          "At iFind, selected assets can be handled through a confidential, targeted sale process rather than broad public-market exposure.",
          "Subject to the owner's instructions and applicable regulatory requirements, we can introduce an asset directly to selected investors from our network without relying solely on mass-market property portals."
        ],
        "kind": "none",
        "label": "",
        "items": [] as string[],
        "after": [] as string[]
      },
      "subs": [
        {
          "title": "Confidential Off-Market Positioning",
          "lead": [
            "For owners seeking discretion, we can structure the sale around controlled information distribution.",
            "Instead of exposing sensitive information to the entire marketplace, detailed information may be shared progressively with appropriately qualified parties.",
            "Where appropriate, this can include:"
          ],
          "kind": "flow",
          "label": "",
          "items": [
            "Initial Opportunity",
            "Buyer Qualification",
            "NDA/Confidentiality",
            "Financial Capability",
            "Detailed Asset Information",
            "Negotiation",
            "Due Diligence",
            "Contract",
            "Transfer"
          ],
          "after": [
            "This allows an owner to maintain greater control over who sees the asset, what information is disclosed and at what stage of the transaction."
          ]
        },
        {
          "title": "Access to Qualified Capital",
          "lead": [
            "Our network extends beyond conventional property enquiries.",
            "iFind maintains relationships with investors and acquisition parties across Dubai and international markets, allowing us to connect suitable assets with:"
          ],
          "kind": "chips",
          "label": "",
          "items": [
            "High-Net-Worth Individuals",
            "Family Offices",
            "Private Investors",
            "Developers",
            "Investment Groups",
            "Corporate Buyers",
            "Hospitality Investors",
            "International Capital"
          ],
          "after": [
            "Our objective is not to generate the highest number of enquiries.",
            "Our objective is to identify the right buyer."
          ]
        },
        {
          "title": "Asset Positioning & Commercial Assessment",
          "lead": [
            "Before approaching the market, we work with the owner to understand the asset commercially.",
            "Depending on the property, this may involve reviewing:"
          ],
          "kind": "chips",
          "label": "",
          "items": [
            "Location & Land Value",
            "Existing Rental Income",
            "Occupancy",
            "Lease Profile",
            "Operating Performance",
            "Development Potential",
            "Plot & Built-Up Area",
            "Permitted Use",
            "Comparable Transactions",
            "Existing Financing or Mortgage Position",
            "Potential Buyer Profile",
            "Indicative Investment Yield",
            "Potential Exit Strategy"
          ],
          "after": [
            "This allows the asset to be positioned intelligently rather than simply advertised."
          ]
        },
        {
          "title": "Negotiation & Deal Structuring",
          "lead": [
            "Large transactions frequently involve more than agreeing on a headline price.",
            "Our team assists in coordinating commercial negotiations relating to transaction structure, payment terms, deposits, timelines, conditions precedent, existing leases, financing considerations and completion requirements.",
            "Our focus is to protect the owner's commercial position while keeping the transaction realistic and executable."
          ],
          "kind": "none",
          "label": "",
          "items": [] as string[],
          "after": [] as string[]
        },
        {
          "title": "Documentation & Legal Coordination",
          "lead": [
            "High-value transactions require disciplined documentation.",
            "Together with appropriately qualified legal and professional advisers where required, iFind can coordinate the transaction documentation process, including confidentiality arrangements, expressions of interest, letters of intent, brokerage documentation, memoranda of understanding, sale and purchase documentation and supporting transaction documents.",
            "All brokerage, marketing, advertising and transfer activities are undertaken subject to the applicable Dubai regulatory requirements."
          ],
          "kind": "none",
          "label": "",
          "items": [] as string[],
          "after": [] as string[]
        }
      ]
    },
    "investors": {
      "eyebrow": "For Investors & Buyers",
      "challenge": {
        "title": "The Best Asset May Never Reach a Property Portal",
        "lead": [
          "Major investors often face a different problem.",
          "They have capital available but finding the right asset at the right valuation with the right fundamentals can be difficult.",
          "Many significant owners prefer discretion, and some investment opportunities may therefore be circulated privately rather than through broad public advertising.",
          "That means conventional online searching alone may not provide a complete view of potential acquisition opportunities."
        ],
        "kind": "none",
        "label": "",
        "items": [] as string[],
        "after": [] as string[]
      },
      "solution": {
        "title": "Access Beyond the Conventional Market",
        "lead": [
          "iFind works to connect qualified investors with suitable on-market and privately introduced opportunities across Dubai.",
          "Depending on availability and the investor's acquisition criteria, these may include:"
        ],
        "kind": "chips",
        "label": "",
        "items": [
          "Whole Buildings",
          "Commercial Buildings",
          "Residential Buildings",
          "Hotels & Hospitality Assets",
          "Income-Producing Properties",
          "Warehouses & Industrial Assets",
          "Commercial & Residential Land",
          "Development Plots",
          "Villa Portfolios",
          "Single High-Value Villas",
          "Redevelopment Opportunities",
          "Strategic Land Holdings"
        ],
        "after": [
          "Rather than presenting an investor with every available property, our approach is to understand the investment mandate first and then identify opportunities that merit further consideration."
        ]
      }
    },
    "strategy": {
      "eyebrow": "Investment Acquisition Strategy",
      "title": "We Start With the Investor — Not the Property",
      "mandate": {
        "title": "",
        "lead": [
          "Before recommending an acquisition, we seek to understand:"
        ],
        "kind": "chips",
        "label": "",
        "items": [
          "Available Capital",
          "Target Asset Class",
          "Preferred Location",
          "Investment Horizon",
          "Income Requirements",
          "Target Yield",
          "Capital Appreciation Objectives",
          "Development Strategy",
          "Risk Parameters",
          "Financing Requirements",
          "Preferred Exit Strategy"
        ],
        "after": [
          "Once the mandate is understood, our team can source and evaluate suitable opportunities."
        ]
      },
      "analysis": {
        "title": "Commercial & Investment Analysis",
        "lead": [
          "An attractive asking price does not automatically make an attractive investment.",
          "Depending on the nature of the asset and information available, we can assist investors in reviewing relevant commercial factors such as:"
        ],
        "kind": "chips",
        "label": "",
        "items": [
          "Purchase Price",
          "Price Per Square Foot",
          "Land Value",
          "Existing Rental Income",
          "Occupancy",
          "Operating Expenses",
          "Service Charges",
          "Net Operating Income",
          "Indicative Yield",
          "Comparable Market Transactions",
          "Potential Development or Repositioning Opportunity",
          "Estimated Holding Costs",
          "Financing Considerations",
          "Potential Exit Value"
        ],
        "after": [
          "Our objective is to help the investor understand the commercial logic behind an acquisition before proceeding."
        ]
      }
    },
    "diligence": {
      "eyebrow": "Due Diligence Before Acquisition",
      "title": "Know What You Are Buying",
      "body": {
        "title": "",
        "lead": [
          "Before completing a substantial acquisition, appropriate due diligence is critical.",
          "Depending on the transaction and asset type, iFind can coordinate with the relevant qualified professionals and authorities to assist with reviewing matters such as:"
        ],
        "kind": "chips",
        "label": "",
        "items": [
          "Ownership & Title Documentation",
          "Mortgage or Encumbrance Position",
          "Property Information",
          "Existing Tenancies and Lease Documentation",
          "Developer or Community Requirements",
          "Land and Planning Information",
          "Asset Valuation",
          "Corporate Seller Documentation",
          "Property Income Information",
          "Transaction Documentation",
          "Required NOCs and Approvals",
          "Transfer Requirements"
        ],
        "after": [
          "For hotels, commercial buildings and other operating assets, additional financial, operational, corporate, technical or legal due diligence may be required and can be coordinated with the relevant professional advisers."
        ]
      }
    },
    "process": {
      "eyebrow": "From Opportunity to Ownership",
      "title": "One Point of Coordination",
      "paragraphs": [
        "A major acquisition can involve owners, buyers, brokers, lawyers, banks, valuers, consultants, developers, trustees and government authorities.",
        "iFind acts as a central real estate transaction coordinator, helping keep the process organised from beginning to completion."
      ],
      "stepsTitle": "Our Acquisition Process",
      "steps": [
        {
          "title": "Investor Mandate",
          "text": "We understand exactly what the investor wants to acquire."
        },
        {
          "title": "Asset Sourcing",
          "text": "We identify suitable public and privately introduced opportunities."
        },
        {
          "title": "Preliminary Analysis",
          "text": "We assess the commercial fundamentals of shortlisted assets."
        },
        {
          "title": "Confidential Access",
          "text": "Where required, confidentiality documentation and controlled information sharing are coordinated."
        },
        {
          "title": "Buyer Qualification",
          "text": "Financial capability and transaction readiness may be established before sensitive information is released."
        },
        {
          "title": "Negotiation",
          "text": "We coordinate commercial discussions between buyer and seller."
        },
        {
          "title": "Due Diligence",
          "text": "Legal, property, financial and other relevant checks are coordinated with the appropriate professionals."
        },
        {
          "title": "Transaction Documentation",
          "text": "Required brokerage and sale documentation is prepared or coordinated in accordance with the applicable transaction requirements."
        },
        {
          "title": "Transfer & Completion",
          "text": "We coordinate the parties and relevant professionals through the required transfer and registration process."
        },
        {
          "title": "Post-Acquisition Strategy",
          "text": "Where required, we can assist with leasing, resale strategy or connect the investor with appropriately licensed property-management and professional service providers."
        }
      ]
    },
    "land": {
      "eyebrow": "Land Acquisition & Development Opportunities",
      "title": "Land Acquisition & Development Opportunities",
      "body": {
        "title": "",
        "lead": [
          "Land requires a different level of understanding.",
          "The value of a plot is influenced not only by its location and size, but also by its permitted use, planning parameters, development potential, access, surrounding infrastructure and the economics of the proposed development.",
          "For developers and sophisticated investors, iFind can assist with sourcing opportunities across appropriate categories such as:"
        ],
        "kind": "chips",
        "label": "",
        "items": [
          "Residential Development Land",
          "Commercial Land",
          "Mixed-Use Opportunities",
          "Villa Development Plots",
          "Hospitality Sites",
          "Strategic Investment Land",
          "Selected Redevelopment Opportunities"
        ],
        "after": [
          "Where specialist planning, engineering, valuation, legal or development advice is required, we coordinate with the appropriate qualified professionals so that the investor can evaluate the opportunity with the necessary information."
        ]
      }
    },
    "buildings": {
      "eyebrow": "Buildings & Income-Producing Assets",
      "title": "Buildings & Income-Producing Assets",
      "body": {
        "title": "",
        "lead": [
          "For investors focused on recurring income, iFind sources and evaluates selected completed investment assets.",
          "Our approach considers not simply the property's headline yield, but the sustainability of the underlying income.",
          "Where information is available, analysis may consider:"
        ],
        "kind": "chips",
        "label": "",
        "items": [
          "Current Rent Roll",
          "Occupancy",
          "Lease Expiries",
          "Operating Costs",
          "Service Charges",
          "Net Income",
          "Tenant Concentration",
          "Asset Condition",
          "Market Rent Potential",
          "Repositioning Potential",
          "Exit Liquidity"
        ],
        "after": [
          "The objective is to help investors distinguish between a property that merely appears attractive and an asset with a commercially sustainable investment case."
        ]
      }
    },
    "hotels": {
      "eyebrow": "Hotels & Hospitality Assets",
      "title": "Hotels & Hospitality Assets",
      "paragraphs": [
        "Hotel transactions require additional discretion and specialised commercial analysis.",
        "iFind can privately connect hotel owners with suitable acquisition parties and assist investors in identifying hospitality opportunities in Dubai.",
        "Depending on the transaction, the process may involve reviewing or coordinating analysis of the asset, location, operating structure, historical performance, occupancy, revenue information, operator arrangements and potential repositioning strategy, with specialist advisers engaged where appropriate.",
        "Sensitive commercial information can be handled through a controlled due-diligence process rather than unnecessary public circulation."
      ]
    },
    "why": {
      "eyebrow": "Why iFind?",
      "title": "Because Major Assets Require More Than Advertising.",
      "paragraphs": [
        "A portal can advertise a property.",
        "A serious transaction requires relationships, discretion, commercial understanding, negotiation, documentation and execution.",
        "At iFind Real Estate LLC, we bring these elements together.",
        "For the seller, we provide a controlled route to qualified capital.",
        "For the buyer, we provide access to carefully considered opportunities and a structured acquisition process.",
        "For both sides, we work toward one objective:"
      ],
      "statement": "A Transparent, Professional and Executable Transaction."
    },
    "closing": {
      "title": "Private Assets. Global Investors. Local Expertise.",
      "text": "Whether you are an owner considering the confidential disposal of a major Dubai asset or an investor seeking your next acquisition, iFind provides a direct route from opportunity to transaction.",
      "tags": [
        "Land",
        "Buildings",
        "Hotels",
        "Commercial Assets",
        "Investment Properties",
        "Villas",
        "Development Opportunities",
        "Private & Off-Market Transactions"
      ]
    },
    "disclaimer": "All opportunities are subject to availability, owner authorisation, due diligence and applicable UAE and Dubai laws and regulations. References to returns, yields, valuations or investment performance are indicative assessments only and do not constitute a guarantee of future performance. Public advertising and marketing, where undertaken, remain subject to applicable DLD/RERA permits and requirements. Legal, financial, valuation, property-management and other regulated or specialist services are provided or coordinated through appropriately licensed or qualified professionals where required.",
    "labels": {
      "challenge": "The Challenge",
      "solution": "The iFind Solution",
      "imagesBuildings": [
        "Waterfront high-rise towers in Dubai under a blue sky",
        "Dubai high-rise skyline with the Burj Khalifa"
      ],
      "imageHotel": "Luxury hotel entrance with fountains at dusk",
      "imagesLand": [
        "Open plots of land in Dubai with the city skyline behind",
        "Aerial map view of a master-planned plot area"
      ]
    }
  },
  investorPage: {
    "metaTitle": "Investor Advisory & Investment Solutions in Dubai | iFind Real Estate",
    "metaDescription": "Investor advisory for Dubai real estate: investment strategy, financing coordination, due diligence, legal and contract support, end-to-end transaction management and portfolio review.",
    "eyebrow": "Investor Advisory & Investment Solutions",
    "h1": "Strategic Property Investment. Structured for Long-Term Value.",
    "intro": [
      "At iFind Real Estate LLC, we provide investors with a comprehensive approach to Dubai real estate — combining market intelligence, property sourcing, financing coordination, transaction structuring, legal support and portfolio strategy under one trusted platform.",
      "Our objective is simple: to help our clients deploy their capital intelligently, understand the risks behind every opportunity and make well-informed property decisions with complete transparency."
    ],
    "strategy": {
      "title": "Investment Strategy & Capital Planning",
      "paragraphs": [
        "Every investor has different objectives. Whether the priority is capital appreciation, rental income, portfolio diversification, commercial assets, land acquisition or long-term wealth creation, our team evaluates each opportunity around the investor’s individual strategy."
      ],
      "lead": "We assist with:",
      "items": [
        {
          "title": "Capital Allocation Strategy",
          "text": "Identifying how available investment capital can be allocated across suitable real estate opportunities."
        },
        {
          "title": "ROI & Yield Analysis",
          "text": "Assessing expected rental yield, acquisition costs, service charges, potential appreciation and overall investment performance."
        },
        {
          "title": "Cash Flow Assessment",
          "text": "Evaluating projected income, holding costs and financing obligations before acquisition."
        },
        {
          "title": "Portfolio Diversification",
          "text": "Identifying opportunities across residential, commercial, land and selected off-plan or income-generating assets."
        },
        {
          "title": "Exit Strategy Planning",
          "text": "Considering liquidity, resale potential and investment horizon from the beginning of the transaction."
        }
      ]
    },
    "financing": {
      "title": "Financing & Mortgage Coordination",
      "paragraphs": [
        "For investors seeking leverage, iFind assists in coordinating with appropriately licensed banks, mortgage providers and financial institutions to identify suitable financing options.",
        "Our team can support the process through Loan-to-Value (LTV) assessment, Debt Burden Ratio (DBR) considerations, down-payment planning, property valuation coordination, mortgage documentation and transaction completion, subject to the eligibility criteria and final approval of the relevant financial institution.",
        "We help investors understand the financial structure of a transaction before committing capital — including the potential impact of financing costs on cash flow and investment returns."
      ],
      "pointsLabel": "Support includes",
      "points": [
        "Loan-to-Value (LTV) assessment",
        "Debt Burden Ratio (DBR) considerations",
        "Down-payment planning",
        "Property valuation coordination",
        "Mortgage documentation",
        "Transaction completion"
      ]
    },
    "diligence": {
      "title": "Acquisition & Due Diligence",
      "paragraphs": [
        "A successful investment begins before the purchase.",
        "Our team conducts transaction-level assessment and coordinates appropriate due diligence covering the property, developer, ownership documentation, pricing, comparable transactions, payment structure and relevant transaction requirements.",
        "For off-plan investments, we also assist investors in reviewing key project information and the applicable registration and payment framework."
      ],
      "pointsLabel": "Due diligence covers",
      "points": [
        "Property",
        "Developer",
        "Ownership documentation",
        "Pricing",
        "Comparable transactions",
        "Payment structure",
        "Relevant transaction requirements"
      ]
    },
    "legal": {
      "title": "Legal & Contractual Support",
      "paragraphs": [
        "Through our legal support network, investors can receive assistance throughout the contractual process, including the preparation, coordination and review of transaction-related documentation.",
        "Depending on the transaction, this may include sale and purchase documentation, reservation documents, MOUs, NDAs, commission agreements, corporate acquisition documentation and other property-related agreements.",
        "Our focus is to ensure that investors understand the commercial terms, obligations and transaction structure before proceeding."
      ],
      "pointsLabel": "Documentation may include",
      "points": [
        "Sale and purchase documentation",
        "Reservation documents",
        "MOUs",
        "NDAs",
        "Commission agreements",
        "Corporate acquisition documentation",
        "Other property-related agreements"
      ]
    },
    "transaction": {
      "title": "End-to-End Transaction Management",
      "paragraphs": [
        "From identifying an opportunity to completing the acquisition, iFind coordinates the entire property transaction.",
        "We assist with property sourcing, negotiations, documentation, financing coordination, valuation, developer or seller communication, conveyancing coordination, DLD-related procedures and final transfer or registration.",
        "For international investors, our team can also coordinate the transaction remotely where legally permissible and subject to the required documentation and authorisations."
      ],
      "stepsLabel": "The process",
      "steps": [
        "Property sourcing",
        "Negotiations",
        "Documentation",
        "Financing coordination",
        "Valuation",
        "Developer or seller communication",
        "Conveyancing coordination",
        "DLD-related procedures",
        "Final transfer or registration"
      ]
    },
    "portfolio": {
      "title": "Portfolio Review & Ongoing Property Strategy",
      "paragraphs": [
        "Our relationship with investors does not have to end when a property is purchased.",
        "We can periodically review a client's real estate portfolio, market positioning, rental performance and emerging opportunities to help identify whether the strategy should be to hold, lease, acquire, diversify or exit an asset."
      ],
      "pointsLabel": "Strategy options",
      "points": [
        "Hold",
        "Lease",
        "Acquire",
        "Diversify",
        "Exit"
      ]
    },
    "advice": {
      "title": "Independent Thinking. Transparent Advice.",
      "paragraphs": [
        "At iFind, we believe an investor should never be pushed into a transaction simply because a property is available.",
        "If we believe an opportunity does not fit the investor's objectives, risk profile or financial structure, we say so.",
        "Our priority is not simply to close a transaction. It is to build long-term relationships through transparency, disciplined analysis and responsible real estate advice."
      ],
      "imageAlt": "A consultant advising an investor in a Dubai office with a view of the skyline"
    },
    "closing": {
      "title": "Your Capital. Your Strategy. Our Expertise.",
      "text": "From your first investment in Dubai to building a diversified real estate portfolio, iFind Real Estate LLC provides the market access, transaction expertise and professional support required to invest with greater clarity and confidence.",
      "tags": [
        "Property Sourcing",
        "Investment Analysis",
        "Financing Coordination",
        "Due Diligence",
        "Legal & Contract Support",
        "Acquisition",
        "Portfolio Strategy",
        "Exit Planning"
      ]
    },
    "disclaimer": "All property investments are subject to market risk. Financing is subject to the eligibility criteria, terms and approval of licensed banks or financial institutions. iFind Real Estate LLC provides real estate brokerage and transaction-related services within the scope of its applicable licences and coordinates legal, financing and other regulated professional services through appropriately qualified or licensed service providers where required."
  },
  careers: {
    metaTitle: "Careers at iFind Real Estate | Join Our Dubai Team",
    metaDescription: "Apply for a career at iFind Real Estate LLC in Business Bay, Dubai. Send your CV for real estate consultant, sales, leasing, marketing, operations and administration roles.",
    eyebrow: "Careers",
    h1: "Build your career with iFind",
    lede: "We are always glad to meet motivated people who value honesty, clarity and service. Send us your details and CV, and our team will review your application.",
    whyEyebrow: "Why iFind",
    whyTitle: "A team built on trust",
    why: [
      { title: "Licensed Professionals", text: "Work alongside registered brokers who know the Dubai and UAE market." },
      { title: "Honest Advice", text: "A culture that puts the client's real interest first." },
      { title: "Multinational Team", text: "A global perspective combined with deep local expertise." },
      { title: "Full-Service Market", text: "Off-plan, ready, luxury, rentals, land, buildings and hotels." },
    ],
    areasEyebrow: "Areas",
    areasTitle: "Who we are looking for",
    areasText: "We do not list fixed vacancies here. Choose the area you are interested in and we will contact you when there is a suitable opening.",
    formEyebrow: "Apply",
    formTitle: "Send your application",
    formText: "Complete the form and attach your CV. Fields marked * are required.",
    sectionPersonal: "Personal details",
    sectionProfessional: "Professional details",
    sectionDocuments: "Documents",
    fullName: "Full name *",
    email: "Email address *",
    phone: "Phone / WhatsApp *",
    nationality: "Nationality",
    location: "Current city and country",
    position: "Position you are applying for *",
    positionPlaceholder: "Select a position",
    positions: [
      { value: "Real Estate Consultant", label: "Real Estate Consultant" },
      { value: "Sales Manager", label: "Sales Manager" },
      { value: "Leasing / Rentals Consultant", label: "Leasing / Rentals Consultant" },
      { value: "Digital Marketing", label: "Digital Marketing" },
      { value: "Operations / Administration", label: "Operations / Administration" },
      { value: "Accounts / Finance", label: "Accounts / Finance" },
      { value: "Public Relations Officer (PRO)", label: "Public Relations Officer (PRO)" },
      { value: "Other / Open application", label: "Other / Open application" },
    ],
    experience: "Years of experience",
    experiencePlaceholder: "Select",
    experienceOptions: [
      { value: "Fresher", label: "Fresher" },
      { value: "Less than 1 year", label: "Less than 1 year" },
      { value: "1 to 3 years", label: "1 to 3 years" },
      { value: "3 to 5 years", label: "3 to 5 years" },
      { value: "5+ years", label: "5+ years" },
    ],
    employer: "Current or last employer",
    brn: "RERA / DLD BRN (if you have one)",
    visa: "Visa status",
    visaPlaceholder: "Select",
    visaOptions: [
      { value: "UAE residence visa", label: "UAE residence visa" },
      { value: "Visit / tourist visa", label: "Visit / tourist visa" },
      { value: "Outside the UAE", label: "Outside the UAE" },
    ],
    availability: "When can you start?",
    availabilityPlaceholder: "Select",
    availabilityOptions: [
      { value: "Immediately", label: "Immediately" },
      { value: "Within 2 weeks", label: "Within 2 weeks" },
      { value: "Within 1 month", label: "Within 1 month" },
      { value: "More than 1 month", label: "More than 1 month" },
    ],
    salary: "Expected monthly salary (AED, optional)",
    languages: "Languages you speak",
    languageOptions: [
      { value: "English", label: "English" },
      { value: "Arabic", label: "Arabic" },
      { value: "Urdu", label: "Urdu" },
      { value: "Hindi", label: "Hindi" },
      { value: "Punjabi", label: "Punjabi" },
      { value: "Pashto", label: "Pashto" },
      { value: "Russian", label: "Russian" },
      { value: "Other", label: "Other" },
    ],
    linkedin: "LinkedIn profile link (optional)",
    note: "Tell us briefly about yourself and why you would like to join iFind",
    cv: "Upload your CV *",
    cvHint: "PDF, DOC or DOCX",
    coverLetter: "Cover letter (optional)",
    otherDocs: "Other documents, such as certificates (optional)",
    chooseFile: "Choose file",
    chooseFiles: "Choose files",
    noFile: "No file chosen",
    remove: "Remove",
    limits: "PDF, DOC or DOCX only. Maximum 4 MB in total for all files.",
    consent: "I agree that iFind Real Estate LLC may store and use my details to assess my application.",
    submit: "Submit Application",
    sending: "Submitting...",
    thankTitle: "Thank you for applying.",
    thankText: "We have received your application. If your profile matches an opening, our team will contact you.",
    another: "Submit another application",
    errors: {
      required: "Please complete all required fields.",
      cvMissing: "Please upload your CV.",
      fileType: "Only PDF, DOC and DOCX files are accepted.",
      fileSize: "Your files are too large. Please keep the total under 4 MB.",
      consent: "Please accept the consent statement to continue.",
      unavailable: "Online applications are temporarily unavailable. Please email your CV to {email}.",
      generic: "Something went wrong. Please try again in a moment.",
    },
  },
  servicePage: {
    whatWeDo: "What we do",
    howWeHelp: "How we help",
    ourService: "Our service",
    process: "Process",
    processTitle: "From first call to closing",
  },
  servicePages: {
    offPlan: {
      metaTitle: "Off-Plan Properties in Dubai",
      metaDescription: "Early access to off-plan launches from Dubai's leading developers, with clear guidance on payment plans and handover.",
      eyebrow: "Off-Plan",
      title: "Off-Plan Properties",
      intro: "Early access to new launches from Dubai's established developers, explained clearly before you commit.",
      heroAlt: "Villas under construction at a new Dubai development site",
      featureAlt: "High-rise towers under construction in Dubai at sunset",
      sectionTitle: "Buy early, with clear eyes",
      sectionText:
        "Off-plan can offer attractive entry points, but every project has its own payment plan, timeline and risk profile. We help you compare launches side by side and understand exactly what you are signing.",
      offers: [
        { title: "Launch Access", text: "Information on new and upcoming launches from the developers we are registered with." },
        { title: "Payment Plan Review", text: "A plain-language breakdown of instalments, milestones and handover terms." },
        { title: "Project Comparison", text: "Location, developer track record, unit mix and specification compared fairly." },
        { title: "Unit Selection", text: "Help choosing the right unit, floor and view for your goal, whether living or investing." },
        { title: "Resale and Assignment", text: "Guidance if you want to sell an off-plan unit before handover." },
        { title: "Documentation", text: "Support through reservation, SPA and registration, step by step." },
      ],
      closing: null as null | { title: string; text: string },
    },
    readyLuxury: {
      metaTitle: "Ready & Luxury Properties in Dubai",
      metaDescription: "Move-in-ready homes and prime luxury residences across Dubai: apartments, villas, townhouses and penthouses.",
      eyebrow: "Ready & Luxury",
      title: "Ready & Luxury Properties",
      intro: "From well-priced everyday homes to signature residences in Dubai's most sought-after addresses.",
      heroAlt: "Luxury waterfront villa with a pool at sunset",
      featureAlt: "Luxury interior with a glass and marble staircase",
      sectionTitle: "Find the right home, at the right value",
      sectionText:
        "Whether you want a practical apartment or a landmark penthouse, we work from your brief and show you what is genuinely worth your attention, not simply what is available.",
      offers: [
        { title: "Apartments", text: "Studios to multi-bedroom residences across Dubai's established and emerging communities." },
        { title: "Villas and Townhouses", text: "Family homes with space, privacy and strong community amenities." },
        { title: "Luxury Residences", text: "Prime penthouses, branded residences and waterfront homes at the top end of the market." },
        { title: "Private Viewings", text: "Scheduled around you, with honest feedback on each property." },
        { title: "Price Guidance", text: "Comparable-based advice so you buy and sell with confidence." },
        { title: "Selling Your Property", text: "Positioning, pricing and presentation to reach serious buyers." },
      ],
      closing: null as null | { title: string; text: string },
    },
    rentals: {
      metaTitle: "Rentals & Leasing in Dubai",
      metaDescription: "Residential and commercial leasing for tenants and landlords in Dubai and across the UAE.",
      eyebrow: "Rentals & Leasing",
      title: "Rentals & Leasing",
      intro: "Residential and commercial leasing for tenants and landlords, handled with clarity and discretion.",
      heroAlt: "Modern residence with a terrace and pool",
      featureAlt: "Terrace lounge of a modern Dubai home",
      sectionTitle: "The right tenant. The right place.",
      sectionText:
        "We connect landlords with reliable tenants and tenants with properties that suit their needs and budget, and we keep the process straightforward from viewing to signing.",
      offers: [
        { title: "For Tenants", text: "A focused shortlist matched to your budget, location and lifestyle." },
        { title: "For Landlords", text: "Marketing, viewings and tenant screening to place your property well." },
        { title: "Commercial Leasing", text: "Offices, retail units, warehouses and other commercial spaces." },
        { title: "Rental Guidance", text: "Realistic rent expectations based on current comparable listings." },
        { title: "Tenancy Paperwork", text: "Support with contracts and registration so everything is in order." },
        { title: "Long and Short Term", text: "Options to suit different lease lengths and requirements." },
      ],
      closing: null as null | { title: string; text: string },
    },
    land: {
      metaTitle: "Land, Buildings & Hotels in the UAE",
      metaDescription: "Buy and sell plots, enter joint ventures and complete complex deals across the UAE, including warehouses, buildings and hotels.",
      eyebrow: "Land, Buildings & Hotels",
      title: "Land, Buildings & Hotels",
      intro: "Plots, joint ventures and complex commercial deals across the UAE, including opportunities beyond it.",
      heroAlt: "Dubai skyline at sunset",
      featureAlt: "High-rise balcony with a view of the Burj Khalifa",
      sectionTitle: "Complex deals, handled with experience",
      sectionText:
        "Land and large assets need careful structuring. We work on single plots and multiple plots, joint ventures, and transactions involving warehouses, buildings and hotels. We source, evaluate and negotiate on your behalf.",
      offers: [
        { title: "Plot Sales and Purchases", text: "Residential, commercial and mixed-use land across the UAE." },
        { title: "Multiple Plots", text: "Assembling or selling several plots together as a single transaction." },
        { title: "Joint Ventures", text: "Introductions and deal structuring between landowners and developers." },
        { title: "Buildings", text: "Whole-building acquisitions and sales for investors and end users." },
        { title: "Hotels and Hospitality", text: "Hotel and hospitality assets for qualified buyers and sellers." },
        { title: "Warehouses", text: "Industrial and logistics properties for sale or lease." },
      ],
      sections: [
        {
          eyebrow: "Buildings",
          title: "Whole buildings, bought and sold with care",
          text: "Buildings are significant assets and need careful evaluation. We handle whole-building acquisitions and sales for investors and end users, from first introduction to completion.",
          points: [
            { title: "Whole-Building Acquisitions", text: "Sourcing and evaluating buildings that match your brief." },
            { title: "Building Sales", text: "Positioning and negotiation for owners who want to sell." },
            { title: "Warehouses", text: "Industrial and logistics properties for sale or lease." },
          ],
          alts: ["Waterfront high-rise towers in Dubai under a blue sky", "Dubai high-rise skyline with the Burj Khalifa"],
        },
        {
          eyebrow: "Hotels",
          title: "Hotels and hospitality assets",
          text: "Hotel and hospitality assets for qualified buyers and sellers. We approach each opportunity with discretion, and tell you honestly what we can and cannot do.",
          points: [
            { title: "Hotels and Hospitality", text: "Hotel and hospitality assets for qualified buyers and sellers." },
            { title: "Discreet Handling", text: "Confidential introductions and careful communication." },
          ],
          alts: ["Luxury hotel entrance with fountains at dusk"],
        },
        {
          eyebrow: "Land",
          title: "Plots and land across the UAE",
          text: "Land needs careful structuring. We work on single plots and multiple plots, and on joint ventures between landowners and developers.",
          points: [
            { title: "Plot Sales and Purchases", text: "Residential, commercial and mixed-use land across the UAE." },
            { title: "Multiple Plots", text: "Assembling or selling several plots together as a single transaction." },
            { title: "Joint Ventures", text: "Introductions and deal structuring between landowners and developers." },
          ],
          alts: ["Open plots of land in Dubai with the city skyline behind", "Aerial map view of a master-planned plot area"],
        },
      ],
      closing: {
        title: "Looking outside the UAE?",
        text: "We can also discuss land opportunities beyond the UAE. Tell us what you are looking for and we will let you know honestly what we can do.",
      } as null | { title: string; text: string },
    },
    investors: {
      metaTitle: "Investor Services",
      metaDescription: "Investment opportunities in Dubai and the UAE for local and international investors: off-plan, ready, land, buildings and hotels.",
      eyebrow: "Investor Services",
      title: "Investor Services",
      intro: "Finding, evaluating and closing real estate investments in Dubai and across the UAE, for local and international investors.",
      featureAlt: "A consultant advising an investor in a Dubai office with a view of the skyline",
      sectionTitle: "Invest with clarity, not guesswork",
      sectionText:
        "We help you identify opportunities that match your capital and goals, explain the numbers plainly, and carry the deal through to completion. We do not promise returns. We give you the facts so you can decide.",
      offers: [
        { title: "Opportunity Sourcing", text: "Off-plan, ready, land and commercial opportunities matched to your brief." },
        { title: "Market Briefing", text: "Honest context on areas, pricing and demand before you commit." },
        { title: "Deal Evaluation", text: "Costs, fees, payment terms and exit options laid out clearly." },
        { title: "Large and Complex Deals", text: "Multiple plots, joint ventures, buildings, warehouses and hotels." },
        { title: "International Investors", text: "Remote-friendly communication and guidance on the buying process in the UAE." },
        { title: "Selling and Leasing", text: "Support when you want to sell or lease an asset you already own." },
      ],
      closing: null as null | { title: string; text: string },
    },
  },
  privacy: {
    metaTitle: "Privacy Policy | iFind Real Estate LLC, Dubai",
    metaDescription: "How iFind Real Estate LLC in Dubai collects, uses, shares and protects your personal data, and the rights you have under UAE data protection law.",
    eyebrow: "Legal",
    h1: "Privacy Policy",
    lede: "Your trust matters to us. This policy explains in plain language how we handle your personal data.",
    updated: "Last updated: October 2026",
    onThisPage: "On this page",
    contactCard: "Data enquiries",
    sections: [
      {
        title: "Who we are",
        body: [
          "iFind Real Estate LLC (\u201ciFind\u201d, \u201cwe\u201d, \u201cus\u201d) is a real estate brokerage located at Office No. 1810, Churchill Tower, Business Bay, Dubai, United Arab Emirates (ORN: 45937). We are responsible for the personal data we collect through this website and through our communications with you.",
          "This policy explains what personal data we collect, why we use it, who we share it with, how long we keep it and the rights you have. It is written to align with UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data and the other laws that apply to our business in Dubai.",
        ],
        list: [] as string[],
      },
      {
        title: "Personal data we collect",
        body: ["We collect only what we need, depending on how you deal with us:"],
        list: [
          "Enquiries: your name, phone or WhatsApp number, email address, the service you are interested in and any message you send through our contact form or chat.",
          "Job applications: the details you enter in the careers form, such as nationality, current location, experience, visa status, languages and BRN, together with your CV and any documents you upload.",
          "Communications: records of calls, WhatsApp messages and emails with our team, so that we can follow up on your request.",
          "Technical data: information your browser sends automatically, such as IP address, device and browser type and the pages visited, which is recorded in our hosting provider's server logs for security and reliability.",
        ],
        after: "We do not ask for payment card details, passwords or Emirates ID copies through this website.",
      },
      {
        title: "How and why we use your data",
        body: [],
        list: [
          "To respond to your enquiries and contact you about the properties and services you asked about.",
          "To provide our brokerage services, such as buying, selling and leasing, and to carry out the steps you ask us to take.",
          "To assess job applications and contact applicants.",
          "To meet legal and regulatory duties that apply to real estate brokers in the UAE, including anti-money laundering and customer due diligence requirements, and requests from competent authorities.",
          "To keep the website secure, prevent misuse and improve its performance.",
          "To send you marketing messages, only where you have agreed to receive them.",
        ],
        after: "Where the law requires it, we rely on your consent. Other grounds we may rely on include performing a contract or taking steps at your request, complying with a legal obligation, and our legitimate interests in running and protecting our business, always balanced against your rights.",
      },
      {
        title: "Cookies and similar technologies",
        body: [
          "This website does not currently use advertising or tracking cookies. Our chat window may store a small note in your browser session so that it does not greet you repeatedly. If we add analytics or marketing tools in the future, we will ask for your consent where required and update this policy.",
          "The map on our Contact page is provided by Google Maps. When it loads, Google may receive technical data and set its own cookies, under Google's privacy policy.",
        ],
        list: [] as string[],
      },
      {
        title: "Who we share data with",
        body: ["We do not sell your personal data. We share it only where needed, and only with:"],
        list: [
          "Our team members and consultants who deal with your request.",
          "Property developers, banks and other parties directly involved in a transaction you decide to proceed with.",
          "Service providers that support us, such as website hosting, email delivery and communication tools, who may process data only on our instructions.",
          "Government and regulatory bodies, such as the Dubai Land Department and the Real Estate Regulatory Agency, and law-enforcement or judicial authorities, when we are required by law.",
        ],
        after: "If you choose to contact us through WhatsApp, your messages are also handled by WhatsApp under its own terms.",
      },
      {
        title: "Transfers outside the UAE",
        body: ["Some of our service providers may store or process data on servers outside the UAE. Where this happens, we take steps to make sure your data stays protected, in line with applicable UAE law."],
        list: [] as string[],
      },
      {
        title: "How long we keep your data",
        body: ["We keep personal data only for as long as needed for the purpose it was collected for, to meet legal and record-keeping duties that apply to real estate brokers, and to handle any claims. Job applications are kept for a limited period for recruitment and are then deleted, unless you ask us to keep them for future openings. When data is no longer needed, we delete or anonymise it."],
        list: [] as string[],
      },
      {
        title: "How we protect your data",
        body: ["We use reasonable technical and organisational measures to protect personal data against loss, misuse and unauthorised access, including encrypted connections (HTTPS), access limited to staff who need it, and checks on the service providers we use. No online system is completely secure, so please avoid sending sensitive documents unless we have asked for them."],
        list: [] as string[],
      },
      {
        title: "Your rights",
        body: ["Under UAE data protection law you may have the right to:"],
        list: [
          "Know what personal data we hold about you and obtain a copy.",
          "Ask us to correct data that is inaccurate or incomplete.",
          "Ask us to delete your data or restrict how we use it, where the law allows.",
          "Object to the use of your data for marketing, or withdraw a consent you gave earlier.",
          "Request that your data be transferred to another provider, where applicable.",
        ],
        after: "To use any of these rights, contact us using the details below. We may need to confirm your identity first, and we will reply within the period required by law. You also have the right to complain to the UAE Data Office if you believe your data has been mishandled.",
      },
      {
        title: "Marketing messages",
        body: ["We contact people about our services by phone, WhatsApp, email or SMS only in line with UAE law, and where you have given consent or asked us to. You can opt out at any time by replying STOP, using the unsubscribe link or telling us directly, and we will then stop sending marketing messages."],
        list: [] as string[],
      },
      {
        title: "Children",
        body: ["This website is intended for adults. We do not knowingly collect personal data from anyone under 18. If you think a child has given us personal data, please contact us and we will delete it."],
        list: [] as string[],
      },
      {
        title: "Links to other websites",
        body: ["Our website links to other sites, including the official websites of developers and our social media pages. We are not responsible for their content or privacy practices, so please read their policies."],
        list: [] as string[],
      },
      {
        title: "Changes to this policy",
        body: ["We may update this policy from time to time. The latest version is always on this page, with the date of the last update shown at the top."],
        list: [] as string[],
      },
      {
        title: "Contact us",
        body: ["For any question about this policy or your personal data, please contact us:"],
        list: [] as string[],
      },
    ],
  },
  terms: {
    metaTitle: "Terms & Conditions | iFind Real Estate LLC, Dubai",
    metaDescription: "Terms & Conditions for using the iFind Real Estate LLC website and brokerage services in Dubai, including listings, fees, KYC and AML, advertising and governing law.",
    eyebrow: "Legal",
    h1: "Terms & Conditions",
    updated: "Last Updated: October 2026",
    onThisPage: "On this page",
    contactCard: "Contact",
    office: "Office: 1810, Churchill Tower, Business Bay, Dubai, UAE",
    copyright: "\u00a9 2026 iFind Real Estate LLC. All Rights Reserved.",
    sections: [
      {
        title: "Introduction",
        body: ["Welcome to the website of iFind Real Estate LLC (“iFind”, “we”, “us” or “our”).", "These Terms & Conditions govern your access to and use of our website, property listings, enquiries and real estate brokerage services.", "iFind Real Estate LLC is a real estate brokerage company operating in Dubai, United Arab Emirates and conducting its activities subject to applicable UAE laws and the rules, regulations and requirements of the Dubai Land Department (“DLD”) and Real Estate Regulatory Agency (“RERA”).", "By accessing this website, submitting an enquiry, requesting a property viewing or using our services, you acknowledge these Terms & Conditions.", "Where a separate brokerage agreement, tenancy agreement, Memorandum of Understanding, sale and purchase agreement, reservation form, property management agreement or other transaction document is executed, the terms of that document shall apply to the relevant transaction."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Our Real Estate Services",
        body: ["iFind may provide real estate brokerage and related services including:"],
        list: ["Residential property sales and purchases;", "Residential leasing and rentals;", "Commercial property sales and purchases;", "Commercial leasing;", "Land and plot transactions;", "Off-plan property brokerage and marketing;", "Investment property sourcing;", "Property marketing and listing services;", "Buyer and tenant representation;", "Landlord and seller representation;", "Property viewings;", "Real estate investment advisory of a general, non-financial nature; and", "Other real estate brokerage services permitted under our licence and applicable Dubai regulations."],
        after: ["Services are subject to availability, our applicable licensed activities, client eligibility and regulatory requirements."],
      },
      {
        title: "Brokerage Relationship",
        body: ["iFind acts as a real estate broker/intermediary between relevant parties to a real estate transaction.", "Depending on the transaction, we may represent a seller, landlord, buyer or tenant in accordance with the applicable brokerage agreement and DLD/RERA requirements.", "Our appointment, scope of work, exclusivity (where applicable), duration, commission and other brokerage terms may be documented through the applicable DLD/RERA forms, electronic contracts or other legally valid agreements.", "Nothing contained on this website by itself creates an agency, fiduciary, partnership or contractual relationship unless such relationship is expressly established through the appropriate agreement."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Property Listings and Information",
        body: ["We make reasonable efforts to ensure that property information displayed or communicated by iFind is accurate and current.", "However, property information may originate from owners, landlords, developers, authorised representatives, government records, third-party platforms or other sources.", "Accordingly, information including:"],
        list: ["Asking prices;", "Rental amounts;", "Property sizes;", "Plot sizes;", "Floor areas;", "Floor plans;", "Photographs and videos;", "Views;", "Availability;", "Service charges;", "Completion dates;", "Payment plans;", "Expected returns;", "Amenities;", "Furnishing;", "Occupancy;", "Development specifications; and", "Other property details"],
        after: ["may change or may be subject to verification.", "Property listings are therefore provided for general information and marketing purposes and, unless expressly stated otherwise in a binding agreement, do not constitute a legally binding offer.", "A property may be withdrawn, reserved, leased, sold or have its price or terms changed without prior notice."],
      },
      {
        title: "Property Verification and Due Diligence",
        body: ["Clients should conduct appropriate due diligence before entering into any real estate transaction.", "Where appropriate, buyers, sellers, landlords and tenants should independently verify matters including ownership, title, property condition, permitted use, dimensions, service charges, mortgages, restrictions, developer information, completion status and other relevant information.", "iFind may assist with obtaining or reviewing available property information but does not replace independent legal, technical, financial, valuation, tax or other professional advice.", "Clients remain responsible for reviewing and understanding all transaction documents before signing them."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Real Estate Advertising",
        body: ["iFind seeks to advertise properties in accordance with applicable DLD/RERA requirements.", "Where a real estate advertisement requires a permit, the relevant advertising or marketing activity shall be subject to the applicable DLD/RERA and Trakheesi requirements.", "Where required by applicable regulations, property advertisements may display the relevant permit information and/or QR code.", "Property owners and authorised representatives providing properties to iFind for marketing confirm that they have the legal authority to market the property and agree to provide the documentation and authorisations reasonably required for regulatory compliance.", "iFind reserves the right to refuse, suspend or remove any property advertisement where the required ownership, authorisation, permit or other compliance documentation is unavailable or considered insufficient."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Property Sales and Purchases",
        body: ["For property sale and purchase transactions, the parties may be required to execute the applicable DLD/RERA brokerage and transaction documentation.", "A transaction remains subject to the relevant parties' agreement, required documentation, regulatory procedures, developer requirements where applicable, financing arrangements where applicable, and registration or transfer requirements of the Dubai Land Department.", "Website enquiries, WhatsApp conversations, telephone discussions, property viewings and expressions of interest do not by themselves guarantee the sale or purchase of a property."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Off-Plan Properties",
        body: ["Where iFind markets off-plan properties, such marketing shall be subject to applicable DLD/RERA requirements and the authorisation of the relevant developer or other legally authorised party.", "Information concerning an off-plan development, including completion dates, payment plans, specifications, amenities, layouts, projected returns or other representations, may originate from the developer.", "Buyers should carefully review the developer's official sale and purchase agreement, project registration information, escrow arrangements and other relevant documents before purchasing.", "Any expected capital appreciation, rental yield or investment return is an estimate only unless expressly guaranteed by the legally responsible party in a binding written agreement.", "Past market performance is not a guarantee of future results."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Leasing and Rental Transactions",
        body: ["iFind may act as broker in residential and commercial leasing transactions.", "Lease transactions are subject to the agreement between the landlord and tenant and applicable Dubai tenancy laws and DLD/RERA requirements.", "The landlord and tenant are responsible for reviewing and agreeing to matters including:"],
        list: ["Rent;", "Payment schedule;", "Security deposit;", "Lease duration;", "Property use;", "Maintenance responsibilities;", "Utilities;", "Renewal provisions;", "Notice requirements;", "Early termination;", "Subleasing restrictions; and", "Other special conditions."],
        after: ["Where applicable, tenancy contracts should be registered through the Ejari system in accordance with Dubai requirements.", "Unless separately appointed and appropriately authorised to provide property management services, iFind's role as a leasing broker does not automatically make iFind responsible for ongoing management of the property after completion of the brokerage transaction."],
      },
      {
        title: "Commercial Property",
        body: ["Commercial properties may be subject to additional requirements relating to permitted activity, licensing, zoning, building management, Civil Defence requirements, municipality approvals, fit-out approvals and other regulatory matters.", "Clients are responsible for confirming that a commercial property is suitable and legally permitted for their intended business activity before entering into a binding agreement.", "Any description by iFind of a property as suitable for a particular commercial purpose is subject to the approvals of the relevant authorities and building or community management where applicable."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Brokerage Commission and Fees",
        body: ["Brokerage commissions and fees shall be determined in accordance with the relevant brokerage agreement, transaction documentation and applicable law.", "Unless expressly agreed otherwise in writing, any commission quoted does not include VAT or government/third-party charges where those amounts are legally applicable.", "The party responsible for paying the brokerage commission shall pay the commission in accordance with the agreed brokerage terms and applicable transaction documentation.", "Government charges, DLD fees, trustee fees, developer charges, NOC fees, mortgage-related charges, valuation fees, Ejari fees, utility deposits, registration charges, service charges and other third-party costs are separate from iFind's brokerage commission unless expressly agreed otherwise in writing."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "VAT",
        body: ["Where Value Added Tax is applicable to brokerage commissions, professional fees or other taxable services provided by iFind, VAT shall be charged at the applicable UAE rate.", "Government charges or third-party fees may have their own VAT treatment."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Deposits, Reservation Amounts and Transaction Funds",
        body: ["Any deposit, reservation amount, security deposit or other transaction payment shall be handled according to the applicable agreement, law and regulatory requirements.", "Clients should not make payments to an individual broker's personal account.", "Where money is payable directly to a seller, landlord, developer, trustee, government authority or another authorised party, the client must follow the approved payment instructions applicable to the transaction.", "iFind shall not be responsible for funds transferred by a client contrary to authorised written payment instructions.", "Clients should verify bank details before transferring funds and immediately report any suspected fraudulent or altered payment instructions."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Mortgage and Financing",
        body: ["Where a property purchase involves financing, mortgage approval remains solely subject to the relevant bank or financial institution.", "Any assistance or introduction provided by iFind in relation to financing does not constitute a guarantee that a mortgage will be approved.", "Unless expressly licensed and engaged to provide such services, iFind does not provide regulated banking, lending or financial advisory services.", "Clients should obtain independent advice concerning financing and affordability where necessary."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Investment Information",
        body: ["Any information provided by iFind concerning rental yields, market trends, expected returns, capital appreciation or investment opportunities is provided for general real estate information only.", "Real estate markets can rise or fall and investment performance cannot be guaranteed.", "Clients should make their own investment decisions and, where appropriate, seek independent financial, tax and legal advice."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Client Information and Accuracy",
        body: ["Clients agree to provide accurate, complete and current information when dealing with iFind.", "This may include identification documents, contact information, ownership documents, powers of attorney, corporate documents, proof of authority, financial information and other documents required for the transaction or regulatory compliance.", "Clients must not knowingly provide false, misleading, forged or fraudulent information.", "iFind may suspend or terminate services where information cannot be verified or where continued involvement may breach applicable law or regulatory requirements."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Know Your Customer (KYC), AML and Compliance",
        body: ["As a UAE real estate brokerage business, iFind may be required to perform customer due diligence, identity verification and other compliance procedures under applicable UAE anti-money laundering, counter-terrorist financing, proliferation financing, sanctions and related legislation.", "We may therefore request information and documents including:"],
        list: ["Passport;", "Emirates ID;", "Visa or residency information;", "Residential address;", "Trade licence and corporate documents;", "Ultimate beneficial ownership information;", "Source of funds;", "Source of wealth;", "Proof of funds;", "Bank or transaction information;", "Information concerning authorised signatories; and", "Other information required by applicable law or competent authorities."],
        after: ["iFind reserves the right to decline, delay, suspend or terminate a transaction or business relationship where required information is not provided, cannot reasonably be verified, or where proceeding may violate applicable legal or regulatory obligations.", "Where required by law, information may be reported or disclosed to competent UAE authorities without prior notice to the relevant person."],
      },
      {
        title: "Sanctions and Prohibited Transactions",
        body: ["iFind will not knowingly participate in transactions prohibited under applicable UAE laws, sanctions requirements, anti-money laundering regulations or other binding regulatory restrictions.", "Clients represent that funds used in transactions are derived from legitimate sources and that they are legally entitled to enter into the proposed transaction."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Communication and Marketing",
        body: ["By submitting an enquiry through our website, property portals, telephone, email, WhatsApp, social media or another authorised communication channel, you authorise iFind to contact you regarding that enquiry and related real estate services.", "Marketing communications will be conducted subject to applicable UAE laws and regulatory requirements.", "Where consent is required for promotional communications, clients may withdraw that consent or request that marketing communications cease.", "iFind seeks to comply with applicable DLD/RERA requirements governing communications by real estate brokers, including requirements concerning communications with property owners and restrictions applicable to unsolicited or prohibited cold calling."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Property Viewings",
        body: ["Property viewings are subject to availability and the consent of the property owner, landlord, occupant, developer or authorised representative where applicable.", "Users attending viewings must behave responsibly and follow reasonable security, access and building requirements.", "Where applicable, iFind may require execution or acknowledgement of a property viewing agreement or other DLD/RERA documentation."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Intellectual Property",
        body: ["Unless otherwise stated, the iFind name, logo, website design, branding, written content, marketing materials and original media are owned by or licensed to iFind Real Estate LLC.", "No content may be copied, reproduced, republished, commercially distributed or used to impersonate iFind without prior written permission, except where permitted by law.", "Property photographs, floor plans, renders and developer materials may belong to their respective owners or licensors."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Website Use",
        body: ["Users must not:"],
        list: ["Use the website for unlawful or fraudulent purposes;", "Attempt unauthorised access to our systems;", "Introduce viruses, malware or malicious code;", "Scrape or systematically extract property data without permission;", "Copy listings for unauthorised commercial purposes;", "Misrepresent their identity;", "Submit fraudulent enquiries;", "Interfere with website operation or security; or", "Use iFind's name, content or property information in a misleading manner."],
        after: ["We reserve the right to restrict access to the website where misuse is suspected."],
      },
      {
        title: "Third-Party Websites and Services",
        body: ["Our website may contain links to property portals, developers, government services, mortgage providers, mapping services, social media platforms or other third-party websites.", "Such links are provided for convenience.", "iFind does not control third-party websites and is not responsible for their content, availability, privacy practices, security or terms."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Personal Data and Privacy",
        body: ["iFind may collect and process personal information necessary to respond to enquiries, provide brokerage services, conduct property transactions, perform KYC and regulatory checks, communicate with clients and fulfil legal obligations.", "Personal information shall be processed subject to applicable UAE data protection and privacy legislation.", "Where legally permitted or required, information may be shared with parties involved in a transaction, including landlords, sellers, buyers, tenants, developers, banks, mortgage providers, trustees, service providers and competent government or regulatory authorities.", "Additional details concerning collection, use, retention, sharing and protection of personal information should be set out in iFind's separate Privacy Policy."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Cookies and Website Technology",
        body: ["Our website may use cookies and similar technologies to operate the website, understand website usage, improve performance and, where permitted, support marketing activities.", "Further information should be provided in the website's Cookie Policy or Privacy Policy."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "No Guarantee of Availability or Completion",
        body: ["iFind does not guarantee that:"],
        list: ["A listed property remains available;", "A seller or landlord will accept an offer;", "A buyer or tenant will complete a transaction;", "A mortgage will be approved;", "A developer will complete a project on a particular date;", "A property will achieve a particular rental yield;", "A property's value will increase; or", "A transaction will complete within a particular timeframe."],
        after: ["Transactions remain subject to the relevant parties, contracts, regulatory processes and third-party requirements."],
      },
      {
        title: "Limitation of Liability",
        body: ["To the maximum extent permitted by applicable law, iFind shall not be liable for indirect, incidental, consequential or speculative losses arising solely from reliance on general website information, third-party information, market forecasts or circumstances outside iFind's reasonable control.", "Nothing in these Terms excludes or limits any liability that cannot lawfully be excluded or limited under applicable UAE law.", "Nothing in this section removes iFind's obligation to perform its brokerage activities in accordance with applicable laws and regulatory requirements."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Force Majeure",
        body: ["iFind shall not be responsible for delay or failure caused by circumstances beyond its reasonable control, including government restrictions, regulatory changes, system outages, natural disasters, utility failures, cyber incidents, banking interruptions, developer delays or other force majeure events, subject to applicable law."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Complaints",
        body: ["We aim to conduct our brokerage activities professionally and transparently.", "Clients who have a complaint regarding our services should first contact iFind Real Estate LLC with sufficient details for the matter to be reviewed.", "Nothing in these Terms prevents a client from exercising any rights available through the Dubai Land Department, RERA, Rental Disputes Center, Dubai Courts, consumer protection authorities or any other competent authority where applicable."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Governing Law and Jurisdiction",
        body: ["These Terms & Conditions shall be governed by the applicable laws of the United Arab Emirates and the laws and regulations applicable in the Emirate of Dubai.", "Subject to any mandatory jurisdiction of a competent authority, committee or tribunal, disputes arising in connection with these Terms or our services shall be subject to the jurisdiction of the competent courts and authorities of Dubai, United Arab Emirates.", "Rental disputes shall be dealt with by the competent authority having jurisdiction over such disputes where applicable."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Regulatory Compliance",
        body: ["iFind Real Estate LLC intends to conduct its real estate brokerage activities in accordance with its licensed activities and applicable requirements issued by the Dubai Land Department, RERA and other competent UAE authorities.", "Where any provision of these Terms conflicts with a mandatory provision of applicable UAE or Dubai law or a binding regulatory requirement, the mandatory legal or regulatory provision shall prevail."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Changes to These Terms",
        body: ["iFind may amend these Terms & Conditions from time to time to reflect changes in our services, website, business practices or applicable legal and regulatory requirements.", "The updated version will be published on our website with a revised “Last Updated” date.", "Continued use of the website following publication of updated Terms constitutes acceptance of the updated website terms, subject to applicable law."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Severability",
        body: ["If any provision of these Terms is held to be invalid, unlawful or unenforceable, the remaining provisions shall continue to apply to the maximum extent permitted by law."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Entire Website Terms",
        body: ["These Terms, together with our Privacy Policy, Cookie Policy and any specific notices displayed on the website, govern general use of the iFind website.", "They do not replace transaction-specific agreements signed between iFind and its clients or between parties to a property transaction.", "Where transaction-specific documents contain different provisions, those documents shall govern the relevant transaction, subject to applicable law."],
        list: [] as string[],
        after: [] as string[],
      },
      {
        title: "Contact Information",
        body: ["For questions concerning these Terms & Conditions, our brokerage services or a property listed on our website, please contact iFind Real Estate LLC through the official contact details published on our website."],
        list: [] as string[],
        after: [] as string[],
      },
    ],
  },
  legal: {
    eyebrow: "Legal",
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms of Use",
    placeholder: "This page is a placeholder. The final {doc} for {company} will be published here.",
  },
};

export type Dict = typeof en;
