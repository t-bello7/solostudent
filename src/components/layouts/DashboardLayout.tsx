import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Sidebar } from '../elements';
import { RightIcon, LeftIcon } from '../../assets/icons';

const { Content } = Layout;
const DashboardLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="min-h-[100vh] font-cantarell">
      <Sidebar collapsed={collapsed} />
      <Content className="relative p-12 font-cantarell">
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="absolute left-[-10px] top-[22vh] z-10 h-5 w-5 rounded-full border  border-primaryColor bg-white transition-all"
        >
          {collapsed ? (
            <RightIcon color="fill-primaryColor" />
          ) : (
            <LeftIcon color="fill-primaryColor" />
          )}
        </button>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default DashboardLayout;
