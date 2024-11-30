// routes.tsx
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WebDevelopment from './pages/desenvolvimento';
import ERPDevelopment from './pages/erp';
import UXDevelopment from './pages/uXDevelopment';

const AppRoutes = () => (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/desenvolvimento" element={<WebDevelopment />} />
      <Route path="/erp" element={<ERPDevelopment />} />
      <Route path="/ux-ui-design" element={<UXDevelopment />} />
    </Routes>
  );

export default AppRoutes;
