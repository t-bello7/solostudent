import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Sidebar } from '../element';

const { Content } = Layout;
const DashboardLayout: FC = () => (
  <Layout className="min-h-[100vh] font-lexandDeca">
    <Sidebar />
    <Content>
      <Outlet />
    </Content>
  </Layout>
);

export default DashboardLayout;
