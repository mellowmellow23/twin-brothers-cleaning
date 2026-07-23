import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/lib/utils/icons";
import type { Metric } from "@/types";
import { cn } from "@/lib/utils/cn";

export interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  image?: { src: string; alt: string };
  metrics?: Metric[];
  size?: "large" | "compact";
}

export function Hero({
  eyebrow = "Nakuru, Kenya",
  title,
  description,
  primaryLabel = "Get a Free Quote",
  primaryHref = "/contact",
  secondaryLabel = "Our Services",
  secondaryHref = "/services",
  image,
  metrics,
  size = "large",
}: HeroProps) {
  return (
    <section className="sweep-backdrop relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
      <div
        className={cn(
          "container-content grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center",
          size === "compact" && "py-10 sm:py-14"
        )}
      >
        <div>
          <Badge variant="primary" icon={<Icon name="ShieldCheck" className="size-3.5" />}>
            {eyebrow}
          </Badge>
          <h1
            className={cn(
              "mt-5 text-4xl font-medium leading-[1.08] text-[var(--color-ink)]",
              size === "large" ? "sm:text-5xl lg:text-6xl" : "sm:text-4xl lg:text-5xl"
            )}
          >
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="primary">
              <Link href={primaryHref}>{primaryLabel}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          </div>

          {metrics && metrics.length > 0 ? (
            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-[var(--color-border)] pt-6">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="text-xs font-medium uppercase tracking-wide text-[var(--color-muted)]">
                    {metric.label}
                  </dt>
                  <dd className="mt-1 font-[family-name:var(--font-mono)] text-2xl font-semibold text-[var(--color-ink)]">
                    {metric.value}
                    {metric.suffix ? (
                      <span className="text-[var(--color-primary)]">{metric.suffix}</span>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        {image ? (
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-card-hover)] lg:aspect-square">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        ) : null}
      </div>
      <div className="sweep-divider" aria-hidden="true" />
    </section>
  );
}
