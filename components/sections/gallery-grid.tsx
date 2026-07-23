import Image from "next/image";
import type { GalleryImage } from "@/types";
import { cn } from "@/lib/utils/cn";

export interface GalleryGridProps {
  images: GalleryImage[];
  className?: string;
}

export function GalleryGrid({ images, className }: GalleryGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
        className
      )}
    >
      {images.map((image, index) => (
        <div
          key={image.id}
          className={cn(
            "relative overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-surface-sunken)]",
            index === 0 && "col-span-2 row-span-2"
          )}
          style={{ aspectRatio: index === 0 ? "1 / 1" : `${image.width} / ${image.height}` }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            loading={index < 4 ? "eager" : "lazy"}
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}
