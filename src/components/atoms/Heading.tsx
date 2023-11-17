import { FC } from 'react';
import { HeadingInt } from '../../utils';

const Heading: FC<HeadingInt> = ({ headingType, title }) => {
  switch (headingType) {
    case 'page':
      return <h1 className="font-solway">{title}</h1>;
    case 'section':
      return <h2 className="font-solway">{title}</h2>;
    default:
      return (
        <h3>
          {' '}
          {title}
          {' '}
        </h3>
      );
  }
};

export default Heading;
