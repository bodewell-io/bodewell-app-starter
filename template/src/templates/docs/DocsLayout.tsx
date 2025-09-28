import React from 'react';
import { Outlet, Link } from 'react-router-dom';

// 1. AppHeader and AppFooter are the main layout components now
import AppHeader from '../../components/AppHeader';
import AppFooter from '../../components/AppFooter';

const DocsLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />

      {/* This div will now be a container for our main content and the switcher */}
      <div className="relative flex-grow">
        {/* Template Switcher UI */}
        <div className="absolute top-8 right-8 bg-muted text-muted-foreground p-2 rounded-md text-sm z-10">
          <span>Switch Template: </span>
          <Link to="/dashboard" className="font-bold underline">Dashboard</Link>
          {' | '}
          <Link to="/docs/introduction" className="font-bold underline">Docs</Link>
        </div>

        {/* 2. Add padding to the top of the main content to avoid overlap */}
        <main className="p-8 pt-24">
          <Outlet />
        </main>
      </div>

      <AppFooter />
    </div>
  );
};

export default DocsLayout;