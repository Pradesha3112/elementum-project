import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.glow} aria-hidden />
      <Container className={styles.grid}>
        <div className={styles.copy}>
          <p className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden />
            New — Collaborative workflows 2.0
          </p>
          <h1 id="hero-title" className={styles.title}>
            Ship product experiences your team actually loves
          </h1>
          <p className={styles.lead}>
            Plan, build, and launch in one calm workspace. Flowstack connects design,
            engineering, and ops so you move from idea to release without the chaos.
          </p>
          <div className={styles.ctas}>
            <Button size="lg" href="#cta">
              Start free trial
            </Button>
            <Button size="lg" variant="secondary" href="#showcase">
              Watch demo
            </Button>
          </div>
          <dl className={styles.meta}>
            <div>
              <dt className={styles.metaLabel}>Teams onboarded</dt>
              <dd className={styles.metaValue}>12k+</dd>
            </div>
            <div>
              <dt className={styles.metaLabel}>Avg. cycle time cut</dt>
              <dd className={styles.metaValue}>38%</dd>
            </div>
            <div>
              <dt className={styles.metaLabel}>Uptime</dt>
              <dd className={styles.metaValue}>99.99%</dd>
            </div>
          </dl>
        </div>

        <div className={styles.visual} aria-hidden>
          <div className={styles.cardStack}>
            <div className={`${styles.mockCard} ${styles.mockBack}`}>
              <div className={styles.mockBar} />
              <div className={styles.mockRows}>
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className={`${styles.mockCard} ${styles.mockFront}`}>
              <header className={styles.mockHeader}>
                <span className={styles.mockPill}>Sprint 24</span>
                <span className={styles.mockStatus}>On track</span>
              </header>
              <ul className={styles.mockList}>
                <li>
                  <span className={styles.dot} /> Design system audit
                </li>
                <li>
                  <span className={styles.dot} /> API integration
                </li>
                <li>
                  <span className={styles.dotDone} /> QA sign-off
                </li>
              </ul>
              <div className={styles.mockChart}>
                <span style={{ height: "40%" }} />
                <span style={{ height: "65%" }} />
                <span style={{ height: "45%" }} />
                <span style={{ height: "88%" }} />
                <span style={{ height: "55%" }} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
