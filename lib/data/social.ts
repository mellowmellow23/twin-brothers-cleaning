/**
 * Social media links. Edit the addresses here, or re-run update-social.sh.
 * Delete a line to hide that platform.
 */
export type SocialPlatform = "facebook" | "instagram" | "tiktok" | "youtube" | "x";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { platform: "facebook", label: "Facebook", href: "https://facebook.com/twinbrotherscleaning" },
  { platform: "instagram", label: "Instagram", href: "https://instagram.com/twinbrotherscleaning" },
];
