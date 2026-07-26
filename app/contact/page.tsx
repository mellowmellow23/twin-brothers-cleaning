import type { Metadata } from "next";
import { PhoneCall, MessageCircle, MapPin, Clock, Star } from "lucide-react";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { SectionHeading } from "@/components/sections/section-heading";
import { ContactForm } from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { contactChannels, businessHours, googleBusinessProfile } from "@/lib/data/site";
import { createMetadata } from "@/lib/metadata";
import { pageGraphSchema, webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Contact Us",
  description:
    "Call, WhatsApp, or send Twin Brothers Cleaning Service your details for a free quote. Based on Moses Mudavadi Road, Nakuru.",
  path: "/contact",
});

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

export default function ContactPage() {
  const phone = contactChannels.find((c) => c.type === "phone");
  const whatsapp = contactChannels.find((c) => c.type === "whatsapp");
  const address = contactChannels.find((c) => c.type === "address");

  return (
    <div className="flex flex-col gap-14">
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: "/contact",
            name: "Contact Twin Brothers Cleaning Service",
            description: "Contact details, hours, and quote request form for Twin Brothers Cleaning Service in Nakuru.",
          }),
          breadcrumbSchema(breadcrumbItems),
        ])}
      />

      <div className="container-content">
        <Breadcrumbs items={breadcrumbItems} />
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's get your space cleaned"
          description="Call or WhatsApp us directly for the fastest response, or send your details below and we'll confirm a price the same day."
        />
      </div>

      <div className="container-content grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="flex-1">
              <a href={whatsapp?.href} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="flex-1">
              <a href={phone?.href}>
                <PhoneCall className="size-4" aria-hidden="true" />
                Call {phone?.value}
              </a>
            </Button>
          </div>

          <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-[var(--color-ink)]">Office</p>
                <a
                  href={address?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--color-muted)] hover:text-[var(--color-primary)]"
                >
                  {address?.value}
                </a>
              </div>
            </div>
            <div className="mt-5 flex items-start gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-[var(--color-ink)]">Business Hours</p>
                <ul className="mt-1 text-sm text-[var(--color-muted)]">
                  {businessHours.map((entry) => (
                    <li key={entry.day} className="flex justify-between gap-6">
                      <span>{entry.day}</span>
                      <span className="font-[family-name:var(--font-mono)]">{entry.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Real embedded map, using the verified Google Business Profile listing */}
          <div className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)]">
            <iframe
              src={googleBusinessProfile.embedUrl}
              title="Twin Brothers Cleaning Service on Google Maps"
              className="aspect-video w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col gap-3 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-sm text-[var(--color-body)]">
              <Star className="size-4 fill-[var(--color-primary)] text-[var(--color-primary)]" aria-hidden="true" />
              <span>
                <strong className="text-[var(--color-ink)]">{googleBusinessProfile.rating}</strong> on Google ·{" "}
                {googleBusinessProfile.ratingCount} reviews
              </span>
            </div>
            <a
              href={googleBusinessProfile.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--color-primary)] hover:underline"
            >
              Leave us a review on Google →
            </a>
          </div>
        </div>

        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8">
          <h2 className="text-xl font-medium text-[var(--color-ink)]">Request a Quote</h2>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            Tell us about the job and we'll get back to you with a price.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}