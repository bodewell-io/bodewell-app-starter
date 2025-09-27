// src/pages/styleguide/Styleguide.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

// This component is also simplified. The local sidebar is gone.
const Styleguide: React.FC = () => {
  return <Outlet />;
};

export default Styleguide;