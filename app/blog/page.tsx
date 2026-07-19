import type { Metadata } from "next";
import { site } from "@/lib/data/site";
import { NotifyForm } from "@/components/notify-form";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: `Blog — ${site.name}`,
};

const TOPICS = ["Web Development", "Systems", "Next.js", "React", "Machine Learning"];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <Reveal>
        <h1 className="text-3xl font-bold">Blog Coming Soon</h1>
        <p className="mt-4 text-foreground/60">
          I&apos;m working on some interesting articles about web development, systems, and machine
          learning. Stay tuned for insightful content!
        </p>

        <NotifyForm />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {TOPICS.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-black/10 px-3 py-1 text-xs text-foreground/60 dark:border-white/10"
            >
              {topic}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
