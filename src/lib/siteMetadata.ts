export const SITE_NAME = "Tina Model Official";
export const SITE_ORIGIN = "https://www.tinamodelofficial.com";
export const SITE_ALTERNATE_ORIGIN = "https://tinamodelofficial.com";
export const SITE_DESCRIPTION =
  "The official Tina Model portfolio with cinematic gallery previews and verified Fansly links.";

export const SITE_KEYWORDS = [
  "Tina Model Official",
  "Tina model",
  "Tina Fansly",
  "adult model portfolio",
  "cinematic model gallery",
  "official Tina links"
];

export const SITE_ROUTES = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "weekly"
  },
  {
    path: "/gallery",
    priority: 0.8,
    changeFrequency: "weekly"
  },
  {
    path: "/links",
    priority: 0.9,
    changeFrequency: "weekly"
  },
  {
    path: "/cookies",
    priority: 0.3,
    changeFrequency: "yearly"
  }
] as const;

export function getAbsoluteUrl(path = "/"): string {
  return new URL(path, SITE_ORIGIN).toString();
}
