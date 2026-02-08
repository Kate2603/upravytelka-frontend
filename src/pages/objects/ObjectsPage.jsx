import React from "react";
import Section from "../../components/ui/Section.jsx";
import Card from "../../components/ui/Card.jsx";

export default function ObjectsPage() {
  return (
    <Section
      id="objects"
      title="Об’єкти"
      subtitle="Сторінка-заглушка. Тут буде список об’єктів і їх статуси."
    >
      <Card>
        <b>У розробці</b>
        <div className="muted" style={{ marginTop: 6 }}>
          План: картки об’єктів, фото, статус, мешканці, задачі.
        </div>
      </Card>
    </Section>
  );
}
