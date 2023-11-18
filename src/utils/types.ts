import { ReactElement } from 'react';

interface IconInt {
  color: string;
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

export type {
  OverviewCardInt, IconInt, OverviewChartInt, HeadingInt,
};
