"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { studioFaq } from "@/lib/schema";

const ease = [0.22, 1, 0.36, 1] as const;

const principles = [
  {
    label: "Independent",
    body: "No agencies in the loop. No account managers. The studio picks its own problems and owns the result.",
  },
  {
    label: "Full pipeline",
    body: "Idea, design, code, ship, market. Every stage of the product happens in-house.",
  },
  {
    label: "Native first",
    body: "If a product runs better as a native app, it gets built native. Web when web is the right tool. The decision follows the product, not the stack.",
  },
  {
    label: "Direct",
    body: "One person answers the email, writes the code, makes the call. No status meetings, no handoffs.",
  },
];

const howWeWork = [
  "Each product is taken from sketch to launched product by the same hands. No translation layer between idea and execution.",
  "Design and code happen in parallel. Decisions get tested in the actual product, not in mockups.",
  "Things ship when they hold up to real use. No fixed sprint deadline forcing half-baked work out the door.",
  "A deliberately small product. Fewer features, each one finished properly.",
];

export default function StudioPage() {
  const reduce = useReducedMotion();
  return (
    <div className="pt-32 pb-32">
      <section className="max-w-[1180px] mx-auto px-6 relative">
        <motion.div
          initial={{ scaleX: 0 }}
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
            Studio
          </motion.span>
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] max-w-[800px]"
          >
            Independent software studio. <span className="text-[var(--color-accent-strong)]">Built by one.</span>
          </motion.h1>
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 border-t border-[var(--color-border)] pt-10">
          <div>
            <span className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[var(--color-text-quiet)]">
              About
            </span>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="max-w-[680px] space-y-5 text-[17px] text-[var(--color-text)] leading-[1.7]"
          >
            {[
              "MGKCodes builds software products end to end. Each one is taken from idea to launched product inside the studio. Sketch, design, engineering, release, marketing.",
              "The work spans iOS, web apps, and whatever else the product calls for. Native when it matters. Web when web is the right tool. The product decides.",
              "Open to conversations about partnerships, technical collaborations, and the right ideas to build together. Not optimising for client volume.",
            ].map((p, i) => (
              <motion.p
                key={i}
                variants={{
                  hidden: reduce ? {} : { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                }}
              >
                {p}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-6 mt-24">
        <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 border-t border-[var(--color-border)] pt-10">
          <div>
            <span className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[var(--color-text-quiet)]">
              Principles
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10 max-w-[680px]">
            {principles.map((p, i) => (
              <motion.div
                key={p.label}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-1 w-6 bg-[var(--color-accent)]" />
                  <span className="text-[11px] uppercase tracking-[1.5px] text-white font-semibold">
                    {p.label}
                  </span>
                </div>
                <p className="text-[15px] text-[var(--color-text-muted)] leading-[1.7]">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-6 mt-24">
        <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 border-t border-[var(--color-border)] pt-10">
          <div>
            <span className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[var(--color-text-quiet)]">
              How we work
            </span>
          </div>
          <ol className="max-w-[680px] divide-y divide-[var(--color-border)]">
            {howWeWork.map((item, i) => (
              <motion.li
                key={i}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease }}
                className="flex gap-5 py-5 first:pt-0 last:pb-0"
              >
                <span className="text-[11px] font-semibold tracking-[1.5px] text-[var(--color-accent)] pt-1 shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[16px] text-[var(--color-text)] leading-[1.65]">
                  {item}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-6 mt-24">
        <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 border-t border-[var(--color-border)] pt-10">
          <div>
            <span className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[var(--color-text-quiet)]">
              Questions
            </span>
          </div>
          <dl className="max-w-[680px] divide-y divide-[var(--color-border)]">
            {studioFaq.map((item, i) => (
              <motion.div
                key={item.q}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease }}
                className="py-5 first:pt-0 last:pb-0"
              >
                <dt className="text-[16px] font-semibold text-white">
                  {item.q}
                </dt>
                <dd className="mt-2 text-[15px] text-[var(--color-text-muted)] leading-[1.7]">
                  {item.a}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-6 mt-24">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 border-t border-[var(--color-border)] pt-10"
        >
          <div>
            <span className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[var(--color-text-quiet)]">
              Reach out
            </span>
          </div>
          <div className="max-w-[680px]">
            <p className="text-[17px] text-[var(--color-text)] leading-[1.7] mb-5">
              Email{" "}
              <a
                href="mailto:hello@mgkcodes.com"
                className="text-white border-b border-[var(--color-accent-quiet)] hover:border-[var(--color-accent)] transition-colors"
              >
                hello@mgkcodes.com
              </a>
              . Reply within a few days.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 text-sm text-white"
            >
              <span className="relative">
                Contact page
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[var(--color-accent)] origin-left transition-transform duration-300 group-hover:scale-x-110" />
              </span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
