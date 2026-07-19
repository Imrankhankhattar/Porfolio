// For brand logos devicon doesn't carry (AI coding tools, etc).
const SIMPLE_ICONS_BASE = "https://cdn.simpleicons.org";

// A few brands default to pure black, which disappears on a dark background.
const NEUTRAL_COLOR_OVERRIDES: Record<string, string> = {
  cursor: "6b7280",
  githubcopilot: "6b7280",
};

export function simpleIconUrl(slug: string): string {
  const color = NEUTRAL_COLOR_OVERRIDES[slug];
  return color ? `${SIMPLE_ICONS_BASE}/${slug}/${color}` : `${SIMPLE_ICONS_BASE}/${slug}`;
}
