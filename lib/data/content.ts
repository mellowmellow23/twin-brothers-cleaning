import type { FeatureGridItem } from "@/components/sections/feature-grid";
import type { ProcessStep, Industry, FaqItem } from "@/types";

export const whyChooseUs: FeatureGridItem[] = [
  {
    icon: "Users",
    title: "Trained, uniformed teams",
    description:
      "Every job is handled by a uniformed Twin Brothers crew, not a rotating cast of subcontractors.",
  },
  {
    icon: "Sparkles",
    title: "Professional-grade equipment",
    description:
      "Karcher extraction machines and rotary floor scrubbers for results a mop and bucket can't match.",
  },
  {
    icon: "ShieldCheck",
    title: "Fabric- and surface-safe products",
    description:
      "Cleaning agents matched to the material — upholstery, carpet, tile, and stone are each treated differently.",
  },
  {
    icon: "Clock",
    title: "Punctual, scheduled visits",
    description:
      "Book a time and the crew shows up ready to work — no chasing, no last-minute reshuffles.",
  },
  {
    icon: "Building",
    title: "Residential and commercial",
    description:
      "From single households to offices, hotels, and event venues across Nakuru.",
  },
  {
    icon: "Leaf",
    title: "Also offering pest control",
    description:
      "Twin Brothers is a cleaning and pest control company — ask about combining both for one visit.",
  },
];

export const cleaningProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Get in touch",
    description:
      "Call, WhatsApp, or fill in the contact form with your property size and the service you need.",
  },
  {
    step: 2,
    title: "Get a quote",
    description: "We confirm scope and price with you before any work is scheduled.",
  },
  {
    step: 3,
    title: "We clean",
    description:
      "Our uniformed team arrives with the right equipment and products for the job.",
  },
  {
    step: 4,
    title: "Walkthrough & sign-off",
    description: "We check the work with you before we leave, so nothing is left unresolved.",
  },
];

export const industriesServed: Industry[] = [
  {
    name: "Homes & Apartments",
    description: "Routine and one-off cleaning for houses, flats, and gated communities.",
    icon: "Home",
  },
  {
    name: "Offices",
    description: "Scheduled cleaning that keeps workplaces client-ready every day.",
    icon: "Building2",
  },
  {
    name: "Hotels & Event Venues",
    description: "Furniture, carpet, and floor cleaning for hospitality and event spaces.",
    icon: "Building",
  },
  {
    name: "Construction & Renovation",
    description: "Post-construction cleanup ahead of handover or move-in.",
    icon: "HardHat",
  },
];

export const homeFaqs: FaqItem[] = [
  {
    question: "Which areas of Nakuru do you serve?",
    answer:
      "Twin Brothers is based on Moses Mudavadi Road in Nakuru and serves homes and businesses in and around Nakuru town. Call or WhatsApp us to confirm coverage for your specific area.",
  },
  {
    question: "Do you bring your own equipment and cleaning products?",
    answer:
      "Yes. Our teams arrive with professional extraction machines, floor scrubbers, and fabric- or surface-appropriate cleaning products, so you don't need to supply anything.",
  },
  {
    question: "How do I get a price for my job?",
    answer:
      "Send us your property size, the service you need, and any specific concerns via WhatsApp, phone, or the contact form, and we'll confirm a price before scheduling.",
  },
  {
    question: "Do you offer pest control as well as cleaning?",
    answer:
      "Yes — Twin Brothers Cleaning & Pest Control Services offers both. Ask us about combining a cleaning visit with pest control.",
  },
  {
    question: "What are your operating hours?",
    answer: "We operate Monday to Saturday, 7:00 AM to 6:00 PM, and are closed on Sundays.",
  },
];
