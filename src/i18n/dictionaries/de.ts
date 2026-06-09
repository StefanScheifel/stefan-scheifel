import type { PortfolioDictionary } from "@/i18n/types";

export const de: PortfolioDictionary = {
  locale: "de",
  profile: {
    name: "Stefan Scheifel",
    title: "Software Developer",
    location: "Oldenburg, Deutschland",
    email: "stefan.scheifel@me.com",
    phone: "0152 08692147",
  },
  hero: {
    intro:
      "Individuelle Software zum bezahlbaren Preis für kleine und mittelständische Unternehmen",
    emailCta: "E-Mail schreiben",
    resumeCta: "Lebenslauf ansehen",
    scrollAriaLabel: "Weiter zu Skills",
    portraitAlt: "Portrait von Stefan Scheifel",
  },
  about: {
    eyebrow: "Profil",
    title: "Über mich",
    intro:
      "Software Developer aus Oldenburg, Deutschland mit Erfahrung in moderner Webentwicklung, UI/UX und Qualitätsmanagement.",
  },
  experienceSection: {
    eyebrow: "Berufserfahrung",
    title: "Wo ich gearbeitet habe",
  },
  projectsSection: {
    eyebrow: "Projekte",
    title: "Ausgewählte Arbeiten",
    intro: "Ein Überblick über Projekte aus Freelance-Tätigkeit und Kundenarbeit.",
  },
  educationSection: {
    eyebrow: "Ausbildung",
    title: "Bildungsweg",
  },
  skillsSection: {
    eyebrow: "Kompetenzen",
    title: "Skills & Technologien",
    coreSkills: "Kernkompetenzen",
    languages: "Sprachen",
    training: "Weiterbildungen",
    techStack: "Programmierung & Frameworks",
    tools: "Tools & Software",
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Lassen Sie uns sprechen",
    intro:
      "Interesse an einer Zusammenarbeit? Schreiben Sie mir über das Formular, per E-Mail oder telefonisch.",
    emailLabel: "E-Mail",
    phoneLabel: "Telefon",
    form: {
      title: "Nachricht senden",
      nameLabel: "Name",
      namePlaceholder: "Ihr Name",
      emailLabel: "E-Mail",
      emailPlaceholder: "ihre@email.de",
      phoneLabel: "Telefon (optional)",
      phonePlaceholder: "+49 …",
      messageLabel: "Nachricht",
      messagePlaceholder: "Worum geht es? Kurz beschreiben …",
      privacyLabel: "Ich stimme der Verarbeitung meiner Daten gemäß der",
      privacyLink: "Datenschutzerklärung",
      privacySuffix: "zu.",
      submit: "Nachricht senden",
      sending: "Wird gesendet …",
      success: "Danke! Ihre Nachricht wurde gesendet. Ich melde mich bei Ihnen.",
      error:
        "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie mir direkt per E-Mail.",
      notConfigured:
        "Das Formular ist noch nicht konfiguriert. Bitte nutzen Sie vorerst die E-Mail-Adresse oben.",
      subject: "Neue Portfolio-Anfrage",
    },
  },
  nav: {
    contactCta: "Kontakt",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    links: {
      about: "Profil",
      experience: "Erfahrung",
      projects: "Projekte",
      education: "Ausbildung",
      skills: "Skills",
      contact: "Kontakt",
    },
  },
  footer: {
    imprint: "Impressum",
    privacy: "Datenschutz",
    roleSuffix: "Front End Developer",
  },
  site: {
    title: "Stefan Scheifel | Front End Developer",
    description:
      "Portfolio von Stefan Scheifel – Front End Developer mit Erfahrung in React, TypeScript, UI/UX und moderner Webentwicklung.",
  },
  legal: {
    backToHome: "← Zurück zur Startseite",
    imprint: {
      title: "Impressum",
      tmgHeading: "Angaben gemäß § 5 TMG",
      contactHeading: "Kontakt",
      phonePrefix: "Telefon:",
      emailPrefix: "E-Mail:",
    },
    privacy: {
      title: "Datenschutzerklärung",
      responsibleHeading: "Verantwortlicher",
      emailPrefix: "E-Mail:",
      dataCollectionHeading: "Datenerhebung auf dieser Website",
      dataCollectionText:
        "Diese Portfolio-Website erhebt keine personenbezogenen Daten automatisch. Es werden keine Cookies gesetzt und kein Tracking eingesetzt. Bei Kontaktaufnahme per E-Mail oder Telefon werden die von Ihnen mitgeteilten Daten ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.",
      hostingHeading: "Hosting",
      hostingText:
        "Beim Aufruf dieser Website werden technisch notwendige Server-Logdateien durch den Hosting-Anbieter verarbeitet. Details entnehmen Sie bitte den Datenschutzhinweisen Ihres Hosters.",
    },
  },
  highlights: [
    "Fundierte Kenntnisse in der Verbesserung des User Interfaces und der User Experience",
    "Qualitätsmanagement",
    "Fachwissen in moderner Webentwicklung",
    "Ausgeprägte Kunden- und Serviceorientierung mit innovativen Lösungsstrategien",
    "Kreativität und Teamgeist",
  ],
  experience: [
    {
      period: "01/2022 – heute",
      company: "Freelance/Selbständig",
      role: "Software Developer",
      location: "Remote",
      context: "Projektarbeit für mehrere Kunden",
      tasks: [
        "Implementierung von TypeScript-React-Benutzeroberflächen",
        "Umsetzung einer UI Library mit Lit Web Components",
        "Testing mit Cypress",
        "Code-Reviews",
        "CI/CD-Pipeline mit GitHub Actions",
        "Anpassungen an bestehende Backend-Services",
        "Schulung von Kunden und Teams über agile Softwareentwicklung",
        "Debugging von Code und Infrastruktur in Production",
        "Implementierung eines KI-Dashboards im Umfang eines Forschungsprojekts zur Analyse von Bild- und Stromdaten",
        "Sparring mit CTO und Shareholdern über die Zukunft des Unternehmens",
        "Entwicklung eines eigenen Content-Management-Frameworks für kleine bis mittelständische Unternehmen mit Strapi",
      ],
    },
    {
      period: "12/2020 – 03/2021",
      company: "brunel",
      role: "Front End Developer",
      location: "Remote",
      context: "Projektarbeit bei BTC ES",
      tasks: [
        "Implementierung von TypeScript-React-Benutzeroberflächen",
        "Testmanagement",
      ],
    },
    {
      period: "07/2017 – 07/2020",
      company: "thepeaklab",
      location: "Oldenburg",
      role: "Front End Developer",
      tasks: [
        "Abstimmung mit Kunden",
        "Implementierung von Benutzeroberflächen",
        "Technischer Support",
        "Testmanagement",
      ],
    },
  ],
  education: [
    {
      period: "10/2015 – 07/2017",
      institution: "WBS, Oldenburg",
      title: "Umschulung zum Fachinformatiker",
      degree: "Fachinformatiker für Anwendungsentwicklung",
    },
    {
      period: "02/2011 – 07/2014",
      institution: "mStore Apple Premium Reseller",
      title: "Ausbildung zum IT-Systemkaufmann",
    },
    {
      period: "08/2008 – 06/2010",
      institution: "Peter Ustinov Schule, Hude",
      degree: "Mittlere Reife",
    },
  ],
  skills: [
    { name: "Qualitätsmanagement", level: 4 },
    { name: "Softwareentwicklung", level: 4 },
    { name: "Business Analysis", level: 3 },
    { name: "User Experience", level: 5 },
    { name: "User Interface", level: 4 },
    { name: "Teamplayer", level: 5 },
    { name: "Projekterfahrung", level: 4 },
  ],
  languages: [
    { name: "Deutsch", level: "Muttersprache", proficiency: 5 },
    { name: "Englisch", level: "Fließend in Wort und Schrift", proficiency: 5 },
    { name: "Russisch", level: "Grundkenntnisse", proficiency: 2 },
  ],
  training: [
    { year: "2024", title: "Weiterbildung Design Systeme" },
    { year: "2023", title: "Fortbildung zu Full Stack Developer" },
    { year: "2019", title: "Einstieg in Java/Python" },
    { year: "2018", title: "Code Talks in Hamburg" },
    { year: "2014", title: "Apple Sales Professional" },
    { year: "2012", title: "Mediendesign" },
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
      title: "CMS Framework mit Strapi",
      description:
        "Eigenes Content-Management-Framework für kleine und mittelständische Unternehmen – inklusive Headless-Backend, individuellen Content-Types und maßgeschneiderten Frontends. (iStore Oldenburg)",
      tags: ["Strapi", "React", "TypeScript", "Next.js", "Tailwind CSS"],
    },
    {
      title: "KI-Dashboard Forschungsprojekt",
      description:
        "Dashboard zur Analyse von Bild- und Stromdaten im Rahmen eines Forschungsprojekts – Visualisierung, Auswertung und nutzerfreundliche Oberfläche für komplexe Datensätze. (Projekt unter NDA)",
      tags: ["React", "TypeScript", "Python", "Data Visualization"],
    },
    {
      title: "UI Component Library",
      description:
        "Wiederverwendbare UI-Bibliothek auf Basis von Lit Web Components – einheitliches Design, Browser-Kompatibilität und Integration in bestehende Projekte. (Projekt unter NDA)",
      tags: ["Lit", "Web Components", "TypeScript", "Cypress"],
    },
    {
      title: "React Enterprise Frontends",
      description:
        "TypeScript-React-Oberflächen für Kundenprojekte mit Fokus auf Testbarkeit, CI/CD und enge Abstimmung mit Stakeholdern.",
      tags: ["React", "TypeScript", "Cypress", "GitHub Actions"],
    },
    {
      title: "SWB Webseite",
      description:
        "TypeScript-React-Oberflächen für Kundenprojekte mit Fokus auf Testbarkeit, CI/CD und enge Abstimmung mit Stakeholdern.",
      tags: ["React", "TypeScript", "Cypress", "GitHub Actions"],
    },
  ],
};
