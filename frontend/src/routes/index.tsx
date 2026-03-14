import { BrowserRouter, Route, Routes } from 'react-router';

import AppLayout from '../layout/AppLayout';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
