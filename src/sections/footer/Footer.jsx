import React from "react";
import styles from "./Footer.module.css";

export default function Footer({ onNav }) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.row}>
          <div>
            <b>Управителька • Катерина Величко</b>
            <div className={styles.muted}>
              Управління орендою нерухомості під ключ у Харкові.
            </div>
          </div>

          <div className={styles.links}>
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                onNav?.("#top");
              }}
            >
              Вгору
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                onNav?.("#services");
              }}
            >
              Послуги
            </a>
            <a
              href="#lead"
              onClick={(e) => {
                e.preventDefault();
                onNav?.("#lead");
              }}
            >
              Заявка
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
