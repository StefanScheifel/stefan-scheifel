import PortfolioNav from "@/components/portfolio/nav";
import HeroSection from "@/components/portfolio/hero";
import ExperienceSection from "@/components/portfolio/experience";
import ProjectsSection from "@/components/portfolio/projects";
import EducationSection from "@/components/portfolio/education";
import SkillsSection from "@/components/portfolio/skills";
import ContactSection from "@/components/portfolio/contact";
import PortfolioFooter from "@/components/portfolio/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PortfolioNav />
      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <PortfolioFooter />
    </div>
  );
}
