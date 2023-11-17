import { v4 as uuidv4 } from 'uuid';
import { OverviewCard } from '../molecules';
import {
  SittingStudentIcon,
  StudentIcon,
  BlockedIcon,
  AdminIcon,
} from '../../assets/icons';

const OverviewData = [
  {
    id: uuidv4(),
    name: 'Total Students',
    icon: <StudentIcon color="fill-primaryColor" />,
    overviewData: 43,
  },
  {
    id: uuidv4(),
    name: 'Total Blacklisted Students',
    icon: <BlockedIcon color="fill-primaryColor" />,
    overviewData: 342,
  },
  {
    id: uuidv4(),
    name: 'Total Admins',
    icon: <AdminIcon color="fill-primaryColor" />,
    overviewData: 423,
  },
  {
    id: uuidv4(),
    name: 'Registerd Students',
    icon: <SittingStudentIcon color="fill-primaryColor" />,
    overviewData: 434,
  },
];

const OverviewSection = () => (
  <section className="grid justify-center gap-3 md:flex md:flex-wrap">
    {OverviewData.map((item) => (
      <OverviewCard
        key={item.id}
        name={item.name}
        Icon={item.icon}
        overviewData={item.overviewData}
      />
    ))}
  </section>
);
export default OverviewSection;
