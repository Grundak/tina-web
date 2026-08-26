import type { SocialLink } from "@/data/socialLinks";
import { isSocialLinkEnabled } from "@/lib/socialLinks";

type SocialLinkCardProps = {
  link: SocialLink;
};

export function SocialLinkCard({ link }: SocialLinkCardProps) {
  const isEnabled = isSocialLinkEnabled(link);
  const content = (
    <>
      <div>
        <h2>{link.label}</h2>
        <p>{link.description}</p>
        {!isEnabled ? <span className="disabledLabel">Link ready to add</span> : null}
      </div>
      <div className="socialIcon" aria-hidden="true">
        {link.icon}
      </div>
    </>
  );

  if (!isEnabled) {
    return (
      <div className="socialCard socialCardDisabled" aria-disabled="true">
        {content}
      </div>
    );
  }

  return (
    <a className="socialCard" href={link.href} rel="noreferrer" target="_blank">
      {content}
    </a>
  );
}

