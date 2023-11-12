import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Sidebar } from '../element';
import { RightIcon, LeftIcon } from '../../assets/icons';

const { Content } = Layout;
const DashboardLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
  <Layout className="min-h-[100vh] font-cantarell">
    <Sidebar collapsed={collapsed} />
    <Content className='m-12 font-cantarell'>
      <div onClick={() => setCollapsed(!collapsed)} className={`transition-all w-5 h-5 border rounded-full border-primaryColor absolute ${collapsed ? 'left-[75px]' :'left-[190px]'} top-[22vh] bg-white`}>
        {
          collapsed ? ( <RightIcon /> ) : (<LeftIcon />)
        }   
      </div>
      <Outlet />
    </Content>
  </Layout>
)};

export default DashboardLayout;
