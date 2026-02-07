import HeaderBackend from "@/components/headerBackend";
import HeroBackend from "@/components/heroBackend";
import Footer from "@/components/footer";
import SkillsBackend from "@/components/skillsBackend";
import ProjectsBackend from "@/components/projectsBackend";
import EngineeringDecisionBackend from "@/components/backendDecisionAndPractices";
import AboutMeBackend from "@/components/aboutMeBackend";
import FloatingProfileBackend from "@/components/floatingProfileBackend";
import { LinkedInBanner } from "@/components/banner";

export default function Home() {
  return (
    <div className="w-full">
      <HeaderBackend />
      <HeroBackend />
      <LinkedInBanner />
      <SkillsBackend />
      <ProjectsBackend />
      <EngineeringDecisionBackend />
      <AboutMeBackend />
      <FloatingProfileBackend />
      <Footer />
    </div>
  );
}
