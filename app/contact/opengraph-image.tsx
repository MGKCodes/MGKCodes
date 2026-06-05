import { ImageResponse } from "next/og";
import { ogCard, ogSize, ogContentType } from "@/lib/ogCard";

export const alt = "Contact MGKCodes. hello@mgkcodes.com.";
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return new ImageResponse(
    ogCard({
      eyebrow: "Contact",
      lines: ["Get in touch."],
      footer: "hello@mgkcodes.com",
    }),
    { ...ogSize }
  );
}
