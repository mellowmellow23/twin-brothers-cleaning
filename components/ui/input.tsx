import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, invalid, ...props }, ref) => {
    return (
      <input
        ref={ref}
        aria-invalid={invalid || undefined}
        className={cn(
          "h-11 w-full rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 text-sm text-[var(--color-ink)] placeholder:text-[var(--color-muted)] transition-colors",
          "focus:border-[var(--color-primary)]",
          invalid && "border-[var(--color-danger)]",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
