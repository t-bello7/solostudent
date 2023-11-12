import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Sidebar } from '../element';
import { RightIcon, LeftIcon } from '../../assets/icons';

const { Content } = Layout;
const DashboardLayout: FC = () => (
  <Layout className="min-h-[100vh] font-lexandDeca">
    <Sidebar />
    <Content>
      <div className='w-5 h-5'>
        <RightIcon />
        {/* <LeftIcon /> */}
      </div>
      <Outlet />
    </Content>
  </Layout>
);

export default DashboardLayout;
