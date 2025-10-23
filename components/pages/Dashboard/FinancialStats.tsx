'use client';

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Progress} from '@/components/ui/progress';
import {Badge} from '@/components/ui/badge';

const FinancialStats = () => {
  return (
    <div className="flex flex-col gap-6">
      <CardTitle className="text-lg font-medium">
        Financial & Sales Statistic
      </CardTitle>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600 mb-3">
              Total Earning
            </CardTitle>
            <p className="text-2xl font-medium">£8593.65</p>
          </CardHeader>
        </Card>
        <Card className="p-4">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-gray-600 mb-3">
              Total Expenses
            </CardTitle>
            <p className="text-2xl font-medium">£3570.50</p>
          </CardHeader>
        </Card>
      </div>

      <Card className="p-4">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold">Total Sales</CardTitle>
          <p className="text-sm text-muted-foreground">
            Improved from last month
          </p>
        </CardHeader>

        <CardContent className="flex flex-col gap-6 mt-5">
          <div className="relative h-6 w-full">
            <Progress value={50} className="h-2 w-full" />
            <Badge
              className="absolute -top-4 bg-[#6D43E4] text-white"
              style={{left: '50%', transform: 'translateX(-50%)'}}>
              50%
            </Badge>
          </div>

          <div className="flex flex-wrap  justify-start items-center gap-4">
            <p className="text-3xl font-bold">£456,780</p>
            <p className="text-sm font-medium text-emerald-600 bg-emerald-50 rounded-full p-1 px-3">
              +15.3% this quarter
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialStats;
