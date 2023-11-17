import { FC, useState } from 'react';
import Chart from 'react-apexcharts';
import { Heading } from '../atoms';
import { OverviewChartInt } from '../../utils';

const OverviewChart: FC<OverviewChartInt> = ({ chartType, title }) => {
  const [chartState] = useState({
    options: {
      chart: {
        id: 'apexchart-example',
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
  });
  return (
    <div>
      <Heading headingType="section" title={title} />
      <Chart
        options={chartState.options}
        series={chartState.series}
        type={chartType}
        width="90%"
        height={320}
      />
    </div>
  );
};

export default OverviewChart;
