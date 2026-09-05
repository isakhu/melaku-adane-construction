import type { Metadata } from "next";
import "./globals.css";
import "./elite-motion.css";
import AnimeMotion from "./anime-motion";

export const metadata: Metadata = {
  metadataBase: new URL("https://melaku-adane-construction.vercel.app"),
  title: {
    default: "Melaku Adane | General Contractor & Civil Engineering",
    template: "%s | Melaku Adane",
  },
  description: "Melaku Adane General Contractor delivers road infrastructure, building construction, earthworks, site preparation and specialist construction works across Ethiopia.",
  applicationName: "Melaku Adane General Contractor",
  keywords: [
    "Melaku Adane",
    "Melaku Adane General Contractor",
    "construction Ethiopia",
    "civil engineering Ethiopia",
    "Hawassa construction",
    "Addis Ababa construction",
    "road construction Ethiopia",
    "earthworks Ethiopia",
  ],
  openGraph: {
    type: "website",
    locale: "en_ET",
    url: "https://melaku-adane-construction.vercel.app",
    siteName: "Melaku Adane General Contractor",
    title: "Melaku Adane | General Contractor & Civil Engineering",
    description: "Construction, civil engineering, infrastructure and heavy equipment operations across Ethiopia.",
    images: [
      {
        url: "/melaku/1788597744924.jpg",
        width: 1200,
        height: 630,
        alt: "Melaku Adane construction field work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Melaku Adane | General Contractor & Civil Engineering",
    description: "Construction, civil engineering, infrastructure and heavy equipment operations across Ethiopia.",
    images: ["/melaku/1788597744924.jpg"],
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <AnimeMotion />
      </body>
    </html>
  );
}
