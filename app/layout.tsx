/* eslint-disable @next/next/no-css-tags -- Lightbox2 CSS is served from public/vendor. */
import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { AgeGate } from "@/components/AgeGate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

const sans = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Tina | Premium Portfolio",
  description: "Classy cinematic portfolio and official links for Tina."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/vendor/lightbox2/css/lightbox.css" />
      </head>
      <body className={`${display.variable} ${sans.variable}`}>
        <AgeGate>
          <PageLoader />
          <Header />
          <main>{children}</main>
          <Footer />
        </AgeGate>
        <Script src="/vendor/lightbox2/js/lightbox-plus-jquery.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

