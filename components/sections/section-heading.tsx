import { cn } from "@/lib/utils/cn";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-3xl font-medium leading-tight text-[var(--color-ink)] sm:text-4xl">
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
