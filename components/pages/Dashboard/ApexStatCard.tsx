'use client';

import {Badge} from '@/components/ui/badge';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import type {ApexOptions} from 'apexcharts';
import type {LucideIcon} from 'lucide-react';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

type TApexStatCardProps = {
  title: string;
  value: string | number;
  percentage: string;
  description: string;
  icon: LucideIcon;
  chartSeries: ApexAxisChartSeries;
  chartColor: string;
};

const ApexStatCard = ({
  title,
  value,
  percentage,
  description,
  icon: Icon,
  chartSeries,
  chartColor,
}: TApexStatCardProps) => {
  const isPositive = percentage.startsWith('+');
  const isNegative = percentage.startsWith('-');

  const chartOptions: ApexOptions = {
    chart: {
      type: 'area',
      height: 64,
      sparkline: {
        enabled: true,
      },
      animations: {
        enabled: false,
      },
    },
    colors: [chartColor],
    stroke: {
      curve: 'smooth',
      width: 2.5,
    },

    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.8,
        opacityTo: 0.4,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      enabled: true,
      theme: 'light',
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: () => '',
        },
      },
      marker: {
        show: false,
      },
    },
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
            <Icon className="h-4 w-4 text-muted-foreground" />
          </div>

          <div>
            <div className="grid grid-cols-4 justify-between items-center w-full">
              <span className="col-span-3">
                <CardTitle className="text-sm font-medium ">{title}</CardTitle>
              </span>

              <span className="col-span-1">
                <Badge
                  variant={isPositive || isNegative ? 'default' : 'outline'}
                  className={
                    isPositive
                      ? 'border-transparent bg-emerald-100 text-emerald-700 hover:bg-emerald-100'
                      : isNegative
                      ? 'border-transparent bg-red-100 text-red-700 hover:bg-red-100'
                      : 'border-transparent bg-purple-100 text-purple-700 hover:bg-purple-100'
                  }>
                  {percentage}
                </Badge>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xs text-muted-foreground">{description}</p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-end justify-between">
          <div className="text-3xl font-bold">{value}</div>
          <div className="h-16 w-32">
            <ReactApexChart
              options={chartOptions}
              series={chartSeries}
              type="area"
              height="100%"
              width="100%"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApexStatCard;
