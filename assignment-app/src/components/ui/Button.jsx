import styles from "./Button.module.css";

const variants = {
  primary: styles.primary,
  secondary: styles.secondary,
  ghost: styles.ghost,
  dark: styles.dark,
};

const sizes = {
  md: styles.sizeMd,
  lg: styles.sizeLg,
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  type = "button",
  ...rest
}) {
  const classes = `${styles.btn} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`.trim();

  if (href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
