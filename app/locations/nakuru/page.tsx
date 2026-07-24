import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { SectionHeading } from "@/components/sections/section-heading";
import { ServiceCard } from "@/components/cards/service-card";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTABanner } from "@/components/sections/cta-banner";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/lib/utils/icons";
import { JsonLd } from "@/components/seo/json-ld";
import { getLocationBySlug } from "@/lib/data/locations";
import { services } from "@/lib/data/services";
import { homeFaqs } from "@/lib/data/content";
import { createMetadata } from "@/lib/metadata";
import { pageGraphSchema, webPageSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { notFound } from "next/navigation";

const location = getLocationBySlug("nakuru");

export const metadata: Metadata = createMetadata({
  title: "Cleaning Services in Nakuru",
  description:
    "Professional house, office, carpet, sofa, mattress and post-construction cleaning across Nakuru town and the surrounding areas.",
  path: "/locations/nakuru",
});

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Locations", href: "/locations" },
  { label: "Nakuru", href: "/locations/nakuru" },
];

export default function NakuruLocationPage() {
  if (!location) notFound();

  return (
    <div className="flex flex-col gap-16">
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: "/locations/nakuru",
            name: "Cleaning Services in Nakuru | Twin Brothers Cleaning Service",
            description:
              "Professional cleaning services covering Nakuru town and surrounding neighbourhoods.",
          }),
          breadcrumbSchema(breadcrumbItems),
          faqSchema(homeFaqs.filter((f) => f.question.toLowerCase().includes("area"))),
        ])}
      />

      <div className="container-content">
        <Breadcrumbs items={breadcrumbItems} />
        <Badge variant="primary" icon={<Icon name="MapPin" className="size-3.5" />}>
          {location.region}
        </Badge>
        <h1 className="mt-5 text-4xl font-medium leading-[1.08] text-[var(--color-ink)] sm:text-5xl">
          Cleaning services in {location.name}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
          {location.description}
        </p>
      </div>

      {/* Areas served */}
      <section className="container-content">
        <SectionHeading eyebrow="Coverage" title="Neighbourhoods we serve" />
        <ul className="mt-8 flex flex-wrap gap-3">
          {location.areasServed.map((area) => (
            <li
              key={area}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-body)]"
            >
              {area}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-[var(--color-muted)]">
          Don't see your area listed?{" "}
          <Link href="/contact" className="font-medium text-[var(--color-primary)] hover:underline">
            Get in touch
          </Link>{" "}
          and we'll confirm coverage.
        </p>
      </section>

      {/* Services available here */}
      <section className="container-content">
        <SectionHeading eyebrow="Available here" title={`Services in ${location.name}`} />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-content">
        <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
        <div className="mx-auto mt-8 max-w-3xl">
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      <section className="container-content">
        <CTABanner
          title={`Ready to book in ${location.name}?`}
          description="Call, WhatsApp, or send us your details and we'll confirm a price the same day."
        />
      </section>
    </div>
  );
}