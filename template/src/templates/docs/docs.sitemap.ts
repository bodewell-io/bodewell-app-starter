import { type SitemapEntry } from '../../core/sitemap-entry';
import IntroductionPage from './pages/Introduction';

export const docsSitemap: SitemapEntry[] = [
  {
    id: 'introduction',
    path: 'introduction',
    title: 'Introduction',
    component: IntroductionPage,
  },
];