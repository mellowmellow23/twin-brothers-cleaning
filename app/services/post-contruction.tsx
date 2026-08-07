import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/hero";
import { SectionHeading } from "@/components/sections/section-heading";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Timeline } from "@/components/sections/timeline";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTABanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/metadata";
import { pageGraphSchema, webPageSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Post-Construction Cleaning Nakuru | Renovation & Builders Clean",
  description:
    "Professional post-construction cleaning in Nakuru. Debris removal, dust extraction, and detail cleaning after renovation or new-build handover. Move-in ready guarantee.",
  path: "/services/post-construction-cleaning",
  keywords: [
    "post construction cleaning Nakuru",
    "after builders cleaning Nakuru",
    "renovation cleaning Nakuru",
    "new build cleaning Nakuru",
    "construction cleanup Nakuru",
    "builders clean Nakuru",
    "post renovation cleaning Nakuru",
    "move in cleaning Nakuru",
    "construction dust removal Nakuru",
    "site cleaning Nakuru",
    "handover cleaning Nakuru",
    "post construction cleaning services Kenya",
  ],
});

const constructionFaqs = [
  {
    question: "How much does post-construction cleaning cost in Nakuru?",
    answer:
      "Post-construction cleaning in Nakuru starts from KES 25,000 per visit. Pricing depends on property size, debris volume, paint splatter, and whether it's a light builders clean or a full move-in ready deep clean. We inspect the site and provide a detailed quote before starting.",
  },
  {
    question: "What does post-construction cleaning include?",
    answer:
      "Our post-construction service includes: debris and rubble removal, dust extraction from all surfaces (walls, ceilings, fixtures), window cleaning (interior and exterior where accessible), floor scrubbing and polishing, paint splatter removal, bathroom and kitchen deep cleaning, and final detail cleaning before handover or move-in.",
  },
  {
    question: "How long does post-construction cleaning take?",
    answer:
      "A standard 3-bedroom house after renovation typically takes 1–2 days with a 4-person crew. Larger properties or heavy construction sites may take 2–3 days. We'll give you a time estimate during the site assessment.",
  },
  {
    question: "Do you clean commercial construction sites too?",
    answer:
      "Yes — we clean offices, retail spaces, warehouses, and apartment blocks after construction or renovation. Our commercial crews are equipped for large-scale debris removal and industrial dust extraction.",
  },
  {
    question: "Can you clean before I move in?",
    answer:
      "Absolutely. Many Nakuru homeowners and landlords book us for a final clean 24–48 hours before tenants or owners move in. We coordinate with contractors to ensure the property is cleaned at the right stage — after all trades are finished but before furniture arrives.",
  },
];

const constructionSteps = [
  {
    step: 1,
    title: "Site assessment",
    description: "We visit the property to assess debris, dust levels, and cleaning scope.",
  },
  {
    step: 2,
    title: "Debris removal",
    description: "Rubble, packaging, leftover materials, and construction waste cleared.",
  },
  {
    step: 3,
    title: "Dust & detail clean",
    description: "Industrial dust extraction, surface cleaning, and paint splatter removal.",
  },
  {
    step: 4,
    title: "Final inspection",
    description: "Walkthrough with you or your contractor. Move-in ready guarantee.",
  },
];

const constructionFeatures = [
  {
    icon: "HardHat",
    title: "All project sizes",
    description: "From single-room renovations to full apartment blocks and commercial sites.",
  },
  {
    icon: "Trash2",
    title: "Debris removal included",
    description: "We clear rubble, packaging, and leftover materials — not just dust.",
  },
  {
    icon: "Wind",
    title: "Industrial dust extraction",
    description: "High-powered vacuums and air scrubbers remove fine construction dust everywhere.",
  },
  {
    icon: "Sparkles",
    title: "Paint & grout removal",
    description: "Specialized products and tools for paint splatter, grout haze, and adhesive residue.",
  },
  {
    icon: "ShieldCheck",
    title: "Move-in ready guarantee",
    description: "We don't leave until the space is clean enough to hand over or move into.",
  },
  {
    icon: "Clock",
    title: "Contractor coordination",
    description: "We schedule around your builders so cleaning happens at the right stage.",
  },
];

