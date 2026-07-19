import Link from "next/link";
import { site } from "@/lib/data/site";
import { SocialLinks } from "@/components/social-links";

const QUICK_LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="font-semibold">{site.name}</p>
          <p className="mt-2 text-sm text-foreground/60">{site.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-medium">Quick Links</p>
          <ul className="mt-2 space-y-1">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-foreground/60 hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium">Connect</p>
          <SocialLinks className="mt-2" />
          <p className="mt-3 text-xs text-foreground/50">
            {site.keyboardShortcuts.search} to search · {site.keyboardShortcuts.theme} to toggle theme
          </p>
        </div>
      </div>

      <div className="border-t border-black/10 px-4 py-4 text-center text-xs text-foreground/50 dark:border-white/10">
        © {new Date().getFullYear()} {site.name}. Built with Next.js &amp; Tailwind.
      </div>
    </footer>
  );
}
