import type { BlogPost, BlogCategory } from "@/types";

export const blogCategories: BlogCategory[] = [
  { slug: "house-cleaning", name: "House Cleaning" },
  { slug: "commercial", name: "Commercial" },
  { slug: "carpet-and-upholstery", name: "Carpet & Upholstery" },
  { slug: "tips", name: "Cleaning Tips" },
];

const author = { name: "Twin Brothers Cleaning Service", role: "Cleaning Team" };

function category(slug: string): BlogCategory {
  const found = blogCategories.find((c) => c.slug === slug);
  if (!found) throw new Error(`Unknown blog category slug: ${slug}`);
  return found;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-should-you-deep-clean-your-house",
    title: "How Often Should You Deep Clean Your House in Nakuru's Climate?",
    excerpt:
      "Dust, seasonal rains, and everyday use all affect how often a home really needs a deep clean. Here's a practical schedule.",
    content:
      "Most homes benefit from a full deep clean every three to six months, with lighter routine cleaning in between. Dusty conditions during the dry season and mud tracked in during the rains both accelerate how quickly floors, carpets, and soft furnishings pick up dirt.\n\nIf your household includes young children, pets, or anyone with allergies, shortening the interval to every two to three months is worth considering, particularly for carpets and mattresses where dust and allergens accumulate out of sight.\n\nRegular light cleaning — dusting, vacuuming, and wiping high-touch surfaces weekly — extends the time between deep cleans and keeps the bigger job more manageable when it's due.",
    coverImage: "/images/team/team-shopfront-2.jpeg",
    category: category("house-cleaning"),
    author,
    publishedAt: "2026-02-10",
    readingTimeMinutes: 4,
    featured: true,
  },
  {
    slug: "signs-your-office-needs-a-better-cleaning-contract",
    title: "5 Signs Your Office Needs a Better Cleaning Contract",
    excerpt:
      "A rotating cast of cleaners, inconsistent results, and last-minute no-shows are common complaints. Here's what to look for instead.",
    content:
      "Inconsistent staffing is the most common complaint we hear from businesses switching providers — a different person each week means standards vary constantly, and nobody develops familiarity with your space.\n\nOther signs it's time to review your contract include: cleaning that only ever addresses visible mess and skips washrooms or high-touch surfaces, no clear point of contact when something goes wrong, and pricing that doesn't map clearly to the floor area or scope being cleaned.\n\nA well-structured commercial cleaning contract should specify exactly what's covered, who is doing it, and how issues get resolved — not just a vague promise of 'daily cleaning'.",
    coverImage: "/images/team/team-shopfront-1.jpeg",
    category: category("commercial"),
    author,
    publishedAt: "2026-01-05",
    readingTimeMinutes: 5,
  },
  {
    slug: "carpet-stains-what-actually-comes-out",
    title: "Carpet Stains: What Actually Comes Out (and What Doesn't)",
    excerpt:
      "Coffee, ink, grease, and pet stains all respond differently to professional cleaning. Here's a realistic look at what to expect.",
    content:
      "Fresh coffee, food, and most water-based stains respond very well to hot water extraction combined with the right spot treatment, often lifting almost completely even after sitting for weeks.\n\nOil and grease-based stains take more effort and may need a pre-treatment pass before extraction, while ink and dye-based stains are the most stubborn — some fade significantly but don't fully disappear, particularly on lighter carpet fibres.\n\nThe honest answer before booking any carpet clean is that a professional assessment on-site gives a much more accurate expectation than a guess over the phone, since fibre type and how long a stain has set both matter.",
    coverImage: "/images/gallery/chair-upholstery-cleaning.jpeg",
    category: category("carpet-and-upholstery"),
    author,
    publishedAt: "2025-12-01",
    readingTimeMinutes: 4,
  },
  {
    slug: "post-construction-cleaning-checklist",
    title: "The Post-Construction Cleaning Checklist Before You Move In",
    excerpt:
      "Builders' dust settles into places you won't think to check. Here's what a thorough handover clean actually covers.",
    content:
      "Construction dust doesn't stay on the floor — it settles into light fittings, cabinet interiors, window tracks, and air vents, all places that get missed by a quick surface wipe.\n\nA proper handover clean starts with debris and packaging removal, followed by dust extraction throughout the space, then a detail pass covering skirting boards, window tracks, cabinet interiors, and floor scrubbing to remove cement residue or grout haze.\n\nTiming matters too: cleaning is best done after all trades (painting, electrical, flooring) have finished, so surfaces aren't re-contaminated right after they're cleaned.",
    coverImage: "/images/gallery/patio-floor-scrubbing.jpeg",
    category: category("commercial"),
    author,
    publishedAt: "2025-10-20",
    readingTimeMinutes: 3,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 2): BlogPost[] {
  return blogPosts
    .filter((p) => p.slug !== post.slug && p.category.slug === post.category.slug)
    .slice(0, limit);
}