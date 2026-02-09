import React, { useCallback, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Topbar from '../sections/topbar/Topbar.jsx';
import Footer from '../sections/footer/Footer.jsx';

function getTopbarOffset() {
  // якщо topbar fixed — беремо висоту header/topbar
  const header = document.querySelector('header');
  if (!header) return 0;
  const rect = header.getBoundingClientRect();
  return Math.ceil(rect.height || 0);
}

function scrollToHash(hash) {
  const raw = String(hash || '').trim();
  if (!raw) return;

  const h = raw.startsWith('#') ? raw : `#${raw}`;
  const id = h.slice(1);

  // підтримка #top
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  const offset = getTopbarOffset();
  const y = window.scrollY + el.getBoundingClientRect().top - offset - 12;

  window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
}

// чекаємо появи елемента в DOM (важливо при navigate("/") перед скролом)
function waitForElementAndScroll(hash, triesLeft = 30) {
  const raw = String(hash || '').trim();
  const h = raw.startsWith('#') ? raw : `#${raw}`;
  const id = h.slice(1);

  if (id === 'top') {
    scrollToHash('#top');
    return;
  }

  const el = document.getElementById(id);
  if (el) {
    scrollToHash(h);
    return;
  }

  if (triesLeft <= 0) return;

  setTimeout(() => waitForElementAndScroll(h, triesLeft - 1), 50);
}

export default function RootLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = useCallback(
    hashOrPath => {
      if (!hashOrPath) return;

      // якщо це секція
      if (String(hashOrPath).startsWith('#')) {
        const hash = String(hashOrPath);

        // якщо вже на головній — просто скролимо
        if (location.pathname === '/') {
          // оновлюємо URL hash (для шарінгу/перезавантаження)
          window.history.pushState(null, '', hash);
          waitForElementAndScroll(hash);
          return;
        }

        // якщо ми НЕ на головній — йдемо на "/" з hash
        navigate(`/${hash}`, { replace: false });
        return;
      }

      // якщо це шлях сторінки
      navigate(hashOrPath);
    },
    [location.pathname, navigate]
  );

  // 1) якщо прийшли на URL типу "/#about" або просто з hash після навігації
  useEffect(() => {
    if (location.pathname !== '/') return;
    if (!location.hash) return;

    // невеликий delay, щоб HomePage гарантовано змонтувався
    const t = setTimeout(() => {
      waitForElementAndScroll(location.hash);
    }, 50);

    return () => clearTimeout(t);
  }, [location.pathname, location.hash]);

  return (
    <>
      {/* якір top, щоб #top точно існував */}
      <div id="top" />

      <Topbar onNav={handleNav} />

      <main>
        <Outlet />
      </main>

      <Footer onNav={handleNav} />
    </>
  );
}
