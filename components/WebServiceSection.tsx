"use client";

import { ArrowRight, ExternalLink, Maximize2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WebServiceSection() {
  const portfolioItems = [
    {
      title: "Crystal Clean Pro",
      category: "Cleaning Services",
      imageColor: "from-blue-100 to-blue-200",
      image: "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772971893/pool-cleaning-service-landing-page.vercel.app__usrucn.png",
      url: "https://pool-cleaning-service-landing-page.vercel.app/"
    },
    {
      title: "Apex Roofing Solutions",
      category: "Roofing",
      imageColor: "from-orange-100 to-orange-200",
      image: "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772971753/home-remodeling-service-landing-pag-zeta.vercel.app__vnt49o.png",
      url: "https://home-remodeling-service-landing-pag-zeta.vercel.app/"
    },
    {
      title: "Reliable Handyman Co.",
      category: "Handyman Services",
      imageColor: "from-green-100 to-green-200",
      image: "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772971924/handymain-service-landing-page.vercel.app__qqvtvn.png",
      url: "https://handymain-service-landing-page.vercel.app/"
    },
    {
      title: "Shield Pest Control",
      category: "Pest Control",
      imageColor: "from-red-100 to-red-200",
      image: "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1772971951/pest-control-landing-page.vercel.app__guwj5s.png",
      url: "https://pest-control-landing-page.vercel.app/"
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
            <Link
              key={index}
              href="/web-services"
              className="relative group overflow-hidden border border-gray-200 bg-gray-50 flex flex-col cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ease-out will-change-transform translate-y-4 opacity-0 animate-[fade-in-up_0.6s_ease-out_forwards]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Portfolio Image Placeholder */}
              <div className="relative h-[160px] w-full overflow-hidden bg-gray-100">
                {item.image ? (
                  <img 
                      src={item.image} 
                      alt={`${item.title} Preview`} 
                      className="w-full h-full object-cover object-top transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                      loading="lazy"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.imageColor} transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105`}
                  />
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 backdrop-blur-[2px]">
                    <Maximize2 className="w-8 h-8 text-white mb-4 transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100" />
                    <span className="text-white font-bold text-sm tracking-wider uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                        View Details
                    </span>
                </div>
              </div>
              
              {/* Card Footer */}
              <div className="p-5 bg-white flex justify-between items-center relative z-10">
                  <div>
                      <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-500 font-medium tracking-wide uppercase mt-1">{item.category}</p>
                  </div>
                  <a 
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // Prevent triggering the overarching Link click
                      className="p-3 bg-gray-100 group-hover:bg-[var(--accent)] group-hover:text-white rounded-none transition-colors duration-300 relative z-20 hover:!bg-[var(--primary)]"
                  >
                      <ExternalLink className="w-5 h-5" />
                  </a>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/web-services" className="btn-primary inline-flex items-center gap-2">
            Explore Our Web Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
          @keyframes fade-in-up {
              from {
                  opacity: 0;
                  transform: translateY(20px);
              }
              to {
                  opacity: 1;
                  transform: translateY(0);
              }
          }
      `}} />
    </section>
  );
}
