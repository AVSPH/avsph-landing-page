import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Advanced Virtual Staff Philippines (AVSPH)",
  description:
    "Learn about AVSPH - your trusted partner for building dedicated teams in the Philippines. We provide full-time, committed virtual assistants while you maintain complete control.",
  keywords:
    "AVSPH, staffing agency, Philippine virtual staff, remote team, outsourcing Philippines, virtual assistant company",
  openGraph: {
    title: "About AVSPH | Building Your Dream Team in the Philippines",
    description:
      "We assist you in establishing a full-time, committed team in the Philippines, taking care of everything there while you maintain complete control.",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
