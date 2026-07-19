"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/data/site";
import { RoleRotator } from "@/components/role-rotator";
import { SocialLinks } from "@/components/social-links";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-[70%] rounded-full bg-emerald-500/25 blur-3xl dark:bg-emerald-500/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 right-1/2 h-[320px] w-[320px] translate-x-[60%] rounded-full bg-sky-500/25 blur-3xl dark:bg-sky-500/15"
      />
      <div
        aria-hidden
        className="bg-dot-grid pointer-events-none absolute inset-0 text-black/[0.04] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)] dark:text-white/[0.06]"
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        className="relative mx-auto grid max-w-5xl items-center gap-10 px-4 py-16 sm:py-24 md:grid-cols-[1.2fr_1fr]"
      >
        <div>
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {site.availability}
          </motion.div>

          <motion.p variants={fadeUp} className="mt-5 text-sm text-foreground/50">
            Hi, I&apos;m
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="text-gradient mt-1 text-4xl font-bold tracking-tight sm:text-5xl"
          >
            {site.name}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-3 text-xl text-foreground/70 sm:text-2xl">
            <RoleRotator roles={site.roles} />
          </motion.p>
          <motion.p variants={fadeUp} className="mt-6 max-w-prose text-foreground/60">
            {site.bioShort}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="bg-gradient-brand rounded-md px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Let&apos;s Work Together
            </Link>
            <Link
              href="/projects"
              className="rounded-md border border-black/10 px-4 py-2.5 text-sm font-medium transition-transform hover:scale-[1.03] hover:bg-black/5 active:scale-[0.98] dark:border-white/10 dark:hover:bg-white/10"
            >
              View Projects
            </Link>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md px-4 py-2.5 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
            >
              Resume →
            </a>
          </motion.div>

          <motion.div variants={fadeUp}>
            <SocialLinks className="mt-8" />
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          whileHover={{ rotate: 1, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="relative mx-auto aspect-square w-full max-w-xs"
        >
          <div className="bg-gradient-brand absolute -inset-1.5 rounded-full opacity-70 blur-md" />
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-background shadow-xl shadow-black/10 dark:shadow-black/40">
            <Image
              src={site.avatarUrl}
              alt={site.name}
              width={320}
              height={320}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
