import type { ServiceDetail } from "@/types";
import { services } from "./services";
import { cleaningProcess } from "./content";

interface DetailExtras {
  heroImage: string;
  openingHook: string;
  pricingNote: string;
  benefits: ServiceDetail["benefits"];
  included: string[];
  notIncluded?: string[];
  faqs: ServiceDetail["faqs"];
  relatedServiceSlugs: string[];
  process?: ServiceDetail["process"];
}

const detailExtras: Record<string, DetailExtras> = {
  "house-cleaning": {
    heroImage: "/images/team/team-shopfront-2.jpeg",
    openingHook:
      "Dust builds up faster than you'd like to admit, the bathroom never quite looks 'done', and finding a full day to deep clean the whole house rarely happens. A trained two-person team can do in a few hours what takes a busy household a full weekend.",
    pricingNote:
      "Pricing depends on the number of bedrooms/bathrooms and whether it's a first-time deep clean or a recurring visit. Most 2–3 bedroom homes start from KES 2,500 per visit — we confirm an exact price before any work begins, with no surprise add-ons.",
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
      {
        question: "Do you offer house cleaning across Nakuru Town?",
        answer:
          "Yes — house cleaning is available across Nakuru Town and the surrounding neighbourhoods we serve. Check our locations page if you're unsure your area is covered.",
      },
      {
        question: "What's the difference between a standard clean and a deep clean?",
        answer:
          "A standard clean covers the checklist above on a home that's already reasonably maintained. A deep clean adds extra time for buildup in grout, inside appliances, skirting boards, and areas that don't get touched weekly — usually the right choice for a first visit.",
      },
    ],
    relatedServiceSlugs: ["office-cleaning", "carpet-cleaning", "pest-control"],
  },

  "office-cleaning": {
    heroImage: "/images/team/team-shopfront-1.jpeg",
    openingHook:
      "A reception area that looks tired, a washroom that gets complaints, or a cleaning contractor who sends someone different every week — none of it looks good in front of clients or staff. A fixed crew on a fixed schedule fixes all three.",
    pricingNote:
      "Office cleaning is quoted per contract based on floor area, frequency, and scope (daily/weekly/monthly). As a guide, contracts start from around KES 15,000 per visit for a small office — we'll walk the space (or take details over the phone) and confirm an exact price before signing anything.",
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
      {
        question: "Do you cover offices outside Nakuru Town centre?",
        answer:
          "Yes — we take on office cleaning contracts across Nakuru Town and the wider Nakuru area, subject to a quick coverage check for further-out sites.",
      },
      {
        question: "Can you start with a trial period before signing a full contract?",
        answer:
          "Yes — many clients start with a single trial clean or a one-month rolling contract before committing to a longer term, so you can judge consistency for yourself.",
      },
    ],
    relatedServiceSlugs: ["carpet-cleaning", "post-construction-cleaning", "house-cleaning"],
  },

  "carpet-cleaning": {
    heroImage: "/images/gallery/chair-upholstery-cleaning.jpeg",
    openingHook:
      "Old coffee stains, a musty smell after the rains, or carpets that just look flat and grey no matter how often they're vacuumed — regular vacuuming only ever lifts surface dust. The dirt and odor sitting deep in the fibres needs actual extraction.",
    pricingNote:
      "Carpet cleaning is priced per square foot so you're only paying for the area actually cleaned, from KES 350 per sqft. A typical living room or bedroom carpet is quoted upfront once we know the room dimensions — no flat 'per room' guessing.",
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
      {
        question: "Do you offer carpet cleaning throughout Nakuru?",
        answer:
          "Yes — carpet cleaning is available for homes and offices across Nakuru, using the same hot water extraction equipment for every job.",
      },
      {
        question: "Will the carpet shrink or get damaged from the water?",
        answer:
          "No — our extraction machines control water volume and suction precisely, which is what separates professional extraction from a DIY carpet shampooer. Fibre type is checked beforehand so the method and product match the carpet.",
      },
    ],
    relatedServiceSlugs: ["sofa-cleaning", "mattress-cleaning", "house-cleaning"],
  },

  "sofa-cleaning": {
    heroImage: "/images/gallery/sofa-cleaning-outdoor.jpeg",
    openingHook:
      "Your sofa can end up looking years older than it is — flattened cushions, a faint smell that never quite airs out, stains from spills or pets that regular vacuuming can't touch. A proper extraction clean brings both the look and the smell back to new.",
    pricingNote:
      "Sofa and upholstery cleaning is priced per item, from KES 1,200 — so a single armchair, a 3-seater sofa, or a full dining chair set are each quoted individually rather than one flat 'living room' price.",
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
      {
        question: "Do you cover sofa cleaning across Nakuru?",
        answer:
          "Yes — sofa and upholstery cleaning is available for homes, offices, and Airbnb properties across Nakuru and Nakuru Town.",
      },
      {
        question: "Can you clean car seats and office chairs too?",
        answer:
          "Yes — the same extraction and conditioning methods used on sofas apply to car interiors, office seating, and event/hotel furniture, quoted per item just like home upholstery.",
      },
    ],
    relatedServiceSlugs: ["carpet-cleaning", "mattress-cleaning", "house-cleaning"],
  },

  "post-construction-cleaning": {
    heroImage: "/images/gallery/patio-floor-scrubbing.jpeg",
    openingHook:
      "Builders leave behind more than an empty shell — cement dust in every corner, paint spatter on tile, a grout haze that won't mop away, and packaging everywhere. Move-in day (or handover day) shouldn't start with that mess still there.",
    pricingNote:
      "Post-construction cleaning is quoted per property based on size and how much debris/dust needs clearing before the detail pass — contracts typically start from KES 25,000 per visit for a standard house or unit. We'll confirm an exact figure after a quick walkthrough or set of photos.",
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
      {
        question: "Do you handle post-construction cleaning outside Nakuru Town?",
        answer:
          "Yes — we cover new developments and renovations across Nakuru, not just the town centre. Confirm your site location and we'll advise on timing.",
      },
      {
        question: "How many people and how long does a job like this take?",
        answer:
          "It depends on size, but a standard house or apartment usually takes a team of 3–4 cleaners a full day. Larger developments are scoped and quoted with a specific timeline before we start.",
      },
    ],
    relatedServiceSlugs: ["office-cleaning", "pest-control", "house-cleaning"],
  },

  "mattress-cleaning": {
    heroImage: "/images/gallery/chair-upholstery-cleaning.jpeg",
    openingHook:
      "A mattress absorbs years of sweat, dust, and skin cells that no bedsheet can fully block — and it's exactly the kind of buildup that triggers allergies or just makes a room smell 'off' without anyone knowing why. Deep vacuuming and steam sanitization deals with what's actually inside it.",
    pricingNote:
      "Mattress cleaning is priced per item, from KES 1,800 — a single, double, or king-size mattress is each quoted individually based on size, so multi-bedroom homes get one clear combined price.",
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
      {
        question: "Is mattress cleaning available across Nakuru?",
        answer:
          "Yes — mattress cleaning is available for homes, hostels, and short-stay properties across Nakuru and Nakuru Town.",
      },
      {
        question: "Can this help with dust mite allergies?",
        answer:
          "Deep vacuuming and steam treatment significantly reduce the dust mites and allergens living in a mattress, which many clients with allergies or asthma notice within the first few nights after a clean.",
      },
    ],
    relatedServiceSlugs: ["sofa-cleaning", "carpet-cleaning", "house-cleaning"],
  },

  "pest-control": {
    heroImage: "/images/team/team-shopfront-2.jpeg",
    openingHook:
      "One bed bug bite or a cockroach sighting at night is usually all it takes to realize you have a real infestation, not just a one-off. Waiting rarely makes it better — bed bugs and cockroaches breed fast, and early treatment is always cheaper and faster than a delayed one.",
    pricingNote:
      "Pest control is quoted per visit based on the pest, the size of the space, and severity — treatments start from KES 3,500 per visit. Bed bug treatment includes a follow-up visit roughly two weeks later in the quoted price, since a single round rarely catches every egg.",
    benefits: [
      {
        icon: "Bug",
        title: "Covers the common Nakuru pests",
        description:
          "Bed bugs, cockroaches, termites, ants, and rodents — treated with the right method for each, not one generic spray.",
      },
      {
        icon: "ShieldCheck",
        title: "Eco-friendly, family-safe products",
        description:
          "Approved, low-toxicity insecticides that are effective on pests while safe around children, pets, and food areas once dry.",
      },
      {
        icon: "SprayCan",
        title: "Free follow-up for bed bugs",
        description:
          "Bed bug treatments include a second visit roughly two weeks later to catch newly hatched eggs the first round couldn't reach.",
      },
      {
        icon: "Timer",
        title: "Fast response",
        description:
          "Most fumigation jobs in Nakuru Town and surrounding areas are scheduled within 24–48 hours of your call.",
      },
    ],
    included: [
      "Pre-treatment inspection to identify pest type and entry points",
      "Fumigation or targeted treatment of affected rooms",
      "Advice on preparation (clearing surfaces, food storage) before treatment",
      "Safe-to-return guidance once treatment has dried/settled",
      "Follow-up visit for bed bug treatments (approx. 2 weeks later)",
      "Basic prevention advice to reduce reinfestation",
    ],
    notIncluded: [
      "Structural pest damage repair (e.g. termite-damaged timber)",
      "Wildlife/large animal removal",
    ],
    faqs: [
      {
        question: "Do you offer fumigation and pest control in Nakuru Town?",
        answer:
          "Yes — pest control and fumigation is available across Nakuru Town and the surrounding areas we serve, for both homes and businesses.",
      },
      {
        question: "Is the fumigation safe for children and pets?",
        answer:
          "We use approved, eco-friendly products and will advise on how long to keep children and pets out of treated rooms until it's fully safe.",
      },
      {
        question: "How many visits does bed bug treatment take?",
        answer:
          "Typically two: an initial treatment to kill active bed bugs, then a follow-up about two weeks later to treat any eggs that have since hatched.",
      },
      {
        question: "Do I need to move out during treatment?",
        answer:
          "Usually not — most treatments only require a few hours away from the treated rooms while the product settles, not a full day or overnight stay.",
      },
      {
        question: "How quickly can you come out after I call?",
        answer:
          "Most fumigation jobs in and around Nakuru Town are scheduled within 24–48 hours of your call, sooner if the infestation is urgent (e.g. active bed bugs before guests arrive).",
      },
    ],
    process: [
      {
        step: 1,
        title: "Get in touch",
        description:
          "Call, WhatsApp, or fill in the contact form describing the pest problem and the space involved.",
      },
      {
        step: 2,
        title: "Inspection & quote",
        description:
          "We identify the pest and entry points on-site or by description, then confirm scope and price before treatment.",
      },
      {
        step: 3,
        title: "Treatment",
        description:
          "Our team fumigates or treats the affected areas using the right method for that pest.",
      },
      {
        step: 4,
        title: "Follow-up",
        description:
          "For bed bugs, a second visit around two weeks later catches anything that's since hatched.",
      },
    ],
    relatedServiceSlugs: ["house-cleaning", "office-cleaning", "post-construction-cleaning"],
  },
};

export const serviceDetails: Record<string, ServiceDetail> = Object.fromEntries(
  services.map((service) => {
    const extras = detailExtras[service.slug]!;
    const detail: ServiceDetail = {
      ...service,
      heroImage: extras.heroImage,
      openingHook: extras.openingHook,
      pricingNote: extras.pricingNote,
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
