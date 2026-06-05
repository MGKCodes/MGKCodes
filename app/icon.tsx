import { ImageResponse } from "next/og";

// Favicon: the framed-mark motif (white frame, M breaking the box) on the dark
// background. A single letter stays legible when browsers downscale to 16px.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08090d",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 42,
            height: 42,
            border: "3px solid #ffffff",
            color: "#ffffff",
            fontSize: 30,
            fontWeight: 700,
            fontFamily: "sans-serif",
          }}
        >
          M
        </div>
      </div>
    ),
    { ...size }
  );
}
