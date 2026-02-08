import React from "react";
import Button from "../../components/ui/Button.jsx";
import styles from "./Topbar.module.css";

export default function Topbar({ onNav }) {
  return (
    <header className={styles.topbar}>
      <div className="container">
        <div className={styles.inner}>
          <a
            className={styles.brand}
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              onNav?.("#top");
            }}
          >
            <span className={styles.logo} aria-hidden="true" />
            <span className={styles.brandText}>Управителька</span>
          </a>

          <nav className={styles.nav} aria-label="Навігація">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                onNav?.("#about");
              }}
            >
              Хто я
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
              href="#process"
              onClick={(e) => {
                e.preventDefault();
                onNav?.("#process");
              }}
            >
              Як працюємо
            </a>
            <a
              href="#why"
              onClick={(e) => {
                e.preventDefault();
                onNav?.("#why");
              }}
            >
              Чому зручно
            </a>
            <a
              href="#benefits"
              onClick={(e) => {
                e.preventDefault();
                onNav?.("#benefits");
              }}
            >
              Результат
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
          </nav>

          <div className={styles.actions}>
            <Button
              variant="ghost"
              onClick={() => onNav?.("#lead")}
              type="button"
            >
              Залишити заявку
            </Button>

            <Button
              variant="primary"
              onClick={() => onNav?.("#lead")}
              type="button"
            >
              Безкоштовна консультація
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
