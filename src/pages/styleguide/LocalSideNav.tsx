// src/pages/styleguide/LocalSideNav.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export interface NavItem {
  label: string;
  href: string;
}

interface LocalSideNavProps {
  navItems: NavItem[];
  className?: string;
}

const LocalSideNav: React.FC<LocalSideNavProps> = ({ navItems, className }) => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block transition-colors duration-200 font-medium ${
      isActive ? 'text-primary' : 'text-text hover:text-primary'
    }`;

  return (
    <nav className={`sticky top-8 w-full md:w-56 ${className || ''}`}>
      <ul className="space-y-4">
        {navItems.map(item => (
          <li key={item.href}>
            <NavLink to={item.href} className={navLinkClasses}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LocalSideNav;