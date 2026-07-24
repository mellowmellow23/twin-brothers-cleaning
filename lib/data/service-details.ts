import type { ServiceDetail } from "@/types";
import { services } from "./services";
import { cleaningProcess } from "./content";

type DetailExtras = Omit<
  ServiceDetail,
  keyof (typeof services)[number] | "process"
> & {
  process?: ServiceDetail["process"];
};

const detailExtras: Record<string, DetailExtras> = {
  "house-cleaning": {
    heroImage: "/images/team/team-shopfront-2.jpeg",
    benefits: [
      {
        icon: "Sparkles",
        title: "Room-by-room checklist",
        description:
          "Kitchens, bathrooms, bedrooms and living areas are each cleaned against a fixed checklist, not a rushed once-over.",
      },
      {
        icon: "Users",
        title: "The same trained crew",
        description:
          "Uniformed Twin Brothers staff, not a rotating cast of day labourers — so standards stay consistent visit to visit.",
      },
      {
        icon: "Clock",
        title: "One-off or recurring",
        description:
          "Book a single deep clean, or set up a weekly, bi-weekly, or monthly schedule and we'll keep the slot reserved.",
      },
      {
        icon: "ShieldCheck",
        title: "Safe on every surface",
        description:
          "Wood, tile, granite, and painted walls are each treated with the right product, not one all-purpose spray.",
      },
    ],
    included: [
      "Dusting of all surfaces, skirting boards, and light fixtures",
      "Kitchen: counters, stovetop, sink, cabinet fronts, and appliance exteriors",
      "Bathrooms: toilets, showers, tubs, mirrors, and tile descaling",
      "Floors vacuumed and mopped throughout",
      "Bed making and linen changes (on request)",
      "Interior window sills and glass spot-cleaning",
    ],
    notIncluded: [
      "Exterior window cleaning above ground level",
      "Wall painting touch-ups or repairs",
    ],
    faqs: [
      {
        question: "How long does a standard house cleaning take?",
        answer:
          "Most 2–3 bedroom homes take 2–4 hours with a two-person team, depending on condition and whether it's a first-time deep clean.",
      },
      {
        question: "Do I need to be home during the clean?",
        answer:
          "No — many clients provide access and a contact number, and we send photos or a call once the job is complete.",
      },
      {
        question: "Can you match a weekly or bi-weekly schedule?",
        answer:
          "Yes. Tell us your preferred day and frequency and we'll reserve the same crew for every visit where possible.",
      },
    ],
    relatedServiceSlugs: ["office-cleaning", "carpet-cleaning", "sofa-cleaning"],
  },

  "office-cleaning": {
    heroImage: "/images/team/team-shopfront-1.jpeg",
    benefits: [
      {
        icon: "Building2",
        title: "Scheduled around your hours",
        description:
          "Early-morning, evening, or after-hours slots so cleaning never interrupts your working day.",
      },
      {
        icon: "ShieldCheck",
        title: "Consistent, client-ready standard",
        description:
          "Reception areas, boardrooms, and washrooms are held to the same checklist every visit — no surprises before a client walkthrough.",
      },
      {
        icon: "Users",
        title: "Vetted, uniformed staff",
        description:
          "Every crew member is vetted and identifiable, which matters when they're working in your space unsupervised.",
      },
      {
        icon: "Timer",
        title: "Flexible contract terms",
        description:
          "Daily, weekly, or monthly contracts for offices, banks, and retail spaces — scale up or down as your team changes.",
      },
    ],
    included: [
      "Workstations, desks, and communal surfaces wiped down",
      "Washrooms cleaned, restocked, and descaled",
      "Floors vacuumed, mopped, or buffed depending on surface",
      "Kitchen/pantry area cleaning and dishwashing",
      "Rubbish collection and bin liner replacement",
      "Glass partitions and entrance doors spot-cleaned",
    ],
    notIncluded: ["IT equipment servicing", "Specialist waste disposal (medical, hazardous)"],
    faqs: [
      {
        question: "Can you clean outside normal business hours?",
        answer:
          "Yes — early morning and after-hours slots are available so cleaning doesn't disrupt staff or clients.",
      },
      {
        question: "Do you offer ongoing contracts, not just one-off visits?",
        answer:
          "Yes, daily, weekly, and monthly contracts are all available and priced based on floor area and scope.",
      },
      {
        question: "Is a supervisor assigned to larger contracts?",
        answer:
          "For multi-day or larger commercial contracts, a lead cleaner coordinates the crew and is your point of contact.",
      },
    ],
    relatedServiceSlugs: ["carpet-cleaning", "post-construction-cleaning", "house-cleaning"],
  },

  "carpet-cleaning": {
    heroImage: "/images/gallery/chair-upholstery-cleaning.jpeg",
    benefits: [
      {
        icon: "Droplets",
        title: "Hot water extraction",
        description:
          "Karcher extraction machines lift embedded dirt and shampoo residue that vacuuming alone leaves behind.",
      },
      {
        icon: "Wind",
        title: "Fast drying times",
        description:
          "Controlled water volume and extraction pressure mean most carpets are walkable within a few hours, not days.",
      },
      {
        icon: "Leaf",
        title: "Odor and allergen removal",
        description:
          "Treatment targets dust mites, pet odor, and trapped allergens, not just visible stains.",
      },
      {
        icon: "ShieldCheck",
        title: "Fabric-matched shampoo",
        description:
          "Wool, synthetic, and blended carpets are matched to a shampoo formulated for that fibre type.",
      },
    ],
    included: [
      "Pre-inspection and stain identification",
      "Dry vacuuming to lift loose debris",
      "Hot water extraction or shampoo treatment (fibre-dependent)",
      "Spot treatment for common stains (coffee, ink, grease)",
      "Deodorizing treatment",
      "Grooming pass to restore pile direction",
    ],
    notIncluded: ["Permanent stain or dye damage removal", "Carpet repair or re-stretching"],
    faqs: [
      {
        question: "How long before the carpet is dry and usable?",
        answer:
          "Typically 3–6 hours depending on carpet thickness, ventilation, and humidity. We can advise faster-drying options if timing is tight.",
      },
      {
        question: "Do you charge per room or per square foot?",
        answer:
          "Carpet cleaning is priced per square foot so the quote reflects the exact area, not a flat per-room estimate.",
      },
      {
        question: "Can you remove old, set-in stains?",
        answer:
          "Most stains lift significantly with hot water extraction and spot treatment, though very old or dye-based stains may only partially fade.",
      },
    ],
    relatedServiceSlugs: ["sofa-cleaning", "mattress-cleaning", "house-cleaning"],
  },

  "sofa-cleaning": {
    heroImage: "/images/gallery/sofa-cleaning-outdoor.jpeg",
    benefits: [
      {
        icon: "Sofa",
        title: "Fabric and leather both covered",
        description:
          "Shampooing for fabric upholstery, conditioning treatments for leather — matched to what's on the piece, not a generic pass.",
      },
      {
        icon: "Droplets",
        title: "Low-moisture methods available",
        description:
          "For delicate or moisture-sensitive fabrics we adjust technique to avoid over-wetting and watermarking.",
      },
      {
        icon: "Leaf",
        title: "Removes odor, not just stains",
        description:
          "Deodorizing treatment lifts smoke, pet, and food odors trapped in cushions and seams.",
      },
      {
        icon: "ShieldCheck",
        title: "On-site, no furniture removed",
        description:
          "Cleaning happens in place at your home or office — nothing needs to leave the property.",
      },
    ],
    included: [
      "Fabric or leather identification and pre-test",
      "Vacuuming of crevices, seams, and cushions",
      "Shampoo extraction or leather conditioning treatment",
      "Spot treatment for stains",
      "Deodorizing",
      "Drying time guidance before use",
    ],
    faqs: [
      {
        question: "Is my sofa priced per seat or as a whole set?",
        answer:
          "Sofa and upholstery cleaning is priced per item, so a 3-seater, armchair, or dining chair set are each quoted individually.",
      },
      {
        question: "Can you clean leather sofas as well as fabric?",
        answer:
          "Yes — leather is conditioned rather than shampooed, using products that won't dry out or crack the material.",
      },
      {
        question: "How soon can we sit on the furniture again?",
        answer:
          "Most fabric upholstery is dry within 4–8 hours; we'll confirm timing on-site based on the fabric and method used.",
      },
    ],
    relatedServiceSlugs: ["carpet-cleaning", "mattress-cleaning", "house-cleaning"],
  },

  "post-construction-cleaning": {
    heroImage: "/images/gallery/patio-floor-scrubbing.jpeg",
    benefits: [
      {
        icon: "HardHat",
        title: "Full debris and dust removal",
        description:
          "Construction dust, offcuts, packaging, and paint spatter are cleared before detail cleaning begins.",
      },
      {
        icon: "Sparkles",
        title: "Move-in ready detail pass",
        description:
          "Skirting, light fittings, window tracks, and cabinet interiors are cleaned — not just floors and surfaces.",
      },
      {
        icon: "Wind",
        title: "Rotary floor scrubbing",
        description:
          "Rotary scrubbers lift cement residue and grout haze from tile and stone that mopping can't remove.",
      },
      {
        icon: "Timer",
        title: "Fast turnaround before handover",
        description:
          "We work to developer and contractor handover deadlines, with weekend and short-notice slots available.",
      },
    ],
    included: [
      "Debris, packaging, and offcut removal",
      "Dust extraction from all surfaces, vents, and fittings",
      "Rotary scrubbing of tile, stone, and concrete floors",
      "Window and window track cleaning",
      "Cabinet, wardrobe, and drawer interior wipe-down",
      "Final detail pass ahead of handover or move-in",
    ],
    notIncluded: ["Structural repair or snagging work", "Paint touch-ups"],
    faqs: [
      {
        question: "When should post-construction cleaning happen?",
        answer:
          "Ideally after all trades have finished (painting, electrical, flooring) and before furniture or move-in, to avoid re-contaminating cleaned surfaces.",
      },
      {
        question: "Can you handle heavy dust and debris, not just surface cleaning?",
        answer:
          "Yes — this service is built around dust extraction and debris removal first, with detail cleaning following once the space is clear.",
      },
      {
        question: "Do you work directly with contractors or site managers?",
        answer:
          "Yes, we regularly coordinate handover timing directly with contractors, site managers, or property developers.",
      },
    ],
    relatedServiceSlugs: ["office-cleaning", "carpet-cleaning", "house-cleaning"],
  },

  "mattress-cleaning": {
    heroImage: "/images/gallery/chair-upholstery-cleaning.jpeg",
    benefits: [
      {
        icon: "BedDouble",
        title: "Deep vacuum extraction",
        description:
          "Industrial vacuuming pulls dust, skin cells, and mite debris from deep within the mattress surface.",
      },
      {
        icon: "Droplets",
        title: "Steam sanitization",
        description:
          "High-temperature steam kills dust mites and bacteria without saturating the mattress core.",
      },
      {
        icon: "Leaf",
        title: "Stain and odor treatment",
        description:
          "Targeted treatment for sweat, spills, and odor, safe for the range of mattress fabrics we encounter.",
      },
      {
        icon: "ShieldCheck",
        title: "Healthier sleep environment",
        description:
          "Reducing allergens and dust mites can meaningfully help households with allergies or asthma.",
      },
    ],
    included: [
      "Deep vacuuming of the full mattress surface and seams",
      "Steam sanitization treatment",
      "Stain spot-treatment",
      "Deodorizing",
      "Drying time guidance before re-making the bed",
    ],
    faqs: [
      {
        question: "How often should mattresses be professionally cleaned?",
        answer:
          "Most households benefit from a mattress clean every 6–12 months, or sooner after illness, spills, or if allergy symptoms flare at night.",
      },
      {
        question: "Is the mattress safe to sleep on the same night?",
        answer:
          "We recommend allowing several hours of drying time and good ventilation before making the bed back up.",
      },
      {
        question: "Do you charge per mattress or per bedroom?",
        answer:
          "Pricing is per item, so a single mattress, double, or king-size are each quoted individually based on size.",
      },
    ],
    relatedServiceSlugs: ["sofa-cleaning", "carpet-cleaning", "house-cleaning"],
  },
};

export const serviceDetails: Record<string, ServiceDetail> = Object.fromEntries(
  services.map((service) => {
    const extras = detailExtras[service.slug]!;
    const detail: ServiceDetail = {
      ...service,
      heroImage: extras.heroImage,
      benefits: extras.benefits,
      included: extras.included,
      notIncluded: extras.notIncluded,
      process: extras.process ?? cleaningProcess,
      faqs: extras.faqs,
      relatedServiceSlugs: extras.relatedServiceSlugs,
    };
    return [service.slug, detail];
  })
);

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails[slug];
}