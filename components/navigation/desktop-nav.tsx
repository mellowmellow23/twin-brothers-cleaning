"use client";

import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";
import type { NavGroup } from "@/types";
import { Icon } from "@/lib/utils/icons";
import { services } from "@/lib/data/services";

export function DesktopNav({ items }: { items: NavGroup[] }) {
  return (
    <NavigationMenu.Root className="hidden lg:block" delayDuration={100}>
      <NavigationMenu.List className="flex items-center gap-1">
        {items.map((group) =>
          group.items && group.items.length > 0 ? (
            <NavigationMenu.Item key={group.label}>
              <NavigationMenu.Trigger asChild>
                <Link
                  href={group.href ?? "/services"}
                  className="group flex items-center gap-1 rounded-[var(--radius-sm)] px-3.5 py-2 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface-sunken)] data-[state=open]:bg-[var(--color-surface-sunken)]"
                >
                  {group.label}
                  <ChevronDown
                    className="size-4 text-[var(--color-muted)] transition-transform duration-200 group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                  />
                </Link>
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute left-0 top-full w-full data-[motion=from-start]:animate-in data-[motion=from-start]:fade-in">
                <ul className="grid w-[560px] grid-cols-2 gap-1 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-[var(--shadow-card-hover)]">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <NavigationMenu.Link asChild>
                        <Link
                          href={service.href}
                          className="flex items-start gap-3 rounded-[var(--radius-sm)] p-3 hover:bg-[var(--color-surface-sunken)]"
                        >
                          <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
                            <Icon name={service.icon} className="size-4" />
                          </span>
                          <span>
                            <span className="block text-sm font-medium text-[var(--color-ink)]">
                              {service.shortName}
                            </span>
                            <span className="mt-0.5 block text-xs text-[var(--color-muted)]">
                              {service.tagline}
                            </span>
                          </span>
                        </Link>
                      </NavigationMenu.Link>
                    </li>
                  ))}
                  <li className="col-span-2">
                    <NavigationMenu.Link asChild>
                      <Link
                        href="/services"
                        className="block rounded-[var(--radius-sm)] px-3 py-2.5 text-center text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]"
                      >
                        View all services
                      </Link>
                    </NavigationMenu.Link>
                  </li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          ) : (
            <NavigationMenu.Item key={group.label}>
              <NavigationMenu.Link asChild>
                <Link
                  href={group.href ?? "#"}
                  className="block rounded-[var(--radius-sm)] px-3.5 py-2 text-sm font-medium text-[var(--color-ink)] hover:bg-[var(--color-surface-sunken)]"
                >
                  {group.label}
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          )
        )}
        <NavigationMenu.Indicator className="top-full z-10 flex h-2 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out">
          <div className="relative top-[60%] size-2.5 rotate-45 rounded-tl-sm bg-[var(--color-surface)]" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="absolute left-0 top-full flex justify-center">
        <NavigationMenu.Viewport className="relative mt-2 origin-top-center overflow-hidden rounded-[var(--radius-md)] transition-[width,height] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out" />
      </div>
    </NavigationMenu.Root>
  );
}
