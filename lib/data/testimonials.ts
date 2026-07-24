import type { Testimonial } from "@/types";

/**
 * PLACEHOLDER CONTENT — these are sample testimonials for layout purposes
 * only. Replace with real client reviews (e.g. pulled from Google Business
 * Profile) before launch, and keep `reviewSchema`/`aggregateRatingSchema`
 * pointed at genuine, verifiable reviews only.
 */
export const testimonials: Testimonial[] = [
  {
    id: "sample-review-1",
    authorName: "Grace W.",
    authorRole: "Homeowner",
    organization: "Milimani, Nakuru",
    quote:
      "The team arrived on time, in uniform, and worked through our whole house in a few hours. Everything smelled and looked genuinely clean, not just tidied.",
    rating: 5,
    serviceSlug: "house-cleaning",
    datePublished: "2026-03-14",
  },
  {
    id: "sample-review-2",
    authorName: "Daniel K.",
    authorRole: "Office Manager",
    organization: "Nakuru Town",
    quote:
      "We switched to Twin Brothers for our office cleaning contract after our last provider kept sending different people every week. Consistency has been the biggest win.",
    rating: 5,
    serviceSlug: "office-cleaning",
    datePublished: "2026-01-22",
  },
  {
    id: "sample-review-3",
    authorName: "Fatuma A.",
    quote:
      "Our sitting room carpet had years of stains we assumed were permanent. The extraction cleaning lifted almost all of it and the smell was completely gone.",
    rating: 5,
    serviceSlug: "carpet-cleaning",
    datePublished: "2025-11-02",
  },
  {
    id: "sample-review-4",
    authorName: "Peter M.",
    authorRole: "Site Manager",
    organization: "Property developer",
    quote:
      "Booked post-construction cleaning ahead of a client handover with a tight deadline. The team dealt with the dust and debris and had it move-in ready on schedule.",
    rating: 4,
    serviceSlug: "post-construction-cleaning",
    datePublished: "2025-09-18",
  },
];

export function getTestimonialsForService(serviceSlug: string): Testimonial[] {
  return testimonials.filter((t) => t.serviceSlug === serviceSlug);
}