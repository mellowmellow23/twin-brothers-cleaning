"use client";

import { useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, ChevronDown, PhoneCall } from "lucide-react";
import type { NavGroup } from "@/types";
import { contactChannels } from "@/lib/data/site";
import { Button } from "@/components/ui/button";

export function MobileNav({ items }: { items: NavGroup[] }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const phone = contactChannels.find((c) => c.type === "phone");

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-ink)] hover:bg-[var(--color-surface-sunken)] lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-6" aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/40 lg:hidden" />
        <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col overflow-y-auto bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card-hover)] lg:hidden">
          <div className="flex items-center justify-between">
            <Dialog.Title className="font-[family-name:var(--font-display)] text-lg text-[var(--color-ink)]">
              Menu
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] hover:bg-[var(--color-surface-sunken)]"
                aria-label="Close menu"
              >
                <X className="size-6" aria-hidden="true" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="mt-6 flex-1">
            <ul className="flex flex-col divide-y divide-[var(--color-border)]">
              {items.map((group) => (
                <li key={group.label} className="py-1">
                  {group.items && group.items.length > 0 ? (
                    <div>
                      <button
                        type="button"
                        onClick={() =>
                          setExpanded(expanded === group.label ? null : group.label)
                        }
                        aria-expanded={expanded === group.label}
                        className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-[var(--color-ink)]"
                      >
                        {group.label}
                        <ChevronDown
                          className={`size-5 text-[var(--color-muted)] transition-transform ${
                            expanded === group.label ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      {expanded === group.label ? (
                        <ul className="mb-3 flex flex-col gap-1 pl-3">
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-[var(--radius-sm)] px-2 py-2 text-sm text-[var(--color-body)] hover:bg-[var(--color-surface-sunken)]"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ) : (
                    <Link
                      href={group.href ?? "#"}
                      onClick={() => setOpen(false)}
                      className="block py-3 text-base font-medium text-[var(--color-ink)]"
                    >
                      {group.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 flex flex-col gap-3 border-t border-[var(--color-border)] pt-6">
            <Button asChild variant="outline" size="lg">
              <a href={phone?.href}>
                <PhoneCall className="size-4" aria-hidden="true" />
                {phone?.value}
              </a>
            </Button>
            <Button asChild size="lg">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Get a Free Quote
              </Link>
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
