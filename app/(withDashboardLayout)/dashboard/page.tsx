import {ChartAreaInteractive} from '@/components/chart-area-interactive';
import {DataTable} from '@/components/data-table';

import data from './data.json';
import {Button} from '@/components/ui/button';
import SelectMonth from '@/components/shared/common/SelectMonth';
import Chart from '@/components/pages/Dashboard/Chart';

export default function Page() {
  return (
    <section>
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <div className="px-4 lg:px-6">
              <div className="flex justify-between items-center mb-4">
                <p className="text-xl font-medium">Employee Management</p>
                <div>
                  <SelectMonth />

                  <Button className="bg-[linear-gradient(90deg,#41295A_0%,#2F0743_100%)]  rounded-full ml-4 cursor-pointer">
                    View Details
                  </Button>
                </div>
              </div>

              <Chart />
              <ChartAreaInteractive />
            </div>
            <DataTable data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}
