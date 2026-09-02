import type { NextConfig } from "next";
import path from "node:path";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
];

const nextConfig: NextConfig = {
  // Pin Turbopack's workspace root to this project. Without it, Turbopack walks
  // up past c:\Projects (which has many sibling apps) and resolves modules like
  // tailwindcss against the wrong directory, breaking `next dev`.
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  // Liftio's privacy policy and terms lived here before getliftio.com existed,
  // as 1,414 lines of hand-typed prose duplicating the ones that site now
  // serves. The pages are gone. These URLs are not, because a shipped App Store
  // listing carries whatever URL it was submitted with and cannot be corrected
  // without a new submission. A 308 keeps them answering.
  async redirects() {
    return [
      {
        source: "/privacy/liftio",
        destination: "https://getliftio.com/privacy",
        permanent: true,
      },
      {
        source: "/terms/liftio",
        destination: "https://getliftio.com/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
