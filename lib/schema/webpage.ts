import { siteConfig } from "@/lib/data/site";
import type { Breadcrumb } from "@/types";

export function webPageSchema(options: {
  path: string;
  name: string;
  description: string;
}) {
  const url = new URL(options.path, siteConfig.url).toString();
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: options.name,
    description: options.description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-KE",
  };
}

export function breadcrumbSchema(items: Breadcrumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: new URL(item.href, siteConfig.url).toString(),
    })),
  };
}

/**
 * Combines any set of page-level nodes (WebPage, BreadcrumbList, Service,
 * FAQPage, Article, etc.) into a single @context/@graph for one <script> tag
 * per page, mirroring the site-wide graph rendered in the root layout.
 */
export function pageGraphSchema(nodes: Array<Record<string, unknown> | null | false>) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  };
}
