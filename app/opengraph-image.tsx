import { readFile } from "fs/promises";
import { join } from "path";
import { ImageResponse } from "next/og";

export const alt = "Emma's Rodgers Pomeranians, home-raised teacup Pomeranians";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const dynamic = "force-static";

export default async function OgImage() {
  const photo = await readFile(
    join(process.cwd(), "public/media/first/WhatsApp Image 2026-07-22 at 2.50.06 PM.jpeg")
  );
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#FDEEF3",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 20%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            background:
              "linear-gradient(0deg, rgba(44,42,40,0.78) 0%, rgba(44,42,40,0.15) 45%, rgba(44,42,40,0) 65%)",
            padding: 48,
          }}
        >
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.15,
            }}
          >
            {`Emma's Rodgers Pomeranians`}
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#F4B8D2",
              marginTop: 12,
            }}
          >
            Raised With Love. Placed With Intention.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
