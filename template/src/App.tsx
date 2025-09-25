import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts and Route Guards
import DefaultLayout from './components/DefaultLayout';
import ProtectedRoute from './components/ProtectedRoute';

// Page Components
import Dashboard from './pages/Dashboard';
import AiChat from './pages/AiChat';
import LoginPage from './pages/LoginPage';
import DataGridPage from './pages/DataGridPage';
import AccountingLedgerPage from './pages/AccountingLedgerPage';
import Styleguide from './pages/styleguide/Styleguide';
import NotFound from './pages/styleguide/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ai-chat" element={<AiChat />} />
          
          {/* Data Routes */}
          <Route path="data/grid" element={<DataGridPage />} />
          <Route path="data/ledger" element={<AccountingLedgerPage />} />
          
          {/* Styleguide Route - The Styleguide component handles its own nested routes */}
          <Route path="styleguide/*" element={<Styleguide />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;