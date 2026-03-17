import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
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
    <html lang="en" className={lato.variable}>
      <body className="antialiased grain">
        {children}
      </body>
    </html>
  );
}
