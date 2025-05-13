import { lazy, Suspense, useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const FallBack = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }}>
    <div>Loading...</div>
  </div>
);

// Lazy-loaded pages
const Home = lazy(() => import('./pages/home'));

const AppRouter = () => {
  const router = useMemo(() =>
    createBrowserRouter([
      {
        path: '/',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<FallBack />}>
                <Home />
              </Suspense>
            ),
          },
        ],
      },
    ]),
  []);

  return <RouterProvider router={router} />;
};

export default AppRouter;