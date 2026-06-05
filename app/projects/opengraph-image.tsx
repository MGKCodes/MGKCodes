import { ImageResponse } from "next/og";
import { ogCard, ogSize, ogContentType } from "@/lib/ogCard";

export const alt = "Projects by MGKCodes. frunt and Liftio.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return new ImageResponse(
    ogCard({
      eyebrow: "Projects",
      lines: ["What the", "studio ships."],
      footer: "frunt · Liftio",
    }),
    { ...ogSize }
  );
}
