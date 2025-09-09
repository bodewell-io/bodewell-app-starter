import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageWithSideNav } from '../components/PageWithSideNav';
import type { NavItem } from '../components/LocalSideNav';

const dataNavItems: NavItem[] = [
  { label: 'Client-Side Grid', href: '/data/grid', icon: 'table' },
  { label: 'Accounting Ledger', href: '/data/ledger', icon: 'book-open' },
];

const DataLayout: React.FC = () => {
  return (
    <PageWithSideNav
      navItems={dataNavItems}
      sideNavHeader={<div className="p-4 font-semibold text-lg">Data Section</div>}
      contentWidth="full"
    >
      <Outlet />
    </PageWithSideNav>
  );
};

export default DataLayout;