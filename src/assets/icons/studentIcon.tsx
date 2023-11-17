import { FC } from 'react';
import { IconInt } from '../../utils';

const StudentIcon: FC<IconInt> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 512 512"
  >
    <circle cx="256" cy="220.7" r="69.1" className={color} />
    <path
      d="M365.4 424c-1.2-66.1-49.7-119.2-109.4-119.2s-108.2 53.1-109.4 119.1h218.8z"
      className={color}
    />
    <circle cx="82.2" cy="140" r="51.9" className={color} />
    <path
      d="M164.4 292.7c-.9-49.6-37.3-89.5-82.2-89.5S.9 243.2 0 292.7h164.4z"
      className={color}
    />
    <circle cx="429.8" cy="140" r="51.9" className={color} />
    <path
      d="M512 292.7c-.9-49.6-37.3-89.5-82.2-89.5s-81.3 40-82.2 89.5H512z"
      className={color}
    />
  </svg>
);

export default StudentIcon;
