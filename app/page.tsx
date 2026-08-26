/* eslint-disable @next/next/no-img-element -- Public proof-of-concept images are intentionally data/static asset driven. */
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="heroMystery" aria-hidden="true">
          <img src="/images/tina/tina-bg-mystery.webp" alt="" />
        </div>
        <div className="heroChair" aria-hidden="true">
          <img src="/images/tina/tina-red-chair.webp" alt="" />
        </div>
        <div className="heroContent">
          <div className="heroCopy">
            <p className="eyebrow">Premium BDSM-editorial portfolio</p>
            <h1 className="displayTitle">Tina</h1>
            <p className="lead">
              A dark, cinematic portfolio concept for refined adult work: leather mood, red-light
              atmosphere, metallic detail, and a confident gallery-first presentation.
            </p>
            <div className="buttonRow">
              <Link className="button buttonPrimary" href="/gallery">
                View gallery
              </Link>
              <Link className="button" href="/links">
                Official links
              </Link>
            </div>
            <div className="heroMeta" aria-label="Portfolio style notes">
              <span className="metaPill">Classy</span>
              <span className="metaPill">Cinematic</span>
              <span className="metaPill">BDSM-inspired</span>
              <span className="metaPill">Non-explicit proof of concept</span>
            </div>
          </div>
          <div className="heroPortrait" aria-label="Proof-of-concept Tina hero image">
            <img src="/images/tina/tina-hero.webp" alt="Tina leather editorial proof of concept" />
          </div>
        </div>
      </section>

    </>
  );
}
