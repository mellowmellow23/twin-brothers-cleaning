import type { ServiceSummary } from "@/types";

export const services: ServiceSummary[] = [
  {
    slug: "house-cleaning",
    name: "House Cleaning",
    shortName: "House Cleaning",
    tagline: "Deep, reliable cleaning for every room",
    description:
      "Regular or one-off residential cleaning with vetted, uniformed teams and a room-by-room checklist.",
    icon: "Home",
    startingPrice: { currency: "KES", from: 2500, unit: "visit" },
    href: "/services/house-cleaning",
  },
  {
    slug: "office-cleaning",
    name: "Office Cleaning",
    shortName: "Office Cleaning",
    tagline: "Keep your workplace client-ready every day",
    description:
      "Scheduled commercial cleaning for offices, banks and retail spaces, with after-hours options.",
    icon: "Building2",
    startingPrice: { currency: "KES", from: 15000, unit: "visit" },
    href: "/services/office-cleaning",
  },
  {
    slug: "carpet-cleaning",
    name: "Carpet Cleaning",
    shortName: "Carpet Cleaning",
    tagline: "Steam and shampoo cleaning that lifts deep stains",
    description:
      "Hot water extraction and shampoo treatments that remove embedded dirt, odors and allergens.",
    icon: "Layers",
    startingPrice: { currency: "KES", from: 350, unit: "sqft" },
    href: "/services/carpet-cleaning",
  },
  {
    slug: "sofa-cleaning",
    name: "Sofa & Upholstery Cleaning",
    shortName: "Sofa Cleaning",
    tagline: "Restore fabric and leather furniture safely",
    description:
      "Fabric-safe shampooing and leather conditioning for sofas, dining chairs and office seating.",
    icon: "Sofa",
    startingPrice: { currency: "KES", from: 1200, unit: "item" },
    href: "/services/sofa-cleaning",
  },
  {
    slug: "post-construction-cleaning",
    name: "Post-Construction Cleaning",
    shortName: "Post-Construction",
    tagline: "From building site to move-in ready",
    description:
      "Full debris removal, dust extraction and detail cleaning after renovation or new-build handover.",
    icon: "HardHat",
    startingPrice: { currency: "KES", from: 25000, unit: "visit" },
    href: "/services/post-construction-cleaning",
  },
  {
    slug: "mattress-cleaning",
    name: "Mattress Cleaning",
    shortName: "Mattress Cleaning",
    tagline: "Sanitize and refresh for healthier sleep",
    description:
      "Deep vacuuming, steam sanitization and stain treatment to remove dust mites, sweat and odor.",
    icon: "BedDouble",
    startingPrice: { currency: "KES", from: 1800, unit: "item" },
    href: "/services/mattress-cleaning",
  },
];

export function getServiceBySlug(slug: string): ServiceSummary | undefined {
  return services.find((service) => service.slug === slug);
}
