import type { Locale } from "@/i18n/config";

export type PortfolioProject = {
  title: string;
  description: string;
  tags: string[];
};

export type SkillItem = {
  name: string;
  level: number;
};

export type LanguageItem = {
  name: string;
  level: string;
  proficiency: number;
};

export type TrainingItem = {
  year: string;
  title: string;
};

export type ExperienceItem = {
  period: string;
  company: string;
  role: string;
  location?: string;
  context?: string;
  tasks: string[];
};

export type EducationItem = {
  period: string;
  institution: string;
  title?: string;
  degree?: string;
};

export type NavSectionId =
  | "about"
  | "experience"
  | "projects"
  | "education"
  | "skills"
  | "contact";

export type PortfolioDictionary = {
  locale: Locale;
  profile: {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
  };
  hero: {
    intro: string;
    emailCta: string;
    resumeCta: string;
    scrollAriaLabel: string;
    portraitAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  experienceSection: {
    eyebrow: string;
    title: string;
  };
  projectsSection: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  educationSection: {
    eyebrow: string;
    title: string;
  };
  skillsSection: {
    eyebrow: string;
    title: string;
    coreSkills: string;
    languages: string;
    training: string;
    techStack: string;
    tools: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    emailLabel: string;
    phoneLabel: string;
    form: {
      title: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      privacyLabel: string;
      privacyLink: string;
      privacySuffix: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      notConfigured: string;
      subject: string;
    };
  };
  nav: {
    contactCta: string;
    menuOpen: string;
    menuClose: string;
    links: Record<NavSectionId, string>;
  };
  footer: {
    imprint: string;
    privacy: string;
    roleSuffix: string;
  };
  site: {
    title: string;
    description: string;
  };
  legal: {
    backToHome: string;
    imprint: {
      title: string;
      tmgHeading: string;
      contactHeading: string;
      phonePrefix: string;
      emailPrefix: string;
    };
    privacy: {
      title: string;
      responsibleHeading: string;
      emailPrefix: string;
      dataCollectionHeading: string;
      dataCollectionText: string;
      hostingHeading: string;
      hostingText: string;
    };
  };
  highlights: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillItem[];
  languages: LanguageItem[];
  training: TrainingItem[];
  techStack: string[];
  tools: string[];
  projects: PortfolioProject[];
};

export type NavLink = {
  href: string;
  label: string;
};
