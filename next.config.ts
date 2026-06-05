import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin Turbopack's workspace root to this project. Without it, Turbopack walks
  // up past c:\Projects (which has many sibling apps) and resolves modules like
  // tailwindcss against the wrong directory, breaking `next dev`.
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Image optimization settings
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
