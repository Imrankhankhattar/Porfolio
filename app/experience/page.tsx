import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { experience } from "@/lib/data/experience";
import { ExperienceEntry } from "@/components/experience-entry";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";

export const metadata: Metadata = {
  title: `Experience — ${site.name}`,
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <Reveal>
        <h1 className="text-3xl font-bold">Experience</h1>
        <p className="mt-2 text-foreground/60">Where I&apos;ve worked and what I&apos;ve shipped</p>
      </Reveal>

      <Reveal className="mt-10" delay={0.05}>
        <StaggerGroup className="max-w-2xl">
          {experience.map((entry) => (
            <StaggerItem key={entry.id}>
              <ExperienceEntry entry={entry} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Reveal>
    </div>
  );
}
