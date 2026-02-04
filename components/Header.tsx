"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "/blog", label: "Blogs" },
    { href: "/faqs", label: "FAQs" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/assets/logo.jpeg"
            alt="Advanced Virtual Staff Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <div className="flex flex-col">
            <span
              className="text-lg font-bold leading-tight"
              style={{ color: "var(--primary)" }}
            >
              ADVANCED
            </span>
            <span
              className="text-sm font-medium leading-tight"
              style={{ color: "var(--secondary)" }}
            >
              VIRTUAL STAFF
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-[var(--secondary)]"
              style={{ color: "var(--foreground)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="tel:+13183929582"
            className="flex items-center gap-2 text-sm font-medium"
            style={{ color: "var(--muted)" }}
          >
            <Phone className="w-4 h-4" />
            +1 (318) 392-9582
          </Link>
          <Link
            href="https://calendly.com/advancedvirtualstaff/30min"
            className="btn-primary"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white mt-2 mx-4 rounded-xl p-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium py-2 transition-colors hover:text-[var(--secondary)]"
                style={{ color: "var(--foreground)" }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="btn-primary text-center mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
