import { ReactElement, ReactNode } from 'react';

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

interface OverviewChartInt {
  chartType?: 'line' | 'bar' | undefined;
  title: string;
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

export type {
  OverviewCardInt,
  IconInt,
  OverviewChartInt,
  HeadingInt,
  ButtonInt,
};
