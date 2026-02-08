import React from "react";

import Hero from "../../sections/hero/Hero.jsx";
import About from "../../sections/about/About.jsx";
import Services from "../../sections/services/Services.jsx";
import Process from "../../sections/process/Process.jsx";
import Why from "../../sections/why/Why.jsx";
import Benefits from "../../sections/benefits/Benefits.jsx";
import Cta from "../../sections/cta/Cta.jsx";
import Lead from "../../sections/lead/Lead.jsx";

function scrollToId(id) {
  const el = document.querySelector(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HomePage() {
  return (
    <>
      <Hero onCta={(id) => scrollToId(id)} />
      <About />
      <Services />
      <Process />
      <Why onCta={(id) => scrollToId(id)} />
      <Benefits />
      <Cta onCta={(id) => scrollToId(id)} />
      <Lead />
    </>
  );
}
