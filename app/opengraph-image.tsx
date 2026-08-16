import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#0d1b2e",
          color: "white",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 600 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 32, color: "#4da6ff", marginTop: 24 }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}
