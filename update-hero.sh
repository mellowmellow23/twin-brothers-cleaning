#!/usr/bin/env bash
# =============================================================================
# Twin Brothers Cleaning - New home page hero + Google title/description
#   Hero:  "Walk into a spotless space."
#   Sub:   "Trained, uniformed teams for homes, offices, Airbnbs and restaurants
#           across Nakuru — see our prices below, then call or WhatsApp to book."
#   Title: "Twin Brothers Cleaning Service | Nakuru - Fumigation, Sofa & Carpet Cleaning"
#
# RUN AFTER update-homepage.sh, from the project root:
#     bash update-hero.sh
# Safe to run twice. Backups go in .backup-hero-<timestamp>/
# =============================================================================
set -euo pipefail

if [ ! -f components/sections/home-hero.tsx ] || [ ! -f app/page.tsx ]; then
  echo "ERROR: run this from the project root, after update-homepage.sh."
  exit 1
fi
command -v node >/dev/null 2>&1 || { echo "ERROR: Node.js not found."; exit 1; }

BACKUP=".backup-hero-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$BACKUP/components/sections" "$BACKUP/app"
cp components/sections/home-hero.tsx "$BACKUP/components/sections/"
cp app/page.tsx "$BACKUP/app/"
echo "Backup saved in $BACKUP"

node <<'NODE'
const fs = require("fs");

function load(file) {
  const raw = fs.readFileSync(file, "utf8");
  return { crlf: raw.includes("\r\n"), s: raw.replace(/\r\n/g, "\n") };
}
function save(file, { crlf, s }) {
  fs.writeFileSync(file, crlf ? s.replace(/\n/g, "\r\n") : s);
}

// ---- hero text
console.log("\nHome hero");
const hero = load("components/sections/home-hero.tsx");
const h1 = /(<h1 [^>]*>\n\s*)([^<]*?)(\n\s*<\/h1>)/;
const NEW_H1 = "Walk into a spotless space.";
const NEW_SUB = "Trained, uniformed teams for homes, offices, Airbnbs and restaurants across Nakuru — see our prices below, then call or WhatsApp to book.";
if (!h1.test(hero.s)) throw new Error("Could not find the hero headline in home-hero.tsx");
if (hero.s.includes(NEW_H1)) console.log("  skip (already done): headline");
else { hero.s = hero.s.replace(h1, (m, a, b, c) => a + NEW_H1 + c); console.log("  done: headline"); }

const sub = /(<p className="mt-5 max-w-2xl[^>]*>\n\s*)([\s\S]*?)(\n\s*<\/p>)/;
if (!sub.test(hero.s)) throw new Error("Could not find the hero sub-text in home-hero.tsx");
if (hero.s.includes(NEW_SUB)) console.log("  skip (already done): sub-text");
else { hero.s = hero.s.replace(sub, (m, a, b, c) => a + NEW_SUB + c); console.log("  done: sub-text"); }
save("components/sections/home-hero.tsx", hero);

// ---- Google title + description
console.log("\nGoogle title and description (app/page.tsx)");
const page = load("app/page.tsx");
const NEW_TITLE = "Twin Brothers Cleaning Service | Nakuru - Fumigation, Sofa & Carpet Cleaning";
const NEW_DESC = "Fumigation, sofa & carpet cleaning in Nakuru, plus house, office, Airbnb and restaurant cleaning. Clear prices. Call 0723 358 456 or WhatsApp 0718 208 407.";
const meta = /(createMetadata\(\{\n\s*title: ")([^"]*)(",\n\s*description:\n\s*")([^"]*)(",\n\s*path: "\/")/;
if (!meta.test(page.s)) throw new Error("Could not find the home page title/description in app/page.tsx");
if (page.s.includes(NEW_TITLE) && page.s.includes(NEW_DESC)) console.log("  skip (already done): title and description");
else { page.s = page.s.replace(meta, (m, a, b, c, d, e) => a + NEW_TITLE + c + NEW_DESC + e); console.log("  done: title and description"); }
save("app/page.tsx", page);
NODE

echo
echo "All done. Next:"
echo "  npm run typecheck"
echo "  npm run dev   # check the new headline at http://localhost:3000"
