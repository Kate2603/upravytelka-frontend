import React from "react";
import Section from "../../components/ui/Section.jsx";
import Card from "../../components/ui/Card.jsx";

export default function ReportsPage() {
  return (
    <Section
      id="reports"
      title="Звіти"
      subtitle="Сторінка-заглушка. Тут буде звітність по об’єктах та платежах."
    >
      <Card>
        <b>У розробці</b>
        <div className="muted" style={{ marginTop: 6 }}>
          План: PDF/Excel звіти, періоди, витрати/дохід.
        </div>
      </Card>
    </Section>
  );
}
