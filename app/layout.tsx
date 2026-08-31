/* eslint-disable @next/next/no-css-tags -- Lightbox2 CSS is served from public/vendor. */
import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { AgeGate } from "@/components/AgeGate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import {
  SITE_ALTERNATE_ORIGIN,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_ORIGIN
} from "@/lib/siteMetadata";
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

const defaultTitle = SITE_NAME + " | Official Portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  applicationName: SITE_NAME,
  title: {
    default: defaultTitle,
    template: "%s | " + SITE_NAME
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_ORIGIN }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      { url: "/favicon-clean.ico", sizes: "any" },
      { url: "/icon-clean-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-clean-512.png", type: "image/png", sizes: "512x512" }
    ],
    apple: [{ url: "/apple-touch-icon-clean.png", sizes: "180x180" }]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE_NAME,
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/tina/tina-hero.webp",
        alt: SITE_NAME + " preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    images: ["/images/tina/tina-hero.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  other: {
    "alternate-domain": SITE_ALTERNATE_ORIGIN
  }
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
      <body className={display.variable + " " + sans.variable}>
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
