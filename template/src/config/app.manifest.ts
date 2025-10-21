/**
 * @file app.manifest.ts
 * @repository bodewell-app-starter
 * @description
 * This is the central manifest for all GLOBAL, shared navigation elements.
 * * This file is the "single source of truth" for UI elements like the
 * user menu, settings navigation, and footer links, which are shared
 * across all templates (e.g., Dashboard, Docs).
 *
 * This is the file a designer should edit to update global navigation.
 */
import type { ManifestLink } from '../core/manifest-types';

/**
 * Defines the shape of the entire global manifest.
 * We can add more menus here as the app grows.
 */
interface AppManifest {
  userMenu: ManifestLink[];
  settingsMenu: ManifestLink[];
  footerLinks: ManifestLink[];
}

// Export the manifest data as a single const
export const appManifest: AppManifest = {

  /**
   * Used for the user dropdown menu in the AppHeader.
   */
  userMenu: [
    {
      id: 'user.profile',
      path: '/profile',
      title: 'Your Profile',
      icon: 'user',
    },
    {
      id: 'user.settings',
      path: '/settings',
      title: 'Settings',
      icon: 'settings',
    },
    {
      id: 'user.logout',
      path: '/logout',
      title: 'Log Out',
      icon: 'logOut',
    },
  ],

  /**
   * Used for a dedicated settings page (e.g., /settings/...)
   */
  settingsMenu: [
    {
      id: 'settings.account',
      path: '/settings/account',
      title: 'Account',
      icon: 'user',
    },
    {
      id: 'settings.billing',
      path: '/settings/billing',
      title: 'Billing',
      icon: 'creditCard',
    },
    {
      id: 'settings.team',
      path: '/settings/team',
      title: 'Team Members',
      icon: 'users',
    },
  ],

  /**
   * Used in the AppFooter.
   */
  footerLinks: [
    {
      id: 'footer.help',
      path: '/help',
      title: 'Help Center',
    },
    {
      id: 'footer.terms',
      path: '/terms',
      title: 'Terms of Service',
    },
  ],
};