import {
  LayoutDashboard,
  Clock,
  Presentation,
  Users,
  BarChart3,
  UserPlus,
  MessageSquare,
  CheckSquare,
  Calendar,
  Workflow,
  Receipt,
  Newspaper,
  BookOpen,
  Shield,
  HelpCircle,
  Settings,
} from 'lucide-react';

export const sidebarItems = {
  user: {
    name: 'A H Shobuj',
    email: 'ahshobuj11@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },

  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Time Tracking',
      url: '#',
      icon: Clock,
    },
    {
      title: 'Meeting',
      url: '#',
      icon: Presentation,
    },
    {
      title: 'Employees',
      url: '/employees',
      icon: Users,
    },
    {
      title: 'Company Statistic',
      url: '#',
      icon: BarChart3,
    },
    {
      title: 'Recruitment',
      url: '#',
      icon: UserPlus,
    },
    {
      title: 'Messages',
      url: '#',
      icon: MessageSquare,
    },
    {
      title: 'Task',
      url: '#',
      icon: CheckSquare,
    },
    {
      title: 'Calendar',
      url: '#',
      icon: Calendar,
    },
    {
      title: 'Project Collaboration',
      url: '#',
      icon: Workflow,
    },
    {
      title: 'HMRC',
      url: '#',
      icon: Receipt,
    },
    {
      title: 'NewsFeed',
      url: '#',
      icon: Newspaper,
    },
    {
      title: 'Course',
      url: '#',
      icon: BookOpen,
    },
    {
      title: 'Policies',
      url: '#',
      icon: Shield,
    },
    {
      title: 'Metro Assistant',
      url: '#',
      icon: HelpCircle,
    },
    {
      title: 'Setting',
      url: '#',
      icon: Settings,
    },
  ],
};
