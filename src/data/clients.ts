import type { LucideIcon } from 'lucide-react';
import { Building2, Rocket, ShoppingBag, Users, ShieldCheck } from 'lucide-react';

export type ClientType = {
  icon: LucideIcon;
  label: string;
};

export const clientTypes: ClientType[] = [
  { icon: Building2, label: 'Small and medium-sized businesses' },
  { icon: Rocket, label: 'Entrepreneurs and startups' },
  { icon: ShoppingBag, label: 'Online business owners and e-commerce brands' },
  { icon: Users, label: 'Coaches, consultants and service-based professionals' },
  { icon: ShieldCheck, label: 'Companies seeking reliable virtual assistance and customer support' },
];
