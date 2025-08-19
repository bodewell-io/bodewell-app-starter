import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageHeader, useTheme } from '@bodewell/ui';
import LocalSideNav, { type NavItem } from './LocalSideNav';

const navItems: NavItem[] = [
  { label: 'Charts', href: 'charts' },
  { label: 'Colors', href: 'colors' },
  { label: 'Elements', href: 'elements' },
  { label: 'Feedback', href: 'feedback' },
  { label: 'Forms', href: 'forms' },
  { label: 'Icons', href: 'icons' },
  { label: 'Layout', href: 'layout' },
  { label: 'Navigation', href: 'navigation' },
  { label: 'Tables', href: 'tables' },
  { label: 'Templates', href: 'templates' },
  { label: 'Utilities', href: 'utilities' },
];

const Styleguide: React.FC = () => {


  return (
    // These classes apply the theme's background and text color to the whole page
    <div className="bg-background text-foreground min-h-screen">
      <main className="p-4 sm:p-6 lg:p-">
        <div className="flex flex-col md:flex-row gap-12 mt-8">
          <aside className="w-full pl-8 md:w-44 md:sticky top-20 self-start">
            <LocalSideNav navItems={navItems} />
          </aside>
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </main>
    </div>
  );
};

export default Styleguide;