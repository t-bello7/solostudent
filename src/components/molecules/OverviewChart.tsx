import { FC, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Heading } from '../atoms';
import { OverviewChartInt } from '../../utils';

const OverviewChart: FC<OverviewChartInt> = ({ chartType, title, data }) => {
  console.log(data);
  const [chartState, setChartState] = useState({
    options: {
      chart: {
        id: title,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      xaxis: {
        categories: data.categories,
      },
    },
    series: data.series,
  });

  useEffect(() => {
    setChartState({
      options: {
        chart: {
          id: title,
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        xaxis: {
          categories: data.categories,
        },
      },
      series: data.series,
    });
  }, [data, title]);
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
