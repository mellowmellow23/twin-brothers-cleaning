import type { Metadata } from "next";
import Link from "next/link";
import { HomeHero } from "@/components/sections/home-hero";
import { ServicesPricing } from "@/components/sections/services-pricing";
import { SectionHeading } from "@/components/sections/section-heading";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Timeline } from "@/components/sections/timeline";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTABanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { whyChooseUs, cleaningProcess, industriesServed, homeFaqs } from "@/lib/data/content";
import { galleryImages } from "@/lib/data/gallery";
import { createMetadata } from "@/lib/metadata";
import { pageGraphSchema, webPageSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = createMetadata({
  title: "Twin Brothers Cleaning Service | Nakuru - Fumigation, Sofa & Carpet Cleaning",
  description:
    "Fumigation, sofa & carpet cleaning in Nakuru, plus house, office, Airbnb and restaurant cleaning. Clear prices. Call 0723 358 456 or WhatsApp 0718 208 407.",
  path: "/",
  keywords: [
    "cleaning service Nakuru",
    "house cleaning Nakuru",
    "fumigation Nakuru",
    "pest control Nakuru",
    "office cleaning Kenya",
    "carpet cleaning Nakuru",
    "sofa cleaning Nakuru",
    "mattress cleaning Nakuru",
    "airbnb cleaning Nakuru",
    "restaurant cleaning Nakuru",
    "post construction cleaning Nakuru",
    "deep cleaning Nakuru",
    "professional cleaners Nakuru",
    "commercial cleaning Nakuru",
    "best cleaning company Nakuru",
  ],
});

const serviceAreaLinks: { label: string; href: string }[] = [
  { label: "house cleaning", href: "/services/house-cleaning" },
  { label: "fumigation", href: "/services/pest-control" },
  { label: "office cleaning", href: "/services/office-cleaning" },
  { label: "carpet cleaning", href: "/services/carpet-cleaning" },
  { label: "sofa cleaning", href: "/services/sofa-cleaning" },
  { label: "mattress cleaning", href: "/services/mattress-cleaning" },
  { label: "Airbnb cleaning", href: "/services/airbnb-management" },
  { label: "restaurant cleaning", href: "/services/restaurant-cleaning" },
  { label: "post-construction cleaning", href: "/services/post-construction-cleaning" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24">
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: "/",
            name: "Twin Brothers Cleaning Service",
            description:
              "Cleaning and fumigation in Nakuru, Kenya: house, office, carpet, sofa, mattress, Airbnb, restaurant and post-construction cleaning.",
          }),
          breadcrumbSchema([{ label: "Home", href: "/" }]),
          faqSchema(homeFaqs),
        ])}
      />

      <HomeHero />

      <ServicesPricing />

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

      {/* Service area, keyword-rich text for local SEO */}
      <section className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Twin Brothers Cleaning Service operates throughout <strong>Nakuru</strong> and
            surrounding areas including Lanet, Naivasha, Molo, and Njoro. Whether you need{" "}
            {serviceAreaLinks.map((item, index) => (
              <span key={item.href}>
                <Link
                  href={item.href}
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  {item.label}
                </Link>
                {index < serviceAreaLinks.length - 2
                  ? ", "
                  : index === serviceAreaLinks.length - 2
                    ? ", or "
                    : ""}
              </span>
            ))}
            , our trained teams arrive with professional equipment and get it done right the
            first time.
          </p>
        </div>
      </section>

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
          <Button asChild variant="outline" aria-label="View full cleaning work gallery">
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
