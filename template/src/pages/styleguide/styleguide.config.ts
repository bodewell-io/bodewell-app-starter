import { type NavItem } from './LocalSideNav';

// A helper function to create children with consistent hash links
const createChildren = (parentHref: string, children: { label: string; id: string }[]) => {
  return children.map(child => ({
    label: child.label,
    href: `${parentHref}#${child.id}`,
  }));
};

// Define the core structure of our style guide sections
const sections = [
  { 
    label: 'Charts', 
    href: 'charts', 
    icon: 'bar-chart-2',
    children: createChildren('charts', [
      { label: 'Bar Chart', id: 'charts-bar' },
      { label: 'Line Chart', id: 'charts-line' },
      { label: 'Pie Chart', id: 'charts-pie' },
    ]),
  },
  { 
    label: 'Colors', 
    href: 'colors', 
    icon: 'palette',
    children: createChildren('colors', [
      { label: 'Themed Palette', id: 'colors-theme' },
      { label: 'Tailwind Palette', id: 'colors-tailwind' },
    ]),
  },
  {
    label: 'Elements',
    href: 'elements',
    icon: 'box',
    children: createChildren('elements', [
      { label: 'Avatars', id: 'elements-avatars' },
      { label: 'Badges', id: 'elements-badges' },
      { label: 'Stat Cards', id: 'elements-stats' },
      { label: 'Activity Feed', id: 'elements-activity' },
      { label: 'Toggles', id: 'elements-toggle' },
    ]),
  },
  {
    label: 'Feedback',
    href: 'feedback',
    icon: 'message-square',
    children: createChildren('feedback', [
      { label: 'Alerts', id: 'feedback-alerts' },
      { label: 'Tooltips', id: 'feedback-tooltip' },
      { label: 'Toasts', id: 'feedback-toast' },
      { label: 'Empty States', id: 'feedback-empty' },
    ]),
  },
  {
    label: 'Forms',
    href: 'forms',
    icon: 'check-square',
    children: createChildren('forms', [
      { label: 'Buttons', id: 'form-buttons' },
      { label: 'Inputs', id: 'form-inputs' },
      { label: 'Selection', id: 'form-select' },
      { label: 'Advanced', id: 'form-advanced' },
      { label: 'File Upload', id: 'form-upload' },
      { label: 'Template', id: 'form-template' },
    ]),
  },
  { 
    label: 'Icons', 
    href: 'icons', 
    icon: 'sparkles',
    children: createChildren('icons', [
      { label: 'Usage', id: 'icons-usage' },
      { label: 'Gallery', id: 'icons-gallery' },
    ]),
  },
  { 
    label: 'Layout', 
    href: 'layout', 
    icon: 'layout-template',
    children: createChildren('layout', [
      { label: 'Theme', id: 'layout-theme' },
      { label: 'Typography', id: 'layout-typography' },
      { label: 'Cards', id: 'layout-card' },
      { label: 'Modals', id: 'layout-modal' },
      { label: 'Drawers', id: 'layout-drawer' },
      { label: 'Accordion', id: 'layout-accordion' },
    ]),
  },
  { 
    label: 'Navigation', 
    href: 'navigation', 
    icon: 'navigation',
    children: createChildren('navigation', [
      { label: 'Stepper', id: 'navigation-stepper' },
      { label: 'Tabs', id: 'navigation-tabs' },
      { label: 'Menus', id: 'navigation-menus' },
      { label: 'Breadcrumbs', id: 'navigation-breadcrumbs' },
    ]),
  },
  { 
    label: 'Tables', 
    href: 'tables', 
    icon: 'table',
    children: createChildren('tables', [
      { label: 'Simple Table', id: 'tables-simple' },
      { label: 'Data Grid', id: 'tables-aggrid' },
    ]),
  },
  { 
    label: 'Templates', 
    href: 'templates', 
    icon: 'layout-grid',
    children: createChildren('templates', [
      { label: 'Standard Page', id: 'template-standard' },
      { label: 'Responsive Columns', id: 'template-responsive' },
    ]),
  },
  { 
    label: 'Utilities', 
    href: 'utilities', 
    icon: 'wrench',
    children: createChildren('utilities', [
      { label: 'Spacing', id: 'utilities-spacing' },
      { label: 'Flexbox', id: 'utilities-flexbox' },
      { label: 'Layout', id: 'utilities-layout' },
      { label: 'Typography', id: 'utilities-typography' },
      { label: 'Borders', id: 'utilities-borders' },
      { label: 'Shadows', id: 'utilities-shadows' },
    ]),
  },
];

export const styleguideNavItems: NavItem[] = sections;