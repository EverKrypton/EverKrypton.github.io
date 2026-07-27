import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const product = Inter({
  subsets: ["latin"],
  variable: "--font-product",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EverKrypton — Portfolio",
  description:
    "Builder, designer, engineer. A Chrome-inspired portfolio of products and experiments.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://everkrypton.github.io"
  ),
  openGraph: {
    title: "EverKrypton — Portfolio",
    description:
      "Builder, designer, engineer. A Chrome-inspired portfolio of products and experiments.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${product.variable} ${display.variable}`}>
      <body className="chrome-mesh antialiased">{children}</body>
    </html>
  );
}
