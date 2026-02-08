import React from "react";
import styles from "./Section.module.css";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className={styles.section}>
      <div className="container">
        <div className={styles.titleRow}>
          <div>
            <h2 className={styles.h2}>{title}</h2>
            {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
          </div>
        </div>

        <div className={styles.body}>{children}</div>
      </div>
    </section>
  );
}
