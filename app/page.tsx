"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
  const reduce = useReducedMotion();
  // Order matches lib/projects.ts (frunt, then Liftio).
  const [frunt, liftio] = projects;
  return (
    <div className="pt-32 pb-32">
      <section className="max-w-[1180px] mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute inset-0 pointer-events-none"
          aria-hidden
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease }}
            className="absolute top-0 left-0 right-12 md:right-32 h-px bg-[var(--color-border-strong)] origin-left"
          />
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.7, delay: 0.9, ease }}
            className="absolute top-0 right-12 md:right-32 h-24 md:h-40 w-px bg-[var(--color-border-strong)] origin-top"
          />
        </motion.div>

        <div className="relative pt-12 md:pt-16">
          <motion.span
            initial={{ y: 8 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-block text-[11px] font-semibold tracking-[1.5px] uppercase text-[var(--color-accent)] mb-6"
          >
            MGKCodes Studio
          </motion.span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.02] max-w-[900px]">
            {["An independent", "software studio.", "Idea to launch."].map(
              (line, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 24 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease }}
                  className="block"
                >
                  {line}
                </motion.span>
              )
            )}
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 1.2, ease }}
            className="mt-6 h-2 w-16 bg-[var(--color-accent)] origin-left"
            aria-hidden
          />

          <motion.p
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.85, ease }}
            className="mt-8 text-[17px] text-[var(--color-text-muted)] leading-relaxed max-w-[560px]"
          >
            We take software products from first sketch to launch. Design,
            engineering, launch, marketing. Done in-house, by the same hands.
          </motion.p>

          <motion.div
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 1.0, ease }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-1.5 text-white"
            >
              <span className="relative">
                See projects
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[var(--color-accent)] origin-left transition-transform duration-300 group-hover:scale-x-110" />
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/contact"
              className="text-[var(--color-text-muted)] hover:text-white transition-colors"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease }}
        className="max-w-[1180px] mx-auto px-6 mt-32 md:mt-40"
      >
        <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 border-t border-[var(--color-border)] pt-10">
          <div>
            <span className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[var(--color-text-quiet)]">
              Currently
            </span>
          </div>
          <div className="space-y-6">
            <div className="flex items-baseline gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              </span>
              <p className="text-[17px] text-white">
                {frunt.copy.home.currently.verb}{" "}
                <span className="text-[var(--color-accent-strong)]">
                  {frunt.name}
                </span>
                .
                <span className="text-[var(--color-text-muted)]">
                  {" "}
                  {frunt.copy.home.currently.detail}
                </span>
              </p>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--color-text-quiet)] mt-1" />
              <p className="text-[17px] text-white">
                {liftio.copy.home.currently.verb}{" "}
                <span className="text-[var(--color-accent-strong)]">
                  {liftio.name}
                </span>
                .
                <span className="text-[var(--color-text-muted)]">
                  {" "}
                  {liftio.copy.home.currently.detail}
                </span>
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease }}
        className="max-w-[1180px] mx-auto px-6 mt-24"
      >
        <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 border-t border-[var(--color-border)] pt-10">
          <div className="flex md:flex-col items-baseline md:items-start justify-between md:justify-start gap-2">
            <span className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[var(--color-text-quiet)]">
              Selected work
            </span>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-1.5 text-[12px] text-[var(--color-text-muted)] hover:text-white transition-colors md:mt-3"
            >
              <span>All projects</span>
              <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <ul className="divide-y divide-[var(--color-border)] -mt-4">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/projects#${project.slug}`}
                  className="group grid grid-cols-[1fr_auto] md:grid-cols-[180px_1fr_120px_auto] items-baseline gap-x-6 gap-y-1 py-5"
                >
                  <span className="text-[17px] text-white tracking-tight">
                    {project.name}
                  </span>
                  <span className="hidden md:inline text-[12px] tracking-[1.5px] uppercase text-[var(--color-text-quiet)]">
                    {project.copy.home.tag}
                  </span>
                  <span className="hidden md:flex items-center gap-2 text-[12px] text-[var(--color-text-muted)]">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    </span>
                    {project.status}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[var(--color-text-quiet)] transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 row-span-2 md:row-span-1 self-center" />
                  <p className="col-span-1 md:col-span-3 text-[14px] text-[var(--color-text-muted)] leading-relaxed max-w-[620px]">
                    {project.copy.home.blurb}
                  </p>
                </Link>
              </li>
            ))}
            <li>
              <div className="grid grid-cols-[1fr_auto] md:grid-cols-[180px_1fr_120px_auto] items-baseline gap-x-6 gap-y-1 py-5">
                <span className="text-[17px] text-[var(--color-text-muted)] tracking-tight">
                  Next
                </span>
                <span className="hidden md:inline text-[12px] tracking-[1.5px] uppercase text-[var(--color-text-quiet)]">
                  TBA
                </span>
                <span className="hidden md:flex items-center gap-2 text-[12px] text-[var(--color-text-quiet)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-text-quiet)]" />
                  In development
                </span>
                <span className="w-4 h-4" aria-hidden />
                <p className="col-span-1 md:col-span-3 text-[14px] text-[var(--color-text-quiet)] leading-relaxed max-w-[620px]">
                  A new product is in early design. More soon.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease }}
        className="max-w-[1180px] mx-auto px-6 mt-24"
      >
        <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 border-t border-[var(--color-border)] pt-10">
          <div>
            <span className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[var(--color-text-quiet)]">
              Approach
            </span>
          </div>
          <div className="max-w-[640px] space-y-4 text-[16px] text-[var(--color-text)] leading-[1.7]">
            <p>
              Independent. Solo-run. Every product is taken from first sketch
              to launch by the same person. No handoffs, no agencies, no
              dependencies on other shops.
            </p>
            <p className="text-[var(--color-text-muted)]">
              Open to conversations about partnerships and collaborations. Not
              chasing client volume.
            </p>
            <Link
              href="/studio"
              className="inline-flex items-center gap-1.5 text-sm text-white pt-2 group"
            >
              <span className="relative">
                More about the studio
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[var(--color-accent)] origin-left transition-transform duration-300 group-hover:scale-x-110" />
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
