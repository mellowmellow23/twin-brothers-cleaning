#!/usr/bin/env bash
# =============================================================================
# Twin Brothers Cleaning - Home page update (stage 2)
#   - Slim hero with Call + WhatsApp buttons and the Google rating
#   - "Services & Prices" section right after the hero, with real price lists
#   - "Book on WhatsApp" button on every service card (message pre-written)
#   - Sticky Call / WhatsApp bar on phones
#   - Problem + service-area text moved lower on the page
#   - Fumigation uses single prices: 1BR 4,500 | 2BR 6,000 | 3BR 7,500
#
# RUN AFTER update-site.sh and update-prices.sh, from the project root:
#     bash update-homepage.sh
# Safe to run twice. Backups go in .backup-home-<timestamp>/
# To change any price shown on the home page, edit lib/data/price-list.ts
# =============================================================================
set -euo pipefail

if [ ! -f package.json ] || [ ! -d lib/data ]; then
  echo "ERROR: run this from the project root (the folder with package.json)."
  exit 1
fi
if ! grep -q 'from: 650, unit: "seat"' lib/data/services.ts; then
  echo "ERROR: run update-site.sh and then update-prices.sh first."
  exit 1
fi
command -v node >/dev/null 2>&1 || { echo "ERROR: Node.js not found."; exit 1; }

BACKUP=".backup-home-$(date +%Y%m%d-%H%M%S)"
for f in app/page.tsx app/layout.tsx lib/data/services.ts lib/data/service-details.ts; do
  mkdir -p "$BACKUP/$(dirname "$f")"
  cp "$f" "$BACKUP/$f"
done
echo "Backup saved in $BACKUP"

mkdir -p components/sections components/cards components/navigation lib/data

# -----------------------------------------------------------------------------
# 1. Price list shown on the home page (edit prices here)
# -----------------------------------------------------------------------------
cat > lib/data/price-list.ts <<'EOF'
/**
 * Prices shown on the home page "Services & Prices" section.
 * Edit the numbers here. Keep them in step with the service pages
 * (lib/data/service-details.ts) and the "From" prices (lib/data/services.ts).
 */
export const whatsappNumber = "254723358456";

export interface PriceRow {
  label: string;
  price: string;
}

export interface PriceListEntry {
  note?: string;
  rows: PriceRow[];
}

/** Order the cards appear in on the home page. */
export const priceDisplayOrder: string[] = [
  "house-cleaning",
  "pest-control",
  "carpet-cleaning",
  "sofa-cleaning",
  "mattress-cleaning",
  "office-cleaning",
  "airbnb-management",
  "restaurant-cleaning",
  "post-construction-cleaning",
];

export const priceList: Record<string, PriceListEntry> = {
  "house-cleaning": {
    note: "Full general cleaning",
    rows: [
      { label: "1 Bedroom", price: "KES 6,000" },
      { label: "2 Bedroom", price: "KES 9,000" },
      { label: "3 Bedroom", price: "KES 15,000" },
      { label: "4 Bedroom", price: "KES 20,000" },
    ],
  },
  "pest-control": {
    note: "Fumigation and pest treatment",
    rows: [
      { label: "1 Bedroom", price: "KES 4,500" },
      { label: "2 Bedroom", price: "KES 6,000" },
      { label: "3 Bedroom", price: "KES 7,500" },
      { label: "Commercial / general", price: "KES 25 per sq. m" },
      { label: "Termites, snakes, heavy infestations", price: "From KES 8,000" },
    ],
  },
  "carpet-cleaning": {
    note: "Steam and shampoo cleaning",
    rows: [{ label: "Per square foot", price: "KES 350" }],
  },
  "sofa-cleaning": {
    note: "Sofa sets and upholstery",
    rows: [{ label: "Per seat", price: "KES 650" }],
  },
  "mattress-cleaning": {
    note: "Deep clean and sanitise",
    rows: [{ label: "Per mattress", price: "KES 1,500" }],
  },
  "office-cleaning": {
    note: "Scheduled cleaning for offices and shops",
    rows: [{ label: "Small office, per visit", price: "From KES 6,000" }],
  },
  "airbnb-management": {
    note: "Turnover cleaning per booking",
    rows: [
      { label: "Studio / bedsitter", price: "KES 1,500" },
      { label: "1 Bedroom", price: "KES 2,000" },
      { label: "2 Bedroom", price: "KES 2,800" },
      { label: "3 Bedroom", price: "KES 3,800" },
    ],
  },
  "restaurant-cleaning": {
    note: "Kitchens, cafes, hotels and shops",
    rows: [
      { label: "Cafe / small kitchen", price: "From KES 6,000" },
      { label: "Restaurant kitchen", price: "From KES 10,000" },
      { label: "Monthly contract", price: "From KES 20,000" },
    ],
  },
  "post-construction-cleaning": {
    note: "After building or renovation",
    rows: [{ label: "Small unit or apartment", price: "From KES 8,000" }],
  },
};
EOF

