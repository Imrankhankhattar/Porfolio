// Renders technology badges using the devicon CDN — no extra package needed.
const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

// A few slugs only ship a "wordmark" variant instead of a plain icon mark.
const WORDMARK_VARIANTS = new Set(["amazonwebservices"]);

export function deviconUrl(slug: string): string {
  const variant = WORDMARK_VARIANTS.has(slug) ? "original-wordmark" : "original";
  return `${DEVICON_BASE}/${slug}/${slug}-${variant}.svg`;
}
