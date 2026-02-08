import React from "react";
import styles from "./CheckList.module.css";

export default function CheckList({ items, className = "" }) {
  return (
    <ul className={`${styles.list} ${className}`}>
      {items.map((it) => (
        <li key={it.title} className={styles.li}>
          <span className={styles.check} aria-hidden="true">
            ✓
          </span>
          <div>
            <b>{it.title}</b>
            {it.sub ? <span className={styles.sub}>{it.sub}</span> : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
