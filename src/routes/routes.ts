// routes.ts
import type { RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    // element: React.createElement(Layout),
    children: [
      {
        index: true,
        // element: React.createElement(Home),
      },
    ],
  },
];

export default routes;
