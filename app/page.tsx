import HeroSection from "../components/HeroSection";
import ChallengeSection from "../components/ChallengeSection";
import ServicesSection from "../components/ServicesSection";
import JourneySection from "../components/JourneySection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ServicesSection />
        <ChallengeSection />
        <WhyChooseUsSection />
        <JourneySection />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  );
}
