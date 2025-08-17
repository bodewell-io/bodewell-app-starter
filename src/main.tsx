// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider, ToastProvider } from '@bodewell/ui'; // <-- Import ToastProvider
import '@bodewell/ui/style.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ToastProvider> {/* <-- Add the ToastProvider here */}
        <App />
      </ToastProvider>
    </ThemeProvider>
  </React.StrictMode>,
);