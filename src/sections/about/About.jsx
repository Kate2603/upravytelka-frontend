import React from "react";
import Section from "../../components/ui/Section.jsx";
import Card from "../../components/ui/Card.jsx";
import { Grid2 } from "../../components/ui/Grid.jsx";
import CheckList from "../../components/ui/CheckList.jsx";
import styles from "./About.module.css";

export default function About() {
  return (
    <Section
      id="about"
      title="Хто я"
      subtitle="Я керую вашою нерухомістю як активом — щоб вона приносила дохід і не забирала ваш час."
    >
      <Grid2 className={styles.grid}>
        <Card>
          <div className={styles.photoBox}>
            <img
              src="/kateryna-keys.png"
              alt="Катерина Величко з ключами від нерухомості"
              className={styles.photo}
            />
          </div>
        </Card>

        <Card>
          <h3 className={styles.h3}>Я — Катерина Величко</h3>

          <p className={styles.textMuted}>
            Я не просто ріелтор. Я — <b>організаційна управителька</b>, яка бере
            на себе повну відповідальність за вашу нерухомість у Харкові.
          </p>

          <CheckList
            items={[
              {
                title: "Мені довіряють ключі",
                sub: "я контролюю стан житла і порядок",
              },
              {
                title: "Комунальні — без боргів",
                sub: "рахую і оплачую вчасно",
              },
              {
                title: "Повний супровід",
                sub: "від підготовки до контролю проживання",
              },
            ]}
          />
        </Card>
      </Grid2>
    </Section>
  );
}
