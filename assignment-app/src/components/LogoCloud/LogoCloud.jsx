import { Container } from "../ui/Container";
import styles from "./LogoCloud.module.css";

const BRANDS = ["Northwind", "Brightline", "Orbital", "Kite", "Harbor", "Stacked"];

export function LogoCloud() {
  return (
    <section className={styles.section} aria-label="Trusted by teams at">
      <Container>
        <p className={styles.label}>Trusted by modern product teams</p>
        <ul className={styles.list}>
          {BRANDS.map((name) => (
            <li key={name} className={styles.item}>
              <span className={styles.name}>{name}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
