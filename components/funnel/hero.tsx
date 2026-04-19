"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

const exampleImages = [
  {
    url: "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1776587985/electric-hero_zexubx.jpg",
    author: "Branislav Rodman",
    title: "A Black and White Photo of a Woman Brushing Her Teeth",
  },
  {
    url: "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1776587057/klicktiv-hero_ho2v77.png",
    link: "https://unsplash.com/photos/a-painting-of-a-palm-leaf-on-a-multicolored-background-AaNPwrSNOFE",
    title: "Neon Palm",
    author: "Tim Mossholder",
  },
  {
    url: "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1776587252/pool-hero_w6r5fr.jpg",
    link: "https://unsplash.com/photos/a-blurry-photo-of-a-crowd-of-people-UgbxzloNGsc",
    author: "ANDRII SOLOK",
    title: "A blurry photo of a crowd of people",
  },
  {
    url: "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1776587933/home-hero_uitpvz.jpg",
    link: "https://unsplash.com/photos/rippling-crystal-blue-water-9-OCsKoyQlk",
    author: "Wesley Tingey",
    title: "Rippling Crystal Blue Water",
  },
  {
    url: "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1776587934/plumbing-hero_zjnjca.jpg",
    link: "https://unsplash.com/de/fotos/mann-im-schwarzen-hemd-unter-blauem-himmel-m8RDNiuEXro",
    author: "Serhii Tyaglovsky",
    title: "Mann im schwarzen Hemd unter blauem Himmel",
  },
  {
    url: "https://res.cloudinary.com/dg1i3ew9w/image/upload/q_auto/f_auto/v1776587985/electric-hero_zexubx.jpg",
    link: "https://unsplash.com/photos/a-woman-with-a-flower-crown-on-her-head-0S3muIttbsY",
    author: "Vladimir Yelizarov",
    title: "A women with a flower crown on her head",
  },
];

function LandingHero() {
  return (
    <section className="w-full h-screen overflow-hidden flex flex-col items-center justify-center relative">
      <Floating sensitivity={-0.5} className="h-screen">
        <FloatingElement
          depth={0.5}
          className="top-[18%] left-[2%] md:top-[26%] md:left-[6%]"
        >
          <motion.img
            src={exampleImages[0].url}
            alt={exampleImages[0].title}
            className="w-56 h-36 md:w-80 md:h-48 lg:w-96 lg:h-60 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[10%] left-[20%] md:top-[5%] md:left-[40%]"
        >
          <motion.img
            src={exampleImages[1].url}
            alt={exampleImages[1].title}
            className="w-56 h-36 md:w-80 md:h-48 lg:w-96 lg:h-60 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[82%] left-[2%] md:top-[72%] md:left-[20%]"
        >
          <motion.img
            src={exampleImages[2].url}
            alt={exampleImages[2].title}
            className="w-56 h-36 md:w-80 md:h-48 lg:w-96 lg:h-60 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={2}
          className="top-[20%] left-[58%] md:top-[26%] md:left-[70%]"
        >
          <motion.img
            src={exampleImages[3].url}
            alt={exampleImages[3].title}
            className="w-56 h-36 md:w-80 md:h-48 lg:w-96 lg:h-60 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[76%] left-[58%] md:top-[66%] md:left-[65%]"
        >
          <motion.img
            src={exampleImages[4].url}
            alt={exampleImages[4].title}
            className="w-56 h-36 md:w-80 md:h-48 lg:w-96 lg:h-60 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>
      </Floating>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_50%,_white_30%,_transparent_100%)] pointer-events-none z-40" />

      <div className="flex flex-col justify-center items-center w-[280px] sm:w-[420px] md:w-[600px] lg:w-[750px] z-50 pointer-events-auto text-center">
        <motion.div
          className="flex items-center gap-2 mb-4"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        >
          <span className="text-amber-400 text-sm">★★★★★</span>
          <span className="text-sm font-semibold text-[var(--foreground)]">4.9</span>
          <span className="text-sm text-[var(--muted)]">· Rated by 47+ field service businesses</span>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--primary)] leading-tight"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.4 }}
        >
          LANDING PAGE LIVE IN 24HRS.{" "}
          <span className="text-[var(--accent)]">Full website & CRM in 7 days.</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-[var(--foreground-light)] mt-6 leading-relaxed"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          One complete package built for field service businesses. Professional website, local SEO,
          fully configured GHL CRM, and Klicktiv financial system — all managed for you every month.
          No tech work. No separate vendors. One simple price.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center mt-10 sm:mt-14">
          <motion.a
            href="/booking"
            className="btn-primary flex items-center gap-2"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.7 }}
            whileHover={{ scale: 1.05, transition: { type: "spring", damping: 30, stiffness: 400 } }}
          >
            Get My Landing Page Live <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#included"
            className="text-sm font-semibold text-[var(--primary)] underline underline-offset-4 hover:text-[var(--accent)] transition-colors"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.7 }}
          >
            See what&apos;s included ↓
          </motion.a>
        </div>

        <motion.p
          className="mt-4 text-xs text-[var(--muted)]"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.8 }}
        >
          12-month commitment · Rate locked · No setup fee · Cancel after 12 months
        </motion.p>
      </div>
    </section>
  );
}

export { LandingHero };
