import Link from "next/link";
import { Hero } from "@/components/hero";
import { StatsBand } from "@/components/stats-band";
import { ServicesSection } from "@/components/services-section";
import { CtaBanner } from "@/components/cta-banner";
import { ProjectCard } from "@/components/project-card";
import { SkillsTabs } from "@/components/skills-tabs";
import { AchievementItem } from "@/components/achievement-item";
import { TestimonialCard } from "@/components/testimonial-card";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/reveal";
import { projects } from "@/lib/data/projects";
import { skillCategories } from "@/lib/data/skills";
import { achievements } from "@/lib/data/achievements";
import { testimonials } from "@/lib/data/testimonials";

export default function Home() {
  const featured = projects.filter((project) => project.featured);

  return (
    <div>
      <Hero />
      <StatsBand />

      <section className="mx-auto max-w-5xl px-4 py-16">
        <Reveal>
          <h2 className="text-2xl font-semibold">What I Do</h2>
          <p className="mt-2 text-foreground/60">Where I add the most value on a project</p>
          <div className="mt-6">
            <ServicesSection />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <Reveal className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <Link href="/projects" className="text-sm text-foreground/60 hover:text-foreground">
            View all →
          </Link>
        </Reveal>
        <StaggerGroup className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <Reveal>
          <h2 className="text-2xl font-semibold">Technical Skills</h2>
          <div className="mt-6">
            <SkillsTabs categories={skillCategories} />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <Reveal>
          <h2 className="text-2xl font-semibold">Achievements</h2>
        </Reveal>
        <StaggerGroup className="mt-6 grid gap-4 sm:grid-cols-2">
          {achievements.map((achievement) => (
            <StaggerItem key={achievement.id}>
              <AchievementItem achievement={achievement} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      {testimonials.length > 0 && (
        <section className="mx-auto max-w-5xl px-4 py-16">
          <Reveal>
            <h2 className="text-2xl font-semibold">Recommendations</h2>
          </Reveal>
          <StaggerGroup className="mt-6 grid gap-4 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <StaggerItem key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </section>
      )}

      <CtaBanner />
    </div>
  );
}
