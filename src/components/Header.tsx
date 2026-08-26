/* eslint-disable @next/next/no-img-element -- Header icon is a small public brand asset. */
import Link from "next/link";
import { SpotlightMenu } from "./SpotlightMenu";

export function Header() {
  return (
    <header className="header">
      <Link className="brand brandIcon" href="/" aria-label="Tina home">
        <img src="/images/tina/tina-button-icon.webp" alt="" />
      </Link>
      <SpotlightMenu />
    </header>
  );
}