# -----------------------------------------------------------------------------
# 2. Price card (one per service, with Book on WhatsApp)
# -----------------------------------------------------------------------------
cat > components/cards/price-card.tsx <<'EOF'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Icon } from "@/lib/utils/icons";
import { toWhatsAppHref } from "@/lib/utils/format";
import { whatsappNumber, type PriceListEntry } from "@/lib/data/price-list";
import type { ServiceSummary } from "@/types";

export function PriceCard({
  service,
  entry,
}: {
  service: ServiceSummary;
  entry: PriceListEntry;
}) {
  const message = `Hi Twin Brothers, I'd like a quote for ${service.name}.`;

  return (
    <article className="flex flex-col rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-3">
        <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-primary)]">
          <Icon name={service.icon} className="size-5" />
        </div>
        <h3 className="text-lg font-medium leading-snug text-[var(--color-ink)]">
          <Link href={service.href} className="hover:text-[var(--color-primary)]">
            {service.shortName}
          </Link>
        </h3>
      </div>

      {entry.note ? (
        <p className="mt-3 text-sm text-[var(--color-muted)]">{entry.note}</p>
      ) : null}

      <dl className="mt-3 flex-1 divide-y divide-[var(--color-border)] text-sm">
        {entry.rows.map((row) => (
          <div key={row.label} className="flex items-baseline justify-between gap-3 py-2">
            <dt className="text-[var(--color-body)]">{row.label}</dt>
            <dd className="whitespace-nowrap font-[family-name:var(--font-mono)] font-semibold text-[var(--color-primary-ink)]">
              {row.price}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 flex gap-2">
        <Button asChild size="sm" variant="primary" className="flex-1">
          <a
            href={toWhatsAppHref(whatsappNumber, message)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="MessageCircle" className="size-4" />
            Book on WhatsApp
          </a>
        </Button>
        <Button asChild size="sm" variant="outline">
          <Link href={service.href}>Details</Link>
        </Button>
      </div>
    </article>
  );
}
EOF

# -----------------------------------------------------------------------------
# 3. Services & Prices section
# -----------------------------------------------------------------------------
cat > components/sections/services-pricing.tsx <<'EOF'
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
EOF

# -----------------------------------------------------------------------------
# 4. Slim home hero
# -----------------------------------------------------------------------------
cat > components/sections/home-hero.tsx <<'EOF'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/lib/utils/icons";
import { contactChannels, googleBusinessProfile } from "@/lib/data/site";

export function HomeHero() {
  const phone = contactChannels.find((channel) => channel.type === "phone");
  const whatsapp = contactChannels.find((channel) => channel.type === "whatsapp");

  return (
    <section className="sweep-backdrop relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
      <div className="container-content py-10 sm:py-14">
        <Badge variant="primary" icon={<Icon name="MapPin" className="size-3.5" />}>
          Moses Mudavadi Road, Nakuru
        </Badge>
        <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.08] text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
          Cleaning and fumigation in Nakuru, with clear prices.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
          Trained, uniformed teams for homes, offices, Airbnbs and restaurants. See our prices
          below, then call or WhatsApp to book.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {phone ? (
            <Button asChild size="lg" variant="primary">
              <a href={phone.href}>
                <Icon name="PhoneCall" className="size-4" />
                Call {phone.value}
              </a>
            </Button>
          ) : null}
          {whatsapp ? (
            <Button asChild size="lg" variant="outline">
              <a href={whatsapp.href} target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" className="size-4" />
                WhatsApp us
              </a>
            </Button>
          ) : null}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--color-muted)]">
          <span className="inline-flex items-center gap-1.5">
            <Icon name="Star" className="size-4 text-[var(--color-primary)]" />
            {googleBusinessProfile.rating} on Google · {googleBusinessProfile.ratingCount} reviews
          </span>
          <Link
            href="#prices"
            className="font-semibold text-[var(--color-primary)] underline-offset-4 hover:underline"
          >
            See prices ↓
          </Link>
        </div>
      </div>
      <div className="sweep-divider" aria-hidden="true" />
    </section>
  );
}
EOF

