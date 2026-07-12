import type { LucideIcon } from 'lucide-react';
import { LayoutGrid, FileText, Kanban, ListTodo, Timer, Video, Palette, Film } from 'lucide-react';

export type Tool = {
  icon: LucideIcon;
  label: string;
};

export const tools: Tool[] = [
  { icon: LayoutGrid, label: 'Google Workspace' },
  { icon: FileText, label: 'Microsoft Office' },
  { icon: Kanban, label: 'Trello' },
  { icon: ListTodo, label: 'Asana' },
  { icon: Timer, label: 'Clockify' },
  { icon: Video, label: 'Zoom / Google Meet' },
  { icon: Palette, label: 'Canva' },
  { icon: Film, label: 'CapCut' },
];
