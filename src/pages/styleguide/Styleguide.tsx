// src/pages/styleguide/Styleguide.tsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import { PageHeader } from '@bodewell/ui';
import LocalSideNav, { type NavItem } from './LocalSideNav';

// Update the navItems to use page routes instead of anchor tags
const navItems: NavItem[] = [
  { label: 'Colors', href: '/colors' },
  { label: 'Layout', href: '/layout' },
  { label: 'Templates', href: '/templates' },
  { label: 'Elements', href: '/elements' },
  { label: 'Forms', href: '/forms' },
  { label: 'Navigation', href: '/navigation' },
  { label: 'Tables', href: '/tables' },
  { label: 'Charts', href: '/charts' },
  { label: 'Feedback', href: '/feedback' },
  { label: 'Icons', href: '/icons' },
];

const Styleguide: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <PageHeader
        title="Bodewell UI Style Guide"
        description="An interactive showcase for all UI components and patterns available in the Bodewell starter kit."
      />

      <div className="flex flex-col md:flex-row gap-12 mt-8">
        <aside className="w-full md:w-56 md:sticky top-8 self-start">
          <LocalSideNav navItems={navItems} />
        </aside>

        <main className="flex-1">
          {/* Outlet is the placeholder where the active route's component will be rendered */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Styleguide;