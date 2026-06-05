// Shared layout for link-preview cards (1200x630), in the MGKCodes dark system:
// framed mark, accent rule, eyebrow + headline + footer. Each route's
// opengraph-image.tsx feeds it route-specific text.

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function ogCard({
  eyebrow,
  lines,
  footer,
}: {
  eyebrow: string;
  lines: string[];
  footer: string;
}) {
  return (
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
          {eyebrow}
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
            {lines.map((line) => (
              <span key={line}>{line}</span>
            ))}
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
          <span>{footer}</span>
          <span>mgkcodes.com</span>
        </div>
      </div>
    </div>
  );
}
