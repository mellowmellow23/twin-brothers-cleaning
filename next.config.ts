import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.join(__dirname),
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // typedRoutes disabled while pages are still being built out incrementally —
  // it fails the build on any <Link href> to a route that doesn't exist yet
  // (e.g. /gallery, /blog before those pages are created). Re-enable once
  // every route in the sitemap has a page.tsx.
  // typedRoutes: true,
};

