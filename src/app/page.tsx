import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import SocialImpactSection from "@/components/SocialImpactSection";
import HobbiesSection from "@/components/HobbiesSection";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ExperienceSection />
      <SocialImpactSection />
      <HobbiesSection />
      <AboutSection />
    </main>
  );
}
