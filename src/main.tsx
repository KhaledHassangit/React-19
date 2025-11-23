// src/main.tsx or index.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './store/stroe';
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster
        richColors
        position="top-right"
        toastOptions={{
          style: {
            padding: '16px',
          },
        }}
      />

    </Provider>
  </StrictMode>
);
