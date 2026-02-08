import React from "react";
import Button from "../../components/ui/Button.jsx";
import Card from "../../components/ui/Card.jsx";
import styles from "./Hero.module.css";

export default function Hero({ onCta }) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <div className={styles.badge}>
              <span className={styles.dot} aria-hidden="true" />
              Харків • управління орендою під ключ
            </div>

            <h1 className={styles.h1}>Оренда нерухомості під ключ у Харкові</h1>

            <p className={styles.lead}>
              Я — <b>Катерина Величко</b>. Беру вашу нерухомість під управління:
              привожу до ладу, організовую ремонт за потреби, роблю клінінг,
              знаходжу мешканців, контролюю стан об’єкта та{" "}
              <b>вчасно оплачую оренду й усі комунальні послуги</b>, щоб не було
              боргів.
            </p>

            <div className={styles.heroActions}>
              <Button
                variant="primary"
                type="button"
                onClick={() => onCta?.("#lead")}
              >
                Отримати консультацію
              </Button>

              <Button type="button" onClick={() => onCta?.("#services")}>
                Подивитись послуги
              </Button>
            </div>

            <p className={styles.small}>
              Підходить власникам квартир/будинків у Харкові, які хочуть дохід
              без стресу та постійного контролю.
            </p>
          </div>

          <aside>
            <Card className={styles.aside}>
              <div className={styles.photoRow}>
                <img
                  className={styles.avatar}
                  src="/kateryna.jpg"
                  alt="Катерина Величко"
                />
                <div>
                  <div className={styles.name}>Катерина Величко</div>
                  <div className={styles.role}>
                    Управителька нерухомості • Харків
                  </div>
                  <div className={styles.pitch}>
                    Ваша нерухомість — у порядку. Платежі — під контролем. Ви —
                    спокійні.
                  </div>
                </div>
              </div>

              <Card size="sm" className={styles.miniCard}>
                <b>Не “просто ріелтор”</b>
                <div className={styles.miniText}>
                  Я — організаційна управителька: керую процесом від підготовки
                  до контролю проживання.
                </div>
              </Card>

              <Card size="sm" className={styles.miniCard}>
                <b>Комунальні — під контролем</b>
                <div className={styles.miniText}>
                  Рахую і оплачую комунальні послуги вчасно, щоб не
                  накопичувалися борги.
                </div>
              </Card>

              <Card size="sm" className={styles.miniCard}>
                <b>Ваш спокій — мій KPI</b>
                <div className={styles.miniText}>
                  Порядок, прозорість, відповідальність і регулярний контроль
                  стану нерухомості.
                </div>
              </Card>

              <div className={styles.asideBtn}>
                <Button
                  variant="primary"
                  type="button"
                  className={styles.full}
                  onClick={() => onCta?.("#lead")}
                >
                  Залишити заявку
                </Button>
              </div>
            </Card>
          </aside>
        </div>
      </div>
    </section>
  );
}
