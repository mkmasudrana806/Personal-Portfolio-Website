import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import SkillsBackend from "@/components/skillsBackend";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <SkillsBackend />
      <Footer />
    </div>
  );
}
