import React from "react";
import Section from "../../components/ui/Section.jsx";
import styles from "./Process.module.css";

export default function Process() {
  return (
    <Section
      id="process"
      title="Як ми починаємо співпрацю"
      subtitle="Простий процес: без хаосу, з логікою і відповідальністю."
    >
      <div className={styles.grid}>
        <div className={styles.box}>
          <div className={styles.photoBox}>
            <img
              src="/kateryna-tablet.png"
              alt="Катерина Величко — контроль об’єкта та процесів"
              className={styles.photo}
            />
          </div>
        </div>

        <div className={styles.steps}>
          <div className={styles.cards}>
            <div className={`${styles.card} ${styles.box}`}>
              <h3 className={styles.title}>
                <span className={styles.badge}>1</span>
                Заявка
              </h3>
              <p className={styles.textMuted}>
                Ви залишаєте заявку. Я уточнюю деталі по об’єкту та вашим
                очікуванням.
              </p>
            </div>

            <div className={`${styles.card} ${styles.box}`}>
              <h3 className={styles.title}>
                <span className={styles.badge}>2</span>
                Підготовка
              </h3>
              <p className={styles.textMuted}>
                Оцінка, план робіт: ремонт (за потреби), заміни, клінінг,
                підготовка до заселення.
              </p>
            </div>

            <div className={`${styles.card} ${styles.box}`}>
              <h3 className={styles.title}>
                <span className={styles.badge}>3</span>
                Оренда й контроль
              </h3>
              <p className={styles.textMuted}>
                Пошук мешканців, заселення, контроль стану, оплата комунальних і
                дисципліна платежів.
              </p>
            </div>
          </div>

          <p className={styles.note}>
            Прозорий процес без сюрпризів — ви завжди знаєте, що відбувається з
            вашою нерухомістю.
          </p>
        </div>
      </div>
    </Section>
  );
}
