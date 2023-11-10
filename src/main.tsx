import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  ErrorPage,
  Home,
  Login,
  Users,
  Adverts,
  Admin,
  Community,
  SiteSetting,
  StaticPage,
  SeoSetting,
} from './pages';
import DashboardLayout from './components/Layout/DashboardLayout';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <DashboardLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/adverts',
        element: <Adverts />,
      },
      {
        path: '/community',
        element: <Community />,
      },
      {
        path: '/site-settings',
        element: <SiteSetting />,
      },
      {
        path: '/static-page',
        element: <StaticPage />,
      },
      {
        path: '/seo-settings',
        element: <SeoSetting />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
