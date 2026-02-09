import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './RootLayout.jsx';
import HomePage from '../pages/home/HomePage.jsx';
import NotFoundPage from '../pages/notfound/NotFoundPage.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
