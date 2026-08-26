"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function PageLoader() {
  const pathname = usePathname();
  const hasMounted = useRef(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsVisible(false);
      hasMounted.current = true;
    }, 1550);

    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!hasMounted.current) {
      return;
    }

    setIsVisible(true);
    const timeout = window.setTimeout(() => setIsVisible(false), 620);

    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className={`pageLoader ${isVisible ? "pageLoaderVisible" : ""}`} aria-hidden="true">
      <div className="pageLoaderInner">
        <span className="pageLoaderName">Tina</span>
        <span className="pageLoaderLine" />
      </div>
    </div>
  );
}
