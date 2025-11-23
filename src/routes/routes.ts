import React from 'react';
import type { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '@/pages/Login';

const routes: RouteObject[] = [
  {
    path: '/',
    // element: React.createElement(Layout),
    children: [
      {
        index: true,
        element: React.createElement(Home),
      },
      {
        index: true,
        path: 'login',
        element: React.createElement(Login),
      },
    ],
  },
];

export default routes;