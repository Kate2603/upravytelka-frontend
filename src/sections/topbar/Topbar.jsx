import React from 'react';
import Button from '../../components/ui/Button.jsx';
import styles from './Topbar.module.css';

export default function Topbar({ onNav }) {
  function navTo(e, hash) {
    e.preventDefault();
    onNav?.(hash);
  }

  return (
    <header className={styles.topbar}>
      <div className="container">
        <div className={styles.inner}>
          <a
            className={styles.brand}
            href="#top"
            onClick={e => navTo(e, '#top')}
          >
            <span className={styles.logo} aria-hidden="true" />
            <span className={styles.brandText}>Управителька</span>
          </a>

          <nav className={styles.nav} aria-label="Навігація">
            <a href="#about" onClick={e => navTo(e, '#about')}>
              Хто я
            </a>
            <a href="#services" onClick={e => navTo(e, '#services')}>
              Послуги
            </a>
            <a href="#process" onClick={e => navTo(e, '#process')}>
              Як працюємо
            </a>
            <a href="#why" onClick={e => navTo(e, '#why')}>
              Чому зручно
            </a>
            <a href="#benefits" onClick={e => navTo(e, '#benefits')}>
              Результат
            </a>
          </nav>

          <div className={styles.actions}>
            <Button
              variant="ghost"
              onClick={() => onNav?.('#lead')}
              type="button"
            >
              Залишити заявку
            </Button>

            <Button
              variant="primary"
              onClick={() => onNav?.('#lead')}
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
