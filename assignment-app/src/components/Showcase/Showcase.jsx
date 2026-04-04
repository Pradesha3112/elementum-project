import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import styles from "./Showcase.module.css";

const BULLETS = [
  "Automations that keep handoffs tight and traceable",
  "Role-based views so everyone sees the right level of detail",
  "Exports and webhooks that plug into your existing toolchain",
];

export function Showcase() {
  return (
    <section id="showcase" className={styles.section}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <SectionHeading
              align="left"
              eyebrow="Solutions"
              title="A workspace that respects how your team works"
              description="Flowstack adapts to your rituals — not the other way around. From weekly planning to release readiness, keep context and accountability in one place."
            />
            <ul className={styles.list}>
              {BULLETS.map((text) => (
                <li key={text} className={styles.listItem}>
                  <span className={styles.check} aria-hidden />
                  {text}
                </li>
              ))}
            </ul>
            <Button href="#pricing">Explore plans</Button>
          </div>
          <div className={styles.visual} aria-hidden>
            <div className={styles.panel}>
              <div className={styles.panelTop}>
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
              </div>
              <div className={styles.panelBody}>
                <div className={styles.sidebar}>
                  <span />
                  <span />
                  <span />
                  <span className={styles.sidebarActive} />
                  <span />
                </div>
                <div className={styles.main}>
                  <div className={styles.toolbar}>
                    <span />
                    <span />
                  </div>
                  <div className={styles.blocks}>
                    <div className={styles.blockLarge} />
                    <div className={styles.blockGrid}>
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
