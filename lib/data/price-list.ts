/**
 * Prices shown on the home page "Services & Prices" section.
 * Edit the numbers here. Keep them in step with the service pages
 * (lib/data/service-details.ts) and the "From" prices (lib/data/services.ts).
 */
export const whatsappNumber = "254718208407";

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
    note: "Steam and shampoo cleaning, priced by carpet size",
    rows: [
      { label: "3 x 5 ft", price: "KES 800" },
      { label: "4 x 6 ft", price: "KES 1,000" },
      { label: "5 x 6 ft", price: "KES 1,500" },
      { label: "5 x 8 ft", price: "KES 2,000" },
      { label: "6 x 8 ft", price: "KES 2,500" },
      { label: "6 x 9 ft", price: "KES 2,700" },
      { label: "7 x 10 ft", price: "KES 3,500" },
      { label: "8 x 10 ft", price: "KES 4,000" },
      { label: "9 x 12 ft", price: "KES 5,500" },
      { label: "10 x 14 ft", price: "KES 7,000" },
      { label: "12 x 15 ft", price: "KES 9,000" },
      { label: "Wall-to-wall / larger", price: "About KES 50 per sq. ft" },
    ],
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
      { label: "Studio / bedsitter", price: "KES 2,500" },
      { label: "1 Bedroom", price: "KES 3,500" },
      { label: "2 Bedroom", price: "KES 4,500" },
      { label: "3 Bedroom", price: "KES 6,000" },
    ],
  },
  "restaurant-cleaning": {
    note: "Kitchens, cafes, hotels and shops",
    rows: [
      { label: "Small kitchen", price: "KES 10,000" },
      { label: "Restaurant kitchen", price: "KES 15,000" },
      { label: "Monthly contract", price: "Contact us" },
    ],
  },
  "post-construction-cleaning": {
    note: "After building or renovation",
    rows: [{ label: "Small unit or apartment", price: "From KES 8,000" }],
  },
};
