import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2.5 rounded-[var(--radius-sm)]"
      aria-label="Twin Brothers Cleaning Service — home"
    >
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-[var(--radius-sm)] font-[family-name:var(--font-display)] text-lg font-semibold",
          variant === "dark"
            ? "bg-[var(--color-primary)] text-white"
            : "bg-white/10 text-white"
        )}
      >
        TB
      </span>
      <span
        className={cn(
          "font-[family-name:var(--font-display)] text-lg leading-tight",
          variant === "dark" ? "text-[var(--color-ink)]" : "text-white"
        )}
      >
        Twin Brothers
        <span className="block text-[0.65rem] font-sans font-medium uppercase tracking-[0.16em] opacity-70">
          Cleaning Service
        </span>
      </span>
    </Link>
  );
}
