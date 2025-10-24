/**
 * @file DashboardLayout.tsx
 * @repository bodewell-app-starter
 *
 * @developer_notes
 * STRATEGIC REFACTOR (10/24/2025):
 * 1. Corrected layout structure: AppHeader above Sidebar.
 * 2. Removed redundant branding/footer from Sidebar.
 * 3. Includes PageTitleUpdater and SitemapProvider.
 * 4. Fixed sitemap import, provider value, and added mapping logic.
 * 5. Fixed PageTitleUpdater import path typo.
 */
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import {
  Sidebar,
  SidebarProvider,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu, // <-- Now used
  SidebarMenuItem, // <-- Now used
  useSidebar,
  Button,
  Icon,
} from '@bodewell/ui';
import { dashboardSitemap } from './dashboard.sitemap';
import { SitemapProvider } from '../../contexts/SitemapContext';
import PageTitleUpdater from '../../components/PageTitleUpdater';
import AppHeader from '../../components/AppHeader';

// NavLink wrapper - Correct
const SidebarNavLink = React.forwardRef<HTMLAnchorElement, any>(
  ({ end, href, ...props }, ref) => {
    return <NavLink ref={ref} to={href || ''} {...props} end={end} />;
  },
);
SidebarNavLink.displayName = 'SidebarNavLink';

// Sidebar Content Component
const AppSidebarContent: React.FC = () => {
  const { isOpen, toggle } = useSidebar();
  return (
    <>
      <SidebarHeader>
        <div className="flex items-center justify-end w-full h-full">
          <Button variant="ghost" size="icon" onClick={toggle} className="hidden md:flex mr-1">
            <Icon name="panel-left-close" />
          </Button>
        </div>
      </SidebarHeader>

      {/* --- FIX 3: ADD SITEMAP MAPPING LOGIC --- */}
      <SidebarContent>
        <SidebarMenu>
          {dashboardSitemap.map((item) => ( // Use dashboardSitemap
            <React.Fragment key={item.id}>
              <SidebarMenuItem
                as={SidebarNavLink}
                href={item.path ? `/dashboard/${item.path}` : '/dashboard'} // Correct path
                end={!item.children || item.children.length === 0}
                icon={item.icon ? <Icon name={item.icon} /> : undefined}
                tooltip={item.title}
              >
                {item.title}
              </SidebarMenuItem>
              {item.children &&
                isOpen &&
                item.children.map((child) => (
                  <SidebarMenuItem
                    key={child.id}
                    as={SidebarNavLink}
                    href={`/dashboard/${item.path}/${child.path}`} // Correct path
                    end
                    icon={child.icon ? <Icon name={child.icon} /> : undefined}
                    tooltip={child.title}
                    className="pl-10" // Indent child items
                  >
                    {child.title}
                  </SidebarMenuItem>
                ))}
            </React.Fragment>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter />
    </>
  );
};

// Main Layout Component
const DashboardLayout: React.FC = () => {
  return (
    // --- FIX 2: USE CORRECT PROVIDER VALUE ---
    <SitemapProvider value={dashboardSitemap}>
      <PageTitleUpdater />
      <SidebarProvider>
        <div className="flex h-screen bg-background text-foreground">
          <Sidebar>
            <AppSidebarContent />
          </Sidebar>
          <div className="flex flex-col flex-1 overflow-hidden">
            <AppHeader />
            <main className="flex-1 overflow-y-auto p-8">
              <Outlet />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </SitemapProvider>
  );
};

export default DashboardLayout;