import { FC } from 'react';
import { IconInt } from '../../utils';

const AdminIcon: FC<IconInt> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 30 30"
  >
    <path
      className={color}
      d="M12 6.3a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4zM8.4 15a9 9 0 0 0-5.5 8A12 12 0 0 0 17.4 26a19.5 19.5 0 0 1-2.7-9.3v-.3L12 20.6 8.5 15zm13.5.2c-1.7 0-4.8 2-4.8 2 0 4.6 2 9.7 4.8 9.7a3 3 0 0 0 2.2-1 8 8 0 0 0 1.5-2.5 16 16 0 0 0 1.2-6v-.2l-.2-.1-1.7-1c-.9-.4-2-.9-3-.9zm0 1c.6 0 1.7.4 2.6.8l1.3.7c0 1.7-.4 3.7-1.1 5.4-.4.8-.8 1.5-1.3 2s-1 .8-1.5.8v-9.7z"
    />
  </svg>
);

export default AdminIcon;
