import type { MetadataRoute } from "next";

const base = "https://mgkcodes.com";

// /connect is intentionally excluded (personal QR page, noindexed).
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/projects`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/studio`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terms`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    // /privacy/liftio and /terms/liftio now redirect to getliftio.com, so they
    // are not ours to list. /support/liftio stays: getliftio.com has no support
    // page, and a live listing needs one that resolves.
    { url: `${base}/support/liftio`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
