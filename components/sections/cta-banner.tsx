import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@/lib/utils/icons";
import { contactChannels } from "@/lib/data/site";

export interface CTABannerProps {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "solid" | "outline";
}

export function CTABanner({
  title,
  description,
  primaryLabel = "Get a Free Quote",
  primaryHref = "/contact",
  secondaryLabel = "Call Now",
  secondaryHref,
  variant = "solid",
}: CTABannerProps) {
  const phone = contactChannels.find((c) => c.type === "phone");
  const callHref = secondaryHref ?? phone?.href ?? "/contact";

  return (
    <section
      className={
        variant === "solid"
          ? "rounded-[var(--radius-xl)] bg-[var(--color-ink)] px-8 py-14 sm:px-14"
          : "rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] px-8 py-14 sm:px-14"
      }
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h2
          className={
            variant === "solid"
              ? "text-3xl font-medium text-white sm:text-4xl"
              : "text-3xl font-medium text-[var(--color-ink)] sm:text-4xl"
          }
        >
          {title}
        </h2>
        {description ? (
          <p
            className={
              variant === "solid"
                ? "text-base text-white/75 sm:text-lg"
                : "text-base text-[var(--color-muted)] sm:text-lg"
            }
          >
            {description}
          </p>
        ) : null}
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="accent">
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className={
              variant === "solid"
                ? "border-white/25 bg-transparent text-white hover:border-white hover:text-white"
                : undefined
            }
          >
            <a href={callHref}>
              <Icon name="PhoneCall" className="size-4" />
              {secondaryLabel}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
