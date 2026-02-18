import Footer from "../../components/Footer";

// Fully static — built once at deploy time, served from CDN edge globally
export const revalidate = false;
import AboutHeroSection from "../../components/about/AboutHeroSection";
import MissionVisionSection from "../../components/about/MissionVisionSection";
import OurStorySection from "../../components/about/OurStorySection";
import MilestonesSection from "../../components/about/MilestonesSection";
import WhatWeDoSection from "../../components/about/WhatWeDoSection";
import CTASection from "../../components/CTASection";

export default function AboutPage() {
  return (
    <>
      <main className="">
        <AboutHeroSection />
        <OurStorySection />
        <MilestonesSection />
        <MissionVisionSection />
        <CTASection />
      </main>
    </>
  );
}
