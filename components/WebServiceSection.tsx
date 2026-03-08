import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WebServiceSection() {
  const portfolioItems = [
    {
      title: "Crystal Clean Pro",
      category: "Cleaning Services",
      imageColor: "from-blue-100 to-blue-200"
    },
    {
      title: "Apex Roofing Solutions",
      category: "Roofing",
      imageColor: "from-orange-100 to-orange-200"
    },
    {
      title: "Reliable Handyman Co.",
      category: "Handyman Services",
      imageColor: "from-green-100 to-green-200"
    },
    {
      title: "Shield Pest Control",
      category: "Pest Control",
      imageColor: "from-red-100 to-red-200"
    },
  ];

  return (
    <section id="web-services" className="section bg-[var(--background)]">
      <div className="container">
        <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-700 fade-in">
          <span className="text-[var(--accent)] font-bold tracking-wider uppercase mb-4 block">
            Digital Presence
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-[var(--primary)] leading-tight">
            High-Converting <span className="text-[var(--accent)]">Websites</span> for Service Businesses
          </h2>
          <p className="text-lg text-[var(--foreground-light)] max-w-2xl mx-auto leading-relaxed">
            We don't just provide virtual assistants. We build professional, lead-generating websites tailored specifically for trades and home service companies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-[var(--card)] border border-[var(--border-light)] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Portfolio Image Placeholder */}
              <div
                className={`w-full h-48 bg-gradient-to-br ${item.imageColor} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}
              >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10 backdrop-blur-sm">
                      <div className="bg-white p-3 rounded-full shadow-lg text-[var(--primary)]">
                          <ExternalLink className="w-6 h-6" />
                      </div>
                  </div>
              </div>
              
              {/* Portfolio Details */}
              <div className="p-6">
                <p className="text-sm font-medium text-[var(--accent)] mb-2">
                  {item.category}
                </p>
                <h3 className="font-semibold text-lg text-[var(--primary)]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/web-services" className="btn-primary inline-flex items-center gap-2">
            Explore Our Web Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
