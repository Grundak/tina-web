import { describe, expect, it } from "vitest";
import { socialLinks } from "./socialLinks";

describe("social links data", () => {
  it("publishes only the live Fansly link", () => {
    expect(socialLinks).toEqual([
      {
        id: "fansly",
        label: "Fansly",
        href: "https://fansly.com/Tynamodelxxx/posts",
        description: "Official Fansly posts from Tina.",
        icon: "F"
      }
    ]);
  });
});
