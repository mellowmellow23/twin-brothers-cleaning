import type { Metadata } from "next";
import { siteConfig } from "@/lib/data/site";

export interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
}

const DEFAULT_OG_IMAGE = "/og/default.jpg";

/**
 * Builds a Next.js `Metadata` object with canonical URL, Open Graph, and
 * Twitter Card fields pre-filled from site config. Every page should call
 * this instead of constructing metadata ad hoc, so SEO fields never drift.
 */
export function createMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noIndex = false,
  keywords,
}: PageMetadataInput): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const fullTitle = path === "/" ? title : `${title} | ${siteConfig.name}`;

  return {
    title: { absolute: fullTitle },
    description,
    keywords: keywords
      ? [...(defaultMetadata.keywords ?? []), ...keywords]
      : defaultMetadata.keywords,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "cleaning services Nakuru",
    "house cleaning Nakuru",
    "office cleaning Kenya",
    "carpet cleaning Nakuru",
    "sofa cleaning Nakuru",
    "mattress cleaning Nakuru",
    "post construction cleaning Nakuru",
    "deep cleaning Nakuru",
    "window cleaning Nakuru",
    "upholstery cleaning Nakuru",
    "residential cleaning Nakuru",
    "commercial cleaning Nakuru",
    "move out cleaning Nakuru",
    "spring cleaning Nakuru",
    "professional cleaners Nakuru",
    "cleaning company Nakuru",
    "best cleaning service Nakuru",
    "affordable cleaning Nakuru",
    "same day cleaning Nakuru",
    "Twin Brothers Cleaning Service",
    "Twin Brothers Cleaning Nakuru",
    "cleaning and pest control Nakuru",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    // TODO: Replace with your actual Google Search Console verification code
    google: "google-site-verification=7AoEzdzz9_0Jzj8QASMVpdA1wmjMWjn0AHsA0A_OHcY",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.shortName,
    statusBarStyle: "black-translucent",
  },
};