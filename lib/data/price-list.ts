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
