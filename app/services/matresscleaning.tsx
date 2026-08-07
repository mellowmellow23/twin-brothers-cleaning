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
import { CheckCircle, type LucideIconName } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Mattress Cleaning Nakuru | Steam Sanitization & Stain Removal",
  description:
    "Professional mattress cleaning in Nakuru. Deep vacuuming, steam sanitization, and stain removal to eliminate dust mites, bacteria, and odors. Sleep healthier tonight.",
  path: "/services/mattress-cleaning",
  keywords: [
    "mattress cleaning Nakuru",
    "mattress sanitization Nakuru",
    "mattress steam cleaning Nakuru",
    "dust mite removal Nakuru",
    "bed cleaning Nakuru",
    "mattress stain removal Nakuru",
    "mattress deodorizing Nakuru",
    "professional mattress cleaning Kenya",
    "mattress deep cleaning Nakuru",
    "allergen removal mattress Nakuru",
    "mattress cleaning services Nakuru",
    "bed bug cleaning Nakuru",
  ],
});

const mattressFaqs = [
  {
    question: "How much does mattress cleaning cost in Nakuru?",
    answer:
      "Mattress cleaning in Nakuru starts from KES 1,800 per mattress. A standard double mattress with stain treatment typically costs KES 2,500–3,500. King-size and heavily stained mattresses may cost slightly more. We inspect and quote before starting.",
  },
  {
    question: "How does mattress cleaning work?",
    answer:
      "We use a 3-step process: (1) Industrial-strength vacuuming to remove surface dust, dead skin, and debris. (2) Hot steam sanitization at 180°C to kill dust mites, bacteria, and bed bugs. (3) Targeted stain treatment and deodorizing for sweat, urine, and other organic stains.",
  },
  {
    question: "How long does a mattress take to dry?",
    answer:
      "Most mattresses dry within 2–4 hours thanks to our high-powered extraction. We recommend cleaning in the morning so your bed is ready by evening. We also bring industrial air movers to speed up drying if needed.",
  },
  {
    question: "Can mattress cleaning help with allergies?",
    answer:
      "Yes — our steam sanitization kills dust mites, mold spores, and bacteria that trigger allergies and asthma. Many Nakuru clients report better sleep and reduced sneezing after a professional mattress clean. We recommend cleaning every 6 months for allergy sufferers.",
  },
  {
    question: "Do you clean pillows and duvets too?",
    answer:
      "Yes — we clean pillows, duvets, mattress toppers, and baby crib mattresses using the same steam sanitization and stain treatment process. Bundle multiple items for a discounted rate.",
  },
];

const mattressSteps = [
  {
    step: 1,
    title: "Inspection",
    description: "We assess mattress condition, stains, and fabric type before quoting.",
  },
  {
    step: 2,
    title: "Deep vacuuming",
    description: "Industrial vacuum removes dust, dead skin, hair, and surface debris.",
  },
  {
    step: 3,
    title: "Steam sanitization",
    description: "180°C hot steam kills dust mites, bacteria, and bed bugs deep in the fibers.",
  },
  {
    step: 4,
    title: "Stain treatment & dry",
    description: "Targeted stain removal, deodorizing, and power extraction for fast drying.",
  },
];

const mattressFeatures: { icon: LucideIconName; title: string; description: string }[] = [
  {
    icon: "bed",
    title: "All mattress sizes",
    description: "Single, double, queen, king, and baby crib mattresses — all cleaned safely.",
  },
  {
    icon: "thermometer",
    title: "180°C steam sanitization",
    description: "High-temperature steam kills 99.9% of dust mites, bacteria, and bed bugs.",
  },
  {
    icon: "sparkles",
    title: "Stain removal",
    description: "Sweat, urine, blood, and food stains treated with enzyme-based solutions.",
  },
  {
    icon: "wind",
    title: "Fast drying",
    description: "2–4 hour dry time with power extraction and air movers if needed.",
  },
  {
    icon: "shield-check",
    title: "Allergy relief",
    description: "Removes allergens that trigger asthma, eczema, and rhinitis for better sleep.",
  },
  {
    icon: "badge-check",
    title: "Pillows & duvets too",
    description: "Bundle mattress + pillow + duvet cleaning and save on the total cost.",
  },
];

