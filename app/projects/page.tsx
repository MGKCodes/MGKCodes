"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SitePreview } from "@/components/ui/SitePreview";

const ease = [0.22, 1, 0.36, 1] as const;

interface Project {
  name: string;
  tag: string;
  status: string;
  blurb: string;
  links: { label: string; href: string }[];
  logo?: { src: string; alt: string };
  accentColor?: string;
  previewUrl?: string;
}

const projects: Project[] = [
  {
    name: "frunt",
    tag: "Web + Mobile",
    status: "Live",
    blurb:
      "A preparation platform for restaurant teams. It turns the documents a restaurant " +
      "already keeps (allergen guides, SOPs, compliance paperwork) into staff training, " +
      "onboarding, and compliance, with a native app for the team and a dashboard for managers.",
    links: [
      { label: "frunthospitality.com", href: "https://frunthospitality.com" },
    ],
    previewUrl: "https://frunthospitality.com",
    accentColor: "#8A5A2C",
    logo: {
      src: "/images/apps/frunt/app_icon.png",
      alt: "frunt logo",
    },
  },
  {
    name: "Liftio",
    tag: "iOS App",
    status: "Live",
    blurb:
      "Native iOS app for tracking workouts and progressing training. Built to stay out of the way while you actually train.",
    links: [
      { label: "App Store", href: "https://apps.apple.com/gb/app/liftio/id6759969740" },
      { label: "getliftio.com", href: "https://www.getliftio.com/" },
    ],
    previewUrl: "https://www.getliftio.com/",
    logo: {
      src: "/images/apps/liftio/liftio-high-resolution-logo.png",
      alt: "Liftio logo",
    },
  },
];

export default function ProjectsPage() {
  const reduce = useReducedMotion();
  return (
    <div className="pt-32 pb-32">
      <section className="max-w-[1180px] mx-auto px-6 relative">
        <motion.div
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease }}
          className="absolute top-0 left-0 right-12 md:right-32 h-px bg-[var(--color-border-strong)] origin-left"
          aria-hidden
        />

        <div className="pt-12 md:pt-16">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="inline-block text-[11px] font-semibold tracking-[1.5px] uppercase text-[var(--color-accent)] mb-6"
          >
            Projects
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] max-w-[800px]"
          >
            What the studio ships.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease }}
            className="mt-6 text-[16px] text-[var(--color-text-muted)] leading-relaxed max-w-[560px]"
          >
            Live products and what&apos;s currently in development. Each project
            is its own brand. Each one is built end to end inside MGKCodes.
          </motion.p>
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-6 mt-24">
        <div className="space-y-16">
          {projects.map((p, i) => (
            <ProjectBlock key={p.name} project={p} index={i} />
          ))}
          <NextPlaceholder index={projects.length} />
        </div>
      </section>
    </div>
  );
}

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const accent = project.accentColor ?? "var(--color-accent)";
  const accentStrong = project.accentColor ?? "var(--color-accent-strong)";

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className="group relative"
    >
      <motion.div
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: index * 0.1 + 0.1, ease }}
        className="absolute -top-px left-0 right-0 h-px bg-[var(--color-border)] origin-left"
        aria-hidden
      />

      <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 pt-10">
        <div>
          <span className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[var(--color-text-quiet)]">
            {project.tag}
          </span>
          <div className="mt-3 inline-flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: accent }}
            />
            <span
              className="text-[11px] uppercase tracking-[1.5px]"
              style={{ color: accentStrong }}
            >
              {project.status}
            </span>
          </div>
        </div>

        <div className="max-w-[640px]">
          <div className="flex items-start gap-4 mb-4">
            {project.logo && (
              <div className="shrink-0 h-11 w-11 border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-center overflow-hidden">
                <Image
                  src={project.logo.src}
                  alt={project.logo.alt}
                  width={44}
                  height={44}
                  className="h-full w-full object-contain"
                />
              </div>
            )}
            <h2
              id={project.name.toLowerCase()}
              className="scroll-mt-28 text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight"
            >
              {project.name}
            </h2>
          </div>
          <p className="text-[16px] text-[var(--color-text)] leading-[1.7] mb-6">
            {project.blurb}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm text-white"
              >
                <span className="relative">
                  {l.label}
                  <span
                    className="absolute -bottom-0.5 left-0 right-0 h-px origin-left transition-transform duration-300 group-hover/link:scale-x-110"
                    style={{ backgroundColor: accent }}
                  />
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            ))}
          </div>

          {project.previewUrl && (
            <SitePreview
              url={project.previewUrl}
              label={new URL(project.previewUrl).host.replace(/^www\./, "")}
            />
          )}
        </div>
      </div>
    </motion.article>
  );
}

function NextPlaceholder({ index }: { index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.aside
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease }}
      className="relative"
      aria-label="More projects in the pipeline"
    >
      <motion.div
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: index * 0.1 + 0.1, ease }}
        className="absolute -top-px left-0 right-0 h-px bg-[var(--color-border)] origin-left"
        aria-hidden
      />

      <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 pt-10">
        <div>
          <span className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[var(--color-text-quiet)]">
            Next
          </span>
          <div className="mt-3 inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-text-quiet)]" />
            <span className="text-[11px] uppercase tracking-[1.5px] text-[var(--color-text-quiet)]">
              In development
            </span>
          </div>
        </div>

        <div className="max-w-[640px]">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--color-text-muted)] mb-3">
            More in the pipeline.
          </h2>
          <p className="text-[15px] text-[var(--color-text-quiet)] leading-[1.7]">
            New products are in development. They&apos;ll show up here when they&apos;re ready.
          </p>
        </div>
      </div>
    </motion.aside>
  );
}
