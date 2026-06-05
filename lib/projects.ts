// Single source of truth for project facts. The home strip, the projects page,
// and the generated /llms.txt all read from here so names, statuses, URLs, and
// logos can never drift between surfaces. The descriptive copy is intentionally
// per-surface (different length and framing on each page); the facts are shared.

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  status: string;
  accentColor?: string;
  logo: { src: string; alt: string };
  links: ProjectLink[];
  preview?: { url: string; poster: string };
  copy: {
    projects: { tag: string; blurb: string };
    home: {
      tag: string;
      blurb: string;
      currently: { verb: string; detail: string };
    };
    llms: { url: string; line: string };
  };
}

export const projects: Project[] = [
  {
    slug: "frunt",
    name: "frunt",
    status: "Live",
    accentColor: "#8A5A2C",
    logo: { src: "/images/apps/frunt/app_icon.png", alt: "frunt logo" },
    links: [
      { label: "frunthospitality.com", href: "https://frunthospitality.com" },
    ],
    preview: {
      url: "https://frunthospitality.com",
      poster: "/images/previews/frunt.jpg",
    },
    copy: {
      projects: {
        tag: "Web + Mobile",
        blurb:
          "A preparation platform for restaurant teams. It turns the documents a restaurant " +
          "already keeps (allergen guides, SOPs, compliance paperwork) into staff training, " +
          "onboarding, and compliance, with a native app for the team and a dashboard for managers.",
      },
      home: {
        tag: "Web · Hospitality",
        blurb:
          "Preparation platform for restaurant teams. Turns the documents they already keep into staff training and compliance, with a manager dashboard and a native staff app.",
        currently: {
          verb: "Shipping",
          detail:
            "Staff training and compliance for restaurants. Live with its first client.",
        },
      },
      llms: {
        url: "https://frunthospitality.com",
        line:
          "a preparation platform for restaurant teams. It turns a restaurant's existing documents (allergen guides, SOPs, compliance paperwork) into staff training, onboarding, and compliance, with a manager dashboard and a native staff app. Live.",
      },
    },
  },
  {
    slug: "liftio",
    name: "Liftio",
    status: "Live",
    logo: {
      src: "/images/apps/liftio/liftio-high-resolution-logo.png",
      alt: "Liftio logo",
    },
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/gb/app/liftio/id6759969740",
      },
      { label: "getliftio.com", href: "https://www.getliftio.com/" },
    ],
    preview: {
      url: "https://www.getliftio.com/",
      poster: "/images/previews/liftio.jpg",
    },
    copy: {
      projects: {
        tag: "iOS App",
        blurb:
          "Native iOS app for tracking workouts and progressing training. Built to stay out of the way while you actually train.",
      },
      home: {
        tag: "iOS · Fitness",
        blurb:
          "Native training tracker. Progressive overload, clean logging, live on the App Store.",
        currently: {
          verb: "Building",
          detail: "An iOS training tracker. Live on the App Store.",
        },
      },
      llms: {
        url: "https://www.getliftio.com/",
        line:
          "a native iOS app for tracking workouts and progressing training. Live on the App Store.",
      },
    },
  },
];
