import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <div className="pt-32 pb-32">
      <section className="max-w-[1180px] mx-auto px-6">
        <div className="pt-12 md:pt-16">
          <span className="inline-block text-[11px] font-semibold tracking-[1.5px] uppercase text-[var(--color-accent)] mb-6">
            404
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05] max-w-[800px]">
            Page not found.
          </h1>
          <p className="mt-6 text-[16px] text-[var(--color-text-muted)] leading-relaxed max-w-[560px]">
            That page does not exist. It may have moved.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <Link
              href="/"
              className="group inline-flex items-center gap-1.5 text-white"
            >
              <span className="relative">
                Back home
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-[var(--color-accent)] origin-left transition-transform duration-300 group-hover:scale-x-110" />
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/projects"
              className="text-[var(--color-text-muted)] hover:text-white transition-colors"
            >
              See projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
