import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Breadcrumb } from "@/types";

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[var(--color-muted)]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1.5">
              {index > 0 ? <ChevronRight className="size-3.5" aria-hidden="true" /> : null}
              {isLast ? (
                <span aria-current="page" className="font-medium text-[var(--color-ink)]">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-[var(--color-primary)]">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
