export type HomeBackgroundVideoPreferences = {
  isWideViewport: boolean;
  prefersReducedMotion: boolean;
  saveData: boolean;
};

export function shouldLoadHomeBackgroundVideo({
  isWideViewport,
  prefersReducedMotion,
  saveData
}: HomeBackgroundVideoPreferences): boolean {
  return isWideViewport && !prefersReducedMotion && !saveData;
}
