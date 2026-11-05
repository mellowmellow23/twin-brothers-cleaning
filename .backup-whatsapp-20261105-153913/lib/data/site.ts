import type { BusinessHours, ContactChannel } from "@/types";

export const siteConfig = {
  name: "Twin Brothers Cleaning Service",
  shortName: "Twin Brothers Cleaning",
  tagline: "Nakuru's trusted cleaning partner for homes and businesses",
  description:
    "Twin Brothers Cleaning Service delivers professional house cleaning, office cleaning, carpet, sofa, mattress and post-construction cleaning across Nakuru, Kenya — vetted teams and a satisfaction guarantee on every job.",
  url: "https://www.twinbrotherscleaning.co.ke",
  legalName: "Twin Brothers Cleaning & Pest Control Services",
  locale: "en-KE",
  themeColor: "#006AFF",
} as const;

/**
 * Real Google Business Profile, matched via Places lookup on 2026-07-24.
 * Listing name there is "Twin Brothers Cleaning Services" (plural) — the
 * site uses "Twin Brothers Cleaning Service" (singular). Minor NAP
 * inconsistency worth aligning on one or the other with the owner.
 */
export const googleBusinessProfile = {
  placeId: "ChIJ7b9RjCCNKRgRtvZcWEpWrdE",
  mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJ7b9RjCCNKRgRtvZcWEpWrdE",
  reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ7b9RjCCNKRgRtvZcWEpWrdE",
  embedUrl: "https://www.google.com/maps?q=place_id:ChIJ7b9RjCCNKRgRtvZcWEpWrdE&output=embed",
  rating: 4.5,
  ratingCount: 11,
  latitude: -0.289991,
  longitude: 36.0694234,
} as const;

export const contactChannels: ContactChannel[] = [
  {
    type: "phone",
    label: "Call us",
    value: "0723 358 456",
    href: "tel:+254723358456",
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    value: "0723 358 456",
    href: "https://wa.me/254723358456",
  },
  {
    type: "email",
    label: "Email",
    value: "info@twinbrotherscleaning.co.ke",
    href: "mailto:info@twinbrotherscleaning.co.ke",
  },
  {
    type: "address",
    label: "Office",
    value: "Moses Mudavadi Road, Nakuru, Kenya",
    href: googleBusinessProfile.mapsUrl,
  },
];

// Verified against the live Google Business Profile listing on 2026-07-24
// (previously showed Mon–Sat 7am–6pm here, which no longer matched Google).
export const businessHours: BusinessHours[] = [
  { day: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 5:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/twinbrotherscleaning" },
  { label: "Instagram", href: "https://instagram.com/twinbrotherscleaning" },
] as const;