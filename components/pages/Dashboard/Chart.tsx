'use client';

import {dashboardChartStats} from '@/constants/chartData';
import ApexStatCard from './ApexStatCard';

const Chart = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {dashboardChartStats.map((stat) => (
        <ApexStatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          percentage={stat.percentage}
          description={stat.description}
          icon={stat.icon}
          chartSeries={stat.chartSeries}
          chartColor={stat.chartColor}
        />
      ))}
    </div>
  );
};

export default Chart;
