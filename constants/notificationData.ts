import {TriangleAlert, Clock, CalendarCheck} from 'lucide-react';
import type {LucideIcon} from 'lucide-react';

export type TNotification = {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: LucideIcon;
  badgeText: string;
  badgeVariant: 'critical' | 'warning' | 'approved' | 'alert';
};

export const notificationsData: TNotification[] = [
  {
    id: 'n1',
    title: 'Budget Overrun Alert',
    description: 'Marketing department exceeded monthly budget by 15%',
    time: '2 hours ago',
    icon: TriangleAlert,
    badgeText: 'Critical',
    badgeVariant: 'critical',
  },
  {
    id: 'n2',
    title: 'Performance Reviews Due',
    description: '5 employee performance reviews due this week',
    time: '10 hours ago',
    icon: Clock,
    badgeText: 'Warning',
    badgeVariant: 'warning',
  },
  {
    id: 'n3',
    title: 'Campaign Launch',
    description: 'Q1 Marketing campaign launching tomorrow',
    time: '1 day ago',
    icon: CalendarCheck,
    badgeText: 'Approved',
    badgeVariant: 'approved',
  },
  {
    id: 'n4',
    title: 'High Absenteeism',
    description: 'Attendance rate dropped to 85% this week',
    time: '2 days ago',
    icon: Clock,
    badgeText: 'Alert',
    badgeVariant: 'alert',
  },
];
