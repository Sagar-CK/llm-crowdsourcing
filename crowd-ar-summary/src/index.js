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
import Completion from './pages/Completion';

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
  },
  {
    path: "/completion",
    element: <Completion />,
  },
  {
    path: "*",
    element: <PreTask />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
