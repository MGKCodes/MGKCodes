"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const channels = [
  {
    label: "Email",
    handle: "hello@mgkcodes.com",
    href: "mailto:hello@mgkcodes.com",
    note: "Direct line to the studio",
  },
  {
    label: "LinkedIn",
    handle: "MGKCodes",
    href: "https://www.linkedin.com/company/mgkcodes/",
    note: "Company page and updates",
  },
];

export default function ContactPage() {
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
            Contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] max-w-[800px]"
          >
            Get in touch.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease }}
            className="mt-6 text-[16px] text-[var(--color-text-muted)] leading-relaxed max-w-[560px]"
          >
            Open to conversations about partnerships, collaborations, and the
            right ideas to build. Email is the way in.
          </motion.p>
        </div>
      </section>

      <section className="max-w-[1180px] mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 border-t border-[var(--color-border)] pt-4">
          <div className="pt-6">
            <span className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[var(--color-text-quiet)]">
              Channels
            </span>
          </div>
          <div>
            {channels.map((c, i) => (
              <motion.a
                key={c.href}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06, ease }}
                className="group flex items-center justify-between py-6 border-b border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:gap-6">
                  <p className="text-[11px] font-semibold tracking-[1.5px] uppercase text-[var(--color-text-quiet)] mb-1 md:mb-0 md:w-32">
                    {c.label}
                  </p>
                  <p className="text-lg text-white group-hover:text-[var(--color-accent-strong)] transition-colors">
                    {c.handle}
                  </p>
                  <p className="text-[13px] text-[var(--color-text-muted)] mt-1 md:mt-0 md:ml-auto">
                    {c.note}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[var(--color-text-quiet)] group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ml-6 shrink-0" />
              </motion.a>
            ))}
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: 0.3, ease }}
              className="mt-8 text-[13px] text-[var(--color-text-quiet)] leading-relaxed max-w-[520px]"
            >
              Reply within a few days. Sometimes sooner.
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
}
