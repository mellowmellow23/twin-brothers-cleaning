import { organizationSchema, localBusinessSchema } from "./organization";
import { websiteSchema } from "./website";

export { organizationSchema, localBusinessSchema } from "./organization";
export { websiteSchema } from "./website";
export { webPageSchema, breadcrumbSchema, pageGraphSchema } from "./webpage";
export { serviceSchema } from "./service";
export { faqSchema } from "./faq";
export { reviewSchema, aggregateRatingSchema } from "./review";
export { articleSchema, personSchema } from "./article";

/**
 * Site-wide entity graph — Organization, LocalBusiness, and WebSite share one
 * @context/@graph so they cross-reference by @id instead of each needing
 * their own <script> tag. Rendered once, in the root layout.
 */
export function siteGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), localBusinessSchema(), websiteSchema()],
  };
}
