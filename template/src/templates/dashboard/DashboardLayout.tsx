import React from 'react';
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom';
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
} from '@bodewell/ui';
import { sitemap } from './dashboard.sitemap';
import AppHeader from '../../components/AppHeader';

// This wrapper consumes the `end` prop so it doesn't leak to the DOM.
const SidebarNavLink = React.forwardRef<HTMLAnchorElement, any>(({ end, ...props }, ref) => {
  return <NavLink to={''} ref={ref} {...props} end={end} />;
});
SidebarNavLink.displayName = 'SidebarNavLink';


const AppSidebarContent: React.FC = () => {
  const { isOpen, toggle } = useSidebar();

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center justify-between w-full">
            <div className={`flex items-center gap-2 transition-opacity duration-200 ${!isOpen && 'opacity-0'}`}>
                <Icon name="layout-template" size={24} className="text-primary" />
                <span className="text-xl font-bold">Bodewell</span>
            </div>
            <Button variant="ghost" size="icon" onClick={toggle} className="hidden md:flex">
                <Icon name="panel-left-close" />
            </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {sitemap.map((item) => (
            <React.Fragment key={item.id}>
              <SidebarMenuItem
                as={SidebarNavLink}
                href={item.path || ''}
                end={!item.children || item.children.length === 0}
                icon={item.icon ? <Icon name={item.icon} /> : undefined}
                tooltip={item.title}
              >
                {item.title}
              </SidebarMenuItem>
              {item.children && isOpen && item.children.map((child) => (
                <SidebarMenuItem
                  key={child.id}
                  as={SidebarNavLink}
                  href={`${item.path}/${child.path}`}
                  end
                  icon={child.icon ? <Icon name={child.icon} /> : undefined}
                  tooltip={child.title}
                  className="pl-10"
                >
                  {child.title}
                </SidebarMenuItem>
              ))}
            </React.Fragment>
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
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* <AppHeader /> */}
          <main className="p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;