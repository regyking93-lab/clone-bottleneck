import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { BubbleBackground } from "@/components/BubbleBackground";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_URL } from "@/lib/messenger";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const siteName = "Emma's Rodgers Pomeranians";
const description =
  "Healthy home-raised teacup Pomeranians carefully matched with loving families. Message us on Messenger for videos and placement details.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteName} | Home-Raised Teacup Pomeranians`,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "teacup Pomeranian",
    "Pomeranian puppies",
    "home raised puppies",
    "teddy face Pomeranian",
    "Pomeranian breeder",
    "family raised puppies",
  ],
  authors: [{ name: siteName }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName,
    title: siteName,
    description,
    images: [
      {
        url: "/media/first/opengraph-image.jpeg",
        width: 606,
        height: 1080,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    images: ["/media/first/opengraph-image.jpeg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <BubbleBackground />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
