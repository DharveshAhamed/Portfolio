/**
 * Home page — renders all section shells in order.
 * Phase 2 will populate each section with real content.
 */
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CapabilitiesSection from '@/components/sections/CapabilitiesSection';
import AboutSection from '@/components/sections/AboutSection';
import GitHubSection from '@/components/sections/GitHubSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <CapabilitiesSection />
      <AboutSection />
      <GitHubSection />
      <ContactSection />
    </>
  );
}
