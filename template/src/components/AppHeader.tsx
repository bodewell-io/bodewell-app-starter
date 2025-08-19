// src/components/AppHeader.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Avatar,
  Menu,
  MenuItem,
  MenuDivider,
  Icon,
  useTheme,
  type ThemeName,
} from '@bodewell/ui';

const AppHeader: React.FC = () => {
  const { theme, availableThemes, setTheme } = useTheme();
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-lg font-medium transition-colors ${isActive ? 'text-primary' : 'text-text hover:text-primary'}`;

  return (
    <header className="flex items-center justify-between p-4 bg-card border-b border-border shadow-sm sticky top-0 z-10">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
            <Icon name="layout-template" size={28} className="text-primary" />
            <h1 className="text-2xl font-bold text-text">Bodewell</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/dashboard" className={navLinkClasses}>Dashboard</NavLink>
            <NavLink to="/data-grid" className={navLinkClasses}>Data Grid</NavLink> {/* <-- Add this line */}
            <NavLink to="/styleguide" className={navLinkClasses}>Style Guide</NavLink>
        </nav>
      </div>

      <Menu
        trigger={
          <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
            <Avatar name="UI" size="md" />
          </button>
        }
      >
        <div className="p-2 text-sm text-muted-foreground">
          <p>Active Theme: <span className="font-semibold text-text">{theme}</span></p>
        </div>
        <MenuDivider />
        {availableThemes.map((themeName) => (
          <MenuItem
            key={themeName}
            onClick={() => setTheme(themeName as ThemeName)}
          >
            {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
          </MenuItem>
        ))}
      </Menu>
    </header>
  );
};

export default AppHeader;