import Link from "next/link";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryItems } from "@/data/gallery";

export const metadata = {
  title: "Gallery | Tina"
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

