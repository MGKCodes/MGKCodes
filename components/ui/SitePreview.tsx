"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Live, non-interactive preview of a product site, rendered inside a browser
// frame. Desktop only: the component does not mount below md, so the external
// site never loads on mobile. The iframe is sandboxed without top-navigation,
// so a framed site cannot redirect or hijack the page.
//
// A captured screenshot (poster) sits behind the iframe. It shows while the
// iframe loads and stays visible as a fallback if the external site is slow or
// ever refuses to be framed (the iframe only fades in once it actually loads).

const BASE_W = 1440;
const BASE_H = 900;

export function SitePreview({
  url,
  label,
  poster,
}: {
  url: string;
  label: string;
  poster?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  const [scale, setScale] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setShow(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!show) return;
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0].contentRect.width;
      if (w) setScale(w / BASE_W);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [show]);

  if (!show) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${label}`}
      className="group mt-6 block border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden hover:border-[var(--color-border-strong)] transition-colors"
    >
      <div className="flex items-center gap-2 px-3 h-8 border-b border-[var(--color-border)] bg-[var(--color-surface-alt)]">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-[var(--color-border-strong)]" />
          <span className="h-2 w-2 rounded-full bg-[var(--color-border-strong)]" />
          <span className="h-2 w-2 rounded-full bg-[var(--color-border-strong)]" />
        </span>
        <span className="text-[11px] text-[var(--color-text-quiet)] tracking-tight truncate">
          {label}
        </span>
      </div>
      <div
        ref={ref}
        className="relative w-full overflow-hidden bg-[var(--color-bg)]"
        style={{ aspectRatio: `${BASE_W} / ${BASE_H}` }}
      >
        {poster && (
          <Image
            src={poster}
            alt={`${label} preview`}
            fill
            sizes="(max-width: 768px) 0px, 640px"
            className="object-cover object-top"
          />
        )}
        <iframe
          src={url}
          title={`${label} preview`}
          loading="lazy"
          tabIndex={-1}
          aria-hidden
          scrolling="no"
          sandbox="allow-scripts allow-same-origin"
          onLoad={() => setLoaded(true)}
          className={`absolute top-0 left-0 origin-top-left border-0 pointer-events-none transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            width: BASE_W,
            height: BASE_H,
            transform: `scale(${scale || 0.0001})`,
          }}
        />
      </div>
    </a>
  );
}
