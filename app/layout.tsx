import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Melaku Adane General Contractor | Construction & Civil Engineering",
  description: "Construction, civil engineering, road infrastructure, buildings, earthworks and project delivery in Ethiopia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
