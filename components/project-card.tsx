import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data/projects";
import { TechBadge } from "@/components/tech-badge";
import { GithubIcon } from "@/components/icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-lg border border-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-lg hover:shadow-black/5 dark:border-white/10 dark:hover:border-white/20 dark:hover:shadow-black/30">
      <div className="bg-gradient-brand h-1 w-full scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      <Link href={`/projects/${project.slug}`} className="block overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt=""
          className="h-40 w-full bg-black/5 object-cover transition-transform duration-500 group-hover:scale-105 dark:bg-white/5"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <Link href={`/projects/${project.slug}`} className="font-medium transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
          {project.title}
        </Link>
        <p className="text-sm text-foreground/60">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
          {project.tags.length > 4 && (
            <span className="text-xs text-foreground/50">+{project.tags.length - 4} more</span>
          )}
        </div>

        {project.achievements.length > 0 && (
          <ul className="space-y-1 text-xs text-foreground/60">
            {project.achievements.slice(0, 2).map((achievement) => (
              <li key={achievement}>• {achievement}</li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex gap-3 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repository"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              <GithubIcon size={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label="Live demo"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
