#!/usr/bin/env bash
# =============================================================================
# Twin Brothers Cleaning - owner's final prices
#   House cleaning (full general clean): 1BR 6,000 | 2BR 9,000 | 3BR 15,000 | 4BR 20,000
#   Carpet: 350 per sq. ft        Sofa: 650 per seat        Mattress: 1,500
#   Fumigation: 1BR 4,500 | 2BR 6,000 | 3BR 7,500
#               commercial ~25 per sq. m | termites/snakes/heavy: 8,000-15,000
#
# RUN AFTER update-site.sh, from the project root (where package.json lives):
#     bash update-prices.sh
# Safe to run twice. Backups go in .backup-prices-<timestamp>/
# =============================================================================
set -euo pipefail

if [ ! -f package.json ] || [ ! -d lib/data ]; then
  echo "ERROR: run this from the project root (the folder with package.json)."
  exit 1
fi
if ! grep -q "airbnb-management" lib/data/services.ts; then
  echo "ERROR: run update-site.sh first (it adds the new price units and services)."
  exit 1
fi
command -v node >/dev/null 2>&1 || { echo "ERROR: Node.js not found."; exit 1; }

BACKUP=".backup-prices-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP/lib/data" "$BACKUP/lib/schema"
cp lib/data/services.ts lib/data/service-details.ts "$BACKUP/lib/data/"
cp lib/schema/organization.ts "$BACKUP/lib/schema/"
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

console.log("\n[1/3] Starting prices (shown on cards and service pages)");
edit("lib/data/services.ts", [
  ['from: 2500, unit: "visit" },\n    href: "/services/house-cleaning"',
   'from: 6000, unit: "visit" },\n    href: "/services/house-cleaning"', "house cleaning from 6,000"],
  ['from: 350, unit: "sqm"', 'from: 350, unit: "sqft"', "carpet 350 per sq. ft"],
  ['from: 700, unit: "seat"', 'from: 650, unit: "seat"', "sofa 650 per seat"],
  ['from: 1800, unit: "item" },\n    href: "/services/mattress-cleaning"',
   'from: 1500, unit: "item" },\n    href: "/services/mattress-cleaning"', "mattress 1,500"],
  ['from: 3500, unit: "visit" },\n    href: "/services/pest-control"',
   'from: 4500, unit: "visit" },\n    href: "/services/pest-control"', "fumigation from 4,500"],
]);

console.log("\n[2/3] Price wording on the service pages");
edit("lib/data/service-details.ts", [
  // House
  ["Prices start from KES 2,500 for a 1-bedroom home, around KES 3,500 for a 2-bedroom and from KES 4,500 for 3 bedrooms and larger — we confirm",
   "Full general cleaning is priced by home size: KES 6,000 for a 1-bedroom, KES 9,000 for a 2-bedroom, KES 15,000 for a 3-bedroom and KES 20,000 for a 4-bedroom. Larger homes are quoted on request — we confirm",
   "house cleaning price note"],
  // Carpet
  ["Carpet cleaning is priced per square metre so you're only paying for the area actually cleaned, from KES 350 per sq. m (about KES 33 per sq. ft).",
   "Carpet cleaning is priced per square foot so you're only paying for the area actually cleaned, from KES 350 per sq. ft.",
   "carpet price note"],
  ['question: "Do you charge per room or per square metre?"',
   'question: "Do you charge per room or per square foot?"', "carpet FAQ question"],
  ["Carpet cleaning is priced per square metre so the quote reflects",
   "Carpet cleaning is priced per square foot so the quote reflects", "carpet FAQ answer"],
  // Sofa
  ["priced per seat, from KES 700 per seat — so a 3-seater sofa is around KES 2,100,",
   "priced per seat, from KES 650 per seat — so a 3-seater sofa is around KES 1,950,", "sofa price note"],
  ["Sofas are priced per seat (from KES 700), so a 3-seater is around KES 2,100.",
   "Sofas are priced per seat (from KES 650), so a 3-seater is around KES 1,950.", "sofa FAQ answer"],
  // Mattress
  ["priced by mattress size, from KES 1,800 for a single up to about KES 3,300 for a 6x6 king-size, with each mattress quoted individually based on size, so",
   "priced per mattress, from KES 1,500 each, with larger king-size mattresses quoted individually based on size, so", "mattress price note"],
  ["Pricing is per item, so a single mattress, double, or king-size are each quoted individually based on size.",
   "Pricing starts from KES 1,500 per mattress, with larger sizes such as king-size quoted individually based on size.", "mattress FAQ answer"],
  // Fumigation
  ["treatments start from KES 3,500 per visit. Bed bug treatment includes",
   "fumigation is priced by home size: KES 4,500 for a 1-bedroom, KES 6,000 for a 2-bedroom and KES 7,500 for a 3-bedroom. Commercial and general spaces are about KES 25 per sq. m, and specialised pests (termites, snakes or heavy infestations) run KES 8,000–15,000. Bed bug treatment includes",
   "fumigation price note"],
]);

console.log("\n[3/3] Schema price range");
edit("lib/schema/organization.ts", [[
  'priceRange: "KES 700 – KES 100,000"', 'priceRange: "KES 650 – KES 100,000"', "organization priceRange",
]]);
NODE

echo
echo "All done. Next:"
echo "  npm run typecheck"
echo "  npm run dev      # check http://localhost:3000/services"
