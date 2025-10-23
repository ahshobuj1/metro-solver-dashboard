import {Button} from '@/components/ui/button';
import SelectMonth from '@/components/shared/common/SelectMonth';
import Chart from '@/components/pages/Dashboard/Chart';
import RecruitmentEmployeeEngagement from '@/components/pages/Dashboard/RecruitmentEmployeeEngagement';
import AlertsNotifications from '@/components/pages/Dashboard/AlertsNotifications';

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
                  <Button variant="metroSolver">View Details</Button>
                </div>
              </div>

              <Chart />
              <RecruitmentEmployeeEngagement />
              <AlertsNotifications />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
