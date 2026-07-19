import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { education } from "@/lib/data/education";
import { skillCategories } from "@/lib/data/skills";
import { achievements } from "@/lib/data/achievements";
import { TimelineEntry } from "@/components/timeline-entry";
import { SkillsTabs } from "@/components/skills-tabs";
import { AchievementItem } from "@/components/achievement-item";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <Reveal>
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="mt-2 text-foreground/60">Get to know more about my background and skills</p>
      </Reveal>

      <Reveal className="mt-12" delay={0.05}>
        <h2 className="text-xl font-semibold">Who I Am</h2>
        <p className="mt-3 max-w-prose text-foreground/70">{site.bioShort}</p>
      </Reveal>

      <Reveal className="mt-12">
        <h2 className="text-xl font-semibold">Education</h2>
        <StaggerGroup className="mt-6 max-w-lg">
          {education.map((entry) => (
            <StaggerItem key={entry.id}>
              <TimelineEntry entry={entry} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Reveal>

      <Reveal className="mt-12">
        <h2 className="text-xl font-semibold">Skills</h2>
        <div className="mt-6">
          <SkillsTabs categories={skillCategories} />
        </div>
      </Reveal>

      <section className="mt-12">
        <Reveal>
          <h2 className="text-xl font-semibold">Achievements</h2>
        </Reveal>
        <StaggerGroup className="mt-6 grid gap-4 sm:grid-cols-2">
          {achievements.map((achievement) => (
            <StaggerItem key={achievement.id}>
              <AchievementItem achievement={achievement} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>
    </div>
  );
}
