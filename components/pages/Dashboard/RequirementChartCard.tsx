'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import type {ApexOptions} from 'apexcharts';
import SelectMonth from '@/components/shared/common/SelectMonth';
import {ChevronDown} from 'lucide-react';
import dynamic from 'next/dynamic';

const RecruitmentChartCard = () => {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {show: false},
    },
    colors: ['#8b5cf6'],
    dataLabels: {enabled: false},
    stroke: {curve: 'smooth', width: 3},
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.0,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      axisBorder: {show: false},
      axisTicks: {show: false},
    },
    yaxis: {
      min: 10,
      max: 100,
      tickAmount: 9,
      labels: {
        formatter: (val) => `${val.toFixed(0)}%`,
      },
    },
    grid: {
      borderColor: '#e5e7eb',
      strokeDashArray: 4,
    },

    annotations: {
      points: [
        {
          x: 'Jun',
          y: 70,
          marker: {
            size: 8,
            fillColor: '#fff',
            strokeColor: '#8b5cf6',
            strokeWidth: 3,
          },
          label: {
            borderColor: '#8b5cf6',
            offsetY: -15,
            style: {
              color: '#fff',
              background: '#8b5cf6',
              padding: {left: 8, right: 8, top: 4, bottom: 4},
            },
            text: 'Job Open 320',
          },
        },
      ],
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val) => `${val}%`,
      },
    },
  };

  const chartSeries = [
    {
      name: 'Job Openings',
      data: [20, 32, 28, 45, 48, 70, 68, 65, 80, 85, 88, 92],
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <CardTitle className="text-lg font-medium">
          Recruitment & Employee Engagement
        </CardTitle>
        <Button variant={'metroSolver'}>View Details</Button>
      </div>

      <Card className="max-h-[360px]">
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Button variant={'metroSolver'} className="flex items-center">
              Job Openings <ChevronDown className="opacity-50" />
            </Button>

            <SelectMonth />
          </div>
        </CardHeader>
        <CardContent>
          <ReactApexChart
            options={chartOptions}
            series={chartSeries}
            type="area"
            height={270}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default RecruitmentChartCard;

const ReactApexChart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});
