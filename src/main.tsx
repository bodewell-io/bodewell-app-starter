// src/main.tsx

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 1. Import the router
import App from './App.tsx';
import { ThemeProvider, ToastProvider } from '@bodewell/ui';
import '@bodewell/ui/style.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <BrowserRouter> {/* 2. Wrap the entire application */}
      <ThemeProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  
);