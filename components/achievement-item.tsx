import { Activity, Award, GitBranch, PiggyBank, ShieldCheck, Users, Zap, type LucideIcon } from "lucide-react";
import type { Achievement } from "@/lib/data/achievements";

const CATEGORY_STYLE: Record<string, { icon: LucideIcon; color: string }> = {
  "Cost Optimization": { icon: PiggyBank, color: "text-emerald-500 dark:text-emerald-400" },
  Performance: { icon: Zap, color: "text-sky-500 dark:text-sky-400" },
  Reliability: { icon: ShieldCheck, color: "text-amber-500 dark:text-amber-400" },
  Observability: { icon: Activity, color: "text-fuchsia-500 dark:text-fuchsia-400" },
  "Technical Leadership": { icon: GitBranch, color: "text-violet-500 dark:text-violet-400" },
  Leadership: { icon: Users, color: "text-pink-500 dark:text-pink-400" },
};

export function AchievementItem({ achievement }: { achievement: Achievement }) {
  const style = CATEGORY_STYLE[achievement.category] ?? { icon: Award, color: "text-emerald-500 dark:text-emerald-400" };
  const Icon = style.icon;

  return (
    <div className="flex gap-3 rounded-lg border border-black/10 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-black/20 hover:shadow-md dark:border-white/10 dark:hover:border-white/20">
      <Icon size={18} className={`mt-0.5 shrink-0 ${style.color}`} />
      <div>
        <p className={`text-xs font-medium uppercase tracking-wide ${style.color}`}>{achievement.category}</p>
        <p className="mt-1 font-medium">{achievement.title}</p>
        <p className="text-sm text-foreground/60">{achievement.detail}</p>
        {achievement.date && <p className="mt-1 text-xs text-foreground/40">{achievement.date}</p>}
      </div>
    </div>
  );
}
