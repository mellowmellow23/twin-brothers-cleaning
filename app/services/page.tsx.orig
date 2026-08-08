import type { Metadata } from "next";

import { Hero } from "@/components/sections/hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { CTABanner } from "@/components/sections/cta-banner";
import { ServiceCard } from "@/components/cards/service-card";
import { JsonLd } from "@/components/seo/json-ld";

import { services } from "@/lib/data/services";
import { createMetadata } from "@/lib/metadata";
import { pageGraphSchema, webPageSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Professional Cleaning Services in Nakuru",
  description:
    "Professional residential and commercial cleaning services in Nakuru including house cleaning, office cleaning, sofa cleaning, carpet cleaning, mattress cleaning and post-construction cleaning.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: "/services",
            name: "Cleaning Services | Twin Brothers Cleaning Service",
            description:
              "Professional cleaning services for homes and businesses in Nakuru.",
          }),
        ])}
      />

      <Hero
        eyebrow="Professional Cleaning Services"
        title="Reliable cleaning services for every space."
        description="Whether you need regular home cleaning, deep cleaning, office cleaning or specialist cleaning services, Twin Brothers Cleaning Service delivers dependable results across Nakuru."
        primaryLabel="Get Free Quote"
        primaryHref="/contact"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />

      <section className="container-content py-20">
        <SectionHeading
          eyebrow="Our Services"
          title="Choose the cleaning service you need"
          description="Every service is delivered by trained professionals using quality equipment and safe cleaning products."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
            />
          ))}
        </div>
      </section>

      <section className="container-content py-20">
        <SectionHeading
          eyebrow="Why Choose Twin Brothers"
          title="Cleaning you can rely on"
          description="We focus on quality, professionalism and customer satisfaction on every job."
        />

        <div className="mt-12">
          <FeatureGrid
            columns={4}
            items={[
              {
                icon: "ShieldCheck",
                title: "Professional Team",
                description:
                  "Experienced cleaners committed to delivering excellent results.",
              },
              {
                icon: "Clock",
                title: "Always On Time",
                description:
                  "Reliable appointments with flexible scheduling for homes and businesses.",
              },
              {
                icon: "Sparkles",
                title: "Quality Cleaning",
                description:
                  "Attention to detail with modern equipment and effective cleaning products.",
              },
              {
                icon: "ShieldCheck",
                title: "Trusted Service",
                description:
                  "Honest pricing, dependable staff and customer-focused service.",
              },
            ]}
          />
        </div>
      </section>

      <CTABanner
        title="Need professional cleaning in Nakuru?"
        description="Request a free quotation today and let Twin Brothers Cleaning Service handle the hard work."
      />
    </>
  );
}