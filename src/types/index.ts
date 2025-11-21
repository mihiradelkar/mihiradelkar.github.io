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
  category: ProjectCategory[];
  featured?: boolean;
}

export type ProjectCategory =
  | 'AI/ML'
  | 'Distributed Systems'
  | 'Cloud'
  | 'Mobile/IoT'
  | 'Frontend'
  | 'Backend'
  | 'Open Source';

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
