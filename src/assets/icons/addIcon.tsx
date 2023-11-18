import { FC } from 'react';
import { IconInt } from '../../utils';

const AddIcon: FC<IconInt> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 24 24"
  >
    <path
      className={color}
      d="M2 21h8a1 1 0 0 0 0-2H3a7 7 0 0 1 7-6 5 5 0 1 0-3.4-1.3A9 9 0 0 0 1 20a1 1 0 0 0 1 1Zm8-16a3 3 0 1 1-3 3 3 3 0 0 1 3-3Zm13 11a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1Z"
    />
  </svg>
);

export default AddIcon;
