import type { Metadata } from "next";
import Link from "next/link";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryItems } from "@/data/gallery";

const galleryDescription =
  "Explore Tina Model Official gallery previews with cinematic leather styling and a polished adult portfolio tone.";

export const metadata: Metadata = {
  title: "Gallery",
  description: galleryDescription,
  alternates: {
    canonical: "/gallery"
  },
  openGraph: {
    title: "Gallery | Tina Model Official",
    description: galleryDescription,
    url: "/gallery"
  },
  twitter: {
    title: "Gallery | Tina Model Official",
    description: galleryDescription
  }
};

export default function GalleryPage() {
  return (
    <section className="page galleryPage">
      <p className="eyebrow">Portfolio gallery</p>
      <h1 className="sectionTitle">Bold leather editorials with a late-night edge.</h1>
      <p className="lead">
        Four curated gallery moments with confident styling, dark texture, and polished adult tone.
      </p>
      <div className="buttonRow">
        <Link className="button buttonPrimary" href="/links">
          Official links
        </Link>
      </div>
      <GalleryGrid items={galleryItems} />
    </section>
  );
}
