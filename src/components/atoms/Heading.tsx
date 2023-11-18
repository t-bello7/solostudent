import { FC } from 'react';
import { HeadingInt } from '../../utils';

const Heading: FC<HeadingInt> = ({ className, headingType, title }) => {
  switch (headingType) {
    case 'page':
      return <h1 className={`font-solway capitalize ${className}`}>{title}</h1>;
    case 'section':
      return <h2 className={`font-solway capitalize ${className}`}>{title}</h2>;
    default:
      return <h3 className={`font-solway capitalize ${className}`}>{title}</h3>;
  }
};

export default Heading;
