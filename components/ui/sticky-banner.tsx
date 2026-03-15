"use client";
import React, { SVGProps, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyBanner = ({
  className,
  children,
  hideOnScroll = false,
}: {
  className?: string;
  children: React.ReactNode;
  hideOnScroll?: boolean;
}) => {
  const [open, setOpen] = useState(true);
  const { scrollY } = useScroll();
  const bannerRef = useRef<HTMLDivElement | null>(null);
  const updateBannerHeight = () => {
    const height = open ? bannerRef.current?.offsetHeight ?? 0 : 0;
    document.documentElement.style.setProperty("--banner-height", `${height}px`);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (hideOnScroll && latest > 40) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  });
  useLayoutEffect(() => {
    updateBannerHeight();
  }, [open, children]);
  useEffect(() => {
    window.addEventListener("resize", updateBannerHeight);
    return () => window.removeEventListener("resize", updateBannerHeight);
  }, [open]);

  return (
    <motion.div
      ref={bannerRef}
      className={cn(
        "fixed inset-x-0 top-0 z-40 flex w-full items-center justify-center bg-transparent px-4 py-1",
        className,
      )}
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: open ? 0 : -100,
        opacity: open ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {children}

      <motion.button
        type="button"
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        className="absolute right-2 top-2 sm:top-1/2 sm:-translate-y-1/2 cursor-pointer rounded-full p-1 hover:bg-white/10"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close banner" : "Open banner"}
      >
        <CloseIcon className="h-5 w-5 text-white" />
      </motion.button>
    </motion.div>
  );
};

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
