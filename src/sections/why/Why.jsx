import React from "react";
import Section from "../../components/ui/Section.jsx";
import Card from "../../components/ui/Card.jsx";
import Button from "../../components/ui/Button.jsx";
import { Grid3 } from "../../components/ui/Grid.jsx";
import styles from "./Why.module.css";

export default function Why({ onCta }) {
  return (
    <Section
      id="why"
      title="Чому “Управителька” — це зручно"
      subtitle="Ви передаєте весь процес — але не втрачаєте контроль. Я тримаю порядок, платежі і стан житла в системі."
    >
      <div className={styles.wrap}>
        <Grid3 className={styles.grid}>
          <Card className={styles.card}>
            <div className={styles.head}>
              <span className={styles.icon} aria-hidden="true">
                🧩
              </span>
              <div className={styles.kicker}>Замість рутини</div>
            </div>
            <h3 className={styles.title}>Я беру весь “хаос” на себе</h3>
            <p className={styles.text}>
              Майстри, клінінг, заміни, покази, заселення, комунальні — усе
              організовано і під контролем без вашої участі.
            </p>
            <div className={styles.tagRow}>
              <span className={styles.tag}>Ремонт/заміни</span>
              <span className={styles.tag}>Клінінг</span>
              <span className={styles.tag}>Заселення</span>
            </div>
          </Card>

          <Card className={styles.card}>
            <div className={styles.head}>
              <span className={styles.icon} aria-hidden="true">
                🛡️
              </span>
              <div className={styles.kicker}>Без “сюрпризів”</div>
            </div>
            <h3 className={styles.title}>Контроль стану нерухомості</h3>
            <p className={styles.text}>
              Я знаю, що відбувається з об’єктом, і реагую швидко: дрібні
              питання не перетворюються на великі витрати.
            </p>
            <div className={styles.tagRow}>
              <span className={styles.tag}>Регулярний огляд</span>
              <span className={styles.tag}>Швидкі рішення</span>
              <span className={styles.tag}>Порядок</span>
            </div>
          </Card>

          <Card className={styles.card}>
            <div className={styles.head}>
              <span className={styles.icon} aria-hidden="true">
                📌
              </span>
              <div className={styles.kicker}>Прозоро</div>
            </div>
            <h3 className={styles.title}>Платежі й комунальні — без боргів</h3>
            <p className={styles.text}>
              Комунальні рахую і оплачую вчасно, платежі контролюю, дисципліну
              тримаю. Ви не “доганяєте” орендарів.
            </p>
            <div className={styles.tagRow}>
              <span className={styles.tag}>Комунальні</span>
              <span className={styles.tag}>Платежі</span>
              <span className={styles.tag}>Дисципліна</span>
            </div>
          </Card>
        </Grid3>

        <Card className={styles.bottom}>
          <div className={styles.bottomInner}>
            <div>
              <div className={styles.bottomTitle}>
                Хочете, щоб нерухомість працювала як актив?
              </div>
              <div className={styles.bottomText}>
                Я підкажу план дій саме під ваш об’єкт у Харкові: що
                підготувати, скільки це займе часу і як швидко можна здати “без
                нервів”.
              </div>
            </div>

            <div className={styles.bottomActions}>
              <Button
                variant="primary"
                type="button"
                className={styles.btn}
                onClick={() => onCta?.("#lead")}
              >
                Отримати консультацію
              </Button>
              <Button
                variant="ghost"
                type="button"
                className={styles.btn}
                onClick={() => onCta?.("#services")}
              >
                Подивитись послуги
              </Button>
              <div className={styles.note}>
                10–15 хв • швидка відповідь • Харків
              </div>
            </div>
          </div>
        </Card>

        <div className={styles.future}>
          З часом сервіс легко масштабується в застосунок:{" "}
          <b>об’єкти • платежі • комунальні • звіти</b> — усе в одному місці.
        </div>
      </div>
    </Section>
  );
}
