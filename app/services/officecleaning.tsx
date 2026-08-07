import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { FeatureGrid, FeatureGridItem } from "@/components/sections/feature-grid";
import { Timeline } from "@/components/sections/timeline";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTABanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/metadata";
import { pageGraphSchema, webPageSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Office Cleaning Nakuru | Commercial Cleaning Services Kenya",
  description:
    "Professional office cleaning in Nakuru and across Kenya. Daily, weekly, and after-hours commercial cleaning for offices, banks, and retail spaces. Get a free quote.",
  path: "/services/office-cleaning",
  keywords: [
    "office cleaning Nakuru",
    "commercial cleaning Nakuru",
    "office cleaning Kenya",
    "business cleaning Nakuru",
    "janitorial services Nakuru",
    "workplace cleaning Nakuru",
    "retail cleaning Nakuru",
    "bank cleaning Nakuru",
    "office cleaners Nakuru",
    "commercial cleaners Kenya",
    "after hours cleaning Nakuru",
    "daily office cleaning Nakuru",
  ],
});

const officeFaqs = [
  {
    question: "How much does office cleaning cost in Nakuru?",
    answer:
      "Office cleaning in Nakuru starts from KES 15,000 per visit for small offices. Pricing depends on square footage, number of staff, cleaning frequency, and specific requirements like carpet or window cleaning. We offer discounted rates for daily and weekly contracts.",
  },
  {
    question: "Can you clean after business hours?",
    answer:
      "Yes — we specialize in after-hours and weekend office cleaning so your team returns to a fresh workspace every morning. We can also clean during lunch breaks or off-peak hours to minimize disruption.",
  },
  {
    question: "What commercial spaces do you clean?",
    answer:
      "We clean offices, banks, retail shops, showrooms, co-working spaces, clinics, restaurants, and event venues across Nakuru and surrounding areas.",
  },
  {
    question: "Do you provide cleaning supplies and equipment?",
    answer:
      "Absolutely. Our commercial teams arrive with industrial-grade vacuums, floor scrubbers, microfiber cloths, and commercial-strength disinfectants. You don't need to supply anything.",
  },
  {
    question: "Is your staff trained and insured?",
    answer:
      "Yes. All our commercial cleaners are background-checked, trained in workplace hygiene protocols, and covered by liability insurance. We also assign a dedicated supervisor for larger contracts.",
  },
];

const officeSteps = [
  {
    step: 1,
    title: "Site assessment",
    description: "We visit your office to assess size, layout, and cleaning needs.",
  },
  {
    step: 2,
    title: "Custom quote",
    description: "Receive a detailed proposal with scope, schedule, and pricing.",
  },
  {
    step: 3,
    title: "Scheduled cleaning",
    description: "Our uniformed team cleans during your preferred hours — after work or weekends.",
  },
  {
    step: 4,
    title: "Quality check",
    description: "Supervisor inspects the work and sends you a completion report.",
  },
];

const officeFeatures: FeatureGridItem[] = [
  {
    icon: "Building2",
    title: "All commercial spaces",
    description: "Offices, banks, retail, clinics, showrooms, and co-working spaces in Nakuru.",
  },
  {
    icon: "Clock",
    title: "After-hours cleaning",
    description: "We clean when your business is closed — no disruption to your operations.",
  },
  {
    icon: "ShieldCheck",
    title: "Trained commercial crew",
    description: "Staff trained in workplace hygiene, safety protocols, and discretion.",
  },
  {
    icon: "Sparkles",
    title: "Deep sanitization",
    description: "High-touch surfaces, shared areas, and restrooms disinfected thoroughly.",
  },
  {
    icon: "Leaf",
    title: "Eco-friendly options",
    description: "Low-odor, non-toxic products available for sensitive work environments.",
  },
  {
    icon: "Zap",
    title: "Contract flexibility",
    description: "Daily, weekly, bi-weekly, or one-off — scale up or down as needed.",
  },
];

