import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@realm/react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import {
  ProfileIcon,
  FriendIcon,
  HomeIcon,
  ExitIcon,
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
}) as MenuItem;
const Sidebar: FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const { logOut } = useAuth();
  const items: MenuItem[] = [
    getItem(
      <Link to="/" className={`${collapsed ? 'text-white' : ''}`}>
        Overview
      </Link>,
      '1',
      <HomeIcon color="fill-blue-500" />,
    ),
    getItem(
      <Link
        to="/dashboard/students"
        className={`${collapsed ? 'text-white' : ''}`}
      >
        Students
        {' '}
      </Link>,
      '5',
      <FriendIcon color="fill-blue-500" />,
    ),
    getItem(
      <Link
        to="/dashboard/profile"
        className={`${collapsed ? 'text-white' : ''}`}
      >
        Profile
        {' '}
      </Link>,
      '2',
      <ProfileIcon color="fill-blue-500" />,
    ),

    getItem(
      <button
        type="button"
        className={`${collapsed ? 'text-white' : ''}`}
        onClick={logOut}
      >
        Logout
      </button>,
      '9',
      <ExitIcon color="fill-blue-500" />,
    ),
  ];

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      className="
      border-secondaryColor100
      basis-36 border-r-2 bg-white
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
        className="[&>.ant-menu-item-selected>.ant-menu-item-icon]:text-secondaryColor100 mt-4
        space-y-4
        [&>.ant-menu-item]:space-x-4
        "
      />
    </Sider>
  );
};

export default Sidebar;
