import type { BusinessHours, ContactChannel } from "@/types";

export const siteConfig = {
  name: "Twin Brothers Cleaning Service",
  shortName: "Twin Brothers Cleaning",
  tagline: "Nakuru's trusted cleaning partner for homes and businesses",
  description:
    "Twin Brothers Cleaning Service delivers professional house cleaning, office cleaning, carpet, sofa, mattress and post-construction cleaning across Nakuru, Kenya — vetted teams and a satisfaction guarantee on every job.",
  url: "https://twinbrotherscleaning.co.ke",
  legalName: "Twin Brothers Cleaning & Pest Control Services",
  locale: "en-KE",
  themeColor: "#0E7A3D",
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
    href: "https://maps.google.com/?q=Moses+Mudavadi+Road+Nakuru+Kenya",
  },
];

// Confirmed via business listing: Mon–Sat 7am–6pm, closed Sunday.
export const businessHours: BusinessHours[] = [
  { day: "Monday – Saturday", hours: "7:00 AM – 6:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/twinbrotherscleaning" },
  { label: "Instagram", href: "https://instagram.com/twinbrotherscleaning" },
] as const;
