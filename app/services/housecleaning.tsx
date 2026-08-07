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
  title: "House Cleaning Nakuru | Professional Home Cleaning Services",
  description:
    "Expert house cleaning in Nakuru, Kenya. Regular, deep, and one-off residential cleaning with trained, uniformed teams. Satisfaction guaranteed. Get a free quote today.",
  path: "/services/house-cleaning",
  keywords: [
    "house cleaning Nakuru",
    "home cleaning Nakuru",
    "residential cleaning Nakuru",
    "deep house cleaning Nakuru",
    "regular house cleaning Nakuru",
    "maid service Nakuru",
    "housekeeping Nakuru",
    "home cleaners Nakuru",
    "apartment cleaning Nakuru",
    "move in cleaning Nakuru",
    "move out cleaning Nakuru",
    "spring cleaning Nakuru",
    "one off cleaning Nakuru",
  ],
});

const houseCleaningFaqs = [
  {
    question: "How much does house cleaning cost in Nakuru?",
    answer:
      "House cleaning in Nakuru starts from KES 2,500 per visit for a standard 2-bedroom apartment. Pricing depends on property size, cleaning frequency, and specific requirements. Contact us for a free, no-obligation quote tailored to your home.",
  },
  {
    question: "What areas of the house do you clean?",
    answer:
      "We clean every room including kitchens, bathrooms, bedrooms, living areas, and balconies. Our checklist covers floors, surfaces, appliances, windows (interior), toilets, showers, and dusting. We also offer add-ons like fridge cleaning, oven cleaning, and cabinet organization.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "No — many of our Nakuru clients provide access instructions and return to a spotless home. If you prefer to be present, we'll work around your schedule. All our cleaners are vetted, uniformed, and insured for your peace of mind.",
  },
  {
    question: "How often should I schedule house cleaning?",
    answer:
      "For most homes in Nakuru, we recommend weekly or bi-weekly cleaning to maintain hygiene and reduce dust buildup. Deep cleaning is ideal every 3–6 months, and one-off cleaning works perfectly before events, after renovations, or when moving in or out.",
  },
  {
    question: "Do you bring your own cleaning supplies?",
    answer:
      "Yes. Our teams arrive with professional-grade equipment and eco-friendly cleaning products suited to different surfaces — tile, wood, marble, and fabric. You don't need to supply anything.",
  },
];

const houseCleaningSteps = [
  {
    step: 1,
    title: "Book your clean",
    description: "Call, WhatsApp, or fill our form with your home size and preferred schedule.",
  },
  {
    step: 2,
    title: "Get a custom quote",
    description: "We assess your needs and confirm a fair price before any work begins.",
  },
  {
    step: 3,
    title: "We clean your home",
    description: "Our trained team arrives on time with equipment and follows a room-by-room checklist.",
  },
  {
    step: 4,
    title: "Inspect & sign off",
    description: "Walk through with our supervisor. We fix anything missed before we leave.",
  },
];

const houseFeatures: FeatureGridItem[] = [
  {
    icon: "Sparkles",
    title: "Room-by-room checklist",
    description: "Every kitchen, bathroom, bedroom, and living area gets systematic attention — nothing is skipped.",
  },
  {
    icon: "ShieldCheck",
    title: "Vetted, uniformed staff",
    description: "Our cleaners are background-checked, trained in-house, and wear Twin Brothers uniforms.",
  },
  {
    icon: "Leaf",
    title: "Safe for kids & pets",
    description: "We use surface-appropriate, non-toxic products that are tough on dirt but gentle on your family.",
  },
  {
    icon: "Clock",
    title: "Flexible scheduling",
    description: "Weekly, bi-weekly, monthly, or one-off — we work around your calendar, including weekends.",
  },
  {
    icon: "Home",
    title: "All home types",
    description: "Apartments, townhouses, bungalows, and gated community homes across Nakuru.",
  },
  {
    icon: "CheckCircle2",
    title: "Satisfaction guarantee",
    description: "Not happy? Tell us within 24 hours and we'll re-clean the area at no extra charge.",
  },
];