# -----------------------------------------------------------------------------
# 5. Sticky Call / WhatsApp bar for phones
# -----------------------------------------------------------------------------
cat > components/navigation/mobile-action-bar.tsx <<'EOF'
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
EOF

# -----------------------------------------------------------------------------
# 6. New home page (same sections as before, new order)
# -----------------------------------------------------------------------------
cat > app/page.tsx <<'EOF'
import type { Metadata } from "next";
import Link from "next/link";
import { HomeHero } from "@/components/sections/home-hero";
import { ServicesPricing } from "@/components/sections/services-pricing";
import { SectionHeading } from "@/components/sections/section-heading";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { Timeline } from "@/components/sections/timeline";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { CTABanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { whyChooseUs, cleaningProcess, industriesServed, homeFaqs } from "@/lib/data/content";
import { galleryImages } from "@/lib/data/gallery";
import { createMetadata } from "@/lib/metadata";
import { pageGraphSchema, webPageSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = createMetadata({
  title: "Twin Brothers Cleaning Service | Nakuru, Kenya",
  description:
    "Cleaning and fumigation in Nakuru with clear prices: house cleaning from KES 6,000, fumigation from KES 4,500. Call or WhatsApp 0723 358 456.",
  path: "/",
  keywords: [
    "cleaning service Nakuru",
    "house cleaning Nakuru",
    "fumigation Nakuru",
    "pest control Nakuru",
    "office cleaning Kenya",
    "carpet cleaning Nakuru",
    "sofa cleaning Nakuru",
    "mattress cleaning Nakuru",
    "airbnb cleaning Nakuru",
    "restaurant cleaning Nakuru",
    "post construction cleaning Nakuru",
    "deep cleaning Nakuru",
    "professional cleaners Nakuru",
    "commercial cleaning Nakuru",
    "best cleaning company Nakuru",
  ],
});

const serviceAreaLinks: { label: string; href: string }[] = [
  { label: "house cleaning", href: "/services/house-cleaning" },
  { label: "fumigation", href: "/services/pest-control" },
  { label: "office cleaning", href: "/services/office-cleaning" },
  { label: "carpet cleaning", href: "/services/carpet-cleaning" },
  { label: "sofa cleaning", href: "/services/sofa-cleaning" },
  { label: "mattress cleaning", href: "/services/mattress-cleaning" },
  { label: "Airbnb cleaning", href: "/services/airbnb-management" },
  { label: "restaurant cleaning", href: "/services/restaurant-cleaning" },
  { label: "post-construction cleaning", href: "/services/post-construction-cleaning" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 sm:gap-24">
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: "/",
            name: "Twin Brothers Cleaning Service",
            description:
              "Cleaning and fumigation in Nakuru, Kenya: house, office, carpet, sofa, mattress, Airbnb, restaurant and post-construction cleaning.",
          }),
          breadcrumbSchema([{ label: "Home", href: "/" }]),
          faqSchema(homeFaqs),
        ])}
      />

      <HomeHero />

      <ServicesPricing />

      {/* Why Choose Us */}
      <section className="container-content">
        <SectionHeading eyebrow="Why Twin Brothers" title="Built for reliable results" />
        <div className="mt-10">
          <FeatureGrid items={whyChooseUs} columns={3} />
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="container-content">
        <SectionHeading eyebrow="How it works" title="From call to clean, in four steps" />
        <div className="mt-10">
          <Timeline steps={cleaningProcess} />
        </div>
      </section>

      {/* Service area, keyword-rich text for local SEO */}
      <section className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Twin Brothers Cleaning Service operates throughout <strong>Nakuru</strong> and
            surrounding areas including Lanet, Naivasha, Molo, and Njoro. Whether you need{" "}
            {serviceAreaLinks.map((item, index) => (
              <span key={item.href}>
                <Link
                  href={item.href}
                  className="text-primary underline underline-offset-4 hover:text-primary/80"
                >
                  {item.label}
                </Link>
                {index < serviceAreaLinks.length - 2
                  ? ", "
                  : index === serviceAreaLinks.length - 2
                    ? ", or "
                    : ""}
              </span>
            ))}
            , our trained teams arrive with professional equipment and get it done right the
            first time.
          </p>
        </div>
      </section>

      {/* Problem section */}
      <section className="container-content">
        <SectionHeading
          eyebrow="The problem"
          title="Cleaning day shouldn't mean gambling on who shows up"
          description="Untrained crews, borrowed equipment, and the wrong products on delicate fabric or stone cost you time and money to fix. Twin Brothers sends a trained, equipped team so it's done right the first time."
          align="center"
          className="mx-auto"
        />
      </section>

      {/* Industries Served */}
      <section className="container-content">
        <SectionHeading eyebrow="Who we work with" title="Industries we serve" />
        <div className="mt-10">
          <FeatureGrid
            items={industriesServed.map((industry) => ({
              icon: industry.icon,
              title: industry.name,
              description: industry.description,
            }))}
            columns={4}
          />
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="container-content">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Recent work" title="See the Twin Brothers team at work" />
          <Button asChild variant="outline" aria-label="View full cleaning work gallery">
            <Link href="/gallery">View full gallery</Link>
          </Button>
        </div>
        <div className="mt-10">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* FAQ */}
      <section className="container-content">
        <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
        <div className="mx-auto mt-8 max-w-3xl">
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-content">
        <CTABanner
          title="Ready to book your clean?"
          description="Call, WhatsApp, or send us your details and we'll confirm a price the same day."
        />
      </section>
    </div>
  );
}
EOF

