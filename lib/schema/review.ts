import { siteConfig } from "@/lib/data/site";
import type { Testimonial } from "@/types";

export function reviewSchema(testimonial: Testimonial) {
  return {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: testimonial.rating,
      bestRating: 5,
    },
    author: { "@type": "Person", name: testimonial.authorName },
    reviewBody: testimonial.quote,
    datePublished: testimonial.datePublished,
    itemReviewed: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function aggregateRatingSchema(testimonials: Testimonial[]) {
  if (testimonials.length === 0) return null;
  const average =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return {
    "@type": "AggregateRating",
    ratingValue: Number(average.toFixed(1)),
    reviewCount: testimonials.length,
    bestRating: 5,
    worstRating: 1,
  };
}
