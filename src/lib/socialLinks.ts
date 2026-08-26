import type { SocialLink } from "@/data/socialLinks";

export function isSocialLinkEnabled(link: SocialLink): boolean {
  return link.href.trim().length > 0;
}

export function getEnabledSocialLinks(links: SocialLink[]): SocialLink[] {
  return links.filter(isSocialLinkEnabled);
}

