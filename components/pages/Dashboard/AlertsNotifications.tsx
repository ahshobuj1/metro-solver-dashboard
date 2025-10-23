import SelectMonth from '@/components/shared/common/SelectMonth';
import {Button} from '@/components/ui/button';
import {notificationsData} from '@/constants/notificationData';
import NotificationCard from './NotificationCard';

const AlertsNotifications = () => {
  return (
    <section className="my-6">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <p className="text-xl font-medium">Alerts & Notifications</p>
        <div className="flex items-center gap-2">
          <SelectMonth />
          <Button variant="metroSolver">View Details</Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {notificationsData.map((item) => (
          <NotificationCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default AlertsNotifications;
