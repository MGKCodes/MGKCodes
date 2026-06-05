import { ImageResponse } from "next/og";

// Link-preview card shown when a mgkcodes.com URL is shared (LinkedIn, iMessage,
// Slack, X). Rendered in the MGKCodes dark system: framed mark, accent rule.
export const alt = "MGKCodes. Independent software studio. Idea to launch.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          backgroundColor: "#08090d",
          padding: 48,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid #2a2e38",
            padding: 64,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#4a7ab8",
              fontWeight: 600,
            }}
          >
            MGKCodes Studio
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 76,
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.05,
                letterSpacing: -1,
              }}
            >
              <span>An independent</span>
              <span>software studio.</span>
              <span>Idea to launch.</span>
            </div>
            <div
              style={{
                display: "flex",
                width: 96,
                height: 12,
                marginTop: 28,
                backgroundColor: "#4a7ab8",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 24,
              color: "#8a8e98",
            }}
          >
            <span>frunt &middot; Liftio</span>
            <span>mgkcodes.com</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
