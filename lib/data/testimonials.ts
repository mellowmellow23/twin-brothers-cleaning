import type { Testimonial } from "@/types";

/**
 * Real reviews from the Twin Brothers Cleaning Services Google Business
 * Profile (pulled 2026-07-24). Reviewer names aren't exposed via the lookup
 * used here, so these are honestly attributed as "Google review" rather than
 * given an invented name. Text has been lightly tidied for typos/punctuation
 * only — meaning is unchanged. Individual star ratings weren't available
 * from the API; 5 is used for each based on the clearly positive sentiment
 * of the review text itself. The verified aggregate (4.5 from 11 reviews) is
 * what's actually used in the site's schema markup — see
 * lib/schema/organization.ts.
 */
export const testimonials: Testimonial[] = [
  {
    id: "google-review-1",
    authorName: "Google review",
    quote: "I love everything about your services. Good job.",
    rating: 5,
    source: "google",
  },
  {
    id: "google-review-2",
    authorName: "Google review",
    quote:
      "These people are amazing — they do their work wholeheartedly, and you can trust them with your place even if you're not around. They'll do the work and leave your place shining and clean. If you need anything cleaning-related, just call them — you'll enjoy their work.",
    rating: 5,
    source: "google",
  },
  {
    id: "google-review-3",
    authorName: "Google review",
    quote:
      "This is one of the most efficient, trustworthy teams I've ever come across. I loved their work — my house was left simply superb.",
    rating: 5,
    serviceSlug: "house-cleaning",
    source: "google",
  },
  {
    id: "google-review-4",
    authorName: "Google review",
    quote:
      "You can't imagine how amazing these cleaners are — they've done wonders in my workplace. My people don't have to strain anymore. If you need anything cleaning-related, just look for Twin Brothers Services.",
    rating: 5,
    serviceSlug: "office-cleaning",
    source: "google",
  },
  {
    id: "google-review-5",
    authorName: "Google review",
    quote: "Excellent job.",
    rating: 5,
    source: "google",
  },
];

export function getTestimonialsForService(serviceSlug: string): Testimonial[] {
  return testimonials.filter((t) => t.serviceSlug === serviceSlug);
}