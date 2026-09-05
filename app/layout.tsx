import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://melaku-adane-construction.vercel.app"),
  title: {
    default: "Melaku Adane General Contractor",
    template: "%s | Melaku Adane General Contractor",
  },
  description: "Construction and civil engineering services across roads, buildings, earthworks and specialist projects in Ethiopia.",
  applicationName: "Melaku Adane General Contractor",
  keywords: ["Melaku Adane", "general contractor", "construction Ethiopia", "civil engineering Ethiopia", "Hawassa construction", "Addis Ababa construction"],
  openGraph: {
    type: "website",
    locale: "en_ET",
    url: "https://melaku-adane-construction.vercel.app",
    siteName: "Melaku Adane General Contractor",
    title: "Melaku Adane General Contractor",
    description: "Construction and civil engineering services across roads, buildings, earthworks and specialist projects in Ethiopia.",
    images: [{ url: "/melaku/1788597744924.jpg", width: 1200, height: 630, alt: "Melaku Adane construction field work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Melaku Adane General Contractor",
    description: "Construction and civil engineering services across roads, buildings, earthworks and specialist projects in Ethiopia.",
    images: ["/melaku/1788597744924.jpg"],
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
