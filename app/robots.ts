import type { MetadataRoute } from "next";

// /connect is the personal QR landing page, hidden from nav and kept separate
// from the studio brand, so it is disallowed here and noindexed on the route.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/connect"],
    },
    sitemap: "https://mgkcodes.com/sitemap.xml",
    host: "https://mgkcodes.com",
  };
}
