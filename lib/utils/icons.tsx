import {
  Sparkles,
  ShieldCheck,
  Clock,
  Leaf,
  Home,
  Building2,
  Sofa,
  Layers,
  HardHat,
  BedDouble,
  Star,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  Mail,
  MapPin,
  Users,
  Award,
  Timer,
  Droplets,
  Wind,
  Building,
  Bug,
  AlertCircle,
  SprayCan,
  Wrench,

  type LucideProps,
} from "lucide-react";
import type { LucideIconName } from "@/types";

const registry: Record<LucideIconName, React.ComponentType<LucideProps>> = {
  Sparkles,
  ShieldCheck,
  Clock,
  Leaf,
  Home,
  Building2,
  Sofa,
  Layers,
  HardHat,
  BedDouble,
  Star,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  Mail,
  MapPin,
  Users,
  Award,
  Timer,
  Droplets,
  Wind,
  Building,
  Bug,
  AlertCircle,
  SprayCan,
  
};

export function Icon({
  name,
  ...props
}: { name: LucideIconName } & LucideProps) {
  const Component = registry[name];
  return <Component aria-hidden="true" {...props} />;
}
