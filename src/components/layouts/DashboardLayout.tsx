import { FC, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { RealmProvider, UserProvider } from '@realm/react';
import { Layout } from 'antd';
import { Sidebar } from '../elements';
import { RightIcon, LeftIcon } from '../../assets/icons';
import { Student } from '../../utils';

const { Content } = Layout;
const DashboardLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <UserProvider fallback={<Navigate to="/" />}>
      <RealmProvider
        schema={[Student]}
        // sync={{
        //   flexible: true,
        //   initialSubscriptions: {
        //     update: ((mutableSubs, realm) => {
        //       mutableSubs.add(realm.objects(Student), { name: 'allStudents'})
        //     })
        //   }
        // }}
      >
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
      </RealmProvider>
    </UserProvider>
  );
};

export default DashboardLayout;
