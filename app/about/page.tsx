import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { SectionHeading } from "@/components/sections/section-heading";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { MetricCard } from "@/components/cards/metric-card";
import { ReviewCard } from "@/components/cards/review-card";
import { CTABanner } from "@/components/sections/cta-banner";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/json-ld";
import { whyChooseUs, industriesServed } from "@/lib/data/content";
import { testimonials } from "@/lib/data/testimonials";
import { createMetadata } from "@/lib/metadata";
import { pageGraphSchema, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import type { Metric } from "@/types";

export const metadata: Metadata = createMetadata({
  title: "About Us",
  description:
    "Twin Brothers Cleaning Service is a Nakuru-based cleaning and pest control company built on trained, uniformed teams and professional-grade equipment.",
  path: "/about",
});

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

const metrics: Metric[] = [
  { label: "Core services", value: "6", icon: "Sparkles" },
  { label: "Operating days", value: "6", suffix: "/wk", icon: "Clock" },
  { label: "Uniformed crews", value: "100", suffix: "%", icon: "Users" },
  { label: "Based in", value: "Nakuru", icon: "MapPin" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16">
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: "/about",
            name: "About Twin Brothers Cleaning Service",
            description:
              "The story, values, and team behind Twin Brothers Cleaning Service in Nakuru, Kenya.",
          }),
          breadcrumbSchema(breadcrumbItems),
        ])}
      />

      <div className="container-content">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Intro */}
      <section className="container-content grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Badge variant="primary">Moses Mudavadi Road, Nakuru</Badge>
          <h1 className="mt-5 text-4xl font-medium leading-[1.08] text-[var(--color-ink)] sm:text-5xl">
            Cleaning, done by people who show up as promised.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
            Twin Brothers Cleaning &amp; Pest Control Services was built around a simple idea:
            homes and businesses in Nakuru deserve a cleaning partner they can actually rely on —
            the same trained, uniformed team, professional equipment, and a clear price agreed
            before any work starts.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">
            We work across house cleaning, office cleaning, carpet, sofa, mattress, and
            post-construction cleaning — and offer pest control alongside it, so one call can
            cover more than one problem.
          </p>
        </div>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card-hover)] lg:aspect-square">
          <Image
            src="/images/team/team-shopfront-1.jpeg"
            alt="The Twin Brothers Cleaning & Pest Control Services team outside their Nakuru shopfront"
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Metrics */}
      <section className="container-content">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container-content">
        <SectionHeading eyebrow="What we stand for" title="Built for reliable results" />
        <div className="mt-10">
          <FeatureGrid items={whyChooseUs} columns={3} />
        </div>
      </section>

      {/* Team photo strip */}
      <section className="container-content">
        <SectionHeading eyebrow="The team" title="A crew you'll recognize" />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)]">
            <Image
              src="/images/team/team-shopfront-1.jpeg"
              alt="The Twin Brothers Cleaning & Pest Control Services team outside their Nakuru shopfront"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-md)]">
            <Image
              src="/images/team/team-shopfront-2.jpeg"
              alt="Twin Brothers field team in high-visibility vests outside the Nakuru office"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Industries served */}
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

      {/* Testimonials */}
      <section className="container-content">
        <SectionHeading eyebrow="Client feedback" title="What clients say" />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.slice(0, 4).map((testimonial) => (
            <ReviewCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="container-content">
        <CTABanner
          title="Ready to work with us?"
          description="Call, WhatsApp, or send us your details and we'll confirm a price the same day."
        />
      </section>
    </div>
  );
}