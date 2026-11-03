import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@/lib/utils/icons";
import { toWhatsAppHref } from "@/lib/utils/format";
import { whatsappNumber, type PriceListEntry } from "@/lib/data/price-list";
import type { ServiceSummary } from "@/types";

export function PriceCard({
  service,
  entry,
}: {
  service: ServiceSummary;
  entry: PriceListEntry;
}) {
  const message = `Hi Twin Brothers, I'd like a quote for ${service.name}.`;

  return (
    <article className="flex flex-col rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-3">
        <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
          <Icon name={service.icon} className="size-5" />
        </div>
        <h3 className="text-lg font-medium leading-snug text-[var(--color-ink)]">
          <Link href={service.href} className="hover:text-[var(--color-primary)]">
            {service.shortName}
          </Link>
        </h3>
      </div>

      {entry.note ? (
        <p className="mt-3 text-sm text-[var(--color-muted)]">{entry.note}</p>
      ) : null}

      <dl className="mt-3 flex-1 divide-y divide-[var(--color-border)] text-sm">
        {entry.rows.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-3 py-2">
            <dt className="text-[var(--color-body)]">{row.label}</dt>
            <dd className="whitespace-nowrap font-[family-name:var(--font-mono)] font-semibold text-[var(--color-primary-ink)]">
              {row.price}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 flex gap-2">
        <Button asChild size="sm" variant="primary" className="flex-1">
          <a
            href={toWhatsAppHref(whatsappNumber, message)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="MessageCircle" className="size-4" />
            Book on WhatsApp
          </a>
        </Button>
        <Button asChild size="sm" variant="outline">
          <Link href={service.href}>Details</Link>
        </Button>
      </div>
    </article>
  );
}
