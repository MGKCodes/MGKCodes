// Structured data (JSON-LD) for MGKCodes. One canonical entity graph lives in
// the root layout; per-page helpers (breadcrumb, FAQ) are rendered from each
// route's server layout. Channel separation is enforced here: personal links
// attach only to the Person node, never to the Organization.

export const SITE = "https://mgkcodes.com";

export const ORG_ID = `${SITE}/#organization`;
export const FOUNDER_ID = `${SITE}/#founder`;
export const WEBSITE_ID = `${SITE}/#website`;
export const FRUNT_ID = `${SITE}/#frunt`;
export const LIFTIO_ID = `${SITE}/#liftio`;

const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "MGKCodes",
  legalName: "MGKCodes Ltd",
  url: SITE,
  logo: {
    "@type": "ImageObject",
    url: `${SITE}/images/LOGOPNGS/logo-white-elements.png`,
  },
  description:
    "Independent software studio. Builds and ships its own software products from first sketch to launch: design, engineering, release, and marketing in-house.",
  email: "hello@mgkcodes.com",
  founder: { "@id": FOUNDER_ID },
  sameAs: ["https://www.linkedin.com/company/mgkcodes/"],
};

// Founder relationship is machine-only. Personal channels live here, not on the
// Organization, matching the studio/personal separation in CLAUDE.md.
const founder = {
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: "Matthew Kay",
  jobTitle: "Founder",
  worksFor: { "@id": ORG_ID },
  sameAs: [
    "https://mattkay02.github.io/",
    "https://github.com/MattKay02",
    "https://www.linkedin.com/in/matthew-kay-/",
    "https://x.com/mattykay2002",
  ],
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE,
  name: "MGKCodes",
  publisher: { "@id": ORG_ID },
  inLanguage: "en",
};

const frunt = {
  "@type": "SoftwareApplication",
  "@id": FRUNT_ID,
  name: "frunt",
  url: "https://frunthospitality.com",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "frunt is a preparation platform for restaurant teams. It turns a restaurant's existing documents (allergen guides, SOPs, compliance paperwork) into staff training, onboarding, and compliance, with a manager dashboard and a native staff app.",
  publisher: { "@id": ORG_ID },
  creator: { "@id": ORG_ID },
};

const liftio = {
  "@type": "SoftwareApplication",
  "@id": LIFTIO_ID,
  name: "Liftio",
  url: "https://www.getliftio.com/",
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS",
  description:
    "Liftio is a native iOS app for tracking workouts and progressing training.",
  publisher: { "@id": ORG_ID },
  creator: { "@id": ORG_ID },
  offers: {
    "@type": "Offer",
    url: "https://apps.apple.com/gb/app/liftio/id6759969740",
    price: "0",
    priceCurrency: "GBP",
  },
};

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [organization, founder, website, frunt, liftio],
};

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}

export function faqPage(qas: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qas.map((qa) => ({
      "@type": "Question",
      name: qa.q,
      acceptedAnswer: { "@type": "Answer", text: qa.a },
    })),
  };
}

// Visible FAQ copy on /studio. Kept identical to the FAQPage schema so the
// structured data matches what users actually see.
export const studioFaq = [
  {
    q: "What does MGKCodes build?",
    a: "Software products, taken from first sketch to launch in-house. Currently frunt, a preparation platform for restaurant teams, and Liftio, a native iOS training tracker.",
  },
  {
    q: "Does MGKCodes take client work?",
    a: "Selectively. The studio is product-led and partnership-style, not a client-volume web shop. It is open to conversations about partnerships and collaborations.",
  },
  {
    q: "What is frunt?",
    a: "frunt is a preparation platform for restaurant teams. It turns a restaurant's existing documents, like allergen guides and SOPs, into staff training, onboarding, and compliance. It is live with its first client.",
  },
  {
    q: "What is Liftio?",
    a: "Liftio is a native iOS app for tracking workouts and progressing training. It is live on the App Store.",
  },
];
