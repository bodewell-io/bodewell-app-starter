import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppHeader, AppFooter, SideNav, type NavItem } from '@bodewell/ui';

export const MainLayout: React.FC = () => {
  // Define all navigation items for the entire application here
  const navItems: NavItem[] = [
    { label: 'Dashboard', href: '/', icon: 'layout-dashboard' },
    { label: 'Data Grid', href: '/data-grid', icon: 'table' },
    { label: 'Style Guide', href: '/style-guide', icon: 'book' },
    // Add other main navigation items here
  ];

  return (
    <div className="flex h-screen bg-background text-foreground">
      <SideNav navItems={navItems} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AppHeader />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
        <AppFooter />
      </div>
    </div>
  );
};