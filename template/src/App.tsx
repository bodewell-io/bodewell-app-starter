// src/App.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Styleguide from './pages/styleguide/Styleguide';

// Import all the section components
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
      {/* The Styleguide now acts as the layout for all nested routes */}
      <Route path="/" element={<Styleguide />}>
        {/* The index route now correctly redirects to the relative 'colors' path */}
        <Route index element={<Navigate to="colors" replace />} />

        {/* All section routes are defined as children */}
        <Route path="utilities" element={<UtilitiesSection />} />
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
      </Route>

      {/* A catch-all route for any path that doesn't match */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;