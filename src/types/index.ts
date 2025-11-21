export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  github: string;
  live: string | null;
}

export type Section = 'home' | 'about' | 'experience' | 'projects' | 'skills' | 'contact';

export interface SkillsMap {
  [category: string]: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ size?: number }>;
  ariaLabel: string;
}
