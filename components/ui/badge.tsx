import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold font-[family-name:var(--font-mono)] tracking-wide uppercase",
  {
    variants: {
      variant: {
        default:
          "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-body)]",
        primary:
          "border-transparent bg-[var(--color-primary-soft)] text-[var(--color-primary-ink)]",
        accent: "border-transparent bg-[var(--color-highlight)] text-[var(--color-accent-ink)]",
        ink: "border-transparent bg-[var(--color-ink)] text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
}

function Badge({ className, variant, icon, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props}>
      {icon}
      {children}
    </span>
  );
}

export { Badge, badgeVariants };
