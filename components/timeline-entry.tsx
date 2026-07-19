import type { EducationEntry } from "@/lib/data/education";

export function TimelineEntry({ entry }: { entry: EducationEntry }) {
  return (
    <div className="relative border-l border-black/10 pb-8 pl-6 last:pb-0 dark:border-white/10">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500" />
      <p className="text-xs text-foreground/50">
        {entry.start} – {entry.end}
      </p>
      <p className="mt-1 font-medium">{entry.degree}</p>
      <p className="text-sm text-foreground/60">{entry.institution}</p>
      {entry.detail && <p className="mt-1 text-sm text-foreground/50">{entry.detail}</p>}
    </div>
  );
}
