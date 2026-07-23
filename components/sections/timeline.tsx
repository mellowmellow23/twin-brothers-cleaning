import type { ProcessStep } from "@/types";

export function Timeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li key={step.step} className="relative pl-0">
          <div className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] font-[family-name:var(--font-mono)] text-sm font-semibold text-white">
              {String(step.step).padStart(2, "0")}
            </span>
            {index < steps.length - 1 ? (
              <span
                className="hidden h-px flex-1 bg-[var(--color-border)] sm:block lg:block"
                aria-hidden="true"
              />
            ) : null}
          </div>
          <h3 className="mt-4 text-lg font-medium text-[var(--color-ink)]">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
            {step.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
