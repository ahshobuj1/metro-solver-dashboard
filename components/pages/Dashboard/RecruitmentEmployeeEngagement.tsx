import FinancialStats from './FinancialStats';
import RecruitmentChartCard from './RequirementChartCard';

const RecruitmentEmployeeEngagement = () => {
  return (
    <div className="my-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <RecruitmentChartCard />
      </div>

      <div className="lg:col-span-1">
        <FinancialStats />
      </div>
    </div>
  );
};

export default RecruitmentEmployeeEngagement;
