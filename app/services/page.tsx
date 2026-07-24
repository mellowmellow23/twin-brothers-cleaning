import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServiceCard } from "@/components/cards/service-card";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CTABanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { services } from "@/lib/data/services";
import { whyChooseUs } from "@/lib/data/content";
import { createMetadata } from "@/lib/metadata";
import { pageGraphSchema, webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Cleaning Services",
  description:
    "House, office, carpet, sofa, mattress and post-construction cleaning in Nakuru — trained teams, professional equipment, transparent pricing.",
  path: "/services",
});

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-16">
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: "/services",
            name: "Cleaning Services | Twin Brothers Cleaning Service",
            description:
              "House, office, carpet, sofa, mattress and post-construction cleaning services in Nakuru.",
          }),
          breadcrumbSchema(breadcrumbItems),
        ])}
      />

      <div className="container-content">
        <Breadcrumbs items={breadcrumbItems} />
        <SectionHeading
          eyebrow="What we do"
          title="Cleaning services for every space"
          description="Six core services, one trained team. Pick what you need below, or get in touch if your job spans more than one."
        />
      </div>

      <section className="container-content">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="container-content">
        <SectionHeading eyebrow="Why Twin Brothers" title="Built for reliable results" />
        <div className="mt-10">
          <FeatureGrid items={whyChooseUs} columns={3} />
        </div>
      </section>

      <section className="container-content">
        <CTABanner
          title="Not sure which service you need?"
          description="Tell us about the space and the problem you're trying to solve — we'll recommend the right service and a price."
        />
      </section>
    </div>
  );
}