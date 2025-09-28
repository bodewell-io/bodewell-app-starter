import { Routes, Route, Navigate } from 'react-router-dom';
import { generateRoutes } from './core/route-generator';

// Import BOTH templates
import DashboardLayout from './templates/dashboard/DashboardLayout';
import { sitemap as dashboardSitemap } from './templates/dashboard/dashboard.sitemap';
import DocsLayout from './templates/docs/DocsLayout';
import { docsSitemap } from './templates/docs/docs.sitemap';

// Other Imports
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/styleguide/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        {/* Default redirect to the dashboard's root */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Dashboard Template Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          {generateRoutes(dashboardSitemap)}
        </Route>
        
        {/* Docs Template Routes */}
        <Route path="/docs" element={<DocsLayout />}>
          {generateRoutes(docsSitemap)}
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;