export type Certification = {
  title: string;
  issuer: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    title: 'Certificate of Participation',
    issuer: 'EnglishConnect',
    description:
      'Reflects my commitment to improving my English communication skills. Through the EnglishConnect program, I strengthened my speaking, listening, and interpersonal communication, enabling me to communicate confidently and professionally in customer support and administrative roles.',
  },
  {
    title: 'Certified Virtual Assistant',
    issuer: 'ALX',
    description:
      'Verified skills in administrative support, task management, and professional virtual assistance.',
  },
  {
    title: 'CRM & Customer Support Tools Training',
    issuer: 'Self-paced training',
    description:
      'Proficiency in using industry-standard customer service software to manage inquiries and support operations.',
  },
];
