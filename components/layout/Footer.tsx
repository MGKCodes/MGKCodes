import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-32">
      <div className="max-w-[1180px] mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <Link
            href="/"
            className="group flex items-center transition-opacity hover:opacity-80"
            aria-label="MGKCodes home"
          >
            <Image
              src="/images/logo/svg/logo-white-elements.svg"
              alt="MGKCodes"
              width={1500}
              height={935}
              className="h-8 w-auto"
            />
          </Link>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/mgkcodes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-[var(--color-text-muted)] hover:text-[var(--color-accent-strong)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@mgkcodes.com"
              className="text-[13px] text-[var(--color-text-muted)] hover:text-[var(--color-accent-strong)] transition-colors"
            >
              hello@mgkcodes.com
            </a>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] mt-10 pt-6 flex items-center justify-between">
          <p className="text-[12px] text-[var(--color-text-quiet)] tracking-tight">
            &copy; {new Date().getFullYear()} MGKCodes Ltd
          </p>
          <p className="text-[11px] text-[var(--color-text-quiet)] tracking-[1.5px] uppercase">
            Outside the box
          </p>
        </div>
      </div>
    </footer>
  );
}
