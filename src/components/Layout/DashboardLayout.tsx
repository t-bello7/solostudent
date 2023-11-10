import { FC } from 'react';

import { Outlet } from 'react-router-dom';

const DashboardLayout: FC = () => (
  <div>
    Dashboard Layout
    <Outlet />
  </div>
);

export default DashboardLayout;
