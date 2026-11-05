import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@/lib/utils/icons";
import { contactChannels } from "@/lib/data/site";

export function MobileActionBar() {
  const phone = contactChannels.find((channel) => channel.type === "phone");
  if (!phone) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-border)] bg-[var(--color-surface)]/95 px-3 pt-3 backdrop-blur md:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-md gap-3">
        <Button asChild size="md" variant="primary" className="flex-1">
          <a href={phone.href}>
            <Icon name="PhoneCall" className="size-4" />
            Call us
          </a>
        </Button>
        <Button asChild size="md" variant="outline" className="flex-1">
          <Link href="/#prices">See prices</Link>
        </Button>
      </div>
    </div>
  );
}
