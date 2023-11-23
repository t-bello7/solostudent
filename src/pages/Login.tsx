import { useState } from 'react';
import { Tabs, Skeleton } from 'antd';
import type { TabsProps } from 'antd';
import { motion } from 'framer-motion';
// import * as Realm from "realm-web";
//
// const [user, setUser] = useState<Realm.User | null>(app.currentUser);
//
// const app = new Realm.App({ id: 'devicesync-yyasf' });
// const UserDetail = ({ user }: { user: Realm.User }) => {
//   return (
//     <div>
//       <h1>Logged in with anonymous id: {user.id}</h1>
//     </div>
//   );
// };
// type LoginProps = {
//   setUser: (user: Realm.User) => void;
// };
// const Login = ({ setUser }: LoginProps) => {
//   const loginAnonymous = async () => {
//     const user: Realm.User = await app.logIn(Realm.Credentials.anonymous());
//     setUser(user);
//   };
//   return <button onClick={loginAnonymous}>Log In</button>;
// };     <div className="App-header">
// {user ? <UserDetail user={user} /> : <Login setUser={setUser} />}
// </div>
const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Log In',
    children: (
      <div className="rounded-xl border bg-white px-4 py-8">
        {/* <Skeleton loading={isLoading} active={isLoading}> */}
        <h1 className="font-rubik font-bold capitalize"> Log In </h1>
        <div className="mt-5 grid space-y-2.5">
          <span className="font-rubik font-medium"> Email or Username </span>
          <Skeleton.Input
            className="w-full"
            // active={isLoading}
            size="default"
          />
        </div>
        <div className="mt-10 grid space-y-2.5">
          <span className="font-rubik font-medium"> Password </span>
          <Skeleton.Input
            className="w-full"
            // active={isLoading}
            size="default"
          />
        </div>
        <span className="text-xs font-normal text-primaryColor">
          Forgot Password?
        </span>
        <br />
        <button type="button" className="mt-14 w-full">
          {' '}
          Login
          {' '}
        </button>
        {/* </Skeleton> */}
      </div>
    ),
  },
  {
    key: '2',
    label: 'Sign Up',
    children: (
      <div className="rounded-xl border bg-white px-4 py-8">
        {/* <Skeleton loading={isLoading} active={isLoading}> */}
        <h1 className="font-rubik font-bold capitalize"> Sign Up </h1>
        <div className="mt-5 grid space-y-2.5">
          <span className="font-rubik font-medium"> Email or Username </span>
          <Skeleton.Input
            className="w-full"
            // active={isLoading}
            size="default"
          />
        </div>
        <div className="mt-10 grid space-y-2.5">
          <span className="font-rubik font-medium"> Password </span>
          <Skeleton.Input
            className="w-full"
            // active={isLoading}
            size="default"
          />
        </div>
        <span className="text-xs font-normal text-primaryColor">
          Forgot Password?
        </span>
        <br />
        <button type="button" className="mt-14 w-full">
          {' '}
          Login
          {' '}
        </button>
        {/* </Skeleton> */}
      </div>
    ),
  },
];
const Home = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <main className="font-raleway text-blue100 space-y-16">
      <nav className="container fixed top-0 mx-auto flex max-w-[90%] items-center justify-between pt-4 md:static">
        <div> SoloStudent </div>
        <button
          type="button"
          onClick={() => setNavOpen(!navOpen)}
          className="block justify-self-end md:hidden"
        >
          open
        </button>
        <div
          className={`md:justify-betweeen flex flex-col items-center transition md:static md:translate-x-0 md:flex-row md:space-x-6 ${
            navOpen
              ? 'bg-red absolute w-full translate-x-0 rounded-lg px-6 py-12'
              : 'translate-x-[100ch]'
          }`}
        >
          <button
            type="button"
            onClick={() => setNavOpen(!navOpen)}
            className="block self-end md:hidden"
          >
            close
          </button>
          <ul className="text-grey500 flex flex-col gap-2 md:flex-row md:text-[#666666]">
            <li>
              {' '}
              <a href="https://linkedin.com/in/tbello7">Contact Tbello</a>
            </li>
          </ul>
        </div>
      </nav>
      <hr className="text-grey300" />

      <motion.section className="container mx-auto grid max-w-[90%] items-center gap-24 md:grid-cols-3">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="col-span-2 space-y-5"
        >
          <h1 className="text-6xl font-extrabold">
            Student Management Dashboard
          </h1>
          <p>
            Transform you student registration process with Solostudent and
            <br />
            easily manage student profile.
            <br />
            Generate analytical reports on students data.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Tabs defaultActiveKey="1" items={items} />
        </motion.div>
      </motion.section>

      <footer className="fixed bottom-0 pb-4">
        <div className="container mx-auto max-w-[90%] pb-6 pt-12">
          <hr className="text-grey300 mb-4" />
          <span className="center inline-block align-middle">
            © Developed by Tbello | Bg Hackathon
          </span>
        </div>
      </footer>
    </main>
  );
};

export default Home;
