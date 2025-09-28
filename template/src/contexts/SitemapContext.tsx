import { createContext, useContext } from 'react';
import type { SitemapEntry } from '../core/sitemap-entry';

// Create the context with a default value of an empty array
const SitemapContext = createContext<SitemapEntry[]>([]);

// Custom hook for easy consumption of the context
export const useSitemap = () => {
  const context = useContext(SitemapContext);
  if (context === undefined) {
    throw new Error('useSitemap must be used within a SitemapProvider');
  }
  return context;
};

// The provider component that will wrap our layouts
export const SitemapProvider = SitemapContext.Provider;