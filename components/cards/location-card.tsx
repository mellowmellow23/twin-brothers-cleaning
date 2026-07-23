import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Location } from "@/types";

export function LocationCard({ location }: { location: Location }) {
  return (
    <Link
      href={location.href}
      className="group flex flex-col rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-card-hover)]"
    >
      <div className="flex items-center gap-2 text-[var(--color-primary)]">
        <MapPin className="size-4" aria-hidden="true" />
        <span className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-wide">
          {location.region}
        </span>
      </div>
      <h3 className="mt-3 text-xl font-medium text-[var(--color-ink)]">{location.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
        {location.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {location.areasServed.slice(0, 4).map((area) => (
          <li
            key={area}
            className="rounded-full bg-[var(--color-surface-sunken)] px-2.5 py-1 text-xs text-[var(--color-body)]"
          >
            {area}
          </li>
        ))}
      </ul>
      <span className="mt-5 inline-flex items-center gap-1 border-t border-[var(--color-border)] pt-4 text-sm font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-primary)]">
        View service area
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
