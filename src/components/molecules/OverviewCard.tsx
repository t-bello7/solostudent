import { FC } from 'react';
import { Card } from 'antd';
import { OverviewCardInt } from '../../utils';

const OverviewCard: FC<OverviewCardInt> = ({ name, Icon, overviewData }) => (
  <Card className="bg-blueVariantColor font-cantarell text-white">
    <div className="flex items-center gap-2">
      <span>
        {' '}
        {Icon}
        {' '}
      </span>
      <span>
        {' '}
        {name}
        {' '}
      </span>
    </div>
    <h4 className="text-center font-solway text-2xl font-bold">
      {' '}
      {overviewData}
      {' '}
    </h4>
  </Card>
);

export default OverviewCard;
