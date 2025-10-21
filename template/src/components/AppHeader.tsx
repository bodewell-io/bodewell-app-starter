/**
 * @file AppHeader.tsx
 * @repository bodewell-app-starter
 * @description This is the global application header.
 *
 * @developer_notes
 * STRATEGIC REFACTOR (10/20/2025):
 * This component is now fully aligned with our strategic goals:
 * 1. Imports `appManifest.userMenu` to populate designer-controlled nav links.
 * 2. Uses the `asChild` prop on `MenuItem` to render React Router `<Link>`
 * components correctly (requires @bodewell/ui v0.2.0+).
 * 3. Imports the `TemplateSwitcher` as a separate component.
 * 4. Includes the `z-50` fix to render correctly above the `z-40` sidebar.
 */
import React from 'react';
import { Link } from 'react-router-dom'; // <-- Import Link
import {
  Avatar,
  Menu,
  MenuItem,
  MenuDivider,
  Icon,
  useTheme,
  type ThemeName,
} from '@bodewell/ui';
import { useAuth } from '../contexts/AuthContext';

// --- STRATEGIC IMPORTS ---
import { appManifest } from '../config/app.manifest';
import type { ManifestLink } from '../core/manifest-types';
import TemplateSwitcher from './TemplateSwitcher'; // <-- 1. IMPORT THE NEW COMPONENT

const AppHeader: React.FC = () => {
  const { theme, availableThemes, setTheme } = useTheme();
  const { user, logout } = useAuth();
  const userNavLinks = appManifest.userMenu;

  const handleResetData = () => {
    if (
      window.confirm(
        'Are you sure you want to reset all user data to the original mock data? This cannot be undone.',
      )
    ) {
      localStorage.removeItem('users');
      window.location.reload();
    }
  };

  return (
    // Z-INDEX FIX: Set to z-50 to render above the z-40 sidebar.
    <header className="flex items-center justify-between p-4 bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Icon name="layout-template" size={28} className="text-primary" />
        <h1 className="text-2xl font-bold text-text">Bodewell</h1>
      </div>

      <div className="flex items-center gap-4">
        <TemplateSwitcher /> {/* <-- 2. USE THE IMPORTED COMPONENT */}
        {user && (
          <Menu
            trigger={
              <button className="rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                <Avatar name={user.name} size="md" />
              </button>
            }
          >
            {/* 1. User Info (Static) */}
            <div className="p-2 text-sm text-muted-foreground">
              <p className="font-semibold text-text">{user.name}</p>
              <p>{user.email}</p>
            </div>
            <MenuDivider />

            {/*
             * --- 3. THE POLYMORPHIC FIX ---
             * We use `asChild` on MenuItem and pass the `Link`
             * component as the child.
             */}
            {userNavLinks.map((link: ManifestLink) => (
              <MenuItem
                key={link.id}
                asChild // <-- Use asChild
                icon={link.icon ? <Icon name={link.icon} /> : undefined}
              >
                {/* Pass Link as the child */}
                <Link to={link.path}>{link.title}</Link>
              </MenuItem>
            ))}
            <MenuDivider />

            {/* 4. App-Specific: Theme Switcher */}
            <div className="p-2 text-sm text-muted-foreground">
              <p>
                Active Theme:{' '}
                <span className="font-semibold text-text">{theme}</span>
              </p>
            </div>
            {availableThemes.map((themeName: string) => (
              <MenuItem
                key={themeName}
                onClick={() => setTheme(themeName as ThemeName)}
              >
                {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
              </MenuItem>
            ))}
            <MenuDivider />

            {/* 5. App-Specific: Actions */}
            <MenuItem onClick={handleResetData} icon={<Icon name="refresh-cw" />}>
              Reset Data
            </MenuItem>
            <MenuItem onClick={logout} icon={<Icon name="log-out" />}>
              Logout
            </MenuItem>
          </Menu>
        )}
      </div>
    </header>
  );
};

export default AppHeader;