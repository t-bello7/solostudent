import { FC } from 'react';
import { IconInt } from '../../utils';

const ViewReportIcon: FC<IconInt> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path className={color} d="M1 1v14h14V1zm1 1h12v12H2z" />
    <path
      className={color}
      d="M5 3a2 2 0 0 0-2 2 2 2 0 0 0 2 2 2 2 0 0 0 2-2 2 2 0 0 0-2-2zm0 1a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1z"
    />
    <path className={color} d="m3 12 1 1 3-3 1 1 2-2 2 2 1-1-3-3-2 2-1-1z" />
  </svg>
);

export default ViewReportIcon;
