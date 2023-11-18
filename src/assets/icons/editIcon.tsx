import { FC } from 'react';
import { IconInt } from '../../utils';

const EditIcon: FC<IconInt> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="40"
    height="40"
    viewBox="0 0 24 24"
  >
    <path
      className={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m18 10-4-4m4 4 3-3-4-4-3 3m4 4-1 1m-3-5-6 6v4h4l2.5-2.5m5.5.5v6h-8M10 4H4v16h3"
    />
  </svg>
);

export default EditIcon;
