import { ImageResponse } from "next/og";

// iOS home-screen icon (180x180). Without it, iOS screenshots the page. Uses the
// framed-mark motif with room for the full MGK wordmark.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
            width: 120,
            height: 120,
            border: "5px solid #ffffff",
            color: "#ffffff",
            fontSize: 42,
            fontWeight: 700,
            letterSpacing: 1,
            fontFamily: "sans-serif",
          }}
        >
          MGK
        </div>
      </div>
    ),
    { ...size }
  );
}
