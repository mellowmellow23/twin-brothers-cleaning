import Link from "next/link";
import { Facebook, Instagram, MessageCircle, Star, Twitter } from "lucide-react";
import { Logo } from "./logo";
import { footerNav } from "@/lib/data/navigation";
import { contactChannels, businessHours, siteConfig, socialLinks, googleBusinessProfile } from "@/lib/data/site";
import { Icon } from "@/lib/utils/icons";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook,
  Instagram,
  TikTok: MessageCircle,
  X: Twitter,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-ink)] text-white/80">
      <div className="sweep-divider" aria-hidden="true" />
      <div className="container-wide py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {siteConfig.description}
            </p>
            <ul className="mt-6 flex gap-3">
              {socialLinks.map((social) => {
                const SocialIcon = socialIcons[social.label] ?? Facebook;
                return (
                  <li key={social.label}>
                      <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex size-9 items-center justify-center rounded-full border border-white/15 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    >
                      <SocialIcon className="size-4" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href={googleBusinessProfile.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-3.5 py-2 text-xs text-white/70 hover:border-[var(--color-accent)] hover:text-white"
            >
              <Star className="size-3.5 fill-[var(--color-accent)] text-[var(--color-accent)]" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-white">{googleBusinessProfile.rating}</strong> on Google (
                {googleBusinessProfile.ratingCount} reviews)
              </span>
            </a>
          </div>

          <FooterColumn title="Company" links={footerNav.company} />
          <FooterColumn title="Services" links={footerNav.services} />
          <FooterColumn title="Locations" links={footerNav.locations} />

          <div>
            <h3 className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-wide text-white/50">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              {contactChannels.map((channel) => (
                <li key={channel.type} className="flex items-start gap-2.5">
                  <Icon
                    name={
                      channel.type === "phone"
                        ? "PhoneCall"
                        : channel.type === "whatsapp"
                          ? "MessageCircle"
                          : channel.type === "email"
                            ? "Mail"
                            : "MapPin"
                    }
                    className="mt-0.5 size-4 shrink-0 text-[var(--color-accent)]"
                  />
                    <a
                    href={channel.href}
                    className="text-white/70 hover:text-white"
                    target={channel.type === "address" ? "_blank" : undefined}
                    rel={channel.type === "address" ? "noopener noreferrer" : undefined}
                  >
                    {channel.value}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-wide text-white/50">
              Business Hours
            </h3>
            <ul className="mt-3 flex flex-col gap-1.5 text-sm text-white/70">
              {businessHours.map((entry) => (
                <li key={entry.day} className="flex justify-between gap-4">
                  <span>{entry.day}</span>
                  <span className="font-[family-name:var(--font-mono)] text-white/50">
                    {entry.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            {footerNav.legal.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-wide text-white/50">
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-2.5 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-white/70 hover:text-white">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}