import { SocialLinkCard } from "@/components/SocialLinkCard";
import { socialLinks } from "@/data/socialLinks";

export const metadata = {
  title: "Official Links | Tina"
};

export default function LinksPage() {
  return (
    <section className="page linksPage">
      <p className="eyebrow">Official links</p>
      <h1 className="sectionTitle">Only the places Tina chooses.</h1>
      <p className="lead">
        OnlyFans and Fansly cards are prepared with blank links. Add the final URLs in{" "}
        <code>src/data/socialLinks.ts</code> when the accounts are ready.
      </p>
      <div className="socialGrid">
        {socialLinks.map((link) => (
          <SocialLinkCard key={link.id} link={link} />
        ))}
      </div>
    </section>
  );
}

