export type HomeBackgroundVideoPreferences = {
  isWideViewport?: boolean;
  prefersReducedMotion: boolean;
  saveData: boolean;
};

export function shouldLoadHomeBackgroundVideo({
  prefersReducedMotion,
  saveData
}: HomeBackgroundVideoPreferences): boolean {
  return !prefersReducedMotion && !saveData;
}
