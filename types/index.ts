/**
 * Domain types for Twin Brothers Cleaning Service.
 * Kept framework-agnostic so they can be reused by data files,
 * schema (JSON-LD) generators, and metadata utilities alike.
 */

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  items?: NavLink[];
}

export interface ServiceSummary {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: LucideIconName;
  startingPrice?: PriceRange;
  href: string;
}

export interface PriceRange {
  currency: "KES";
  from: number;
  unit: "visit" | "room" | "sqft" | "item";
}

export interface ServiceDetail extends ServiceSummary {
  heroImage: string;
  openingHook: string;
  pricingNote: string;
  benefits: Benefit[];
  included: string[];
  notIncluded?: string[];
  process: ProcessStep[];
  faqs: FaqItem[];
  relatedServiceSlugs: string[];
}

export interface Benefit {
  title: string;
  description: string;
  icon: LucideIconName;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Location {
  slug: string;
  name: string;
  region: string;
  description: string;
  areasServed: string[];
  href: string;
}

export interface Testimonial {
  id: string;
  authorName: string;
  authorRole?: string;
  organization?: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  serviceSlug?: string;
  datePublished?: string;
  source?: "google" | "direct";
}

export interface Metric {
  label: string;
  value: string;
  suffix?: string;
  icon?: LucideIconName;
}

export interface Industry {
  name: string;
  description: string;
  icon: LucideIconName;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: "before-after" | "team" | "equipment" | "results";
  width: number;
  height: number;
}

export interface BlogCategory {
  slug: string;
  name: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: BlogCategory;
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  featured?: boolean;
}

export interface BusinessHours {
  day: string;
  hours: string;
}

export interface ContactChannel {
  type: "phone" | "whatsapp" | "email" | "address";
  label: string;
  value: string;
  href: string;
}

export interface Breadcrumb {
  label: string;
  href: string;
}

/**
 * Restricted to the lucide-react icon names actually used across the
 * project, so components stay strongly typed instead of accepting `string`.
 */
export type LucideIconName =
  | "Sparkles"
  | "ShieldCheck"
  | "Clock"
  | "Leaf"
  | "Home"
  | "Building2"
  | "Sofa"
  | "Layers"
  | "HardHat"
  | "BedDouble"
  | "Star"
  | "CheckCircle2"
  | "PhoneCall"
  | "MessageCircle"
  | "Mail"
  | "MapPin"
  | "Users"
  | "Award"
  | "Timer"
  | "Droplets"
  | "Wind"
  | "Building"
  | "Bug"
  | "AlertCircle"
  | "SprayCan"
  
