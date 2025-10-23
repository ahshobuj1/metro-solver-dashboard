// src/components/StatCard.tsx

'use client';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {ChartTooltip, ChartTooltipContent} from '@/components/ui/chart';
import type {LucideIcon} from 'lucide-react';
import {Line, LineChart, ResponsiveContainer} from 'recharts';

interface StatCardProps {
  title: string;
  value: string | number;
  percentage: string;
  description: string;
  icon: LucideIcon;
  chartData: unknown[]; // Example: [{ value: 10 }, { value: 20 }, ...]
  chartColor: string; // Example: "#34d399"
}

export function StatCard({
  title,
  value,
  percentage,
  description,
  icon: Icon,
  chartData,
  chartColor,
}: StatCardProps) {
  const isPositive = percentage.startsWith('+');
  const isNegative = percentage.startsWith('-');

  return (
    <Card>
      <CardHeader className="pb-2">
        {/* উপরের অংশ: টাইটেল এবং আইকন */}
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>

        {/* ব্যাজ এবং বর্ণনা */}
        <div className="flex items-center gap-2">
          <Badge
            variant={isPositive || isNegative ? 'default' : 'outline'}
            className={
              isPositive
                ? 'border-transparent bg-emerald-100 text-emerald-700 hover:bg-emerald-100'
                : isNegative
                ? 'border-transparent bg-red-100 text-red-700 hover:bg-red-100'
                : 'border-transparent bg-gray-100 text-gray-700 hover:bg-gray-100'
            }>
            {percentage}
          </Badge>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {/* নিচের অংশ: সংখ্যা এবং চার্ট */}
        <div className="flex items-end justify-between">
          <div className="text-3xl font-bold">{value}</div>
          <div className="h-16 w-32">
            {' '}
            {/* চার্টের জন্য কন্টেইনার */}
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={chartColor}
                  strokeWidth={2.5}
                  dot={false} // চার্টের ডটগুলো হাইড করে
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
