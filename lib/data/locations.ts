import type { Location } from "@/types";

export const locations: Location[] = [
  {
    slug: "nakuru",
    name: "Nakuru",
    region: "Nakuru County",
    description:
      "Twin Brothers Cleaning Service is based on Moses Mudavadi Road and serves homes and businesses across Nakuru town and the surrounding neighbourhoods.",
    areasServed: [
      "Nakuru Town Centre",
      "Milimani",
      "Section 58",
      "Racecourse",
      "Shabab",
      "London",
      "Free Area",
      "Kiratina",
    ],
    href: "/locations/nakuru",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((location) => location.slug === slug);
}