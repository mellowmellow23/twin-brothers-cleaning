import { Star } from "lucide-react";
import type { Testimonial } from "@/types";
import { formatDate } from "@/lib/utils/format";

export function ReviewCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
      <div className="flex" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="size-4"
            aria-hidden="true"
            fill={index < testimonial.rating ? "var(--color-accent)" : "none"}
            stroke={index < testimonial.rating ? "var(--color-accent-ink)" : "var(--color-border)"}
          />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-[var(--color-body)]">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 border-t border-[var(--color-border)] pt-4">
        <p className="text-sm font-semibold text-[var(--color-ink)]">
          {testimonial.authorName}
        </p>
        <p className="text-xs text-[var(--color-muted)]">
          {[testimonial.authorRole, testimonial.organization].filter(Boolean).join(", ")}
          {testimonial.authorRole || testimonial.organization ? " · " : ""}
          {testimonial.datePublished ? (
            <time dateTime={testimonial.datePublished}>{formatDate(testimonial.datePublished)}</time>
          ) : testimonial.source === "google" ? (
            <span>Verified Google review</span>
          ) : null}
        </p>
      </figcaption>
    </figure>
  );
}