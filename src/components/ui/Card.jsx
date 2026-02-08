import React from "react";
import styles from "./Card.module.css";

export default function Card({
  as: Tag = "div",
  size = "md", // "sm" | "md"
  className = "",
  children,
  ...rest
}) {
  const sizeClass = size === "sm" ? styles.sm : styles.md;

  return (
    <Tag className={`${styles.card} ${sizeClass} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
