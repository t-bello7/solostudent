import { FC } from 'react';
import { IconInt } from '../../utils';

const SearchIcon: FC<IconInt> = ({ color }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={`stroke-2 ${color}`}
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      className={`stroke-2 ${color}`}
      d="M22 22L20 20"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SearchIcon;
