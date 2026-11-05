import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/lib/utils/icons";
import { contactChannels, googleBusinessProfile } from "@/lib/data/site";

export function HomeHero() {
  const phone = contactChannels.find((channel) => channel.type === "phone");
  const whatsapp = contactChannels.find((channel) => channel.type === "whatsapp");

  return (
    <section className="sweep-backdrop relative overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)]">
      <div className="container-content py-10 sm:py-14">
        <Badge variant="primary" icon={<Icon name="MapPin" className="size-3.5" />}>
          Moses Mudavadi Road, Nakuru
        </Badge>
        <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.08] text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
          Walk into a spotless space.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
          Trained, uniformed teams for homes, offices, Airbnbs and restaurants across Nakuru — see our prices below, then call or WhatsApp to book.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {phone ? (
            <Button asChild size="lg" variant="primary">
              <a href={phone.href}>
                <Icon name="PhoneCall" className="size-4" />
                Call {phone.value}
              </a>
            </Button>
          ) : null}
          {whatsapp ? (
            <Button asChild size="lg" variant="outline">
              <a href={whatsapp.href} target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" className="size-4" />
                WhatsApp us
              </a>
            </Button>
          ) : null}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--color-muted)]">
          <span className="inline-flex items-center gap-1.5">
            <Icon name="Star" className="size-4 text-[var(--color-primary)]" />
            {googleBusinessProfile.rating} on Google · {googleBusinessProfile.ratingCount} reviews
          </span>
          <Link
            href="#prices"
            className="font-semibold text-[var(--color-primary)] underline-offset-4 hover:underline"
          >
            See prices ↓
          </Link>
        </div>
      </div>
      <div className="sweep-divider" aria-hidden="true" />
    </section>
  );
}
