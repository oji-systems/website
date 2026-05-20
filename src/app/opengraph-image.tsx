import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.shortName} — A small venture studio in Austin`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#F4EFE6",
          color: "#0E0E10",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "26px",
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "9999px",
              background: "#0E0E10",
            }}
          />
          <span>Oji Systems</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <div
            style={{
              fontSize: "96px",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              maxWidth: "1000px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>We build&nbsp;</span>
            <span style={{ color: "#C2410C", fontStyle: "italic" }}>
              quietly powerful
            </span>
            <span>&nbsp;software.</span>
          </div>
          <p
            style={{
              fontSize: "28px",
              color: "#6B675F",
              maxWidth: "820px",
              fontFamily: "system-ui, sans-serif",
              lineHeight: 1.4,
            }}
          >
            A small venture studio in Austin. We design and operate our own
            products, and we partner with serious teams on the infrastructure
            underneath theirs.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "ui-monospace, monospace",
            fontSize: "18px",
            color: "#6B675F",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          <span>Austin, TX</span>
          <span>ojisystems.com</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
