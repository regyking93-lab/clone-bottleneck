import { ImageResponse } from "next/og";

export const alt = "Emma's Rogers Pomeranians, home-raised teacup Pomeranians";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FAF7F2 0%, #F0E8DC 50%, #E8C4C4 100%)",
          padding: 48,
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#2C2A28",
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          {`Emma's Rogers Pomeranians`}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#C9A962",
            marginTop: 16,
            textAlign: "center",
          }}
        >
          Raised With Love. Placed With Intention.
        </div>
      </div>
    ),
    { ...size }
  );
}
