import { describe, expect, it } from "vitest";
import {
  SITE_ALTERNATE_ORIGIN,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_ORIGIN,
  SITE_ROUTES,
  getAbsoluteUrl
} from "./siteMetadata";

describe("site metadata", () => {
  it("uses the www domain as canonical and keeps the apex domain as an alternate identity", () => {
    expect(SITE_NAME).toBe("Tina Model Official");
    expect(SITE_ORIGIN).toBe("https://www.tinamodelofficial.com");
    expect(SITE_ALTERNATE_ORIGIN).toBe("https://tinamodelofficial.com");
    expect(getAbsoluteUrl("/gallery")).toBe("https://www.tinamodelofficial.com/gallery");
  });

  it("describes the official Tina site for search and social previews", () => {
    expect(SITE_DESCRIPTION).toContain("official");
    expect(SITE_DESCRIPTION).toContain("Tina");
    expect(SITE_ROUTES.map((route) => route.path)).toEqual(["/", "/gallery", "/links", "/cookies"]);
  });
});
