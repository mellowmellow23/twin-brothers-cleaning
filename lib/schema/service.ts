import { siteConfig } from "@/lib/data/site";
import type { ServiceSummary } from "@/types";

export function serviceSchema(service: ServiceSummary) {
  return {
    "@type": "Service",
    "@id": `${siteConfig.url}${service.href}#service`,
    name: service.name,
    description: service.description,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: { "@type": "City", name: "Nakuru" },
    serviceType: service.name,
    ...(service.startingPrice
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: service.startingPrice.currency,
            price: service.startingPrice.from,
            url: new URL(service.href, siteConfig.url).toString(),
          },
        }
      : {}),
  };
}
