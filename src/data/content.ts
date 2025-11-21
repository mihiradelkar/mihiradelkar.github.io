import { Experience, Project, SkillsMap } from '../types';

export const experiences: Experience[] = [
  {
    title: 'Full-Stack Developer',
    company: 'KeelWorks',
    location: 'Boston, MA (Remote)',
    period: 'Aug 2025 - Present',
    highlights: [
      'Building Node.js microservices with Kafka async workflows and Redis caching',
      'Developing responsive React/Next.js dashboards for workforce engagement',
      'Deploying containerized services on AWS EKS with Docker/Terraform',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'NeoSOFT Technologies',
    location: 'Mumbai, India',
    period: 'Jun 2021 - May 2023',
    highlights: [
      'Built REST/GraphQL APIs with PostgreSQL/MongoDB serving 500K+ users',
      'Led migration from monolith to Dockerized microservices (80% faster deployments)',
      'Implemented Kafka event-driven architecture processing 1B+ messages/day',
      'Mentored 8 junior developers through code reviews and pair programming',
    ],
  },
  {
    title: 'Software Engineer (Freelance)',
    company: 'Dabadu.ai',
    location: 'Ontario, Canada (Remote)',
    period: 'May 2023 - Sep 2023',
    highlights: [
      'Stabilized React/Node.js production app with error handling and monitoring',
      'Refactored legacy JS to TypeScript, reducing bundle size by 25%',
      'Implemented WebSockets and SSE for real-time data streaming',
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'CVE Intelligence System',
    description:
      'AI-Powered Security Assistant with distributed microservices processing 1B+ messages/day',
    tech: ['Go', 'Python', 'Kafka', 'PostgreSQL', 'AWS EKS', 'Terraform', 'Pinecone', 'Llama3'],
    highlights: [
      'Built RAG pipeline with Pinecone vector DB and Llama3 LLM',
      'Deployed on AWS EKS with Istio service mesh',
      'Implemented Prometheus monitoring and observability',
    ],
    github: 'https://github.com/mihiradelkar',
    live: null,
  },
  {
    title: 'Pedgog - Learning Analytics',
    description: 'Real-time classroom analytics platform improving engagement by 30%',
    tech: ['Next.js', 'Django', 'PostgreSQL', 'Firebase', 'AWS S3', 'Kubernetes'],
    highlights: [
      'Built responsive Next.js dashboards with SSR',
      'Implemented K6 load testing for 1,500+ concurrent users',
      'Deployed with auto-scaling on Kubernetes',
    ],
    github: 'https://github.com/mihiradelkar',
    live: null,
  },
  {
    title: 'Wasalt - Real Estate CRM',
    description: 'Multi-tenant CRM system with microservices architecture',
    tech: ['React', 'TypeScript', 'Spring Boot', 'Node.js', 'Kafka', 'Redis', 'PostgreSQL'],
    highlights: [
      'Architected Spring Boot microservices with Kafka streaming',
      'Optimized PostgreSQL with Redis caching (sub-100ms responses)',
      'Built real-time WebSocket updates',
    ],
    github: 'https://github.com/mihiradelkar',
    live: null,
  },
  {
    title: 'UniNest - Roommate Matching',
    description: 'AI-powered platform for university students to find compatible roommates',
    tech: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'Docker', 'GCP'],
    highlights: [
      'Real-time chat using WebSockets',
      'Google Maps integration',
      'JWT authentication with secure APIs',
    ],
    github: 'https://github.com/mihiradelkar',
    live: null,
  },
];

export const skills: SkillsMap = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Java', 'SQL'],
  Frontend: ['React', 'Next.js', 'Redux', 'Material-UI', 'Tailwind CSS', 'HTML/CSS'],
  Backend: ['Node.js', 'Express', 'Django', 'Flask', 'Spring Boot', 'GraphQL', 'gRPC'],
  Databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Pinecone', 'Firebase'],
  'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'GitHub Actions'],
  'Tools & Others': [
    'Kafka',
    'Git',
    'Linux',
    'Prometheus',
    'Grafana',
    'New Relic',
    'Cypress',
    'Jest',
  ],
};

export const personalInfo = {
  name: 'Mihir Ravindra Adelkar',
  title: 'Full-Stack Software Engineer',
  tagline:
    'Building scalable, cloud-native applications with 3+ years of experience. Passionate about distributed systems, microservices, AI/ML applications, and blockchain.',
  email: 'adelkar.mihir@gmail.com',
  location: 'Boston, MA',
  github: 'https://github.com/mihiradelkar',
  linkedin: 'https://linkedin.com/in/mihir-adelkar',
};