const whatsappLink = "https://wa.me/254723358456?text=Hi%20Twin%20Brothers,%20I%20need%20an%20office%20cleaning%20quote%20in%20Nakuru";

export default function OfficeCleaningPage() {
  return (
    <div className="flex flex-col gap-20 sm:gap-28">
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: "/services/office-cleaning",
            name: "Office Cleaning Nakuru | Twin Brothers Cleaning",
            description:
              "Professional office cleaning in Nakuru and across Kenya. Daily, weekly, and after-hours commercial cleaning.",
          }),
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Office Cleaning", href: "/services/office-cleaning" },
          ]),
          faqSchema(officeFaqs),
        ])}
      />

      <Hero
        eyebrow="Commercial Cleaning"
        title="Office cleaning in Nakuru — workspaces that impress"
        description="Keep your Nakuru office client-ready every day. Twin Brothers provides scheduled commercial cleaning for offices, banks, retail spaces, and clinics — with after-hours options and trained, insured crews."
        primaryLabel="Get a Free Quote"
        primaryHref="/contact"
        secondaryLabel="Call Now"
        secondaryHref="tel:+254723358456"
        image={{
          src: "/images/gallery/office-cleaning-nakuru.jpeg",
          alt: "Twin Brothers team cleaning a modern office space in Nakuru",
        }}
      />

      <section className="container-content">
        <div className="rounded-2xl bg-primary/5 p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Transparent Pricing</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Office cleaning from KES 15,000</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Based on office size and frequency. Daily contracts get discounted rates. No hidden fees.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Request a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container-content">
        <SectionHeading
          eyebrow="What's included"
          title="A complete office clean, every visit"
          description="Our office cleaning checklist ensures your workspace is hygienic, organized, and presentable:"
        />
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {[
            "Empty bins and replace liners in all areas",
            "Dust and wipe desks, chairs, and workstations",
            "Clean and sanitize kitchens and break rooms",
            "Scrub and disinfect restrooms and shared facilities",
            "Vacuum and mop all floors and common areas",
            "Clean glass doors, partitions, and reception areas",
            "Sanitize high-touch surfaces — handles, switches, phones",
            "Restock restroom supplies if provided",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-base text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container-content">
        <SectionHeading eyebrow="Why us" title="Why Nakuru businesses choose Twin Brothers" />
        <div className="mt-10">
          <FeatureGrid items={officeFeatures} columns={3} />
        </div>
      </section>

      <section className="container-content">
        <SectionHeading eyebrow="How it works" title="Office cleaning in 4 steps" />
        <div className="mt-10">
          <Timeline steps={officeSteps} />
        </div>
      </section>

      <section className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Commercial cleaning across Nakuru</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We serve businesses throughout <strong>Nakuru CBD</strong>, <strong>Lanet</strong>, 
            <strong>Milimani</strong>, and surrounding commercial zones. From single offices to multi-floor 
            buildings, our commercial cleaning teams scale to your needs. We also cover{" "}
            <Link href="/services/carpet-cleaning" className="text-primary underline underline-offset-4 hover:text-primary/80">carpet cleaning</Link>{" "}
            and{" "}
            <Link href="/services/post-construction-cleaning" className="text-primary underline underline-offset-4 hover:text-primary/80">post-construction cleaning</Link>{" "}
            for offices undergoing renovation.
          </p>
        </div>
      </section>

      <section className="container-content">
        <SectionHeading eyebrow="FAQ" title="Office cleaning questions answered" />
        <div className="mx-auto mt-8 max-w-3xl">
          <FAQAccordion items={officeFaqs} />
        </div>
      </section>

      <section className="container-content">
        <CTABanner
          title="Ready for a cleaner workplace?"
          description="Call or WhatsApp us now for a custom office cleaning quote in Nakuru."
        />
      </section>
    </div>
  );
}