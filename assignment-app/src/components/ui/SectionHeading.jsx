import styles from "./SectionHeading.module.css";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className = "",
}) {
  return (
    <header
      className={`${styles.wrap} ${styles[align]} ${light ? styles.light : ""} ${className}`.trim()}
    >
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.title}>{title}</h2>
      {description ? <p className={styles.desc}>{description}</p> : null}
    </header>
  );
}
