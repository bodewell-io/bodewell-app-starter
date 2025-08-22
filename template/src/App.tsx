import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts and Route Guards
import DefaultLayout from './components/DefaultLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Page Components
import Dashboard from './pages/Dashboard';
import DataGridPage from './pages/DataGridPage';
import AiChat from './pages/AiChat';
import LoginPage from './pages/LoginPage';
import NotFound from './pages/styleguide/NotFound';

// Style Guide Layout and Sections
import Styleguide from './pages/styleguide/Styleguide';
import ColorsSection from './pages/styleguide/sections/colors/ColorsSection';
import LayoutSection from './pages/styleguide/sections/layout/LayoutSection';
import TemplatesSection from './pages/styleguide/sections/templates/TemplatesSection';
import ElementsSection from './pages/styleguide/sections/elements/ElementsSection';
import FormsSection from './pages/styleguide/sections/forms/FormsSection';
import NavigationSection from './pages/styleguide/sections/navigation/NavigationSection';
import TablesSection from './pages/styleguide/sections/tables/TablesSection';
import ChartsSection from './pages/styleguide/sections/charts/ChartsSection';
import FeedbackSection from './pages/styleguide/sections/feedback/FeedbackSection';
import IconsSection from './pages/styleguide/sections/icons/IconsSection';
import UtilitiesSection from './pages/styleguide/sections/utilities/UtilitiesSection';

function App() {
  return (
    <Routes>
      {/* Public route for login */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected application routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="data-grid" element={<DataGridPage />} />
          <Route path="ai-chat" element={<AiChat />} />

          {/* Define Styleguide routes directly nested under the Styleguide layout component */}
          <Route path="styleguide" element={<Styleguide />}>
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

      {/* Catch-all Not Found route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;