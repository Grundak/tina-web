import { describe, expect, it } from "vitest";
import { shouldLoadHomeBackgroundVideo } from "./homeBackgroundVideo";

describe("home background video loading", () => {
  it("loads when motion and data preferences allow it", () => {
    expect(
      shouldLoadHomeBackgroundVideo({
        prefersReducedMotion: false,
        saveData: false
      })
    ).toBe(true);
  });

  it("does not block loading on narrow mobile viewports", () => {
    expect(
      shouldLoadHomeBackgroundVideo({
        isWideViewport: false,
        prefersReducedMotion: false,
        saveData: false
      })
    ).toBe(true);
  });

  it("respects reduced motion and data saver preferences", () => {
    expect(
      shouldLoadHomeBackgroundVideo({
        prefersReducedMotion: true,
        saveData: false
      })
    ).toBe(false);

    expect(
      shouldLoadHomeBackgroundVideo({
        prefersReducedMotion: false,
        saveData: true
      })
    ).toBe(false);
  });
});
