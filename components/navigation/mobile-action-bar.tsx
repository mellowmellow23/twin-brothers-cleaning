import { Button } from "@/components/ui/button";
import { Icon } from "@/lib/utils/icons";
import { contactChannels } from "@/lib/data/site";

export function MobileActionBar() {
  const phone = contactChannels.find((channel) => channel.type === "phone");
  const whatsapp = contactChannels.find((channel) => channel.type === "whatsapp");
  if (!phone || !whatsapp) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-border)] bg-[var(--color-surface)]/95 px-3 pt-3 backdrop-blur md:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-md gap-3">
        <Button asChild size="md" variant="outline" className="flex-1">
          <a href={phone.href}>
            <Icon name="PhoneCall" className="size-4" />
            Call
          </a>
        </Button>
        <Button asChild size="md" variant="primary" className="flex-1">
          <a href={whatsapp.href} target="_blank" rel="noopener noreferrer">
            <Icon name="MessageCircle" className="size-4" />
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
