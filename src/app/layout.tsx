import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Stodels Digital Audit — Broadbrand",
  description:
    "A comprehensive digital marketing audit for Stodels Nursery, prepared by Broadbrand.",
  openGraph: {
    title: "Stodels Digital Audit — Broadbrand",
    description:
      "A comprehensive digital marketing audit for Stodels Nursery, prepared by Broadbrand.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased grain`}>
        {children}
      </body>
    </html>
  );
}
