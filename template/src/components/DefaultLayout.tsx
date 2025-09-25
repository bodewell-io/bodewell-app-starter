import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
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

const AppSidebarContent: React.FC = () => {
  const { isOpen, toggle } = useSidebar();

  const navItems: { label: string; href: string; icon: IconName; badge?: string }[] = [
    { label: 'Dashboard', href: '/dashboard', icon: 'home' },
    { label: 'AI Chat', href: '/ai-chat', icon: 'bot' },
    { label: 'Data Grid', href: '/data/grid', icon: 'table', badge: 'New' },
    { label: 'Accounting', href: '/data/ledger', icon: 'book-open' },
    { label: 'Style Guide', href: '/styleguide', icon: 'palette' },
  ];

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
              key={item.label}
              href={item.href}
              as={NavLink}
              icon={<Icon name={item.icon} />}
              tooltip={item.label}
              badge={item.badge && <Badge variant="primary">{item.badge}</Badge>}
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

const DefaultLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background text-foreground">
        <Sidebar>
          <AppSidebarContent />
        </Sidebar>
        <main className="flex-1 overflow-y-auto p-8 relative">
          <SidebarTrigger />
          <div className="mt-8 md:mt-0">
            <Outlet />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DefaultLayout;