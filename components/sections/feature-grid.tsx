import { Icon } from "@/lib/utils/icons";
import type { LucideIconName } from "@/types";
import { cn } from "@/lib/utils/cn";

export interface FeatureGridItem {
  icon: LucideIconName;
  title: string;
  description: string;
}

export interface FeatureGridProps {
  items: FeatureGridItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

const columnClasses: Record<NonNullable<FeatureGridProps["columns"]>, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function FeatureGrid({ items, columns = 3, className }: FeatureGridProps) {
  return (
    <div className={cn("grid grid-cols-1 gap-6", columnClasses[columns], className)}>
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-shadow hover:shadow-[var(--shadow-card)]"
        >
          <div className="mb-4 inline-flex size-11 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
            <Icon name={item.icon} className="size-5" />
          </div>
          <h3 className="text-lg font-medium text-[var(--color-ink)]">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
