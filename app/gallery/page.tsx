import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { SectionHeading } from "@/components/sections/section-heading";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { CTABanner } from "@/components/sections/cta-banner";
import { JsonLd } from "@/components/seo/json-ld";
import { galleryImages } from "@/lib/data/gallery";
import { createMetadata } from "@/lib/metadata";
import { pageGraphSchema, webPageSchema, breadcrumbSchema } from "@/lib/schema";
import type { GalleryImage } from "@/types";

export const metadata: Metadata = createMetadata({
  title: "Gallery",
  description:
    "Photos of the Twin Brothers Cleaning Service team at work across Nakuru — cleaning equipment, results, and the crew on site.",
  path: "/gallery",
});

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
];

const categoryLabels: Record<GalleryImage["category"], string> = {
  team: "Our Team",
  results: "Results",
  "before-after": "Before & After",
  equipment: "Equipment",
};

export default function GalleryPage() {
  const categories = Array.from(new Set(galleryImages.map((image) => image.category)));

  return (
    <div className="flex flex-col gap-16">
      <JsonLd
        data={pageGraphSchema([
          webPageSchema({
            path: "/gallery",
            name: "Gallery | Twin Brothers Cleaning Service",
            description:
              "Photos of the Twin Brothers Cleaning Service team and their work across Nakuru.",
          }),
          breadcrumbSchema(breadcrumbItems),
        ])}
      />

      <div className="container-content">
        <Breadcrumbs items={breadcrumbItems} />
        <SectionHeading
          eyebrow="Recent work"
          title="See the Twin Brothers team at work"
          description="A look at the equipment, the crew, and the results from recent jobs across Nakuru."
        />
      </div>

      {categories.map((category) => {
        const imagesInCategory = galleryImages.filter((img) => img.category === category);
        if (imagesInCategory.length === 0) return null;
        return (
          <section key={category} className="container-content">
            <SectionHeading title={categoryLabels[category]} as="h2" />
            <div className="mt-8">
              <GalleryGrid images={imagesInCategory} />
            </div>
          </section>
        );
      })}

      <section className="container-content">
        <CTABanner
          title="Want results like these?"
          description="Call, WhatsApp, or send us your details and we'll confirm a price the same day."
        />
      </section>
    </div>
  );
}