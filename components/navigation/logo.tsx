import Link from "next/link";
import Image from "next/image";
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
          "relative flex size-9 shrink-0 items-center justify-center rounded-[var(--radius-sm)]",
          variant === "light" && "bg-white/10"
        )}
      >
        <Image
          src="/images/brand/logo-icon.png"
          alt=""
          width={36}
          height={36}
          priority
          className="size-8 object-contain"
        />
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