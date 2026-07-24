import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { SectionHeading } from "@/components/sections/section-heading";
import { Badge } from "@/components/ui/badge";
import { CTABanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPosts } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils/format";
import { createMetadata } from "@/lib/metadata";
import { pageGraphSchema, webPageSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  description:
    "Cleaning tips, guides, and news from Twin Brothers Cleaning Service — house cleaning, commercial contracts, carpet care, and post-construction cleanup.",
  path: "/blog",
});

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
];

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="flex flex-col gap-16">
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: "/blog",
            name: "Blog | Twin Brothers Cleaning Service",
            description: "Cleaning tips, guides, and news from Twin Brothers Cleaning Service.",
          }),
          breadcrumbSchema(breadcrumbItems),
        ])}
      />

      <div className="container-content">
        <Breadcrumbs items={breadcrumbItems} />
        <SectionHeading
          eyebrow="Resources"
          title="Cleaning tips and guides"
          description="Practical advice from the Twin Brothers team on keeping homes and workplaces clean between visits."
        />
      </div>

      {featured ? (
        <section className="container-content">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid gap-6 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] transition-shadow hover:shadow-[var(--shadow-card-hover)] lg:grid-cols-2"
          >
            <div className="relative aspect-video w-full overflow-hidden lg:aspect-auto">
              <Image
                src={featured.coverImage}
                alt={featured.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <Badge variant="primary">{featured.category.name}</Badge>
              <h2 className="mt-4 text-2xl font-medium text-[var(--color-ink)] group-hover:text-[var(--color-primary)] sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
                {featured.excerpt}
              </p>
              <p className="mt-4 font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
                <time dateTime={featured.publishedAt}>{formatDate(featured.publishedAt)}</time> ·{" "}
                {featured.readingTimeMinutes} min read
              </p>
            </div>
          </Link>
        </section>
      ) : null}

      <section className="container-content">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <Badge variant="default" className="w-fit">
                  {post.category.name}
                </Badge>
                <h3 className="mt-4 text-lg font-medium text-[var(--color-ink)] group-hover:text-[var(--color-primary)]">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                  {post.excerpt}
                </p>
                <p className="mt-4 font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
                  <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time> ·{" "}
                  {post.readingTimeMinutes} min read
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-content">
        <CTABanner
          title="Have a cleaning question of your own?"
          description="Call, WhatsApp, or send us a message and we'll answer directly."
        />
      </section>
    </div>
  );
}