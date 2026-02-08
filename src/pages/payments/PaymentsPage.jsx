import React from "react";
import Section from "../../components/ui/Section.jsx";
import Card from "../../components/ui/Card.jsx";

export default function PaymentsPage() {
  return (
    <Section
      id="payments"
      title="Платежі"
      subtitle="Сторінка-заглушка. Тут буде облік оплат/боргів/нагадувань."
    >
      <Card>
        <b>У розробці</b>
        <div className="muted" style={{ marginTop: 6 }}>
          План: календар оплат, історія, суми, статуси.
        </div>
      </Card>
    </Section>
  );
}
