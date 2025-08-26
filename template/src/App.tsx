import { Routes, Route, Navigate } from 'react-router-dom';
import { Icon } from '@bodewell/ui';
import type { NavItem } from './components/LocalSideNav';

// Layouts and Route Guards
import DefaultLayout from './components/DefaultLayout';
import ProtectedRoute from './components/ProtectedRoute';
import SideNavLayout from './layouts/SideNavLayout'; 

// Page Components
import Dashboard from './pages/Dashboard';
import DataGridPage from './pages/DataGridPage';
import AiChat from './pages/AiChat';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/styleguide/NotFound';

// Style Guide Root and Config
import { styleguideNavItems } from './pages/styleguide/styleguide.config';

// --- ADDED: All Style Guide Section Imports ---
import ChartsSection from './pages/styleguide/sections/charts/ChartsSection';
import ColorsSection from './pages/styleguide/sections/colors/ColorsSection';
import ElementsSection from './pages/styleguide/sections/elements/ElementsSection';
import FeedbackSection from './pages/styleguide/sections/feedback/FeedbackSection';
import FormsSection from './pages/styleguide/sections/forms/FormsSection';
import IconsSection from './pages/styleguide/sections/icons/IconsSection';
import LayoutSection from './pages/styleguide/sections/layout/LayoutSection';
import NavigationSection from './pages/styleguide/sections/navigation/NavigationSection';
import TablesSection from './pages/styleguide/sections/tables/TablesSection';
import TemplatesSection from './pages/styleguide/sections/templates/TemplatesSection';
import UtilitiesSection from './pages/styleguide/sections/utilities/UtilitiesSection';

// --- Define the nav items for the Data Section ---
const dataNavItems: NavItem[] = [
  { label: 'Client-Side Grid', href: '/data/grid', icon: 'table' },
];

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ai-chat" element={<AiChat />} />

          {/* Data Section using SideNavLayout */}
          <Route 
            path="data"
            element={
              <SideNavLayout
                navItems={dataNavItems}
                sideNavHeader={<div className="p-4 font-semibold text-lg">Data Section</div>}
                contentWidth="full"
                
              />
            }
          >
            <Route path="grid" element={<DataGridPage />} />
          </Route>

          {/* Styleguide Section using SideNavLayout */}
          <Route 
            path="styleguide" 
            element={
              <SideNavLayout
                navItems={styleguideNavItems}
                sideNavHeader={<div className="p-4 font-semibold text-lg">Style Guide</div>}
                contentWidth="fixed"
                
              />
            }
          >
            <Route index element={<Navigate to="colors" replace />} />
            <Route path="charts" element={<ChartsSection />} />
            <Route path="colors" element={<ColorsSection />} />
            <Route path="elements" element={<ElementsSection />} />
            <Route path="feedback" element={<FeedbackSection />} />
            <Route path="forms" element={<FormsSection />} />
            <Route path="icons" element={<IconsSection />} />
            <Route path="layout" element={<LayoutSection />} />
            <Route path="navigation" element={<NavigationSection />} />
            <Route path="tables" element={<TablesSection />} />
            <Route path="templates" element={<TemplatesSection />} />
            <Route path="utilities" element={<UtilitiesSection />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;