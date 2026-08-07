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
  title: "Sofa & Upholstery Cleaning Nakuru | Fabric & Leather",
  description:
    "Professional sofa and upholstery cleaning in Nakuru. Fabric shampooing and leather conditioning for sofas, dining chairs, and office seating. Safe, effective, affordable.",
  path: "/services/sofa-cleaning",
  keywords: [
    "sofa cleaning Nakuru",
    "upholstery cleaning Nakuru",
    "leather sofa cleaning Nakuru",
    "fabric sofa cleaning Nakuru",
    "couch cleaning Nakuru",
    "dining chair cleaning Nakuru",
    "office chair cleaning Nakuru",
    "sofa stain removal Nakuru",
    "furniture cleaning Nakuru",
    "sofa shampoo Nakuru",
    "upholstery cleaners Nakuru",
    "sofa cleaning services Kenya",
  ],
});

const sofaFaqs = [
  {
    question: "How much does sofa cleaning cost in Nakuru?",
    answer:
      "Sofa cleaning in Nakuru starts from KES 1,200 per item. A standard 3-seater fabric sofa typically costs KES 3,500–5,000. Leather conditioning is slightly higher. We inspect the fabric type and condition before quoting.",
  },
  {
    question: "Is sofa cleaning safe for delicate fabrics?",
    answer:
      "Yes. We identify the fabric type — cotton, linen, velvet, microfiber, or leather — and use the appropriate cleaning method and pH-balanced products. We always test a small hidden area first.",
  },
  {
    question: "How long does a sofa take to dry after cleaning?",
    answer:
      "Fabric sofas typically dry within 3–5 hours thanks to our power extraction. Leather sofas are ready to use immediately after conditioning. We recommend cleaning in the morning for same-day use.",
  },
  {
    question: "Can you remove old stains from my sofa?",
    answer:
      "We can remove most food, drink, ink, and pet stains using targeted enzyme and solvent treatments. Very old or heat-set stains may be permanent — we'll assess and advise honestly before starting.",
  },
  {
    question: "Do you clean car seats and office chairs too?",
    answer:
      "Absolutely. We clean car upholstery, office chairs, dining chairs, ottomans, and headboards. Each piece gets the same careful treatment as your main sofa.",
  },
];

const sofaSteps = [
  {
    step: 1,
    title: "Fabric inspection",
    description: "We identify the material and test a hidden spot to ensure safe cleaning.",
  },
  {
    step: 2,
    title: "Pre-treatment",
    description: "Stains and high-use areas get targeted pre-treatment solution.",
  },
  {
    step: 3,
    title: "Deep clean or condition",
    description: "Fabric gets shampoo extraction; leather gets conditioning and polish.",
  },
  {
    step: 4,
    title: "Drying & inspection",
    description: "Power extraction speeds drying. Final check ensures no spots missed.",
  },
];

const sofaFeatures: FeatureGridItem[] = [
  {
    icon: "Sofa",
    title: "All upholstery types",
    description: "Fabric, leather, velvet, microfiber, and synthetic blends — each treated correctly.",
  },
  {
    icon: "Sparkles",
    title: "Stain specialists",
    description: "Targeted treatments for food, drink, ink, grease, and pet stains on upholstery.",
  },
  {
    icon: "ShieldCheck",
    title: "Fabric-safe products",
    description: "pH-balanced, non-toxic cleaners that won't damage or discolor your furniture.",
  },
  {
    icon: "Wind",
    title: "Fast drying",
    description: "Power extraction means 3–5 hour dry time for most fabric sofas.",
  },
  {
    icon: "Home",
    title: "In-home service",
    description: "We clean on-site in your living room — no need to transport heavy furniture.",
  },
  {
    icon: "BadgeCheck",
    title: "Leather conditioning",
    description: "Cleaning plus conditioning to prevent cracking and extend leather sofa life.",
  },
];

const whatsappLink = "https://wa.me/254723358456?text=Hi%20Twin%20Brothers,%20I%20need%20a%20sofa%20cleaning%20quote%20in%20Nakuru";

export default function SofaCleaningPage() {
  return (
    <div className="flex flex-col gap-20 sm:gap-28">
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: "/services/sofa-cleaning",
            name: "Sofa Cleaning Nakuru | Twin Brothers Cleaning",
            description:
              "Professional sofa and upholstery cleaning in Nakuru. Fabric shampooing and leather conditioning for homes and offices.",
          }),
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Sofa Cleaning", href: "/services/sofa-cleaning" },
          ]),
          faqSchema(sofaFaqs),
        ])}
      />

      <Hero
        eyebrow="Upholstery Cleaning"
        title="Sofa cleaning in Nakuru — like new, without the new price"
        description="Bring your sofas, dining chairs, and office seating back to life. Twin Brothers offers fabric-safe shampooing and leather conditioning across Nakuru — done on-site, with fast drying and honest pricing."
        primaryLabel="Get a Free Quote"
        primaryHref="/contact"
        secondaryLabel="Call Now"
        secondaryHref="tel:+254723358456"
        image={{
          src: "/images/gallery/sofa-cleaning-outdoor.jpeg",
          alt: "Twin Brothers team cleaning a fabric sofa set on-site in Nakuru",
        }}
      />

      <section className="container-content">
        <div className="rounded-2xl bg-primary/5 p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Transparent Pricing</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Sofa cleaning from KES 1,200/item</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            3-seater fabric sofa: KES 3,500–5,000. Leather conditioning slightly higher. We inspect and quote before starting.
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
          title="Our sofa cleaning process"
          description="Every piece of furniture gets careful, material-appropriate treatment:"
        />
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {[
            "Fabric type identification and spot test on hidden area",
            "Dry vacuuming to remove loose dirt, dust, and crumbs",
            "Pre-treatment of visible stains and high-contact zones",
            "Deep shampoo extraction for fabric upholstery",
            "Leather cleaning and conditioning for leather pieces",
            "Spot treatment for stubborn stains",
            "Deodorizing to remove pet, smoke, and food odors",
            "Power extraction and grooming for even drying",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-base text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container-content">
        <SectionHeading eyebrow="Why us" title="Why Nakuru trusts us with their furniture" />
        <div className="mt-10">
          <FeatureGrid items={sofaFeatures} columns={3} />
        </div>
      </section>

      <section className="container-content">
        <SectionHeading eyebrow="How it works" title="Sofa cleaning in 4 steps" />
        <div className="mt-10">
          <Timeline steps={sofaSteps} />
        </div>
      </section>

      <section className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Upholstery cleaning across Nakuru</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We clean sofas, dining chairs, office seating, and car upholstery throughout Nakuru. 
            Combine with{" "}
            <Link href="/services/carpet-cleaning" className="text-primary underline underline-offset-4 hover:text-primary/80">carpet cleaning</Link>{" "}
            or{" "}
            <Link href="/services/mattress-cleaning" className="text-primary underline underline-offset-4 hover:text-primary/80">mattress cleaning</Link>{" "}
            for a full home refresh.
          </p>
        </div>
      </section>

      <section className="container-content">
        <SectionHeading eyebrow="FAQ" title="Sofa cleaning questions answered" />
        <div className="mx-auto mt-8 max-w-3xl">
          <FAQAccordion items={sofaFaqs} />
        </div>
      </section>

      <section className="container-content">
        <CTABanner
          title="Ready for cleaner furniture?"
          description="Call or WhatsApp us now for a sofa cleaning quote in Nakuru."
        />
      </section>
    </div>
  );
}