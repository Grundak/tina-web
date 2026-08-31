import type { Metadata } from "next";
import { SocialLinkCard } from "@/components/SocialLinkCard";
import { socialLinks } from "@/data/socialLinks";

const linksDescription =
  "Find Tina Model Official verified Fansly posts and official social links.";

export const metadata: Metadata = {
  title: "Official Links",
  description: linksDescription,
  alternates: {
    canonical: "/links"
  },
  openGraph: {
    title: "Official Links | Tina Model Official",
    description: linksDescription,
    url: "/links"
  },
  twitter: {
    title: "Official Links | Tina Model Official",
    description: linksDescription
  }
};

export default function LinksPage() {
  return (
    <section className="page linksPage">
      <p className="eyebrow">Official links</p>
      <h1 className="sectionTitle">Only the places Tina chooses.</h1>
      <p className="lead">Follow Tina on her official Fansly profile for the latest posts.</p>
      <div className="socialGrid">
        {socialLinks.map((link) => (
          <SocialLinkCard key={link.id} link={link} />
        ))}
      </div>
    </section>
  );
}
