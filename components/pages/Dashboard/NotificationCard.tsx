import {Badge} from '@/components/ui/badge';
import {TNotification} from '@/constants/notificationData';

const badgeStyles: {[key: string]: string} = {
  critical:
    'border-transparent bg-purple-100 text-purple-700 hover:bg-purple-100',
  warning:
    'border-transparent bg-orange-100 text-orange-700 hover:bg-orange-100',
  approved:
    'border-transparent bg-emerald-100 text-emerald-700 hover:bg-emerald-100',
  alert: 'border-transparent bg-yellow-100 text-yellow-700 hover:bg-yellow-100',
};

const NotificationCard = ({item}: {item: TNotification}) => {
  return (
    <div className="flex items-start gap-4 rounded-lg border bg-card p-4 shadow-sm cursor-pointer">
      <div className="flex-shrink-0 rounded-full border p-2 mt-1 bg-gray">
        <item.icon className="h-5 w-5 text-gray-600" />
      </div>

      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-4 mb-1">
          <p className="font-medium text-sm">{item.title}</p>
          <Badge
            variant="outline"
            className={badgeStyles[item.badgeVariant] || ''}>
            {item.badgeText}
          </Badge>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-100">
          {item.description}
        </p>
      </div>

      <div className="flex-shrink-0 text-sm text-muted-foreground bg-gray-100 rounded-full px-4 py-1 mt-1">
        {item.time}
      </div>
    </div>
  );
};

export default NotificationCard;
