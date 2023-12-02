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
    (firstName: string, lastName: string, department: string) => {
      realm.write(() => {
        realm.create(Student, {
          firstName,
          lastName,
          department,
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

// export const onUserCreation = async (user) => {
export const useWriteCustomUserData = () => {
  const user = useUser();
  const [userCustomData, setUserCustomData] = useState(user.customData);
  const writeCustomUserData = async (favoriteColor: string) => {
    const customUserDataCollection = user
      .mongoClient('mongodb-atlas')
      .db('solostudent-db')
      .collection('user-collection');
    const filter = {
      userId: user.id, // Query for the user object of the logged in user
    };
    const updateDoc = {
      $set: {
        // Set User ID if it's not already set
        userId: user.id,
        // Set the logged in user's favorite color
        favoriteColor,
      },
    };
    const options = { upsert: true };
    await customUserDataCollection.updateOne(filter, updateDoc, options);
    // Refresh custom user data once it's been updated on the server
    const customUserData = await user.refreshCustomData();
    setUserCustomData(customUserData);
  };
  return {
    writeCustomUserData,
    userCustomData,
  };
};
