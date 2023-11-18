import { FC } from 'react';
import { IconInt } from '../../utils';

const ClockIcon: FC<IconInt> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 45.7 45.7"
  >
    <path
      className={color}
      d="M22.8 0a22.8 22.8 0 1 0 0 45.7 22.8 22.8 0 0 0 0-45.7zm11.6 21.5L24 25.8a3 3 0 0 1-2.8-.3 3 3 0 0 1-1.4-2.5V8.6a3 3 0 0 1 6 0v10l6.3-2.6a3 3 0 0 1 2.3 5.5z"
    />
  </svg>
);

export default ClockIcon;
