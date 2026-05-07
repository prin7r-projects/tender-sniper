import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brassmark — The tender desk a senior bidder keeps open in the second monitor",
  description:
    "Real-time alerts on government RFPs matching your NAICS + keyword + region profile. Scored on a 7-signal bid-readiness model. SAM.gov + 50 state portals + EU TED + UK Contracts Finder + 8 EU member portals — 80 sources, deduped.",
  metadataBase: new URL("https://tender-sniper.prin7r.com"),
  alternates: { canonical: "https://tender-sniper.prin7r.com" },
  openGraph: {
    title: "Brassmark — The tender desk a senior bidder keeps open in the second monitor",
    description:
      "Real-time alerts on government RFPs matching your NAICS + keyword + region profile. Scored. Deduped. Federal-poll cycle: 90 seconds.",
    url: "https://tender-sniper.prin7r.com",
    siteName: "Brassmark",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Brassmark — Tender desk for capture managers",
    description:
      "Real-time alerts on government RFPs matching your NAICS + keyword + region profile. 80 procurement registers, deduped, scored on a 7-signal bid-readiness model."
  },
  icons: { icon: [{ url: "/icon.svg", type: "image/svg+xml" }] },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: "#F2EEE5",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
