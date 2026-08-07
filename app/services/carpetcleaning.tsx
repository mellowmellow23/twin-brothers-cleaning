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
  title: "Carpet Cleaning Nakuru | Steam & Shampoo Extraction",
  description:
    "Professional carpet cleaning in Nakuru. Hot water extraction and deep shampoo treatments for homes and offices. Remove stains, odors, and allergens. Book today.",
  path: "/services/carpet-cleaning",
  keywords: [
    "carpet cleaning Nakuru",
    "steam cleaning carpets Nakuru",
    "carpet shampoo Nakuru",
    "rug cleaning Nakuru",
    "carpet stain removal Nakuru",
    "deep carpet cleaning Nakuru",
    "office carpet cleaning Nakuru",
    "home carpet cleaning Nakuru",
    "carpet cleaners Nakuru",
    "carpet deodorizing Nakuru",
    "hot water extraction Nakuru",
    "carpet cleaning services Kenya",
  ],
});

const carpetFaqs = [
  {
    question: "How much does carpet cleaning cost in Nakuru?",
    answer:
      "Carpet cleaning in Nakuru starts from KES 350 per square foot. A standard 3-bedroom home with wall-to-wall carpet typically costs between KES 8,000 and KES 15,000. We assess the carpet condition, size, and stain level before quoting.",
  },
  {
    question: "What carpet cleaning method do you use?",
    answer:
      "We use hot water extraction (steam cleaning) for deep dirt and allergen removal, plus shampoo treatment for heavily soiled or stained carpets. Both methods are safe for wool, synthetic, and blended fibers.",
  },
  {
    question: "How long does carpet cleaning take to dry?",
    answer:
      "Most carpets dry within 4–6 hours in Nakuru's climate. We use high-powered extraction machines that remove most moisture during cleaning. We recommend scheduling in the morning so carpets are dry by evening.",
  },
  {
    question: "Can you remove old stains and pet odors?",
    answer:
      "Yes. We use enzyme-based treatments for organic stains (wine, coffee, pet urine) and deodorizing agents that neutralize odors at the source rather than masking them. Results depend on stain age and carpet type — we'll be honest about what's achievable.",
  },
  {
    question: "Do you clean rugs and car carpets too?",
    answer:
      "Yes — we clean Persian rugs, synthetic rugs, car carpets, and office carpet tiles. Each material gets a tailored treatment to avoid damage.",
  },
];

const carpetSteps = [
  {
    step: 1,
    title: "Inspection & quote",
    description: "We assess carpet type, condition, and stains, then confirm a fair price.",
  },
  {
    step: 2,
    title: "Pre-treatment",
    description: "High-traffic areas and stains get targeted pre-treatment solution.",
  },
  {
    step: 3,
    title: "Deep extraction",
    description: "Hot water extraction or shampoo treatment removes embedded dirt and allergens.",
  },
  {
    step: 4,
    title: "Drying & final check",
    description: "Power extraction minimizes drying time. We inspect every area before leaving.",
  },
];

const carpetFeatures: FeatureGridItem[] = [
  {
    icon: "Droplets",
    title: "Hot water extraction",
    description: "Industrial steam machines blast deep dirt and allergens from carpet fibers.",
  },
  {
    icon: "Sparkles",
    title: "Stain specialists",
    description: "Targeted treatments for wine, coffee, ink, grease, and pet stains.",
  },
  {
    icon: "Wind",
    title: "Fast drying",
    description: "High-powered extraction means 4–6 hour dry time, not 2 days.",
  },
  {
    icon: "ShieldCheck",
    title: "Safe for all carpets",
    description: "Wool, synthetic, blended, and delicate fibers — each gets the right product.",
  },
  {
    icon: "Home",
    title: "Homes & offices",
    description: "From living room rugs to full office carpet installations in Nakuru.",
  },
  {
    icon: "ShieldCheck",
    title: "Odor elimination",
    description: "Enzyme treatments neutralize pet, smoke, and mildew odors at the source.",
  },
];

const whatsappLink = "https://wa.me/254723358456?text=Hi%20Twin%20Brothers,%20I%20need%20a%20carpet%20cleaning%20quote%20in%20Nakuru";

export default function CarpetCleaningPage() {
  return (
    <div className="flex flex-col gap-20 sm:gap-28">
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: "/services/carpet-cleaning",
            name: "Carpet Cleaning Nakuru | Twin Brothers Cleaning",
            description:
              "Professional carpet cleaning in Nakuru. Hot water extraction and deep shampoo treatments for homes and offices.",
          }),
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Carpet Cleaning", href: "/services/carpet-cleaning" },
          ]),
          faqSchema(carpetFaqs),
        ])}
      />

      <Hero
        eyebrow="Carpet & Rug Cleaning"
        title="Carpet cleaning in Nakuru — deep clean, fast dry"
        description="Restore your carpets with hot water extraction and professional shampoo treatments. Twin Brothers removes deep stains, odors, and allergens from carpets and rugs in homes and offices across Nakuru."
        primaryLabel="Get a Free Quote"
        primaryHref="/contact"
        secondaryLabel="Call Now"
        secondaryHref="tel:+254723358456"
        image={{
          src: "/images/gallery/carpet-cleaning-nakuru.jpeg",
          alt: "Twin Brothers team steam cleaning a carpet in a Nakuru home",
        }}
      />

      <section className="container-content">
        <div className="rounded-2xl bg-primary/5 p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Transparent Pricing</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Carpet cleaning from KES 350/sqft</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Standard 3-bedroom home: KES 8,000 – 15,000. We inspect and quote before starting — no surprises.
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
          title="Our carpet cleaning process"
          description="We don't just surface-clean — we deep-clean every fiber:"
        />
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {[
            "Pre-inspection of carpet type, condition, and stain assessment",
            "Vacuuming to remove loose dirt and debris",
            "Pre-treatment of high-traffic zones and visible stains",
            "Hot water extraction or shampoo deep-clean",
            "Spot treatment for stubborn stains",
            "Deodorizing and sanitizing treatment",
            "Power extraction to minimize drying time",
            "Final walkthrough to ensure satisfaction",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-base text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container-content">
        <SectionHeading eyebrow="Why us" title="Why Nakuru trusts us with their carpets" />
        <div className="mt-10">
          <FeatureGrid items={carpetFeatures} columns={3} />
        </div>
      </section>

      <section className="container-content">
        <SectionHeading eyebrow="How it works" title="Carpet cleaning in 4 steps" />
        <div className="mt-10">
          <Timeline steps={carpetSteps} />
        </div>
      </section>

      <section className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Carpet cleaning across Nakuru</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We clean carpets in homes, offices, hotels, and event venues throughout Nakuru and nearby areas. 
            Pair carpet cleaning with{" "}
            <Link href="/services/sofa-cleaning" className="text-primary underline underline-offset-4 hover:text-primary/80">sofa cleaning</Link>{" "}
            or{" "}
            <Link href="/services/house-cleaning" className="text-primary underline underline-offset-4 hover:text-primary/80">full house cleaning</Link>{" "}
            for a complete refresh.
          </p>
        </div>
      </section>

      <section className="container-content">
        <SectionHeading eyebrow="FAQ" title="Carpet cleaning questions answered" />
        <div className="mx-auto mt-8 max-w-3xl">
          <FAQAccordion items={carpetFaqs} />
        </div>
      </section>

      <section className="container-content">
        <CTABanner
          title="Ready for cleaner carpets?"
          description="Call or WhatsApp us now for a carpet cleaning quote in Nakuru."
        />
      </section>
    </div>
  );
}