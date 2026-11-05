import { socialLinks } from "@/lib/data/social";
import { BrandIcon } from "@/components/ui/brand-icon";

const tones = {
  dark: "border-white/15 text-white/80 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
  light:
    "border-[var(--color-border)] text-[var(--color-ink)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
} as const;

export function SocialLinks({
  tone = "dark",
  className = "",
}: {
  tone?: keyof typeof tones;
  className?: string;
}) {
  if (socialLinks.length === 0) return null;
  return (
    <ul className={`flex flex-wrap gap-3 ${className}`}>
      {socialLinks.map((social) => (
        <li key={social.platform}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Twin Brothers Cleaning on ${social.label}`}
            className={`flex size-10 items-center justify-center rounded-full border transition-colors ${tones[tone]}`}
          >
            <BrandIcon name={social.platform} className="size-[18px]" />
          </a>
        </li>
      ))}
    </ul>
  );
}
