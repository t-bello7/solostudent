/* eslint no-underscore-dangle: [1, { "allow": ["_id"] }] */
import { FC, useState, useEffect } from 'react';
import { useStudentManager } from '../../hooks/useStudentManager';
import { OverviewChart } from '../molecules';
import { StudentDataInt, CourseDataInt } from '../../utils';

const ChartSection: FC = () => {
  const { students } = useStudentManager();
  const [studentData, setStudentData] = useState<StudentDataInt[]>([]);
  const [courseStat, setCourseStat] = useState<CourseDataInt>({
    categories: ['engne', 'dseee'],
    series: [
      {
        name: 'efeec',
        data: [33, 44, 4444],
      },
    ],
  });
  const courseStudentNumber = (course: string, data: StudentDataInt[]) => data.filter((item) => item.department === course).length;
  const courseStatData = {
    Engineering: courseStudentNumber('engineering', studentData),
    'Creative Arts': courseStudentNumber('creativeArt', studentData),
    Medicine: courseStudentNumber('medicine', studentData),
  };
  useEffect(() => {
    setStudentData(
      students.map((item) => ({
        key: item._id.toString(),
        firstName: item.firstName,
        lastName: item.lastName,
        department: item.department,
        profilePic: item.profilePic,
        blacklisted: false,
        createdAt: item.createdAt,
      })),
    );
    setCourseStat({
      categories: Object.keys(courseStatData),
      series: [
        {
          name: 'Number of Students',
          data: Object.values(courseStatData),
        },
      ],
    });
  }, [students]);
  return (
    <section className="grid md:grid-cols-2">
      {JSON.stringify(courseStat) !== '{}' ? (
        <OverviewChart
          title="Course Statistics"
          chartType="bar"
          data={courseStat}
        />
      ) : (
        ''
      )}
      {/* <OverviewChart title="Student Statistics" chartType="line" /> */}
    </section>
  );
};

export default ChartSection;
