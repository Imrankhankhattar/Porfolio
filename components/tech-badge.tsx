import { Boxes, Database, Gauge, Sparkles, Webhook, type LucideIcon } from "lucide-react";
import { deviconUrl } from "@/lib/devicon";
import { simpleIconUrl } from "@/lib/simple-icons";
import type { IconSource } from "@/lib/data/skills";

// Fallback for skills that name a concept rather than a real, logo-bearing product.
const CONCEPT_ICONS: Record<string, LucideIcon> = {
  "RESTful APIs": Webhook,
  "Microservices Architecture": Boxes,
  "Database Design": Database,
  "Query Optimization": Gauge,
  "Prompt Engineering": Sparkles,
};

export function TechBadge({
  label,
  icon,
  iconSource = "devicon",
}: {
  label: string;
  icon?: string;
  iconSource?: IconSource;
}) {
  let iconUrl: string | null = null;
  if (icon) {
    iconUrl = iconSource === "simple-icons" ? simpleIconUrl(icon) : deviconUrl(icon);
  }
  const ConceptIcon = icon ? undefined : CONCEPT_ICONS[label];

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 px-2.5 py-1 text-xs text-foreground/70 dark:border-white/10">
      {iconUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={iconUrl} alt="" className="h-3.5 w-3.5" aria-hidden />
      )}
      {!iconUrl && ConceptIcon && <ConceptIcon size={14} className="text-foreground/50" aria-hidden />}
      {label}
    </span>
  );
}
