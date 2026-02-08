import React from "react";
import Section from "../../components/ui/Section.jsx";
import Card from "../../components/ui/Card.jsx";

export default function CabinetPage() {
  return (
    <Section
      id="cabinet"
      title="Кабінет"
      subtitle="Сторінка-заглушка. Тут буде панель управління."
    >
      <Card>
        <b>У розробці</b>
        <div className="muted" style={{ marginTop: 6 }}>
          Наступні блоки: об’єкти, платежі, комунальні, звіти.
        </div>
      </Card>
    </Section>
  );
}
