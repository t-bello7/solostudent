import { useCallback, useEffect, useState } from 'react';
import { useQuery, useRealm, useUser } from '@realm/react';
import { Student } from '../utils';

export const useStudentManager = () => {
  const realm = useRealm();
  const user = useUser();
  const [requeryFlag, setRequeryFlag] = useState(false);
  const students = useQuery(Student, (collection) => collection, [requeryFlag]);

  useEffect(() => {
    setRequeryFlag(true);
  }, []);

  const addStudent = useCallback(
    (firstName: string, lastName: string, profilePic: string) => {
      realm.write(() => {
        realm.create(Student, {
          firstName,
          lastName,
          profilePic,
          userId: user.id,
        });
      });
    },
    [realm, user.id],
  );

  const deleteStudent = useCallback(
    (student: Student) => {
      realm.write(() => {
        realm.delete(student);
      });
    },
    [realm],
  );

  return {
    students,
    addStudent,
    deleteStudent,
  };
};
