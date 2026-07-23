import { siteConfig, contactChannels, businessHours } from "@/lib/data/site";

const phone = contactChannels.find((c) => c.type === "phone")?.value;
const address = contactChannels.find((c) => c.type === "address")?.value;

/** Base Organization node — referenced via @id from other schema types. */
export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    telephone: phone,
    sameAs: [
      "https://facebook.com/twinbrotherscleaning",
      "https://instagram.com/twinbrotherscleaning",
    ],
  };
}

const DAY_MAP: Record<string, string[]> = {
  "Monday – Friday": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  Saturday: ["Saturday"],
};

/**
 * LocalBusiness + ProfessionalService node for a Kenyan home-service business.
 * Combining both types is valid JSON-LD and maximizes eligibility for local
 * search and AI-answer surfaces that key off either vocabulary.
 */
export function localBusinessSchema() {
  const openingHours = businessHours
    .filter((entry) => DAY_MAP[entry.day])
    .map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: DAY_MAP[entry.day],
      opens: entry.hours.split(" – ")[0],
      closes: entry.hours.split(" – ")[1],
    }));

  return {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    image: `${siteConfig.url}/og/default.jpg`,
    url: siteConfig.url,
    telephone: phone,
    priceRange: "KES 1,200 – KES 100,000",
    address: {
      "@type": "PostalAddress",
      streetAddress: address,
      addressLocality: "Nakuru",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -0.3031,
      longitude: 36.08,
    },
    areaServed: {
      "@type": "City",
      name: "Nakuru",
    },
    openingHoursSpecification: openingHours,
    parentOrganization: { "@id": `${siteConfig.url}/#organization` },
  };
}
