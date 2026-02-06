import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "How We Work", href: "#how-it-works" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
    services: [
      { label: "Administrative Support", href: "#services" },
      { label: "Call Handling & Customer Support", href: "#services" },
      { label: "Scheduling & Dispatching", href: "#services" },
      { label: "Estimates & Invoicing", href: "#services" },
      { label: "Bookkeeping Support", href: "#services" },
      { label: "Lead Intake & Follow-Ups", href: "#services" },
      { label: "Review & Reputation Management", href: "#services" },
      { label: "Operations & Task Coordination", href: "#services" },
    ],
    resources: [
      { label: "FAQs", href: "/faqs" },
      { label: "Savings Calculator", href: "/savings-calculator" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Contact Us", href: "#contact" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5 " />, href: "https://www.facebook.com/avsphvirtualassistanceservices" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/company/advanced-virtual-staff-ph/" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, href: "#" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, href: "#" },
  ];

  return (
    <footer className="bg-white text-gray-600 border-t border-gray-100">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
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
            <p className="mb-6 max-w-sm text-gray-600">
              Your trusted partner for premium virtual staffing solutions. We
              connect businesses with exceptional talent from our top 1% pool.
            </p>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-gray-100 hover:bg-primary hover:text-white"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <a
                href="tel:+13183929582"
                className="flex items-center gap-2 hover:text-primary transition-colors text-gray-600"
              >
                <Phone className="w-4 h-4" />
                +1 731-300-9692
              </a>
              <a
                href="mailto:info@advancedvirtualstaff.com"
                className="flex items-center gap-2 hover:text-primary transition-colors text-gray-600"
              >
                <Mail className="w-4 h-4" />
                admin@advancedvirtualstaff.com
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="py-4 bg-gray-50 border-t border-gray-200">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Advanced Virtual Staff. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
