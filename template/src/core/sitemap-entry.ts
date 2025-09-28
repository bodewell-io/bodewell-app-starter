import { type IconName } from '@bodewell/ui';

export interface SitemapEntry {
  id: string;
  path: string;
  title: string;
  icon?: IconName;
  component: React.ComponentType;
  children?: SitemapEntry[];
}