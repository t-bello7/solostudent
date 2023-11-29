import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProvider } from '@realm/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  ErrorPage, DashboardHome, Home, Profile, Students,
} from './pages';
import DashboardLayout from './components/layouts/DashboardLayout';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/dashboard',
    errorElement: <ErrorPage />,
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <DashboardHome />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'students',
        element: <Students />,
      },
    ],
  },
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider id={import.meta.env.VITE_APP_ID}>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>,
);
