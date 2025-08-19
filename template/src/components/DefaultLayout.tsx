// src/components/DefaultLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const DefaultLayout: React.FC = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <AppHeader />
      <div className="flex-grow">
        <Outlet />
      </div>
      <AppFooter />
    </div>
  );
};

export default DefaultLayout;