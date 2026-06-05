"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
  internal?: boolean;
};

const links: LinkItem[] = [
  {
    label: "MGKCodes",
    href: "/",
    internal: true,
  },
  {
    label: "Portfolio",
    href: "https://mattkay02.github.io/",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/MattKay02",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/matthew-kay-/",
    external: true,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/mattykay2002",
    external: true,
  },
  {
    label: "frunt",
    href: "https://frunthospitality.com",
    external: true,
  },
  {
    label: "Liftio",
    href: "https://www.getliftio.com/",
    external: true,
  },
  {
    label: "Email",
    href: "/contact",
    internal: true,
  },
];

export default function ConnectPage() {
  return (
    <div className="min-h-[100svh] pt-24 pb-10 md:pt-28 md:pb-16">
      <section className="max-w-[640px] mx-auto px-6">
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
          className="inline-block text-[10px] font-semibold tracking-[1.5px] uppercase text-[var(--color-accent)] mb-4"
        >
          Connect
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05, ease }}
          className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Matthew Kay
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12, ease }}
          className="mt-1.5 text-[13px] text-[var(--color-text-muted)]"
        >
          Founder, MGKCodes Ltd
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.18, ease }}
          className="mt-5 space-y-1"
        >
          <p className="text-[14px] text-[var(--color-text)] leading-relaxed">
            Independent software studio. Products built end to end, idea to
            launch.
          </p>
          <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed">
            Two products live: frunt for restaurants, Liftio on iOS. Open to
            selective product work.
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-7 h-px bg-[var(--color-border)] origin-left"
          aria-hidden
        />

        <ul className="mt-1">
          {links.map((l, i) => {
            const isExternal = l.external;
            const content = (
              <>
                <span className="text-[15px] text-white group-hover:text-[var(--color-accent-strong)] transition-colors">
                  {l.label}
                </span>
                <ArrowUpRight
                  className="w-4 h-4 text-[var(--color-text-quiet)] group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0"
                  aria-hidden
                />
              </>
            );

            const className =
              "group flex items-center justify-between py-3.5 min-h-[48px] border-b border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-colors";

            return (
              <motion.li
                key={l.href}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.32,
                  delay: 0.25 + i * 0.04,
                  ease,
                }}
              >
                {l.internal ? (
                  <Link href={l.href} className={className}>
                    {content}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className={className}
                  >
                    {content}
                  </a>
                )}
              </motion.li>
            );
          })}
        </ul>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6, ease }}
          className="mt-8 text-[11px] tracking-[1.5px] uppercase text-[var(--color-text-quiet)]"
        >
          MGKCodes Ltd &middot; Outside the box
        </motion.p>
      </section>
    </div>
  );
}
