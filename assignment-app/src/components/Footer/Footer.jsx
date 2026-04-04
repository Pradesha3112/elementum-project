import { Container } from "../ui/Container";
import styles from "./Footer.module.css";

const COLS = [
  {
    title: "Product",
    links: [
      { href: "#features", label: "Features" },
      { href: "#pricing", label: "Pricing" },
      { href: "#", label: "Changelog" },
      { href: "#", label: "Integrations" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "About" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Press" },
      { href: "#", label: "Contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "#", label: "Documentation" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Support" },
      { href: "#", label: "Status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
      { href: "#", label: "Security" },
    ],
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <span className={styles.logoMark} aria-hidden />
              Flowstack
            </a>
            <p className={styles.tagline}>
              The calm control center for teams who ship software — without losing the plot.
            </p>
          </div>
          <nav className={styles.cols} aria-label="Footer">
            {COLS.map((col) => (
              <div key={col.title} className={styles.col}>
                <h2 className={styles.colTitle}>{col.title}</h2>
                <ul className={styles.colList}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a className={styles.colLink} href={link.href}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copy}>&copy; {new Date().getFullYear()} Flowstack, Inc.</p>
          <div className={styles.social}>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              𝕏
            </a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              in
            </a>
            <a href="#" className={styles.socialLink} aria-label="GitHub">
              gh
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
