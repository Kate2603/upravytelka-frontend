import React from "react";
import styles from "./Button.module.css";

export default function Button({
  as: Tag = "button",
  variant = "default", // default | primary | ghost
  className = "",
  children,
  ...rest
}) {
  const v =
    variant === "primary"
      ? styles.primary
      : variant === "ghost"
        ? styles.ghost
        : styles.default;

  return (
    <Tag className={`${styles.base} ${v} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
