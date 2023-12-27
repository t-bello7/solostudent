import { StudentDataInt } from './types';

const courseStudentNumber = (course: string, data: StudentDataInt[]) => data.filter((item) => item.department === course).length;

export { courseStudentNumber };
