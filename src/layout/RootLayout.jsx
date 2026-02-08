import React from "react";
import { Outlet } from "react-router-dom";

import Topbar from "../sections/topbar/Topbar.jsx";
import Footer from "../sections/footer/Footer.jsx";

import styles from "./RootLayout.module.css";

export default function RootLayout() {
  return (
    <div className={styles.page}>
      <Topbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
