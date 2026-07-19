import { Mail, Phone } from "lucide-react";
import { site } from "@/lib/data/site";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const iconClass =
  "inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 text-foreground/80 transition-all hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-black/5 hover:text-emerald-600 dark:border-white/10 dark:hover:bg-white/10 dark:hover:text-emerald-400";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a href={site.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconClass}>
        <GithubIcon size={16} />
      </a>
      <a href={site.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconClass}>
        <LinkedinIcon size={16} />
      </a>
      <a href={`mailto:${site.email}`} aria-label="Email" className={iconClass}>
        <Mail size={16} />
      </a>
      <a href={`tel:${site.phone}`} aria-label="Phone" className={iconClass}>
        <Phone size={16} />
      </a>
    </div>
  );
}
