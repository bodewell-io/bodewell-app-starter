// src/App.tsx

import { Routes, Route, Navigate } from 'react-router-dom';
import { useTheme } from '@bodewell/ui';
import Styleguide from './pages/styleguide/Styleguide';

// Import all the section components that will now be pages
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

// Import the NotFound page from its correct location
import NotFound from './pages/styleguide/NotFound';

function App() {
  const { theme } = useTheme();

  return (
    <div className="bg-background text-foreground min-h-screen">
      <header className="p-4 border-b border-border text-center font-bold">
        Bodewell App Starter - Style Guide (Current Theme: <span className="text-primary">{theme}</span>)
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Styleguide />}>
            <Route index element={<Navigate to="/colors" replace />} />
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

          {/* This catch-all route will now work correctly */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;