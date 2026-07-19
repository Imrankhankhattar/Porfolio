"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/lib/data/projects";
import { ProjectCard } from "@/components/project-card";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((project) => project.tags.forEach((tag) => set.add(tag)));
    return Array.from(set).sort();
  }, [projects]);

  const filtered = activeTag ? projects.filter((project) => project.tags.includes(activeTag)) : projects;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTag(null)}
          className={`rounded-full border px-3 py-1 text-xs transition-colors ${
            activeTag === null
              ? "border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
              : "border-black/10 text-foreground/60 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
          }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setActiveTag(tag)}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              activeTag === tag
                ? "border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                : "border-black/10 text-foreground/60 hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-foreground/50">No projects match this filter.</p>
      )}
    </div>
  );
}
