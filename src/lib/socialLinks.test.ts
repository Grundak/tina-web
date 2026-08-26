import { describe, expect, it } from "vitest";
import type { SocialLink } from "@/data/socialLinks";
import { getEnabledSocialLinks, isSocialLinkEnabled } from "./socialLinks";

const blankLink: SocialLink = {
  id: "onlyfans",
  label: "OnlyFans",
  href: "",
  description: "Official OnlyFans page",
  icon: "OF"
};

const liveLink: SocialLink = {
  id: "fansly",
  label: "Fansly",
  href: "https://fansly.com/example",
  description: "Official Fansly page",
  icon: "F"
};

describe("social link helpers", () => {
  it("treats blank links as disabled", () => {
    expect(isSocialLinkEnabled(blankLink)).toBe(false);
  });

  it("treats real URLs as enabled", () => {
    expect(isSocialLinkEnabled(liveLink)).toBe(true);
  });

  it("filters disabled links out of enabled collections", () => {
    expect(getEnabledSocialLinks([blankLink, liveLink])).toEqual([liveLink]);
  });
});

