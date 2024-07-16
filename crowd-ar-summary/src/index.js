import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import Task from './pages/Task';
import PostTask from './pages/PostTask';
import PreTask from './pages/PreTask';
import RevokedConsent from './pages/RevokedConsent';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PreTask />,
  },
  {
    path: "/task",
    element: <Task />,
  },
  {
    path: "/post",
    element: <PostTask />,
  },
  {
    path: "/revoked-consent",
    element: <RevokedConsent />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
