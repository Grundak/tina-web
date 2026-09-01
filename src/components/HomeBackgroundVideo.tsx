"use client";

import { useEffect, useState } from "react";
import { shouldLoadHomeBackgroundVideo } from "@/lib/homeBackgroundVideo";

const HOME_BACKGROUND_VIDEO_SRC = "/videos/tina-home-background.mp4";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

export function HomeBackgroundVideo() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    let timeoutId: number | undefined;

    const evaluate = () => {
      const navigatorWithConnection = navigator as NavigatorWithConnection;

      setShouldLoad(
        shouldLoadHomeBackgroundVideo({
          prefersReducedMotion: motionQuery.matches,
          saveData: navigatorWithConnection.connection?.saveData ?? false
        })
      );
    };

    const scheduleLoadCheck = () => {
      timeoutId = window.setTimeout(evaluate, 700);
    };

    if (document.readyState === "complete") {
      scheduleLoadCheck();
    } else {
      window.addEventListener("load", scheduleLoadCheck, { once: true });
    }

    motionQuery.addEventListener("change", evaluate);

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }

      window.removeEventListener("load", scheduleLoadCheck);
      motionQuery.removeEventListener("change", evaluate);
    };
  }, []);

  return (
    <div className="heroBackgroundVideo" aria-hidden="true">
      {shouldLoad ? (
        <video
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster="/images/tina/tina-bg-mystery.webp"
        >
          <source src={HOME_BACKGROUND_VIDEO_SRC} type="video/mp4" />
        </video>
      ) : null}
    </div>
  );
}
