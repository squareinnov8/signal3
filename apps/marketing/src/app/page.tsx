import { HeroSection } from '@/components/home/HeroSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { ComponentShowcase } from '@/components/home/ComponentShowcase';
import { PlatformSection } from '@/components/home/PlatformSection';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ComponentShowcase />
      <PlatformSection />
      <CTASection />
    </>
  );
}
