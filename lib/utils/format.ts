import type { PriceRange } from "@/types";

const KES_FORMATTER = new Intl.NumberFormat("en-KE", {
  style: "currency",
  currency: "KES",
  maximumFractionDigits: 0,
});

export function formatPriceRange(price: PriceRange): string {
  const amount = KES_FORMATTER.format(price.from);
  const unitLabel: Record<PriceRange["unit"], string> = {
    visit: "per visit",
    room: "per room",
    sqft: "per sq. ft",
    item: "per item",
  };
  return `From ${amount} ${unitLabel[price.unit]}`;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Normalizes a Kenyan phone number for tel: links, e.g. "+254 712 345 678" -> "+254712345678" */
export function toTelHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function toWhatsAppHref(phone: string, message?: string): string {
  const digits = phone.replace(/[^\d]/g, "");
  const params = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${digits}${params}`;
}
