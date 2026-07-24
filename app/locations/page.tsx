import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { SectionHeading } from "@/components/sections/section-heading";
import { LocationCard } from "@/components/cards/location-card";
import { CTABanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { locations } from "@/lib/data/locations";
import { createMetadata } from "@/lib/metadata";
import { pageGraphSchema, webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Areas We Serve",
  description:
    "Twin Brothers Cleaning Service operates from Moses Mudavadi Road, Nakuru, serving homes and businesses across the town and surrounding areas.",
  path: "/locations",
});

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/locations" },
];

export default function LocationsPage() {
  return (
    <div className="flex flex-col gap-16">
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: "/locations",
            name: "Areas We Serve | Twin Brothers Cleaning Service",
            description:
              "Service areas covered by Twin Brothers Cleaning Service in and around Nakuru, Kenya.",
          }),
          breadcrumbSchema(breadcrumbItems),
        ])}
      />

      <div className="container-content">
        <Breadcrumbs items={breadcrumbItems} />
        <SectionHeading
          eyebrow="Where we work"
          title="Areas we serve"
          description="Based on Moses Mudavadi Road, Nakuru — currently serving Nakuru town and its surrounding neighbourhoods."
        />
      </div>

      <section className="container-content">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <LocationCard key={location.slug} location={location} />
          ))}
        </div>
      </section>

      <section className="container-content">
        <CTABanner
          title="Not sure if we cover your area?"
          description="Call or WhatsApp us with your location and we'll confirm coverage right away."
        />
      </section>
    </div>
  );
}