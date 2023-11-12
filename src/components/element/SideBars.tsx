import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import {
  AdminIcon,
  FriendIcon,
  HomeIcon,
  ExitIcon
} from '../../assets/icons';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem => ({
  key,
  icon,
  children,
  label,
} as MenuItem);
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const items: MenuItem[] = [
    getItem(
      <Link to="/">Overview</Link>,
      '1',
      <HomeIcon color="fill-blue-500" />,
    ),
    getItem(
      <Link to="/profile">Profile </Link>,
      '2',
      <AdminIcon color="fill-blue-500" />,
    ),
    getItem(
      <Link to="/students">Students </Link>,
      '5',
      <FriendIcon color="fill-blue-500" />,
    ),
    getItem(<span onClick={() => console.log("logout")}>Logout</span>, '9', <ExitIcon color='fill-blue-500'/>),
  ];

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className="border-r-2 border-secondaryColor100 bg-white
      [&>.ant-layout-sider-children]:my-12
      [&>.ant-layout-sider-children]:flex
      [&>.ant-layout-sider-children]:flex-col
      [&>.ant-layout-sider-children]:items-center
      "
    >
      <Link to="/">SoloStudent</Link>  
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
        className="mt-4 space-y-4
        [&>.ant-menu-item-selected>.ant-menu-item-icon]:text-secondaryColor100
        [&>.ant-menu-item]:space-x-4
        "
      />
    </Sider>
  );
};

export default Sidebar;
