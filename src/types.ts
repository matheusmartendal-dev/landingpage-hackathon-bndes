export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface TemaItem {
  id: string;
  num: string;
  title: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  date?: string;
  status: "completed" | "active" | "incoming";
}

export interface LiveItem {
  id: string;
  number: string;
  date: string;
  theme: string;
  ctaUrl?: string;
}

export interface WinnerItem {
  id: string;
  position: string;
  team: string;
  prize: string;
  description: string;
  pitchUrl: string;
  githubUrl: string;
  photoUrl?: string;
}
