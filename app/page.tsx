import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Timeline } from "@/components/sections/timeline";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTABanner } from "@/components/sections/cta-banner";
import { ServiceCard } from "@/components/cards/service-card";
import { JsonLd } from "@/components/seo/json-ld";
import { services } from "@/lib/data/services";
import { whyChooseUs, cleaningProcess, industriesServed, homeFaqs } from "@/lib/data/content";
import { galleryImages } from "@/lib/data/gallery";
import { createMetadata } from "@/lib/metadata";
import { pageGraphSchema, webPageSchema, faqSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = createMetadata({
  title: "Twin Brothers Cleaning Service | Nakuru",
  description:
    "Professional house, office, carpet, sofa, mattress and post-construction cleaning in Nakuru, Kenya. Trained teams, professional equipment, and a satisfaction guarantee.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="flex flex-col gap-20 sm:gap-28">
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: "/",
            name: "Twin Brothers Cleaning Service",
            description:
              "Professional house, office, carpet, sofa, mattress and post-construction cleaning in Nakuru, Kenya.",
          }),
          faqSchema(homeFaqs),
        ])}
      />

      <Hero
        eyebrow="Moses Mudavadi Road, Nakuru"
        title="A cleaner, healthier space — done properly, the first time."
        description="Twin Brothers Cleaning Service brings trained, uniformed teams and professional-grade equipment to homes and businesses across Nakuru. Book house cleaning, office cleaning, carpet, sofa, mattress, or post-construction cleaning in one call."
        primaryLabel="Get a Free Quote"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
        image={{
          src: "/images/gallery/sofa-cleaning-outdoor.jpeg",
          alt: "Twin Brothers team steam-cleaning a full set of sofas and dining chairs on site in Nakuru",
        }}
      />

      {/* Problem section */}
      <section className="container-content">
        <SectionHeading
          eyebrow="The problem"
          title="Cleaning day shouldn't mean gambling on who shows up"
          description="Untrained crews, borrowed equipment, and the wrong products on delicate fabric or stone cost you time and money to fix. Twin Brothers sends a trained, equipped team so it's done right the first time."
          align="center"
          className="mx-auto"
        />
      </section>

      {/* Services grid */}
      <section className="container-content">
        <SectionHeading
          eyebrow="What we do"
          title="Cleaning services for every space"
          description="Pick a service below, or get in touch if you need more than one."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-content">
        <SectionHeading eyebrow="Why Twin Brothers" title="Built for reliable results" />
        <div className="mt-10">
          <FeatureGrid items={whyChooseUs} columns={3} />
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="container-content">
        <SectionHeading eyebrow="How it works" title="From call to clean, in four steps" />
        <div className="mt-10">
          <Timeline steps={cleaningProcess} />
        </div>
      </section>

      {/* Industries Served */}
      <section className="container-content">
        <SectionHeading eyebrow="Who we work with" title="Industries we serve" />
        <div className="mt-10">
          <FeatureGrid
            items={industriesServed.map((industry) => ({
              icon: industry.icon,
              title: industry.name,
              description: industry.description,
            }))}
            columns={4}
          />
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="container-content">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Recent work" title="See the Twin Brothers team at work" />
          <Button asChild variant="outline">
            <Link href="/gallery">View full gallery</Link>
          </Button>
        </div>
        <div className="mt-10">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* FAQ */}
      <section className="container-content">
        <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
        <div className="mx-auto mt-8 max-w-3xl">
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-content">
        <CTABanner
          title="Ready to book your clean?"
          description="Call, WhatsApp, or send us your details and we'll confirm a price the same day."
        />
      </section>
    </div>
  );
}
