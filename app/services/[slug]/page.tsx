import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2, XCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { SectionHeading } from "@/components/sections/section-heading";
import { FeatureGrid, FeatureGridItem } from "@/components/sections/feature-grid";
import { Timeline } from "@/components/sections/timeline";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTABanner } from "@/components/sections/cta-banner";
import { ServiceCard } from "@/components/cards/service-card";
import { ReviewCard } from "@/components/cards/review-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/lib/utils/icons";
import { JsonLd } from "@/components/seo/json-ld";
import { services, getServiceBySlug } from "@/lib/data/services";
import { serviceDetails } from "@/lib/data/service-details";
import { getTestimonialsForService } from "@/lib/data/testimonials";
import { locations } from "@/lib/data/locations";
import { formatPriceRange } from "@/lib/utils/format";
import { createMetadata } from "@/lib/metadata";
import {
  pageGraphSchema,
  webPageSchema,
  breadcrumbSchema,
  serviceSchema,
  faqSchema,
  reviewSchema,
  aggregateRatingSchema,
} from "@/lib/schema";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  // Built directly (rather than via the site-wide "{title} | {site name}"
  // template) because the full site name pushes long service names like
  // "Post-Construction Cleaning" or "Pest Control & Fumigation" past the
  // ~60-char limit search engines display in full. This short form always
  // fits: longest current case is 50 chars.
  const shortTitle = `${service.shortName} Nakuru | Twin Brothers`;

  // Under 160 chars, always includes the starting price and a phone CTA.
  const description = service.startingPrice
    ? `${service.tagline}. ${formatPriceRange(service.startingPrice)}. Call 0723 358 456 for a free quote.`
    : `${service.tagline}. Call 0723 358 456 for a free quote.`;

  const base = createMetadata({
    title: service.name,
    description,
    path: service.href,
  });

  return { ...base, title: { absolute: shortTitle } };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = serviceDetails[slug];
  if (!detail) notFound();

  const relatedServices = detail.relatedServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  const relatedTestimonials = getTestimonialsForService(detail.slug);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: detail.shortName, href: detail.href },
  ];

  return (
    <div className="flex flex-col gap-16">
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: detail.href,
            name: `${detail.name} | Twin Brothers Cleaning Service`,
            description: detail.description,
          }),
          breadcrumbSchema(breadcrumbItems),
          serviceSchema(detail),
          faqSchema(detail.faqs),
          relatedTestimonials.length > 0
            ? aggregateRatingSchema(relatedTestimonials)
            : null,
        ])}
      />

      <div className="container-content">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <section className="container-content grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Badge variant="primary" icon={<Icon name={detail.icon} className="size-3.5" />}>
            {detail.tagline}
          </Badge>
          <h1 className="mt-5 text-4xl font-medium leading-[1.08] text-(--color-ink) sm:text-5xl">
            {detail.name} in Nakuru
            <span className="mt-2 block text-lg font-normal text-(--color-muted) sm:text-xl">
              by Twin Brothers Cleaning Service
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-(--color-muted)">
            {detail.openingHook}
          </p>
          <p className="mt-3 text-sm text-(--color-muted)">
            Serving{" "}
            <Link href="/locations/nakuru" className="font-medium text-[var(--color-primary)] hover:underline">
              Nakuru Town and the surrounding area
            </Link>
            .
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" variant="primary">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            {detail.startingPrice ? (
              <span className="font-[family-name:var(--font-mono)] text-sm font-medium text-[var(--color-primary-ink)]">
                {formatPriceRange(detail.startingPrice)}
              </span>
            ) : null}
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card-hover)] lg:aspect-square">
          <Image
            src={detail.heroImage}
            alt={`Twin Brothers ${detail.name} in Nakuru`}
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="container-content">
        <SectionHeading eyebrow="Why it's worth doing properly" title="What you get" />
        <div className="mt-10">
          <FeatureGrid items={detail.benefits} columns={detail.benefits.length >= 4 ? 4 : 3} />
        </div>
      </section>

      {/* Included / Not included */}
      <section className="container-content grid gap-8 sm:grid-cols-2">
        <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
          <h2 className="text-lg font-medium text-[var(--color-ink)]">What's included</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {detail.included.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--color-body)]">
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 text-[var(--color-primary)]"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
        {detail.notIncluded && detail.notIncluded.length > 0 ? (
          <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-sunken)] p-6">
            <h2 className="text-lg font-medium text-[var(--color-ink)]">Not included</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {detail.notIncluded.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-(--color-muted)"
                >
                  <XCircle className="mt-0.5 size-4 shrink-0 text-(--color-muted)" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-(--color-muted)">
              Need one of these? Ask us — we can often arrange it or refer a trusted partner.
            </p>
          </div>
        ) : null}
      </section>

      {/* Pricing */}
      <section className="container-content">
        <SectionHeading eyebrow="Transparent pricing" title="How much does it cost?" />
        <div className="mt-8 flex flex-col gap-4 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:flex-row sm:items-center sm:justify-between">
          {detail.startingPrice ? (
            <p className="font-[family-name:var(--font-mono)] text-2xl font-semibold text-[var(--color-primary-ink)]">
              {formatPriceRange(detail.startingPrice)}
            </p>
          ) : null}
          <p className="max-w-xl text-sm leading-relaxed text-(--color-muted)">
            {detail.pricingNote}
          </p>
        </div>
      </section>

      {/* Areas we serve */}
      <section className="container-content">
        <SectionHeading eyebrow="Coverage" title={`${detail.shortName} across Nakuru`} />
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-(--color-muted)">
          Based on Moses Mudavadi Road, we cover Nakuru Town and the neighbourhoods around it,
          including:
        </p>
        <ul className="mt-5 flex flex-wrap gap-3">
          {locations[0]?.areasServed.map((area) => (
            <li
              key={area}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-body)]"
            >
              {area}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-(--color-muted)">
          Don't see your area listed?{" "}
          <Link href="/locations/nakuru" className="font-medium text-[var(--color-primary)] hover:underline">
            See full coverage
          </Link>{" "}
          or just ask — we'll confirm.
        </p>
      </section>

      {/* Process */}
      <section className="container-content">
        <SectionHeading eyebrow="How it works" title="From call to clean, in four steps" />
        <div className="mt-10">
          <Timeline steps={detail.process} />
        </div>
      </section>

      {/* Reviews for this service, if any */}
      {relatedTestimonials.length > 0 ? (
        <section className="container-content">
          <SectionHeading eyebrow="Client feedback" title={`What clients say about ${detail.shortName.toLowerCase()}`} />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {relatedTestimonials.map((testimonial) => (
              <ReviewCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="container-content">
        <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
        <div className="mx-auto mt-8 max-w-3xl">
          <FAQAccordion items={detail.faqs} />
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 ? (
        <section className="container-content">
          <SectionHeading eyebrow="Often paired with" title="Related services" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="container-content">
        <CTABanner
          title={`Ready to book ${detail.shortName.toLowerCase()}?`}
          description="Call, WhatsApp, or send us your details and we'll confirm a price the same day."
        />
      </section>
    </div>
  );
}
