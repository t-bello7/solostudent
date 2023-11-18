import { FC } from 'react';
import { IconInt } from '../../utils';

const CancelIcon: FC<IconInt> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="40"
    height="40"
    viewBox="0 0 48 48"
  >
    <path
      className={color}
      fillRule="evenodd"
      d="M36.3 10.3 29 17.6l-.2.2-3.4 3.4 1.5 1.4 10.8-10.9a1 1 0 1 0-1.4-1.4Zm-8 13.7 10.9-10.9A3 3 0 1 0 34.9 9l-7.3 7.3-.2.2-3.4 3.4-.6-.7L13.2 8.9a3 3 0 1 0-4.3 4.2l10.9 11L8.9 34.8l-.4.6c-.7 1-.7 2.4.4 3.6 1.2 1.1 2.5 1.1 3.7.5l.6-.5 8.7-8.8a1 1 0 0 0-1.4-1.4l-8.7 8.8-.3.1c-.4.3-.7.3-1.1-.1-.5-.5-.5-.8-.2-1.2l.1-.2L24 22.6l1.4 1.4-2 2a1 1 0 0 0-.2.4c-.2.4-.1.9.2 1.2l11.5 11.5a3 3 0 1 0 4.3-4.2L28.2 24Zm-1.4 1.4-1.5 1.4 11 11a1 1 0 1 0 1.3-1.5L27 25.4Zm-4.3-4.2-1.4 1.4-10.9-10.9a1 1 0 0 1 1.4-1.4l11 10.9Z"
      clipRule="evenodd"
    />
  </svg>
);

export default CancelIcon;
