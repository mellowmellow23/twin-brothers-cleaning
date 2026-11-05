#!/usr/bin/env bash
# =============================================================================
# Twin Brothers Cleaning - Airbnb and restaurant prices
#   Airbnb turnover: studio 2,500 | 1BR 3,500 | 2BR 4,500 | 3BR 6,000
#   Restaurant: small kitchen 10,000 | restaurant kitchen 15,000 | monthly contract: contact us
#
# RUN AFTER update-site.sh (and the other scripts), from the project root:
#     bash update-airbnb-restaurant.sh
# Safe to run twice. Backups go in .backup-biz-<timestamp>/
# =============================================================================
set -euo pipefail

if [ ! -f package.json ] || [ ! -f lib/data/price-list.ts ]; then
  echo "ERROR: run this from the project root, after update-homepage.sh."
  exit 1
fi
command -v node >/dev/null 2>&1 || { echo "ERROR: Node.js not found."; exit 1; }

BACKUP=".backup-biz-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP/lib/data"
cp lib/data/services.ts lib/data/service-details.ts lib/data/price-list.ts "$BACKUP/lib/data/"
echo "Backup saved in $BACKUP"

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

console.log("\n[1/3] Starting prices on service cards");
edit("lib/data/services.ts", [
  ['from: 1500, unit: "visit" },\n    href: "/services/airbnb-management"',
   'from: 2500, unit: "visit" },\n    href: "/services/airbnb-management"', "Airbnb from 2,500"],
  ['from: 6000, unit: "visit" },\n    href: "/services/restaurant-cleaning"',
   'from: 10000, unit: "visit" },\n    href: "/services/restaurant-cleaning"', "Restaurant from 10,000"],
]);

console.log("\n[2/3] Home page price cards");
edit("lib/data/price-list.ts", [
  ['{ label: "Studio / bedsitter", price: "KES 1,500" }', '{ label: "Studio / bedsitter", price: "KES 2,500" }', "Airbnb studio 2,500"],
  ['{ label: "1 Bedroom", price: "KES 2,000" }', '{ label: "1 Bedroom", price: "KES 3,500" }', "Airbnb 1BR 3,500"],
  ['{ label: "2 Bedroom", price: "KES 2,800" }', '{ label: "2 Bedroom", price: "KES 4,500" }', "Airbnb 2BR 4,500"],
  ['{ label: "3 Bedroom", price: "KES 3,800" }', '{ label: "3 Bedroom", price: "KES 6,000" }', "Airbnb 3BR 6,000"],
  ['{ label: "Cafe / small kitchen", price: "From KES 6,000" }', '{ label: "Small kitchen", price: "KES 10,000" }', "Restaurant small kitchen 10,000"],
  ['{ label: "Restaurant kitchen", price: "From KES 10,000" }', '{ label: "Restaurant kitchen", price: "KES 15,000" }', "Restaurant kitchen 15,000"],
  ['{ label: "Monthly contract", price: "From KES 20,000" }', '{ label: "Monthly contract", price: "Contact us" }', "Monthly contract: contact us"],
]);

console.log("\n[3/3] Service page wording");
edit("lib/data/service-details.ts", [
  // Airbnb
  ["from KES 1,500 for a studio or bedsitter, KES 2,000 for a 1-bedroom, KES 2,800 for a 2-bedroom and KES 3,800 for a 3-bedroom. Linen",
   "KES 2,500 for a studio or bedsitter, KES 3,500 for a 1-bedroom, KES 4,500 for a 2-bedroom and KES 6,000 for a 3-bedroom. Larger units are quoted on request. Linen",
   "Airbnb price note"],
  ["from KES 1,500 for a studio or bedsitter, KES 2,000 for a 1-bedroom, KES 2,800 for a 2-bedroom and KES 3,800 for a 3-bedroom. Deep cleans",
   "KES 2,500 for a studio or bedsitter, KES 3,500 for a 1-bedroom, KES 4,500 for a 2-bedroom and KES 6,000 for a 3-bedroom. Deep cleans",
   "Airbnb FAQ answer"],
  // Restaurant
  ["Kitchen deep cleans start from KES 6,000 for a cafe or small kitchen and run KES 10,000–14,000 for a restaurant kitchen. Hotel and large kitchens start from KES 18,000 and are quoted after a site visit. Monthly contracts (scheduled cleaning plus a weekly deep clean) start from KES 20,000 per month, and shops and retail units from KES 4,000 per visit.",
   "Kitchen deep cleans are KES 10,000 for a small kitchen and KES 15,000 for a restaurant kitchen. Hotel and large kitchens are quoted after a site visit. Monthly contracts (scheduled cleaning plus a weekly deep clean) are quoted to suit your premises, so contact us for a price. Shops and retail units start from KES 4,000 per visit.",
   "Restaurant price note"],
  ["A deep clean starts from KES 6,000 for a small kitchen and runs KES 10,000–14,000 for a typical restaurant kitchen. Hotel and large kitchens start from KES 18,000, quoted after a site visit.",
   "A deep clean is KES 10,000 for a small kitchen and KES 15,000 for a restaurant kitchen. Hotel and large kitchens are quoted after a site visit.",
   "Restaurant FAQ: cost"],
  ["Yes. Scheduled cleaning with a weekly deep clean starts from KES 20,000 per month, depending on size and frequency.",
   "Yes. Monthly contracts cover scheduled cleaning with a weekly deep clean. Contact us for a quote based on your size and how often you need us.",
   "Restaurant FAQ: monthly contracts"],
]);
NODE

echo
echo "All done. Next:"
echo "  npm run typecheck"
echo "  npm run dev      # check the home page cards and both service pages"
