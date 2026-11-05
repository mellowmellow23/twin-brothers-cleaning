import { BrandIcon } from "@/components/ui/brand-icon";
import { contactChannels } from "@/lib/data/site";
import { toWhatsAppHref } from "@/lib/utils/format";

export function WhatsAppFloat() {
  const whatsapp = contactChannels.find((channel) => channel.type === "whatsapp");
  if (!whatsapp) return null;

  const digits = whatsapp.href.replace(/\D/g, "");
  const href = toWhatsAppHref(digits, "Hi Twin Brothers, I'd like to make an enquiry.");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Twin Brothers Cleaning on WhatsApp"
      className="group fixed bottom-24 right-4 z-50 flex items-center gap-3 md:bottom-6 md:right-6"
    >
      <span className="hidden rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
        Chat with us
      </span>
      <span className="relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform group-hover:scale-105">
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 motion-safe:animate-ping"
          aria-hidden="true"
        />
        <BrandIcon name="whatsapp" className="relative size-7" />
      </span>
    </a>
  );
}
