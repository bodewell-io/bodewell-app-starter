// src/App.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import DefaultLayout from './components/DefaultLayout';
import Styleguide from './pages/styleguide/Styleguide';
import Dashboard from './pages/Dashboard'; // <-- Import Dashboard
import DataGridPage from './pages/DataGridPage';
import AiChat from './pages/AiChat';

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
import NotFound from './pages/styleguide/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {/* Add the Dashboard route */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="data-grid" element={<DataGridPage />} />
        <Route path="ai-chat" element={<AiChat />} /> 

        <Route path="styleguide" element={<Styleguide />}>
          <Route index element={<Navigate to="colors" replace />} />
          <Route path="colors" element={<ColorsSection />} />
          <Route path="layout" element={<LayoutSection />} />
          <Route path="templates" element={<TemplatesSection />} />
          <Route path="elements" element={<ElementsSection />} />
          <Route path="forms" element={<FormsSection />} />
          <Route path="navigation" element={<NavigationSection />} />
          <Route path="tables" element={<TablesSection />} />
          <Route path="charts" element={<ChartsSection />} />
          <Route path="feedback" element={<FeedbackSection />} />
          <Route path="icons" element={<IconsSection />} />
          <Route path="utilities" element={<UtilitiesSection />} />
        </Route>

        <Route index element={<Navigate to="/dashboard" replace />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;