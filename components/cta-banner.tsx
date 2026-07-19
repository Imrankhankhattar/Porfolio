import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <Reveal>
        <div className="bg-gradient-brand relative overflow-hidden rounded-2xl px-6 py-12 text-center text-white sm:py-16">
          <div
            aria-hidden
            className="bg-dot-grid pointer-events-none absolute inset-0 text-white/10 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]"
          />
          <h2 className="relative text-2xl font-bold sm:text-3xl">Have a project in mind?</h2>
          <p className="relative mx-auto mt-3 max-w-md text-white/90">
            Whether it&apos;s a slow API, a runaway AWS bill, or a full-stack build from scratch —
            let&apos;s talk about it.
          </p>
          <Link
            href="/contact"
            className="relative mt-6 inline-block rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-emerald-600 transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Get In Touch
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
