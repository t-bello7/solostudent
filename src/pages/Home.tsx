import { useState, ChangeEvent, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthOperationName, useApp, useEmailPasswordAuth } from '@realm/react';
import { Tabs, Input } from 'antd';
import type { TabsProps } from 'antd';
import { motion } from 'framer-motion';
import { Button } from '../components/atoms';

const Home = () => {
  const { register, logIn, result } = useEmailPasswordAuth();
  const atlasApp = useApp();
  const [navOpen, setNavOpen] = useState(false);
  const [loginErr, setLoginErr] = useState('');
  const [registerErr, setRegisterErr] = useState('');

  const [registerData, setRegisterData] = useState<{
    // first_name: string,
    // last_name: string,
    email: string;
    password: string;
    // confirm_password: string
  }>({
    // first_name: "",
    // last_name: "",
    email: '',
    password: '',
    // confirm_password: ""
  });
  const [loginData, setLoginData] = useState<{
    email: string;
    password: string;
  }>({
    email: '',
    password: '',
  });
  const handleLoginForm = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };
  const handleRegister = () => {
    register(registerData);
  };
  const handleRegisterForm = (event: ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
    if (result.error) {
      setRegisterErr(result.error.message);
    }
  };
  const handleLogin = () => {
    logIn(loginData);
    if (result.error) {
      setLoginErr(result.error.message);
    }
  };
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Log In',
      children: (
        <div className="rounded-xl border bg-white px-4 py-8">
          <h1 className="font-rubik font-bold capitalize"> Log In </h1>
          <div className="mt-5 grid space-y-2.5">
            <span className="font-rubik font-medium"> Email </span>
            <Input
              className="w-full"
              size="large"
              name="email"
              type="text"
              placeholder={loginData.email}
              onChange={handleLoginForm}
            />
          </div>
          <div className="mt-10 grid space-y-2.5">
            <span className="font-rubik font-medium"> Password </span>
            <Input
              className="w-full"
              size="large"
              name="password"
              type="password"
              placeholder={loginData.password}
              onChange={handleLoginForm}
            />
          </div>
          {/* <span className="text-xs font-normal text-primaryColor">
            Forgot Password?
          </span> */}
          {loginErr && <p className="bg-red">{loginErr}</p>}
          <br />
          <Button onClick={handleLogin} text="Login" className="mt-14 w-full" />
        </div>
      ),
    },
    {
      key: '2',
      label: 'Sign Up',
      children: (
        <div className="rounded-xl border bg-white px-4 py-8">
          <h1 className="font-rubik font-bold capitalize"> Sign Up </h1>
          <div className="flex gap-2">
            {/* <div className="mt-5 grid space-y-2.5">
              <label htmlFor="first_name" className="font-rubik font-medium"> First Name </label>
              <Input
                className="w-full"
                size="large"
                name="first_name"
                id="first_name"
                placeholder={registerData.first_name}
                onChange={handleRegisterForm}
              />
            </div>
            <div className="mt-5 grid space-y-2.5">
              <label htmlFor="last_name" className="font-rubik font-medium"> Last Name </label>
              <Input
                className="w-full"
                size="large"
                id="last_name"
                name="last_name"
                placeholder={registerData.last_name}
                onChange={handleRegisterForm}
              />
            </div> */}
          </div>
          <div className="mt-5 grid space-y-2.5">
            <label htmlFor="email" className="font-rubik font-medium">
              {' '}
              Email
              {' '}
            </label>
            <Input
              className="w-full"
              size="large"
              name="email"
              id="email"
              type="text"
              placeholder={registerData.email}
              onChange={handleRegisterForm}
            />
          </div>
          <div className="mt-10 grid space-y-2.5">
            <label htmlFor="password" className="font-rubik font-medium">
              {' '}
              Password
              {' '}
            </label>
            <Input
              className="w-full"
              size="large"
              id="password"
              name="password"
              type="password"
              placeholder={registerData.password}
              onChange={handleRegisterForm}
            />
          </div>
          {/* <div className="mt-10 grid space-y-2.5">
            <label className="font-rubik font-medium">Confirm Password </label>
            <Input
              className="w-full"
              size="large"
              name="confirm_password"
              placeholder={registerData.confirm_password}
              onChange={handleRegisterForm}
            />
          </div> */}
          <br />
          {registerErr && <p className="bg-red">{registerErr}</p>}
          <Button
            onClick={handleRegister}
            className="mt-14 w-full"
            text="Sign Up"
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    // const userData = localStorage.getItem('userData') || '';
    // if (userData) {
    //   logIn(JSON.parse(userData));
    // }
    if (result.operation === AuthOperationName.Register && result.success) {
      logIn(registerData);
    }
  }, [result.operation, result.success, logIn, registerData]);

  if (atlasApp.currentUser) {
    if (result.success) {
      localStorage.setItem('userData', JSON.stringify(loginData));
    }
    return <Navigate to="/dashboard" />;
  }
  return (
    <main className="text-blue100 space-y-6 font-cantarell">
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
      <motion.section className="container mx-auto grid h-[72vh] max-w-[90%] justify-center gap-24 md:grid-cols-5 md:items-start">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="col-span-3 space-y-5 self-center"
        >
          <h1 className="font-solway text-6xl font-extrabold">
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
          className="col-span-3 md:col-span-2"
        >
          <Tabs defaultActiveKey="1" items={items} />
        </motion.div>
      </motion.section>
      <footer className="bottom-0 pb-4">
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
