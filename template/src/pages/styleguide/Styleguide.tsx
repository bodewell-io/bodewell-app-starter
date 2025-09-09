import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageWithSideNav } from '../../components/PageWithSideNav';
import { styleguideNavItems } from './styleguide.config';

const Styleguide: React.FC = () => {
  return (
    <PageWithSideNav
      navItems={styleguideNavItems}
      sideNavHeader={<div className="p-4 font-semibold text-lg">Style Guide</div>}
      contentWidth="fixed"
    >
      <Outlet />
    </PageWithSideNav>
  );
};

export default Styleguide;