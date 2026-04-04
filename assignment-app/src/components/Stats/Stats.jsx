import { Container } from "../ui/Container";
import styles from "./Stats.module.css";

const STATS = [
  { value: "4.9 / 5", label: "Average satisfaction on G2" },
  { value: "142", label: "Countries with active teams" },
  { value: "2.4M", label: "Tasks completed each week" },
  { value: "< 15m", label: "Median time to first value" },
];

export function Stats() {
  return (
    <section className={styles.section} aria-label="Key metrics">
      <Container>
        <ul className={styles.grid}>
          {STATS.map((s) => (
            <li key={s.label} className={styles.item}>
              <p className={styles.value}>{s.value}</p>
              <p className={styles.label}>{s.label}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