const whatsappLink = "https://wa.me/254723358456?text=Hi%20Twin%20Brothers,%20I%20need%20a%20house%20cleaning%20quote%20in%20Nakuru";

export default function HouseCleaningPage() {
  return (
    <div className="flex flex-col gap-20 sm:gap-28">
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: "/services/house-cleaning",
            name: "House Cleaning Nakuru | Twin Brothers Cleaning",
            description:
              "Expert house cleaning in Nakuru, Kenya. Regular, deep, and one-off residential cleaning with trained teams.",
          }),
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "House Cleaning", href: "/services/house-cleaning" },
          ]),
          faqSchema(houseCleaningFaqs),
        ])}
      />

      <Hero
        eyebrow="Residential Cleaning"
        title="House cleaning in Nakuru — spotless homes, happy families"
        description="From weekly upkeep to deep spring cleans and move-in/move-out scrubs, Twin Brothers delivers reliable house cleaning across Nakuru. Trained teams, professional equipment, and a satisfaction guarantee on every visit."
        primaryLabel="Get a Free Quote"
        primaryHref="/contact"
        secondaryLabel="Call Now"
        secondaryHref="tel:+254723358456"
        image={{
          src: "/images/gallery/house-cleaning-living-room.jpeg",
          alt: "Twin Brothers team deep cleaning a living room in a Nakuru home",
        }}
      />

      {/* Pricing Banner */}
      <section className="container-content">
        <div className="rounded-2xl bg-primary/5 p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Transparent Pricing</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">House cleaning from KES 2,500</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Pricing depends on home size, condition, and frequency. No hidden fees — what we quote is what you pay.
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

      {/* What's Included */}
      <section className="container-content">
        <SectionHeading
          eyebrow="What's included"
          title="A complete clean, every single time"
          description="Our house cleaning checklist covers every corner of your home. Here's what you get on every visit:"
        />
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {[
            "Dust and wipe all surfaces, shelves, and furniture",
            "Vacuum and mop all floors (tile, wood, carpet)",
            "Clean and sanitize kitchens — counters, sinks, stovetops",
            "Scrub bathrooms — toilets, showers, tubs, mirrors",
            "Make beds and tidy living areas",
            "Empty trash bins and replace liners",
            "Clean interior windows and window sills",
            "Wipe down doors, handles, and light switches",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-base text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container-content">
        <SectionHeading eyebrow="Why us" title="Why Nakuru homeowners trust Twin Brothers" />
        <div className="mt-10">
          <FeatureGrid items={houseFeatures} columns={3} />
        </div>
      </section>

      {/* How It Works */}
      <section className="container-content">
        <SectionHeading eyebrow="How it works" title="Book a house clean in 4 simple steps" />
        <div className="mt-10">
          <Timeline steps={houseCleaningSteps} />
        </div>
      </section>

      {/* Service Areas */}
      <section className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">House cleaning across Nakuru</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We provide house cleaning services throughout Nakuru town and surrounding neighborhoods 
            including <strong>Lanet</strong>, <strong>Milimani</strong>, <strong>Section 58</strong>, 
            <strong>London</strong>, <strong>Pipeline</strong>, and <strong>Free Area</strong>. 
            Whether you live in an apartment near the CBD or a bungalow in the suburbs, our team 
            comes to you fully equipped and ready to clean.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Looking for other services? We also offer{" "}
            <Link href="/services/office-cleaning" className="text-primary underline underline-offset-4 hover:text-primary/80">office cleaning</Link>,{" "}
            <Link href="/services/carpet-cleaning" className="text-primary underline underline-offset-4 hover:text-primary/80">carpet cleaning</Link>, and{" "}
            <Link href="/services/sofa-cleaning" className="text-primary underline underline-offset-4 hover:text-primary/80">sofa cleaning</Link>{" "}
            — book multiple services and save.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-content">
        <SectionHeading eyebrow="FAQ" title="House cleaning questions answered" />
        <div className="mx-auto mt-8 max-w-3xl">
          <FAQAccordion items={houseCleaningFaqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="container-content">
        <CTABanner
          title="Ready for a cleaner home?"
          description="Call or WhatsApp us now and get a house cleaning quote for your Nakuru home today."
        />
      </section>
    </div>
  );
}