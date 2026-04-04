import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import styles from "./Testimonials.module.css";

const QUOTES = [
  {
    quote:
      "We replaced three tools with Flowstack and finally have one narrative from discovery to release.",
    name: "Maya Chen",
    role: "VP Product, Brightline",
  },
  {
    quote:
      "The automations around handoffs cut our review cycles in half without adding process debt.",
    name: "Jordan Ellis",
    role: "Engineering Lead, Orbital",
  },
  {
    quote:
      "Onboarding a new squad used to take weeks. Now it is a guided afternoon in the same workspace.",
    name: "Samira Okonkwo",
    role: "Head of Ops, Harbor",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Customers"
          title="Loved by teams who care about craft"
          description="From seed-stage startups to global enterprises, teams use Flowstack to stay aligned without slowing down."
        />
        <ul className={styles.grid}>
          {QUOTES.map((item) => (
            <li key={item.name} className={styles.card}>
              <blockquote className={styles.quote}>{item.quote}</blockquote>
              <footer className={styles.footer}>
                <span className={styles.avatar} aria-hidden>
                  {item.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")}
                </span>
                <div>
                  <cite className={styles.name}>{item.name}</cite>
                  <p className={styles.role}>{item.role}</p>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
