import { ReactElement, ReactNode, HTMLAttributes } from 'react';

interface IconInt {
  color: string;
  className?: string;
}
interface HeadingInt {
  headingType?: 'page' | 'section';
  title: string;
  className?: string;
}

interface OverviewCardInt {
  name: string;
  Icon: ReactElement;
  overviewData: number;
}

interface CourseDataInt {
  categories: string[];
  series: {
    name: string;
    data: number[];
  }[];
}

interface OverviewChartInt {
  chartType?: 'line' | 'bar' | undefined;
  title: string;
  data: CourseDataInt;
}

interface ButtonInt {
  variant?: 'icon' | 'iconButton';
  text?: string;
  isLoading?: boolean;
  Icon?: ReactNode;
  disabled?: boolean;
  className?: string;
  styleType?: 'primary' | 'secondary' | 'disabled';
  onClick?: () => void;
}

interface ItemInt {
  key: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  blacklisted: boolean;
  department: string;
  profilePic: string;
}

interface EditableCellPropsInt extends HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: string;
  inputType: 'number' | 'text';
  //   record?: Item;
  //   index?: number;
  children: ReactNode;
}

interface StudentDataInt {
  key: string;
  firstName: string;
  lastName: string;
  department: string;
  profilePic: string;
  blacklisted: boolean;
  createdAt: Date;
}

export type {
  OverviewCardInt,
  IconInt,
  OverviewChartInt,
  HeadingInt,
  ButtonInt,
  ItemInt,
  EditableCellPropsInt,
  StudentDataInt,
  CourseDataInt,
};
