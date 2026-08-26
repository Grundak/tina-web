/* eslint-disable @next/next/no-img-element -- Lightbox2 needs plain image anchors for replaceable gallery assets. */
import type React from "react";
import type { GalleryItem } from "@/data/gallery";

type GalleryGridProps = {
  items: GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="galleryGrid">
      {items.map((item) => (
        <article className="galleryCard" key={item.id}>
          {item.imageSrc ? (
            <a
              className="galleryLink"
              href={item.imageSrc}
              data-lightbox="tina-gallery"
              data-title={`${item.title} — ${item.caption}`}
              aria-label={`Open ${item.title} in gallery viewer`}
            >
              <GalleryCardContent item={item} />
            </a>
          ) : (
            <GalleryCardContent item={item} />
          )}
        </article>
      ))}
    </div>
  );
}

function GalleryCardContent({ item }: { item: GalleryItem }) {
  return (
    <>
      <div
        className="galleryVisual"
        style={{ "--placeholder": item.placeholder } as React.CSSProperties}
      >
        {item.imageSrc ? <img className="galleryImage" src={item.imageSrc} alt={item.title} /> : null}
      </div>
      <div className="galleryCaption">
        <h2>{item.title}</h2>
        <p>{item.caption}</p>
      </div>
    </>
  );
}
