import React from 'react';
import { Outlet } from 'react-router-dom';
import HashLinkScroll from '../../components/HashLinkScroll';

const Styleguide: React.FC = () => {
  return (
    <>
      {/* This helper component ensures scrolling to #hash links works */}
      <HashLinkScroll />
      {/* The router will render the correct section (Colors, Forms, etc.) here */}
      <Outlet />
    </>
  );
};

export default Styleguide;