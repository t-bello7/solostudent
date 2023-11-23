import { FC } from 'react';
import { Avatar, Card } from 'antd';
import { Heading } from '../components/atoms';
import { EditIcon, ClockIcon } from '../assets/icons';

const Profile: FC = () => (
  <div>
    <Heading className="sr-only" headingType="page" title="Profile" />

    <div className="absolute left-0 top-0 h-[15vh] w-full bg-gradient-to-r from-cyan-500 to-blue-500">
      <Card className="top-[5vh] m-12 h-[20vh]">
        <div className="flex gap-2">
          <Avatar
            shape="square"
            size="large"
            className="top-[-8vh] aspect-square h-[10vh] w-[10vh] rounded-xl border-2"
            src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"
          />
          <div className="space-y-2">
            <p> Athan Wong </p>
            <p> Electrcal departments</p>
          </div>
        </div>
      </Card>
    </div>
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="top-[30vh] bg-primaryColor">
        <Heading headingType="section" title="Contact infomation" />
        <EditIcon color="stroke-black" />
        <div className="flex justify-between">
          <Heading title="Name" />
          <p className="basis-3/5"> Athon wond</p>
        </div>
        <div className="flex justify-between">
          <Heading title="Email" />
          <p className="basis-3/5"> atnce@gmail.com</p>
        </div>
        <div className="flex justify-between">
          <Heading title="Phone Number" />
          <p className="basis-3/5"> +234wec</p>
        </div>
      </Card>
      <Card className="top-[30vh] bg-primaryColor">
        <Heading headingType="section" title="Recent Activities" />
        <div className="flex items-center justify-between">
          {' '}
          <span> Blaclisted a student </span>
          {' '}
          <span className="basis-1/5">
            {' '}
            <ClockIcon color="fill-white" />
            {' '}
          </span>
        </div>
      </Card>
    </div>
  </div>
);
export default Profile;
