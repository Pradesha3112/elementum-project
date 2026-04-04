import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import styles from "./Pricing.module.css";

const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "per member / mo",
    blurb: "For small teams getting organized.",
    features: ["Up to 10 seats", "Core boards & lists", "7-day version history", "Email support"],
    cta: "Start for free",
    featured: false,
  },
  {
    name: "Professional",
    price: "$24",
    period: "per member / mo",
    blurb: "For growing teams shipping every week.",
    features: [
      "Unlimited seats",
      "Automations & webhooks",
      "Analytics & reporting",
      "SSO (Google, Okta)",
      "Priority support",
    ],
    cta: "Start trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "annual agreements",
    blurb: "For regulated orgs and scale programs.",
    features: [
      "Dedicated success partner",
      "Advanced security reviews",
      "Data residency options",
      "Custom integrations",
    ],
    cta: "Talk to sales",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Plans that scale with your ambition"
          description="Start free, prove value quickly, and graduate when you need deeper controls and support."
        />
        <ul className={styles.grid}>
          {PLANS.map((plan) => (
            <li
              key={plan.name}
              className={`${styles.card} ${plan.featured ? styles.featured : ""}`.trim()}
            >
              {plan.featured ? <span className={styles.badge}>Most popular</span> : null}
              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.blurb}>{plan.blurb}</p>
              <p className={styles.price}>
                <span className={styles.priceValue}>{plan.price}</span>
                <span className={styles.pricePeriod}>{plan.period}</span>
              </p>
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.tick} aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.featured ? "primary" : "secondary"}
                className={styles.planCta}
                href="#cta"
                size="lg"
              >
                {plan.cta}
              </Button>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
