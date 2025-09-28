import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom'; // <-- Add Link import
import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
  Button,
  Icon,
  Avatar,
  Badge,
  type IconName,
} from '@bodewell/ui';
import { sitemap } from './dashboard.sitemap';

const AppSidebarContent: React.FC = () => {
  const { isOpen, toggle } = useSidebar();

  const navItems = sitemap.flatMap(item => {
    const parentItem = {
      label: item.title,
      href: item.path,
      icon: item.icon,
      isParent: !!item.children,
      badge: item.id === 'data' ? 'New' : undefined,
    };

    if (!item.children) {
      return [parentItem];
    }

    const childItems = item.children.map(child => ({
      label: child.title,
      href: `${item.path}/${child.path}`,
      icon: child.icon,
      isParent: false,
    }));
    
    return [parentItem, ...childItems];
  });

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center justify-between w-full">
          <span className={`text-xl font-bold transition-opacity duration-200 ${!isOpen && 'opacity-0'}`}>
            Bodewell
          </span>
          <Button variant="ghost" size="icon" onClick={toggle} className="hidden md:flex">
            <Icon name="panel-left-close" />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem
              key={item.href}
              href={item.href}
              as={NavLink}
              icon={item.icon ? <Icon name={item.icon} /> : <span className="w-6" />}
              tooltip={item.label}
              // --- TEMPORARY FIX ---
              // badge={item.badge && <Badge variant="primary">{item.badge}</Badge>}
              className={!item.isParent ? 'pl-10' : ''}
            >
              {item.label}
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center gap-3">
          <Avatar name="Dane Troup" src="https://avatars.githubusercontent.com/u/124599?v=4" />
          <div className={`transition-opacity duration-200 ${!isOpen && 'opacity-0'}`}>
            <p className="font-semibold text-sm">Dane Troup</p>
            <p className="text-xs text-muted-foreground">danetroup@gmail.com</p>
          </div>
        </div>
      </SidebarFooter>
    </>
  );
};


const DashboardLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background text-foreground">
        <Sidebar>
          <AppSidebarContent />
        </Sidebar>
        <main className="flex-1 overflow-y-auto p-8 relative">
          <SidebarTrigger />

          {/* --- THIS IS THE NEW CODE TO ADD --- */}
          <div className="absolute top-8 right-8 bg-muted text-muted-foreground p-2 rounded-md text-sm z-10">
            <span>Switch Template: </span>
            <Link to="/dashboard" className="font-bold underline">Dashboard</Link>
            {' | '}
            <Link to="/docs/introduction" className="font-bold underline">Docs</Link>
          </div>

          <div className="mt-8 md:mt-0">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;