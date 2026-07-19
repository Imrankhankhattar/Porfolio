"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { SkillCategory } from "@/lib/data/skills";
import { TechBadge } from "@/components/tech-badge";

export function SkillsTabs({ categories }: { categories: SkillCategory[] }) {
  const [activeId, setActiveId] = useState(categories[0]?.id);
  const active = categories.find((category) => category.id === activeId) ?? categories[0];

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-black/10 pb-3 dark:border-white/10">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setActiveId(category.id)}
            className={`relative rounded-md px-3 py-1.5 text-sm transition-colors ${
              activeId === category.id
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-foreground/60 hover:bg-black/5 dark:hover:bg-white/10"
            }`}
          >
            {activeId === category.id && (
              <motion.span
                layoutId="skills-tab-bg"
                className="absolute inset-0 rounded-md bg-emerald-500/10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">{category.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-4 min-h-[3rem] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active?.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {active?.skills.map((skill) => (
              <TechBadge
                key={skill.name}
                label={skill.name}
                icon={skill.icon || undefined}
                iconSource={skill.iconSource}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