const whatsappLink = "https://wa.me/254723358456?text=Hi%20Twin%20Brothers,%20I%20need%20a%20post-construction%20cleaning%20quote%20in%20Nakuru";

export default function PostConstructionCleaningPage() {
  return (
    <div className="flex flex-col gap-20 sm:gap-28">
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: "/services/post-construction-cleaning",
            name: "Post-Construction Cleaning Nakuru | Twin Brothers Cleaning",
            description:
              "Professional post-construction cleaning in Nakuru. Debris removal, dust extraction, and detail cleaning after renovation or new-build handover.",
          }),
          breadcrumbSchema([
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Post-Construction Cleaning", href: "/services/post-construction-cleaning" },
          ]),
          faqSchema(constructionFaqs),
        ])}
      />

      <Hero
        eyebrow="Construction & Renovation Cleanup"
        title="Post-construction cleaning in Nakuru — from site to spotless"
        description="Renovation done? Don't move into dust and debris. Twin Brothers provides full post-construction cleaning across Nakuru — debris removal, industrial dust extraction, paint splatter removal, and move-in ready detailing for homes and commercial sites."
        primaryLabel="Get a Free Quote"
        primaryHref="/contact"
        secondaryLabel="Call Now"
        secondaryHref="tel:+254723358456"
        image={{
          src: "/images/gallery/post-construction-cleaning-nakuru.jpeg",
          alt: "Twin Brothers team doing post-construction cleanup at a Nakuru property",
        }}
      />

      <section className="container-content">
        <div className="rounded-2xl bg-primary/5 p-8 text-center sm:p-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Transparent Pricing</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Post-construction cleaning from KES 25,000</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Based on property size and debris volume. Site assessment and detailed quote provided before work begins.
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
          title="Our post-construction cleaning checklist"
          description="We don't just sweep — we transform construction sites into move-in ready spaces:"
        />
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {[
            "Removal of construction debris, rubble, and leftover materials",
            "Industrial dust extraction from walls, ceilings, light fixtures, and vents",
            "Window cleaning — interior glass, frames, tracks, and sills",
            "Floor scrubbing, mopping, and polishing (tile, wood, concrete)",
            "Paint splatter, grout haze, and adhesive residue removal",
            "Kitchen and bathroom deep cleaning and sanitization",
            "Door, handle, switch, and fixture cleaning and polishing",
            "Final detail inspection and touch-ups before handover",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-base text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container-content">
        <SectionHeading eyebrow="Why us" title="Why Nakuru builders and homeowners choose us" />
        <div className="mt-10">
          <FeatureGrid items={constructionFeatures} columns={3} />
        </div>
      </section>

      <section className="container-content">
        <SectionHeading eyebrow="How it works" title="Post-construction cleaning in 4 steps" />
        <div className="mt-10">
          <Timeline steps={constructionSteps} />
        </div>
      </section>

      <section className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Construction cleanup across Nakuru</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We clean homes, apartments, offices, retail spaces, and warehouses after construction or renovation 
            throughout Nakuru and surrounding areas. Coordinate with{" "}
            <Link href="/services/house-cleaning" className="text-primary underline underline-offset-4 hover:text-primary/80">house cleaning</Link>{" "}
            for a full move-in ready package.
          </p>
        </div>
      </section>

      <section className="container-content">
        <SectionHeading eyebrow="FAQ" title="Post-construction cleaning questions answered" />
        <div className="mx-auto mt-8 max-w-3xl">
          <FAQAccordion items={constructionFaqs} />
        </div>
      </section>

      <section className="container-content">
        <CTABanner
          title="Ready for a move-in ready space?"
          description="Call or WhatsApp us now for a post-construction cleaning quote in Nakuru."
        />
      </section>
    </div>
  );
}