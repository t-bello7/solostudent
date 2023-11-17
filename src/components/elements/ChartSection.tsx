import { OverviewChart } from '../molecules';

const ChartSection = () => (
  <section className="grid md:grid-cols-2">
    <OverviewChart title="Course Statistics" chartType="bar" />
    <OverviewChart title="Student Statistics" chartType="line" />
  </section>
);

export default ChartSection;
