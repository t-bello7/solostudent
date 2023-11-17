import { FC } from 'react';
import { IconInt } from '../../utils';

const SittingStudentIcon: FC<IconInt> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 496.8 496.8"
  >
    <path d="M298.3 5.1h130.2V44H298.3z" className={color} />
    <path d="M319.2 96.8h130.1v39H319.2z" className={color} />
    <path d="M317 50.6h130.2v38.9H317z" className={color} />
    <path d="M292.7 143.1h130.2V182H292.7z" className={color} />
    <path
      d="M271 133H153l5.2-35.9h-58L34.4 320.3h161l-.1 176.5h58.2l-.2-234.4h-119l11-76.8h126.1V133h-.3z"
      className={color}
    />
    <path
      d="M138.1 84a42 42 0 1 0 0-84 42 42 0 0 0 0 84z"
      className={color}
    />
    <path
      d="M192.3 196.9V237h110.9v259.8h47.7V237h111.5v-40.1z"
      className={color}
    />
    <path d="M42 356.4h58.4v140.4h25.1V356.4h58.6v-21.1H42z" />
  </svg>
);

export default SittingStudentIcon;
