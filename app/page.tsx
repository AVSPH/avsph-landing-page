import HeroSection from "../components/HeroSection";
import ChallengeSection from "../components/ChallengeSection";
import ServicesSection from "../components/ServicesSection";
import JourneySection from "../components/JourneySection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import HowItWorksSection from "@/components/HowItWorksSection";
export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ServicesSection />
        <ChallengeSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <JourneySection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  );
}
