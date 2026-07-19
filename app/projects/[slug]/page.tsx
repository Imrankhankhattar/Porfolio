import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { site } from "@/lib/data/site";
import { projects } from "@/lib/data/projects";
import { TechBadge } from "@/components/tech-badge";
import { GithubIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return { title: project ? `${project.title} — ${site.name}` : site.name };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <Reveal>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt=""
          className="h-64 w-full rounded-lg bg-black/5 object-cover dark:bg-white/5"
        />

        <h1 className="mt-8 text-3xl font-bold">{project.title}</h1>
        <p className="mt-2 text-foreground/60">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <TechBadge key={tag} label={tag} />
          ))}
        </div>

        <p className="mt-8 max-w-prose text-foreground/70">{project.longDescription}</p>

        {project.achievements.length > 0 && (
          <ul className="mt-6 space-y-2 text-sm text-foreground/70">
            {project.achievements.map((achievement) => (
              <li key={achievement}>• {achievement}</li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-black/10 px-4 py-2 text-sm transition-transform hover:scale-[1.03] hover:bg-black/5 active:scale-[0.98] dark:border-white/10 dark:hover:bg-white/10"
            >
              <GithubIcon size={16} /> Source
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.03] hover:opacity-90 active:scale-[0.98]"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </Reveal>
    </div>
  );
}
