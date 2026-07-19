import { AnimatedCounter } from "@/components/animated-counter";
import { StaggerGroup, StaggerItem } from "@/components/reveal";

const STATS = [
  { value: 75, suffix: "%", label: "AWS Cost Reduction", color: "text-emerald-500 dark:text-emerald-400" },
  { value: 4, suffix: "x", label: "Faster API Responses", color: "text-sky-500 dark:text-sky-400" },
  { value: 40, suffix: "%", label: "Reliability Improvement", color: "text-amber-500 dark:text-amber-400" },
  { value: 50, suffix: "%", label: "Faster Troubleshooting", color: "text-fuchsia-500 dark:text-fuchsia-400" },
];

export function StatsBand() {
  return (
    <section className="border-y border-black/5 bg-black/[0.02] dark:border-white/5 dark:bg-white/[0.02]">
      <StaggerGroup className="mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 py-10 sm:grid-cols-4">
        {STATS.map((stat) => (
          <StaggerItem key={stat.label} className="text-center">
            <p className={`text-3xl font-bold sm:text-4xl ${stat.color}`}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-xs text-foreground/60 sm:text-sm">{stat.label}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
