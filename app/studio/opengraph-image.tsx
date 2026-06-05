import { ImageResponse } from "next/og";
import { ogCard, ogSize, ogContentType } from "@/lib/ogCard";

export const alt = "MGKCodes studio. Independent software studio, built by one.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return new ImageResponse(
    ogCard({
      eyebrow: "Studio",
      lines: ["Independent", "software studio.", "Built by one."],
      footer: "frunt · Liftio",
    }),
    { ...ogSize }
  );
}
