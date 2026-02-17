"use client";

import { Rocket, Users, FileCheck, TrendingUp, Award } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function MilestonesSection() {
  const milestones = [
    {
      month: "July 2022",
      icon: <Rocket className="w-6 h-6" />,
      title: "AVS Started",
      description:
        "In July 2022, AVS (Advanced Virtual Staff) was established as a new business venture.",
      position: "left",
    },
    {
      month: "August 2022",
      icon: <Users className="w-6 h-6" />,
      title: "Gained 3 Clients",
      description:
        "It quickly gained momentum and acquired three clients within a month, in August 2022.",
      position: "right",
    },
    {
      month: "March 2023",
      icon: <FileCheck className="w-6 h-6" />,
      title: "Local Company Registration",
      description:
        "Recognizing the need for formal establishment, AVS completed its company registration process, solidifying its legal status.",
      position: "left",
    },
    {
      month: "May 2023",
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Hired 30+ VAs",
      description:
        "As the business expanded further, AVS hired over 30 virtual assistants (VAs) on the 10th month with purely organic marketing, bolstering its workforce and positioning the company for continued growth and success.",
      position: "right",
    },
    {
      month: "July 2023",
      icon: <Award className="w-6 h-6" />,
      title: "One Year Anniversary",
      description:
        "70+ Virtual Assistants, more than 30+ clients in different fields: US, CA and Australian partnership sealed, and working on NZ, EU.",
      position: "left",
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[var(--accent)] font-bold tracking-wider uppercase mb-4 block">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[var(--primary)] leading-tight">
            Key <span className="text-[var(--accent)]">Milestones</span>
          </h2>
          <p className="text-lg text-[var(--foreground-light)] max-w-2xl mx-auto leading-relaxed">
            From our humble beginnings to becoming a trusted staffing partner -
            here&apos;s how we&apos;ve grown together with our clients.
          </p>
        </motion.div>

        {/* Vertical Alternating Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Center Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--primary)]/20 transform -translate-x-1/2 hidden md:block" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{
                  opacity: 0,
                  x: milestone.position === "left" ? -50 : 50,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Mobile Layout */}
                <div className="md:hidden flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-lg bg-[var(--primary)]">
                      {milestone.month.split(" ")[1]}
                    </div>
                    <div className="w-0.5 flex-1 mt-2 bg-[var(--primary)]/20" />
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[var(--primary)]" />

                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--primary)]/10 text-[var(--primary)]">
                          {milestone.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs text-[var(--accent)] font-semibold uppercase tracking-wide">
                            {milestone.month}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-[var(--primary)]">
                        {milestone.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[var(--foreground-light)]">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Desktop Alternating Layout */}
                <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                  {/* Left Side */}
                  {milestone.position === "left" ? (
                    <>
                      <motion.div
                        className="text-right pr-12"
                        whileHover={{ x: -8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                          <div className="absolute top-0 right-0 w-1 h-full bg-[var(--primary)]" />

                          <div className="flex items-center justify-end gap-3 mb-4">
                            <div className="flex flex-col items-end">
                              <span className="text-xs text-[var(--accent)] font-semibold uppercase tracking-wide">
                                {milestone.month}
                              </span>
                            </div>
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
                              {milestone.icon}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-[var(--primary)]">
                            {milestone.title}
                          </h3>
                          <p className="text-base leading-relaxed text-[var(--foreground-light)]">
                            {milestone.description}
                          </p>
                        </div>
                      </motion.div>
                      <div className="flex justify-start pl-12 relative">
                        {/* Connector Line */}
                        <div className="absolute left-0 top-1/2 w-12 h-0.5 bg-[var(--primary)]/20 -translate-y-1/2" />

                        <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-white text-base shadow-xl bg-[var(--primary)] border-4 border-white z-10 relative">
                          {milestone.month.split(" ")[1]}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-end pr-12 relative">
                        {/* Connector Line */}
                        <div className="absolute right-0 top-1/2 w-12 h-0.5 bg-[var(--primary)]/20 -translate-y-1/2" />

                        <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-white text-base shadow-xl bg-[var(--primary)] border-4 border-white z-10 relative">
                          {milestone.month.split(" ")[1]}
                        </div>
                      </div>
                      <motion.div
                        className="pl-12"
                        whileHover={{ x: 8 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                          <div className="absolute top-0 left-0 w-1 h-full bg-[var(--primary)]" />

                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[var(--primary)]/10 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
                              {milestone.icon}
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xs text-[var(--accent)] font-semibold uppercase tracking-wide">
                                {milestone.month}
                              </span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold mb-3 text-[var(--primary)]">
                            {milestone.title}
                          </h3>
                          <p className="text-base leading-relaxed text-[var(--foreground-light)]">
                            {milestone.description}
                          </p>
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
