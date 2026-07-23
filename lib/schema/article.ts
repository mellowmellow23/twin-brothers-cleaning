import { siteConfig } from "@/lib/data/site";
import type { BlogPost } from "@/types";

export function personSchema(person: { name: string; role?: string }) {
  return {
    "@type": "Person",
    name: person.name,
    ...(person.role ? { jobTitle: person.role } : {}),
    worksFor: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function articleSchema(post: BlogPost) {
  const url = new URL(`/blog/${post.slug}`, siteConfig.url).toString();
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: personSchema(post.author),
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: url,
    articleSection: post.category.name,
  };
}
