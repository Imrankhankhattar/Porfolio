import type { ExperienceEntry as ExperienceEntryType } from "@/lib/data/experience";

export function ExperienceEntry({ entry }: { entry: ExperienceEntryType }) {
  return (
    <div className="relative border-l border-black/10 pb-8 pl-6 last:pb-0 dark:border-white/10">
      <span
        className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full ${
          entry.current ? "bg-emerald-500" : "bg-foreground/30"
        }`}
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <p className="font-medium">
          {entry.role} · {entry.company}
        </p>
        {entry.current && (
          <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
            Current
          </span>
        )}
      </div>
      <p className="mt-0.5 text-xs text-foreground/50">
        {entry.start} – {entry.end}
      </p>
      {entry.bullets.length > 0 && (
        <ul className="mt-2 space-y-1 text-sm text-foreground/60">
          {entry.bullets.map((bullet) => (
            <li key={bullet}>• {bullet}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
