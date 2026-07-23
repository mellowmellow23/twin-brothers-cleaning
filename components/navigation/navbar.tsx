import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { Logo } from "./logo";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { Button } from "@/components/ui/button";
import { primaryNav } from "@/lib/data/navigation";
import { contactChannels } from "@/lib/data/site";

export function Navbar() {
  const phone = contactChannels.find((c) => c.type === "phone");

  return (
    <header className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-surface)]/75">
      <div className="container-wide relative flex h-18 items-center justify-between py-3">
        <Logo />

        <DesktopNav items={primaryNav} />

        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="md" className="hidden xl:inline-flex">
            <a href={phone?.href}>
              <PhoneCall className="size-4" aria-hidden="true" />
              {phone?.value}
            </a>
          </Button>
          <Button asChild variant="outline" size="md" className="hidden lg:inline-flex">
            <a href={phone?.href}>Call Now</a>
          </Button>
          <Button asChild size="md" className="hidden lg:inline-flex">
            <Link href="/contact">Get Quote</Link>
          </Button>
          <MobileNav items={primaryNav} />
        </div>
      </div>
    </header>
  );
}
