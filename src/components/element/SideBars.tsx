import { useState } from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import {
  AdminIcon,
  ContentIcon,
  FriendIcon,
  HomeIcon,
  KeyIcon,
  MegaPhoneIcon,
  SecurityIcon,
  UserIcon,
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
      <a href="/">Dashboard</a>,
      '1',
      <HomeIcon color="fill-blue-500" />,
    ),
    getItem(
      <a href="/admin">Admin </a>,
      '2',
      <AdminIcon color="fill-blue-500" />,
    ),
    getItem(
      <a href="/users">Users </a>,
      '3',
      <UserIcon color="fill-blue-500" />,
    ),
    getItem(
      <a href="/adverts">Adverts </a>,
      '4',
      <MegaPhoneIcon color="fill-blue-500" />,
    ),
    getItem(
      <a href="/community">Community </a>,
      '5',
      <FriendIcon color="fill-blue-500" />,
    ),
    getItem(
      <a href="/site-settings">Site Settings </a>,
      '6',
      <SecurityIcon color="fill-blue-500" />,
    ),
    getItem(
      <a href="/static-page">Static Pages </a>,
      '7',
      <ContentIcon color="fill-blue-500" />,
    ),
    getItem(
      <a href="/seo-settings">SEO Settings </a>,
      '8',
      <KeyIcon color="fill-blue-500" />,
    ),

    // getItem(<span onClick={() => signOut()}>Logout</span>, '9', <LogoutOutlined rotate={180} />),
  ];

  return (
    <Sider
      trigger={null}
      // className="bg-lightGray dark:bg-darkBlack [&>.ant-layout-sider-trigger]:bg-darkBlack
      //  [&>.ant-layout-sider-trigger]:text-white [&>.ant-layout-sider-trigger]:dark:bg-white
      //  [&>.ant-layout-sider-trigger]:dark:text-darkBlack"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      {/* <Link href='/'>
            {
              theme !== 'dark' ? (<Image src={logo} alt="assetxpro logos" />)
              :(<Image src={darkLogo} alt="assetxpro logos" />)

            }
            </Link> */}
      <div>Campus Hub</div>
      <Menu
        className=""
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
