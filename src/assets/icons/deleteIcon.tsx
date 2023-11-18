import { FC } from 'react';
import { IconInt } from '../../utils';

const DeleteIcon: FC<IconInt> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 32 32"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h32v32H0z" />
      <path
        className={color}
        d="M32 6v2h-4v24H4V8H0V6zm-18 8h-2v9h2zm6 0h-2v9h2zm5-13v3H7V1z"
      />
    </g>
  </svg>
);

export default DeleteIcon;
