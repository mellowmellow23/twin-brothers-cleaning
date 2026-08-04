import { siteConfig, contactChannels, businessHours, googleBusinessProfile } from "@/lib/data/site";

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
    logo: `${siteConfig.url}/images/brand/logo-wordmark.png`,
    telephone: phone,
    sameAs: [
      "https://facebook.com/twinbrotherscleaning",
      "https://instagram.com/twinbrotherscleaning",
      googleBusinessProfile.mapsUrl,
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
      latitude: googleBusinessProfile.latitude,
      longitude: googleBusinessProfile.longitude,
    },
    areaServed: {
      "@type": "City",
      name: "Nakuru",
    },
    openingHoursSpecification: openingHours,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: googleBusinessProfile.rating,
      reviewCount: googleBusinessProfile.ratingCount,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [googleBusinessProfile.mapsUrl],
    parentOrganization: { "@id": `${siteConfig.url}/#organization` },
    // NEW: Explicit service types — critical for Google to classify you as a cleaning service
    serviceType: [
      "House Cleaning",
      "Office Cleaning",
      "Carpet Cleaning",
      "Sofa Cleaning",
      "Upholstery Cleaning",
      "Mattress Cleaning",
      "Post-Construction Cleaning",
      "Deep Cleaning",
      "Window Cleaning",
      "Move-Out Cleaning",
      "Pest Control",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "House Cleaning",
            description: "Regular or one-off residential cleaning with vetted, uniformed teams.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Office Cleaning",
            description: "Scheduled commercial cleaning for offices, banks and retail spaces.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Carpet Cleaning",
            description: "Hot water extraction and shampoo treatments for carpets and rugs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sofa & Upholstery Cleaning",
            description: "Fabric-safe shampooing and leather conditioning for furniture.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mattress Cleaning",
            description: "Deep vacuuming, steam sanitization and stain treatment for mattresses.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Post-Construction Cleaning",
            description: "Full debris removal and detail cleaning after renovation or new-build.",
          },
        },
      ],
    },
  };
}