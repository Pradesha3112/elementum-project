import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import styles from "./CtaBanner.module.css";

export function CtaBanner() {
  return (
    <section id="cta" className={styles.section} aria-labelledby="cta-title">
      <Container>
        <div className={styles.inner}>
          <div className={styles.copy}>
            <h2 id="cta-title" className={styles.title}>
              Ready to calm the chaos of shipping?
            </h2>
            <p className={styles.lead}>
              Join thousands of teams who use Flowstack to plan with clarity, collaborate with
              context, and launch with confidence.
            </p>
          </div>
          <div className={styles.actions}>
            <Button variant="dark" size="lg" href="#">
              Get started free
            </Button>
            <Button variant="ghost" size="lg" className={styles.ghostLight} href="#pricing">
              Compare plans
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
