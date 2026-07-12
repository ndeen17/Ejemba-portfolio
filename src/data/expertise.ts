import type { LucideIcon } from 'lucide-react';
import { Headset, ClipboardList, Home } from 'lucide-react';

export type ExpertiseCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const expertiseCards: ExpertiseCard[] = [
  {
    icon: Headset,
    title: 'My areas of expertise',
    description:
      'I help businesses build lasting customer relationships by providing prompt, empathetic, and solution-focused support. My approach is to listen first, communicate clearly, and resolve issues efficiently, turning every interaction into a positive customer experience.',
  },
  {
    icon: ClipboardList,
    title: 'My efficient strategy',
    description:
      'I help businesses stay organized by managing daily administrative tasks, coordinating schedules, and streamlining workflows. My strategy is to stay proactive, prioritize effectively, and pay close attention to detail so everything runs smoothly and efficiently.',
  },
  {
    icon: Home,
    title: 'My remote setup',
    description:
      'I work from a dedicated home office with a reliable laptop, high-speed internet, and backup power. My setup ensures I can provide consistent, organized, and uninterrupted customer and administrative support.',
  },
];
