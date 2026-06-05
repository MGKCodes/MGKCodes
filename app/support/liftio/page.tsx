import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Support | Liftio" },
  description:
    "Get support for the Liftio iOS app. Contact MGKCodes Ltd with any questions or issues.",
};

export default function LiftioSupportPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-sans pt-16">
      {/* Header */}
      <header className="px-6 py-8 border-b border-[#1e1e1e]">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white no-underline hover:text-[#aaa] transition-colors"
        >
          MGKCodes <span className="text-[#888] font-normal">Ltd</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="max-w-[720px] mx-auto px-6 py-16 pb-24">
        {/* App Logo */}
        <div className="mb-6">
          <Image
            src="/images/apps/liftio/liftio-high-resolution-logo.png"
            alt="Liftio logo"
            width={64}
            height={64}
            className="rounded-xl"
          />
        </div>

        {/* Tag */}
        <span className="inline-block text-xs font-semibold tracking-[1.5px] uppercase text-[#666] mb-4">
          Liftio App
        </span>

        {/* Title */}
        <h1 className="text-4xl font-bold tracking-tight text-white mb-2 leading-tight">
          Support
        </h1>
        <p className="text-[#aaa] text-[15px] leading-relaxed mb-12">
          Need help with Liftio? We&apos;re here to assist. Reach out to us and
          we&apos;ll get back to you as soon as possible.
        </p>

        {/* Contact Box */}
        <div className="bg-[#111] border border-[#1e1e1e] rounded-sm px-6 py-6">
          <p className="text-[13px] font-semibold tracking-[1.5px] uppercase text-[#555] mb-2">
            Email Support
          </p>
          <a
            href="mailto:mgkcodes@gmail.com"
            className="text-white text-xl font-semibold underline underline-offset-[4px] hover:text-[#aaa] transition-colors"
          >
            mgkcodes@gmail.com
          </a>
        </div>

        {/* Divider */}
        <hr className="border-none border-t border-[#1a1a1a] my-10" />

        <Link
          href="/privacy/liftio"
          className="text-[#555] text-sm hover:text-[#aaa] transition-colors underline underline-offset-[3px]"
        >
          &larr; Back to Privacy Policy
        </Link>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] px-6 py-8 text-center">
        <p className="text-[13px] text-[#444]">
          2026 MGKCodes Ltd &mdash;{" "}
          <a
            href="https://mgkcodes.com"
            className="text-[#666] hover:text-[#aaa] transition-colors"
          >
            mgkcodes.com
          </a>{" "}
          &mdash;{" "}
          <a
            href="mailto:mgkcodes@gmail.com"
            className="text-[#666] hover:text-[#aaa] transition-colors"
          >
            mgkcodes@gmail.com
          </a>
        </p>
      </footer>
    </div>
  );
}
