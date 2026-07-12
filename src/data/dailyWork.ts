import type { LucideIcon } from 'lucide-react';
import { CalendarCheck, HeartHandshake, RefreshCw } from 'lucide-react';

export type DailyWorkCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const dailyWorkCards: DailyWorkCard[] = [
  {
    icon: CalendarCheck,
    title: 'Organized task management',
    description:
      'I begin each day by reviewing priorities, organizing my schedule, and planning my workload. Staying organized helps me manage multiple tasks efficiently, meet deadlines, and ensure nothing is overlooked.',
  },
  {
    icon: HeartHandshake,
    title: 'Proactive customer support',
    description:
      "I believe great customer support starts with listening and responding promptly. I focus on understanding each customer's needs, providing clear solutions, and following up when necessary to create a positive experience.",
  },
  {
    icon: RefreshCw,
    title: 'Clear communication & continuous improvement',
    description:
      'I keep clients and team members informed through timely updates and open communication. I also look for ways to improve my workflow, learn new tools, and refine my skills so I can consistently deliver better results.',
  },
];
