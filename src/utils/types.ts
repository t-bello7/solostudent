import { ReactElement } from 'react';

interface IconInt {
  color: string;
}
interface OverviewCardInt {
  name: string;
  Icon: ReactElement;
  overviewData: number;
}

export type { OverviewCardInt, IconInt };
