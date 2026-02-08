import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Section from "../../components/ui/Section.jsx";
import Card from "../../components/ui/Card.jsx";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  const err = useRouteError();

  return (
    <Section
      id="notfound"
      title="Сторінку не знайдено"
      subtitle="Можливо, посилання застаріло або сторінка ще в розробці."
    >
      <Card>
        <div className="muted">
          {err?.status
            ? `Код: ${err.status}`
            : "Помилка навігації або сторінка відсутня."}
        </div>

        <div className={styles.actions}>
          <Link to="/" className={styles.backLink}>
            ← Повернутись на головну
          </Link>
        </div>
      </Card>
    </Section>
  );
}
