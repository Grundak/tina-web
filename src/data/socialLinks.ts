export type SocialLink = {
  id: "onlyfans" | "fansly";
  label: string;
  href: string;
  description: string;
  icon: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: "onlyfans",
    label: "OnlyFans",
    href: "",
    description: "Official OnlyFans link. Add the final URL in src/data/socialLinks.ts.",
    icon: "OF"
  },
  {
    id: "fansly",
    label: "Fansly",
    href: "",
    description: "Official Fansly link. Add the final URL in src/data/socialLinks.ts.",
    icon: "F"
  }
];

