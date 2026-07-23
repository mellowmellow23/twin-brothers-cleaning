import { Icon } from "@/lib/utils/icons";
import type { Metric } from "@/types";

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center">
      {metric.icon ? (
        <div className="mx-auto mb-3 inline-flex size-10 items-center justify-center rounded-full bg-[var(--color-highlight)] text-[var(--color-accent-ink)]">
          <Icon name={metric.icon} className="size-5" />
        </div>
      ) : null}
      <p className="font-[family-name:var(--font-mono)] text-3xl font-semibold text-[var(--color-ink)]">
        {metric.value}
        {metric.suffix ? <span className="text-[var(--color-primary)]">{metric.suffix}</span> : null}
      </p>
      <p className="mt-1 text-sm text-[var(--color-muted)]">{metric.label}</p>
    </div>
  );
}