const whatsappLink = "https://wa.me/254723358456?text=Hi%20Twin%20Brothers,%20I%20need%20a%20mattress%20cleaning%20quote%20in%20Nakuru";

export default function MattressCleaningPage() {
  return (
    <div className="flex flex-col gap-20 sm:gap-28">
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: "/services/mattress-cleaning",
            name: "Mattress Cleaning Nakuru | Twin Brothers Cleaning",
            description:
              "Professional mattress cleaning in Nakuru. Deep vacuuming, steam sanitization, and stain removal for healthier sleep.",
          }),
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Mattress Cleaning", href: "/services/mattress-cleaning" },
          ]),
          faqSchema(mattressFaqs),
        ])}
      />

      <Hero
        eyebrow="Mattress & Bedding Cleaning"
        title="Mattress cleaning in Nakuru — sleep cleaner, breathe easier"
        description="Remove dust mites, bacteria, stains, and odors from your mattress with professional steam sanitization. Twin Brothers cleans all mattress sizes in Nakuru — single to king — with fast drying and honest pricing."
        primaryLabel="Get a Free Quote"
        primaryHref="/contact"
        secondaryLabel="Call Now"
        secondaryHref="tel:+254723358456"
        image={{
          src: "/images/gallery/mattress-cleaning-nakuru.jpeg",
          alt: "Twin Brothers team steam sanitizing a mattress in a Nakuru home",
        }}
      />

      <section className="container-content">
        <div className="rounded-2xl bg-primary/5 p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Transparent Pricing</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Mattress cleaning from KES 1,800</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Standard double mattress: KES 2,500–3,500. King-size and heavy stains quoted on inspection. No surprises.
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
          title="Our mattress cleaning process"
          description="A complete clean that goes deeper than surface vacuuming:"
        />
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {[
            "Visual inspection of mattress condition, stains, and fabric type",
            "Industrial vacuuming to remove dust, dead skin, hair, and debris",
            "180°C hot steam sanitization to kill dust mites, bacteria, and bed bugs",
            "Targeted enzyme treatment for sweat, urine, and organic stains",
            "Deodorizing treatment to neutralize odors at the source",
            "Power extraction to remove moisture and speed up drying",
            "Air mover placement if needed for faster dry time",
            "Final inspection and care tips for maintaining your mattress",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-base text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container-content">
        <SectionHeading eyebrow="Why us" title="Why Nakuru sleeps better after our clean" />
        <div className="mt-10">
          <FeatureGrid items={mattressFeatures} columns={3} />
        </div>
      </section>

      <section className="container-content">
        <SectionHeading eyebrow="How it works" title="Mattress cleaning in 4 steps" />
        <div className="mt-10">
          <Timeline steps={mattressSteps} />
        </div>
      </section>

      <section className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Mattress cleaning across Nakuru</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We clean mattresses in homes, hotels, guest houses, and Airbnb properties throughout Nakuru. 
            Pair with{" "}
            <Link href="/services/sofa-cleaning" className="text-primary underline underline-offset-4 hover:text-primary/80">sofa cleaning</Link>{" "}
            or{" "}
            <Link href="/services/carpet-cleaning" className="text-primary underline underline-offset-4 hover:text-primary/80">carpet cleaning</Link>{" "}
            for a complete bedroom refresh.
          </p>
        </div>
      </section>

      <section className="container-content">
        <SectionHeading eyebrow="FAQ" title="Mattress cleaning questions answered" />
        <div className="mx-auto mt-8 max-w-3xl">
          <FAQAccordion items={mattressFaqs} />
        </div>
      </section>

      <section className="container-content">
        <CTABanner
          title="Ready for a cleaner mattress?"
          description="Call or WhatsApp us now for a mattress cleaning quote in Nakuru."
        />
      </section>
    </div>
  );
}