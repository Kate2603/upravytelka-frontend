import React from "react";
import styles from "./Grid.module.css";

export function Grid2({ className = "", children, ...rest }) {
  return (
    <div className={`${styles.grid2} ${className}`} {...rest}>
      {children}
    </div>
  );
}

export function Grid3({ className = "", children, ...rest }) {
  return (
    <div className={`${styles.grid3} ${className}`} {...rest}>
      {children}
    </div>
  );
}
