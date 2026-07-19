import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { projects } from "@/lib/data/projects";
import { ProjectGrid } from "@/components/project-grid";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: `Projects — ${site.name}`,
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <Reveal>
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="mt-2 text-foreground/60">A selection of things I&apos;ve built</p>
      </Reveal>

      <div className="mt-8">
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
}
