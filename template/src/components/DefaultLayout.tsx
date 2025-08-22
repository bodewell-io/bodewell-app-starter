import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const DefaultLayout: React.FC = () => {
  const location = useLocation();
  const isStyleguide = location.pathname.startsWith('/styleguide');

  return (
    // The outer container no longer uses flexbox or a fixed height.
    <div className="bg-background text-foreground min-h-screen">
      <AppHeader />

      {/* The <main> tag is now a standard block element. */}
      <main>
        {isStyleguide ? (
          // The Styleguide gets rendered directly to control its own layout.
          <Outlet />
        ) : (
          // All other pages get a clean, centered, max-width container.
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Outlet />
          </div>
        )}
      </main>
      
      {!isStyleguide && <AppFooter />}
    </div>
  );
};

export default DefaultLayout;