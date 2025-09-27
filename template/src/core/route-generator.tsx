// src/core/route-generator.tsx
import { Route, Navigate } from 'react-router-dom';
import type { SitemapEntry } from '../sitemap';

export const generateRoutes = (routes: SitemapEntry[]) => {
  return routes.map((route) => {
    if (route.children && route.children.length > 0) {
      // Get the path of the first child
      const firstChildPath = route.children[0].path;
      
      return (
        <Route key={route.id} path={route.path} element={<route.component />}>
          {/* This new index route redirects /data to /data/grid */}
          <Route index element={<Navigate to={firstChildPath} replace />} />
          {generateRoutes(route.children)}
        </Route>
      );
    }
    return <Route key={route.id} path={route.path} element={<route.component />} />;
  });
};