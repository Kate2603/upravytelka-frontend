import React from "react";
import Section from "../../components/ui/Section.jsx";
import Card from "../../components/ui/Card.jsx";
import Button from "../../components/ui/Button.jsx";
import styles from "./Cta.module.css";

export default function Cta({ onCta }) {
  return (
    <Section
      id="cta"
      title="Готові передати нерухомість під ключ?"
      subtitle="Напишіть мені — я уточню деталі й запропоную план дій саме для вашого об’єкта в Харкові."
    >
      <Card className={styles.box}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h3 className={styles.title}>Безкоштовна консультація</h3>
            <p className={styles.subtitle}>
              10–15 хвилин, щоб зрозуміти: що потрібно зробити, скільки це займе
              часу і як швидко ви зможете здати житло без стресу.
            </p>

            <ul className={styles.list}>
              <li className={styles.item}>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
                <span>Оціню план підготовки об’єкта</span>
              </li>
              <li className={styles.item}>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
                <span>Поясню, як контролюються комунальні та платежі</span>
              </li>
              <li className={styles.item}>
                <span className={styles.check} aria-hidden="true">
                  ✓
                </span>
                <span>Підкажу оптимальний формат співпраці</span>
              </li>
            </ul>
          </div>

          <div className={styles.actions}>
            <Button
              variant="primary"
              type="button"
              className={styles.btn}
              onClick={() => onCta?.("#lead")}
            >
              Залишити заявку
            </Button>

            <Button
              as="a"
              href="https://t.me/Kitivell"
              variant="ghost"
              className={styles.btn}
              target="_blank"
              rel="noreferrer"
            >
              Написати в Telegram
            </Button>

            <p className={styles.hint}>Відповідаю швидко • Харків</p>
          </div>
        </div>
      </Card>
    </Section>
  );
}
