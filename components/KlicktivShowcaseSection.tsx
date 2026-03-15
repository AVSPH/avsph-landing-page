"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Maximize2, X } from "lucide-react";

const overviewItems = [
  {
    title: "Spreadsheet overload",
    description:
      "Three tabs for commissions, two for payroll, one for jobs - and none of them agree with each other.",
  },
  {
    title: "Hours lost every week",
    description:
      "You're manually reconciling job data, calculating splits, and chasing down numbers instead of running your business.",
  },
  {
    title: "Commission disputes",
    description:
      "Your techs don't trust the math. Neither do your subcontractors. And you're not sure who's right.",
  },
  {
    title: "No real-time visibility",
    description:
      "You find out how last month went when you close the books - not when you still have time to do something about it.",
  },
];

const klicktivShowcase = {
  title: "Klicktiv.io",
  subtitle: "Financial Operating System for Field Service",
  url: "https://www.klicktiv.io/",
  image:
    "https://res.cloudinary.com/dg1i3ew9w/image/upload/v1773576903/www.klicktiv.io__1_fhbojw.png",
};

export default function KlicktivShowcaseSection() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <section className="section bg-[var(--primary)] text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title text-white">Introducing Klicktiv.io</h2>
          <p className="section-subtitle text-white/80">
            A financial operating system built for field service businesses.
            Here is the full landing page experience.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Your finances are running on faith and formulas.
            </h3>
            <p className="text-white/80 mb-8">
              Most home service owners don't have a money problem. They have a
              visibility problem. Here's what that looks like.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {overviewItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-sm"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative group overflow-hidden bg-gray-50 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ease-out"
            onClick={() => setIsOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                setIsOpen(true);
              }
            }}
          >
            <div className="relative h-[400px] w-full overflow-hidden bg-gray-100">
              <img
                src={klicktivShowcase.image}
                alt="Klicktiv.io landing page preview"
                className="w-full h-auto object-cover object-top transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-[15%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 backdrop-blur-[2px]">
                <Maximize2 className="w-10 h-10 text-white mb-4 transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-100" />
                <span className="text-white font-bold text-lg tracking-wider uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                  View Full Design
                </span>
              </div>
            </div>
            <div className="p-6 bg-accent flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-white text-xl">
                  {klicktivShowcase.title}
                </h3>
                <p className="text-sm text-white font-medium tracking-wide uppercase mt-1">
                  {klicktivShowcase.subtitle}
                </p>
              </div>
              <a
                href={klicktivShowcase.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-sm font-semibold text-gray-700 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Visit Website <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/95 backdrop-blur-md overflow-y-auto p-4 md:p-10"
          onClick={() => setIsOpen(false)}
        >
          <div className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent z-10 pointer-events-none">
            <div className="pointer-events-auto">
              <a
                href={klicktivShowcase.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white font-bold uppercase tracking-wider text-sm hover:bg-[var(--primary)] transition-colors"
              >
                Visit Live Website <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="pointer-events-auto p-3 bg-white/10 hover:bg-white text-white hover:text-black rounded-full transition-all backdrop-blur-sm"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div
            className="relative w-full max-w-6xl mt-16 md:mt-12 mx-auto bg-gray-900 shadow-2xl animate-[fade-in-up_0.4s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={klicktivShowcase.image}
              alt="Full Klicktiv.io landing page"
              className="w-full h-auto block"
            />
            <div className="p-8 bg-gray-900 flex justify-center border-t border-gray-800">
              <a
                href={klicktivShowcase.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-[var(--accent)] hover:text-white transition-colors"
              >
                Visit Klicktiv.io <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
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
          `,
        }}
      />
    </section>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

