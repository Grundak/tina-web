import { describe, expect, it } from "vitest";
import { shouldLoadHomeBackgroundVideo } from "./homeBackgroundVideo";

describe("home background video loading", () => {
  it("loads only when the viewport is wide and motion/data preferences allow it", () => {
    expect(
      shouldLoadHomeBackgroundVideo({
        isWideViewport: true,
        prefersReducedMotion: false,
        saveData: false
      })
    ).toBe(true);

    expect(
      shouldLoadHomeBackgroundVideo({
        isWideViewport: false,
        prefersReducedMotion: false,
        saveData: false
      })
    ).toBe(false);

    expect(
      shouldLoadHomeBackgroundVideo({
        isWideViewport: true,
        prefersReducedMotion: true,
        saveData: false
      })
    ).toBe(false);

    expect(
      shouldLoadHomeBackgroundVideo({
        isWideViewport: true,
        prefersReducedMotion: false,
        saveData: true
      })
    ).toBe(false);
  });
});
