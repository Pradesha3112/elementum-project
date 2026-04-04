import { useState } from "react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "#features", label: "Product" },
  { href: "#showcase", label: "Solutions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Customers" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a href="#" className={styles.logo} aria-label="Flowstack home">
          <span className={styles.logoMark} aria-hidden />
          <span className={styles.logoText}>Flowstack</span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className={styles.navLink} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button variant="ghost" className={styles.hideMobile} href="#cta">
            Log in
          </Button>
          <Button href="#cta">Get started</Button>
        </div>

        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.menuIcon} data-open={open} />
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={`${styles.mobile} ${open ? styles.mobileOpen : ""}`.trim()}
        aria-hidden={!open}
      >
        <Container>
          <ul className={styles.mobileList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className={styles.mobileLink}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button variant="secondary" href="#cta" className={styles.mobileCta}>
                Log in
              </Button>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
