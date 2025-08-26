import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const DefaultLayout: React.FC = () => {
  const location = useLocation();

  // Define all routes that use a sidebar layout
  const sideNavRoutes = ['/styleguide', '/data'];

  // Check if the current path matches any of our sidebar routes
  const hasSideNav = sideNavRoutes.some(path => location.pathname.startsWith(path));

  return (
    <div className="bg-background text-foreground min-h-screen">
      <AppHeader />

      <main>
        {hasSideNav ? (
          // Any route with a sidebar gets the full-width treatment
          <Outlet />
        ) : (
          // All other pages get the clean, centered container
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Outlet />
          </div>
        )}
      </main>
      
      {/* The footer is now hidden on ANY page with a sidebar */}
      {!hasSideNav && <AppFooter />}
    </div>
  );
};

export default DefaultLayout;