# -----------------------------------------------------------------------------
# 7. Edits to existing files (layout bar + fumigation single prices)
# -----------------------------------------------------------------------------
node <<'NODE'
const fs = require("fs");

function edit(file, pairs) {
  const raw = fs.readFileSync(file, "utf8");
  const crlf = raw.includes("\r\n");
  let s = raw.replace(/\r\n/g, "\n");
  for (const [oldText, newText, label] of pairs) {
    if (s.includes(newText)) { console.log("  skip (already done): " + label); continue; }
    if (!s.includes(oldText)) throw new Error('Could not find text for "' + label + '" in ' + file);
    s = s.replace(oldText, () => newText);
    console.log("  done: " + label);
  }
  if (crlf) s = s.replace(/\n/g, "\r\n");
  fs.writeFileSync(file, s);
}

console.log("\nSticky mobile bar in layout.tsx");
edit("app/layout.tsx", [
  ['import { Footer } from "@/components/navigation/footer";\n',
   'import { Footer } from "@/components/navigation/footer";\nimport { MobileActionBar } from "@/components/navigation/mobile-action-bar";\n',
   "import MobileActionBar"],
  ["<body>", '<body className="pb-20 md:pb-0">', "space under the bar on phones"],
  ["<Footer />\n      </body>", "<Footer />\n        <MobileActionBar />\n      </body>", "add MobileActionBar"],
]);

console.log("\nFumigation single prices (no ranges)");
edit("lib/data/services.ts", [
  ['from: 4000, unit: "visit" },\n    href: "/services/pest-control"',
   'from: 4500, unit: "visit" },\n    href: "/services/pest-control"',
   "fumigation from 4,500"],
]);
edit("lib/data/service-details.ts", [
  ["KES 4,000–4,500 for a 1-bedroom, KES 5,000–6,000 for a 2-bedroom and KES 6,000–7,500 for a 3-bedroom",
   "KES 4,500 for a 1-bedroom, KES 6,000 for a 2-bedroom and KES 7,500 for a 3-bedroom",
   "fumigation price note"],
]);
NODE

echo
echo "All done. Next:"
echo "  npm run typecheck"
echo "  npm run dev      # open http://localhost:3000 (also check on your phone)"
