import React from 'react';
import { Outlet } from 'react-router-dom';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import LocalSideNav, { type NavItem } from './LocalSideNav';
import { styleguideNavItems } from './styleguide.config';


const Styleguide: React.FC = () => {
  return (
    <div className="h-[calc(100vh-4rem)]"> 
      <PanelGroup 
        direction="horizontal" 
        autoSaveId="styleguideLayout" 
        className="h-full max-w-7xl mx-auto"
      >
        <Panel defaultSize={20} minSize={15} className="sidebar-panel">
          <div className="h-full overflow-y-auto p-4 sm:p-6 lg:p-8">
            {/* Use the imported nav items */}
            <LocalSideNav navItems={styleguideNavItems} />
          </div>
        </Panel>

        <PanelResizeHandle className="w-2 flex items-center justify-center transition-colors hover:bg-primary/10">
          <div className="w-px h-full bg-border" />
        </PanelResizeHandle>

        <Panel defaultSize={80} minSize={30}>
          <div className="h-full overflow-y-auto p-4 sm:p-6 lg:p-8">
            <Outlet />
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Styleguide;