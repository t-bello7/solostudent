import { FC } from 'react';
import { SectionTitle } from '../components/atoms';
import { OverviewSection } from '../components/elements';

const Home: FC = () => (
  <div className="space-y-4">
    <SectionTitle title="Dashboard" />
    <OverviewSection />
  </div>
);

export default Home;
