import { FC } from 'react';
import { Heading } from '../components/atoms';
import { OverviewSection, ChartSection } from '../components/elements';

const DashboardHome: FC = () => (
  <div className="space-y-4">
    <Heading headingType="page" title="Dashboard" />
    <OverviewSection />
    <ChartSection />
  </div>
);

export default DashboardHome;
