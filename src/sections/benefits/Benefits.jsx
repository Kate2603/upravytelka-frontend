import React from "react";
import Section from "../../components/ui/Section.jsx";
import Card from "../../components/ui/Card.jsx";
import CheckList from "../../components/ui/CheckList.jsx";
import styles from "./Benefits.module.css";

export default function Benefits() {
  return (
    <Section
      id="benefits"
      title="Результат для вас"
      subtitle="Ви отримуєте порядок і дохід — без постійних дзвінків, боргів і нервів."
    >
      <Card className={styles.card}>
        <CheckList
          items={[
            { title: "Спокій", sub: "ви не контролюєте кожну дрібницю" },
            {
              title: "Нерухомість у порядку",
              sub: "догляд, клінінг, ремонт за потреби",
            },
            {
              title: "Жодних боргів",
              sub: "комунальні послуги під контролем і вчасно оплачені",
            },
            {
              title: "Стабільність",
              sub: "відповідальні мешканці та контроль проживання",
            },
          ]}
        />
      </Card>
    </Section>
  );
}
