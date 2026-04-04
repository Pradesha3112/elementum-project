import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import styles from "./Features.module.css";

const ITEMS = [
  {
    title: "Unified roadmap",
    body: "Connect milestones across squads with a single source of truth everyone can trust.",
    icon: "◆",
  },
  {
    title: "Real-time sync",
    body: "Changes propagate instantly so design, dev, and PM stay aligned without extra meetings.",
    icon: "◇",
  },
  {
    title: "Insightful analytics",
    body: "Spot bottlenecks early with cycle time, throughput, and quality signals in one view.",
    icon: "○",
  },
];

export function Features() {
  return (
    <section id="features" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Product"
          title="Everything you need to move work forward"
          description="Purpose-built primitives that match how great teams actually ship — flexible enough for your process, opinionated where it matters."
        />
        <ul className={styles.grid}>
          {ITEMS.map((item) => (
            <li key={item.title} className={styles.card}>
              <span className={styles.icon} aria-hidden>
                {item.icon}
              </span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardBody}>{item.body}</p>
              <a className={styles.link} href="#showcase">
                Learn more
                <span className={styles.arrow} aria-hidden>
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
