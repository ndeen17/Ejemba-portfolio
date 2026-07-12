import type { LucideIcon } from 'lucide-react';
import { BadgeCheck, UserCheck, Settings2 } from 'lucide-react';

export type Certification = {
  icon: LucideIcon;
  title: string;
  issuer: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    icon: BadgeCheck,
    title: 'Certificate of Participation',
    issuer: 'EnglishConnect',
    description:
      'Reflects my commitment to improving my English communication skills. Through the EnglishConnect program, I strengthened my speaking, listening, and interpersonal communication, enabling me to communicate confidently and professionally in customer support and administrative roles.',
  },
  {
    icon: UserCheck,
    title: 'Certified Virtual Assistant',
    issuer: 'ALX',
    description:
      'Verified skills in administrative support, task management, and professional virtual assistance.',
  },
  {
    icon: Settings2,
    title: 'CRM & Customer Support Tools Training',
    issuer: 'Self-paced training',
    description:
      'Proficiency in using industry-standard customer service software to manage inquiries and support operations.',
  },
];
