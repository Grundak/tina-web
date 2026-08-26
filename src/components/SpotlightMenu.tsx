"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home", number: "01" },
  { href: "/gallery", label: "Gallery", number: "02" },
  { href: "/links", label: "Links", number: "03" }
];

export function SpotlightMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <button
        className={`menuButton ${isOpen ? "menuButtonOpen" : ""}`}
        type="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="menuIcon" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <div
        className={`menuOverlay ${isOpen ? "menuOverlayOpen" : ""}`}
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(false)}
      >
        <aside
          className={`menuPanel ${isOpen ? "menuPanelOpen" : ""}`}
          onClick={(event) => event.stopPropagation()}
        >
          <nav className="menuNav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                className="menuLink"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
                <span>{item.number}</span>
              </Link>
            ))}
          </nav>
          <p className="menuNote">
            Classy portfolio navigation with a cinematic drawer reveal and quick access to the
            gallery and official links.
          </p>
        </aside>
      </div>
    </>
  );
}

