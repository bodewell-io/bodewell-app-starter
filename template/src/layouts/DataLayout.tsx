// src/layouts/DataLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

// This component is now just a simple pass-through.
// The PageWithSideNav and local nav items have been removed.
const DataLayout: React.FC = () => {
  return <Outlet />;
};

export default DataLayout;