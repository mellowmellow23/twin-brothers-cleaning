import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { CTABanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils/format";
import { createMetadata } from "@/lib/metadata";
import { pageGraphSchema, webPageSchema, breadcrumbSchema, articleSchema } from "@/lib/schema";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.coverImage,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <div className="flex flex-col gap-16">
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: `/blog/${post.slug}`,
            name: post.title,
            description: post.excerpt,
          }),
          breadcrumbSchema(breadcrumbItems),
          articleSchema(post),
        ])}
      />

      <div className="container-content">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <article className="container-content">
        <div className="mx-auto max-w-3xl">
          <Badge variant="primary">{post.category.name}</Badge>
          <h1 className="mt-5 text-3xl font-medium leading-tight text-[var(--color-ink)] sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-[family-name:var(--font-mono)] text-xs text-[var(--color-muted)]">
            <span>{post.author.name}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTimeMinutes} min read</span>
          </div>

          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-[var(--radius-lg)]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="prose-content mt-10 flex flex-col gap-5 text-base leading-relaxed text-[var(--color-body)]">
            {post.content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 ? (
        <section className="container-content">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-lg font-medium text-[var(--color-ink)]">Related reading</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {relatedPosts.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={`/blog/${related.slug}`}
                    className="text-sm font-medium text-[var(--color-primary)] hover:underline"
                  >
                    {related.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <section className="container-content">
        <CTABanner
          title="Ready to book your clean?"
          description="Call, WhatsApp, or send us your details and we'll confirm a price the same day."
        />
      </section>
    </div>
  );
}