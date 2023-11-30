import { v4 as uuidv4 } from 'uuid';
import { OverviewCard } from '../molecules';
import { useStudentManager } from '../../hooks/useStudentManager';
import {
  SittingStudentIcon,
  StudentIcon,
  BlockedIcon,
  AdminIcon,
} from '../../assets/icons';

const OverviewSection = () => {
  const { students } = useStudentManager();

  const OverviewData = [
    {
      id: uuidv4(),
      name: 'Total Students',
      icon: <StudentIcon color="fill-primaryColor" />,
      overviewData: students.length,
    },
    {
      id: uuidv4(),
      name: 'Total Blacklisted Students',
      icon: <BlockedIcon color="fill-primaryColor" />,
      overviewData: students
        .map((item) => item)
        .filter((item) => item.blacklisted === true).length,
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
      overviewData: students
        .map((item) => item)
        .filter((item) => item.firstName.length > 1).length,
    },
  ];
  return (
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
};
export default OverviewSection;
