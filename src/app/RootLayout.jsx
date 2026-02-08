import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Topbar from "../sections/topbar/Topbar.jsx";
import Footer from "../sections/footer/Footer.jsx";

function scrollToId(id) {
  const el = document.querySelector(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function RootLayout() {
  const navigate = useNavigate();

  function handleNav(hashOrPath) {
    if (!hashOrPath) return;

    // якщо це секція на home
    if (hashOrPath.startsWith("#")) {
      navigate("/", { replace: false });
      // невеликий defer щоб DOM home встиг змонтуватися
      requestAnimationFrame(() => scrollToId(hashOrPath));
      return;
    }

    // якщо це шлях сторінки
    navigate(hashOrPath);
  }

  return (
    <>
      <Topbar onNav={handleNav} />
      <main id="top">
        <Outlet />
      </main>
      <Footer onNav={handleNav} />
    </>
  );
}
