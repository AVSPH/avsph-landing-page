import HeroSection from "@/components/HeroSection";
import ChallengeSection from "@/components/ChallengeSection";
import ServicesSection from "@/components/ServicesSection";
import WebServiceSection from "@/components/WebServiceSection";
import JourneySection from "@/components/JourneySection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CTASection from "@/components/CTASection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ResourcesSection from "@/components/ResourcesSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ServicesSection />
        <WebServiceSection />
        <ChallengeSection />
        <HowItWorksSection />
        <ResourcesSection />
        <JourneySection />
        <WhyChooseUsSection />
        {/* <TestimonialsSection /> */}
        <CTASection />
      </main>
    </>
  );
}
