import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Avatar,
  Menu,
  MenuItem,
  MenuDivider,
  Icon,
  useTheme,
  type ThemeName,
  Button,
  Drawer,
} from '@bodewell/ui';
import { useAuth } from '../contexts/AuthContext';

const AppHeader: React.FC = () => {
  const { theme, availableThemes, setTheme } = useTheme();
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-lg font-medium transition-colors ${isActive ? 'text-primary' : 'text-text hover:text-primary'}`;
  
  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block text-2xl py-2 font-semibold transition-colors ${isActive ? 'text-primary' : 'text-text hover:text-primary'}`;


  const handleResetData = () => {
    if (window.confirm('Are you sure you want to reset all user data to the original mock data? This cannot be undone.')) {
      localStorage.removeItem('users');
      window.location.reload();
    }
  };

  const MobileNav = () => (
    <nav className="flex flex-col gap-4 p-4">
        <NavLink to="/dashboard" className={mobileNavLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Dashboard</NavLink>
        <NavLink to="/data/grid" className={mobileNavLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Data</NavLink>
        <NavLink to="/styleguide" className={mobileNavLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Style Guide</NavLink>
        <NavLink to="/ai-chat" className={mobileNavLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>AI Chat</NavLink>
    </nav>
  );

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-card border-b border-border shadow-sm sticky top-0 z-30">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
              <Icon name="layout-template" size={28} className="text-primary" />
              <h1 className="text-2xl font-bold text-text">Bodewell</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
              <NavLink to="/dashboard" className={navLinkClasses}>Dashboard</NavLink>
              <NavLink to="/data/grid" className={navLinkClasses}>Data</NavLink>
              <NavLink to="/styleguide" className={navLinkClasses}>Style Guide</NavLink>
              <NavLink to="/ai-chat" className={navLinkClasses}>AI Chat</NavLink>
          </nav>
        </div>

        <div className="flex items-center gap-4">
            {user && (
            <Menu
                trigger={
                <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    <Avatar name={user.name} size="md" />
                </button>
                }
            >
                <div className="p-2 text-sm text-muted-foreground">
                <p className="font-semibold text-text">{user.name}</p>
                <p>{user.email}</p>
                </div>
                <MenuDivider />
                <div className="p-2 text-sm text-muted-foreground">
                <p>Active Theme: <span className="font-semibold text-text">{theme}</span></p>
                </div>
                {availableThemes.map((themeName) => (
                <MenuItem
                    key={themeName}
                    onClick={() => setTheme(themeName as ThemeName)}
                >
                    {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                </MenuItem>
                ))}
                <MenuDivider />
                <MenuItem onClick={handleResetData} icon={<Icon name="refresh-cw" />}>
                Reset Data
                </MenuItem>
                <MenuItem onClick={logout} icon={<Icon name="log-out" />}>
                Logout
                </MenuItem>
            </Menu>
            )}
            <div className="md:hidden">
                <Button onClick={() => setIsMobileMenuOpen(true)} variant="ghost" size="icon">
                    <Icon name="menu" />
                </Button>
            </div>
        </div>
      </header>
      <Drawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        position="right"
      >
        <div className="p-4">
            <Button onClick={() => setIsMobileMenuOpen(false)} variant="ghost" size="icon" className="absolute top-4 right-4">
                <Icon name="x" />
            </Button>
            <div className="mt-12">
                <MobileNav />
            </div>
        </div>
      </Drawer>
    </>
  );
};

export default AppHeader;