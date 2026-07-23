import type { NavGroup, NavLink } from "@/types";
import { services } from "./services";

export const primaryNav: NavGroup[] = [
  {
    label: "Services",
    href: "/services",
    items: services.map(
      (service): NavLink => ({
        label: service.shortName,
        href: service.href,
        description: service.tagline,
      })
    ),
  },
  { label: "About", href: "/about" },
  { label: "Locations", href: "/locations" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavLink[],
  services: services.map(
    (service): NavLink => ({ label: service.shortName, href: service.href })
  ),
  locations: [{ label: "Nakuru", href: "/locations/nakuru" }] satisfies NavLink[],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
  ] satisfies NavLink[],
};
