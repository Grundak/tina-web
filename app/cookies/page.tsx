import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Information",
  description: "Cookie and browser storage information for Tina Model Official.",
  alternates: {
    canonical: "/cookies"
  },
  openGraph: {
    title: "Cookie Information | Tina Model Official",
    description: "Cookie and browser storage information for Tina Model Official.",
    url: "/cookies"
  }
};

const cookieNotes = [
  {
    title: "Essential preferences",
    text:
      "This site may store a small preference in your browser so the adult content confirmation does not need to appear on every visit."
  },
  {
    title: "Embedded and third-party services",
    text:
      "If official links or embedded services are added later, those providers may set their own cookies according to their own policies."
  },
  {
    title: "Managing cookies",
    text:
      "You can clear or block cookies in your browser settings. Blocking essential storage may cause the age confirmation to appear more often."
  }
];

export default function CookiesPage() {
  return (
    <section className="page legalPage">
      <p className="eyebrow">Cookie information</p>
      <h1 className="sectionTitle">How this site uses browser storage.</h1>
      <p className="lead">
        This page explains the simple cookie and browser storage use for Tina Model Official. It is
        informational and should not be treated as legal advice.
      </p>
      <div className="legalStack">
        {cookieNotes.map((note) => (
          <section className="legalBlock" key={note.title}>
            <h2>{note.title}</h2>
            <p>{note.text}</p>
          </section>
        ))}
      </div>
    </section>
  );
}
