import React from 'react';
import LocalSideNav from './LocalSideNav';
import type { NavItem } from './LocalSideNav';

interface PageWithSideNavProps {
  navItems: NavItem[];
  children: React.ReactNode;
  sideNavHeader?: React.ReactNode;
  contentWidth?: 'fixed' | 'full';
}

export const PageWithSideNav: React.FC<PageWithSideNavProps> = ({
  navItems,
  children,
  sideNavHeader,
  contentWidth = 'fixed',
}) => {
  const contentContainerClass = contentWidth === 'fixed'
    ? 'max-w-7xl mx-auto'
    : '';

  return (
    <div className="flex h-full">
      <aside className="hidden md:flex flex-col w-64 border-r border-border p-4">
        {sideNavHeader}
        <LocalSideNav navItems={navItems} className="mt-6" />
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        <div className={contentContainerClass}>
          {children}
        </div>
      </main>
    </div>
  );
};