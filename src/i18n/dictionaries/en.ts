import type { PortfolioDictionary } from "@/i18n/types";

export const en: PortfolioDictionary = {
  locale: "en",
  profile: {
    name: "Stefan Scheifel",
    title: "Software Developer",
    location: "Oldenburg, Germany",
    email: "stefan.scheifel@me.com",
    phone: "0152 08692147",
  },
  hero: {
    intro:
      "Custom software at affordable rates for small and medium-sized businesses",
    emailCta: "Send email",
    resumeCta: "View résumé",
    scrollAriaLabel: "Continue to skills",
    portraitAlt: "Portrait of Stefan Scheifel",
  },
  about: {
    eyebrow: "Profile",
    title: "About me",
    intro:
      "Software developer based in Oldenburg, Germany, with experience in modern web development, UI/UX, and quality management.",
  },
  experienceSection: {
    eyebrow: "Work experience",
    title: "Where I've worked",
  },
  projectsSection: {
    eyebrow: "Projects",
    title: "What I have worked on",
    intro: "An overview of projects from freelance work and client engagements/agency work.",
  },
  educationSection: {
    eyebrow: "Education",
    title: "Academic & training path",
  },
  skillsSection: {
    eyebrow: "Skills",
    title: "Skills & technologies",
    coreSkills: "Core competencies",
    languages: "Languages",
    training: "Professional development",
    techStack: "Programming & frameworks",
    tools: "Tools & software",
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk",
    intro:
      "Interested in working together? Reach out via the form, email, or phone.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    form: {
      title: "Send a message",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "you@email.com",
      phoneLabel: "Phone (optional)",
      phonePlaceholder: "+49 …",
      messageLabel: "Message",
      messagePlaceholder: "What would you like to discuss? Briefly describe …",
      privacyLabel: "I agree to the processing of my data according to the",
      privacyLink: "privacy policy",
      privacySuffix: ".",
      submit: "Send message",
      sending: "Sending …",
      success: "Thank you! Your message was sent. I'll get back to you soon.",
      error:
        "Your message could not be sent. Please try again or email me directly.",
      notConfigured:
        "The form is not configured yet. Please use the email address above for now.",
      subject: "New portfolio inquiry",
    },
  },
  nav: {
    contactCta: "Contact",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    links: {
      about: "Profile",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      skills: "Skills",
      contact: "Contact",
    },
  },
  footer: {
    imprint: "Legal notice",
    privacy: "Privacy",
    roleSuffix: "Front End Developer",
  },
  site: {
    title: "Stefan Scheifel | Front End Developer",
    description:
      "Portfolio of Stefan Scheifel – Front End Developer with experience in React, TypeScript, UI/UX, and modern web development.",
  },
  legal: {
    backToHome: "← Back to home",
    imprint: {
      title: "Legal notice",
      tmgHeading: "Information pursuant to § 5 TMG (German law)",
      contactHeading: "Contact",
      phonePrefix: "Phone:",
      emailPrefix: "Email:",
    },
    privacy: {
      title: "Privacy policy",
      responsibleHeading: "Controller",
      emailPrefix: "Email:",
      dataCollectionHeading: "Data collection on this website",
      dataCollectionText:
        "This portfolio website does not automatically collect personal data. No cookies are set and no tracking is used. When you contact me by email or phone, the information you provide is used solely to handle your request.",
      hostingHeading: "Hosting",
      hostingText:
        "When you visit this website, technically necessary server log files are processed by the hosting provider. Please refer to your host's privacy information for details.",
    },
  },
  highlights: [
    "Strong expertise in improving user interfaces and user experience",
    "Quality management",
    "In-depth knowledge of modern web development",
    "Customer- and service-oriented with innovative solution strategies",
    "Creativity and team spirit",
  ],
  experience: [
    {
      period: "01/2022 – present",
      company: "Freelance / self-employed",
      role: "Software Developer",
      location: "Remote",
      context: "Project work for multiple clients",
      tasks: [
        "Implementation of TypeScript React user interfaces",
        "UI library built with Lit Web Components",
        "Testing with Cypress",
        "Code reviews",
        "CI/CD pipeline with GitHub Actions",
        "Changes to existing backend services",
        "Training clients and teams on agile software development",
        "Debugging code and infrastructure in production",
        "AI dashboard for a research project analyzing image and power data",
        "Sparring with CTO and shareholders on company direction",
        "Custom content management framework for SMBs with Strapi",
      ],
    },
    {
      period: "12/2020 – 03/2021",
      company: "brunel",
      location: "Remote",

      role: "Front End Developer",
      context: "Project work at BTC ES",
      tasks: [
        "Implementation of TypeScript React user interfaces",
        "Test management",
      ],
    },
    {
      period: "07/2017 – 07/2020",
      company: "thepeaklab",
      location: "Oldenburg",
      role: "Front End Developer",
      tasks: [
        "Client coordination",
        "User interface implementation",
        "Technical support",
        "Test management",
      ],
    },
  ],
  education: [
    {
      period: "10/2015 – 07/2017",
      institution: "WBS, Oldenburg",
      title: "Retraining as Software Developer",
      degree: "IT specialist for application development",
    },
    {
      period: "02/2011 – 07/2014",
      institution: "mStore Apple Premium Reseller",
      title: "Apprenticeship as IT systems merchant",
    },
    {
      period: "08/2008 – 06/2010",
      institution: "Peter Ustinov School, Hude",
      degree: "Secondary school certificate (Mittlere Reife)",
    },
  ],
  skills: [
    { name: "Quality management", level: 4 },
    { name: "Software development", level: 4 },
    { name: "Business analysis", level: 3 },
    { name: "User experience", level: 5 },
    { name: "User interface", level: 4 },
    { name: "Team player", level: 5 },
    { name: "Project experience", level: 4 },
  ],
  languages: [
    { name: "German", level: "Native", proficiency: 5 },
    { name: "English", level: "Fluent (spoken and written)", proficiency: 5 },
    { name: "Russian", level: "Basic", proficiency: 2 },
  ],
  training: [
    { year: "2024", title: "Design systems training" },
    { year: "2023", title: "Full stack developer course" },
    { year: "2019", title: "Introduction to Java/Python" },
    { year: "2018", title: "Code Talks Hamburg" },
    { year: "2014", title: "Apple Sales Professional" },
    { year: "2012", title: "Media design" },
  ],
  techStack: [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue",
    "Angular",
    "Node.js",
    "ES6",
    "Cypress",
    "CI/CD",
    "Postman",
    "Git",
    "Contentful",
    "Docker",
    "Strapi",
    "Nest.js",
    "Elysia.js",
    "Python",
    "Tailwind CSS",
    "Styled Components",
    "Sass",
    "SCSS",
    "Material UI",
  ],
  tools: [
    "Microsoft Office",
    "Slack",
    "JIRA",
    "Figma",
    "Adobe Suite",
    "Confluence",
    "Cursor",
  ],
  projects: [
    {
      title: "CMS framework with Strapi",
      description:
        "Custom content management framework for small and medium-sized businesses – headless backend, tailored content types, and bespoke frontends. (iStore Oldenburg)",
      tags: ["Strapi", "React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      title: "AI dashboard research project",
      description:
        "Dashboard for analyzing image and power data in a research context – visualization, evaluation, and a user-friendly interface for complex datasets. (NDA)",
      tags: ["React", "TypeScript", "Python", "Data Visualization"],
    },
    {
      title: "UI component library",
      description:
        "Reusable UI library based on Lit Web Components – consistent design, browser compatibility, and integration into existing projects. (NDA)",
      tags: ["Lit", "Web Components", "TypeScript", "Cypress"],
    },
    {
      title: "React enterprise frontends",
      description:
        "TypeScript React interfaces for client projects with a focus on testability, CI/CD, and close alignment with stakeholders.",
      tags: ["React", "TypeScript", "Cypress", "GitHub Actions"],
    },
    {
      title: "SWB website",
      description:
        "TypeScript React interfaces for client projects with a focus on testability, CI/CD, and close alignment with stakeholders.",
      tags: ["React", "TypeScript", "Cypress", "GitHub Actions"],
    },
  ],
};
