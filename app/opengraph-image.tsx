import { ImageResponse } from "next/og";
import { site } from "@/app/lib/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0a09",
          color: "#f4efe6",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c4844a",
          }}
        >
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Your calendar should not close at 5.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#c9c0b2",
              maxWidth: 820,
            }}
          >
            {`${site.tagline} Calls forward. The AI books.`}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
