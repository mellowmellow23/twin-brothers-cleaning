import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/lib/utils/icons";
import { formatPriceRange } from "@/lib/utils/format";
import type { ServiceSummary } from "@/types";

export function ServiceCard({ service }: { service: ServiceSummary }) {
  return (
    <Link
      href={service.href}
      className="group flex flex-col rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-card-hover)]"
    >
      <div className="inline-flex size-12 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
        <Icon name={service.icon} className="size-6" />
      </div>
      <h3 className="mt-5 text-xl font-medium text-[var(--color-ink)]">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
        {service.description}
      </p>
      <div className="mt-6 flex items-center justify-between border-t border-[var(--color-border)] pt-4">
        {service.startingPrice ? (
          <span className="font-[family-name:var(--font-mono)] text-sm font-medium text-[var(--color-primary-ink)]">
            {formatPriceRange(service.startingPrice)}
          </span>
        ) : (
          <span />
        )}
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-primary)]">
          Learn more
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
