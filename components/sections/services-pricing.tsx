import { SectionHeading } from "@/components/sections/section-heading";
import { PriceCard } from "@/components/cards/price-card";
import { services } from "@/lib/data/services";
import { priceList, priceDisplayOrder, type PriceListEntry } from "@/lib/data/price-list";
import { formatPriceRange } from "@/lib/utils/format";

function rank(slug: string): number {
  const index = priceDisplayOrder.indexOf(slug);
  return index === -1 ? 999 : index;
}

export function ServicesPricing() {
  const ordered = [...services].sort((a, b) => rank(a.slug) - rank(b.slug));

  return (
    <section id="prices" className="container-content scroll-mt-24">
      <SectionHeading
        eyebrow="Services & prices"
        title="Clear prices, booked in one message"
        description="Starting prices for every service. We confirm the exact price before any work begins, with no surprise add-ons."
      />
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ordered.map((service) => {
          const entry: PriceListEntry = priceList[service.slug] ?? {
            rows: service.startingPrice
              ? [{ label: "Starting price", price: formatPriceRange(service.startingPrice) }]
              : [],
          };
          return <PriceCard key={service.slug} service={service} entry={entry} />;
        })}
      </div>
    </section>
  );
}
