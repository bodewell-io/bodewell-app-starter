// src/App.tsx (Updated for Phase 3)
import { Routes, Route, Navigate } from 'react-router-dom';
import { sitemap } from './sitemap'; // <-- Import sitemap
import { generateRoutes } from './core/route-generator'; // <-- Import generator

// Layouts and Route Guards
import DefaultLayout from './components/DefaultLayout';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/styleguide/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          
          {/* All the routes above are replaced by this one line */}
          {generateRoutes(sitemap)}
          
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;