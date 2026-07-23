"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/types";

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion.Root type="single" collapsible className="divide-y divide-[var(--color-border)]">
      {items.map((item, index) => (
        <Accordion.Item key={item.question} value={`faq-${index}`}>
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left text-base font-medium text-[var(--color-ink)] hover:text-[var(--color-primary)]">
              <span>{item.question}</span>
              <ChevronDown
                className="size-5 shrink-0 text-[var(--color-muted)] transition-transform duration-200 group-data-[state=open]:rotate-180"
                aria-hidden="true"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden pb-5 text-sm leading-relaxed text-[var(--color-muted)] data-[state=closed]:animate-none">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
