import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <p className="footerBrand">Tina Model Official</p>
        <p>© {year} Tina Model Official. All rights reserved.</p>
        <p>
          Adults only. <Link href="/cookies">Cookies</Link>
        </p>
      </div>
    </footer>
  );
}
