import React from 'react';
import type { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';

const routes: RouteObject[] = [
  {
    path: '/',
    // element: React.createElement(Layout),
    children: [
      {
        index: true,
        element: React.createElement(Home),
      },
    ],
  },
];

export default routes;