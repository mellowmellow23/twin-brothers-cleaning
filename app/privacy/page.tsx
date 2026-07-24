import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { SectionHeading } from "@/components/sections/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { contactChannels, siteConfig } from "@/lib/data/site";
import { createMetadata } from "@/lib/metadata";
import { pageGraphSchema, webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects information submitted through this website.`,
  path: "/privacy",
  noIndex: true,
});

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy", href: "/privacy" },
];

const email = contactChannels.find((c) => c.type === "email");
const lastUpdated = "July 24, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col gap-12">
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: "/privacy",
            name: "Privacy Policy | Twin Brothers Cleaning Service",
            description: `Privacy policy for ${siteConfig.name}.`,
          }),
          breadcrumbSchema(breadcrumbItems),
        ])}
      />

      <div className="container-content">
        <Breadcrumbs items={breadcrumbItems} />
        <SectionHeading
          eyebrow="Legal"
          title="Privacy Policy"
          description={`Last updated ${lastUpdated}.`}
        />
      </div>

      <div className="container-content">
        <div className="prose-content mx-auto flex max-w-3xl flex-col gap-8 text-base leading-relaxed text-[var(--color-body)]">
          <section>
            <h2 className="text-xl font-medium text-[var(--color-ink)]">Introduction</h2>
            <p className="mt-3">
              This policy explains what information {siteConfig.legalName} ("we", "us", "our")
              collects through {siteConfig.url}, how it's used, and the choices available to you.
              By using this website or submitting a form, you agree to the practices described
              here.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-ink)]">Information we collect</h2>
            <ul className="mt-3 flex flex-col gap-2">
              <li>
                <strong className="text-[var(--color-ink)]">Contact form submissions</strong> —
                name, phone number, email address (optional), the service requested, and any
                message you provide.
              </li>
              <li>
                <strong className="text-[var(--color-ink)]">Basic usage data</strong> — standard
                web server logs such as pages visited, browser type, and approximate location,
                collected automatically by our hosting provider.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-ink)]">How we use it</h2>
            <p className="mt-3">
              Information submitted through the contact form is used only to respond to your
              quote request or enquiry, to schedule and deliver the cleaning service you've asked
              about, and to keep basic business records. We do not sell contact information to
              third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-ink)]">How we share it</h2>
            <p className="mt-3">
              We do not share your personal information with third parties except where needed to
              deliver the service you've requested (for example, coordinating a job with a
              subcontracted team member), or where required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-ink)]">Data retention</h2>
            <p className="mt-3">
              We retain contact form submissions for as long as reasonably necessary to respond to
              your enquiry and maintain basic business records, after which they may be deleted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-ink)]">Your choices</h2>
            <p className="mt-3">
              You can ask us to access, correct, or delete personal information we hold about you
              by contacting us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-[var(--color-ink)]">Contact us</h2>
            <p className="mt-3">
              Questions about this policy can be sent to{" "}
              {email ? (
                <a href={email.href} className="font-medium text-[var(--color-primary)] hover:underline">
                  {email.value}
                </a>
              ) : (
                "our office"
              )}
              .
            </p>
          </section>

          <p className="text-sm text-[var(--color-muted)]">
            This is a general-purpose policy template and has not been reviewed by a lawyer.
            Consider having it reviewed against Kenya's Data Protection Act, 2019, before relying
            on it for compliance purposes.
          </p>
        </div>
      </div>
    </div>
  );
}