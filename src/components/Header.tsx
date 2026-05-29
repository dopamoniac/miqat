/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Menu, X, Crown, Calendar, Sparkles } from "lucide-react";

interface HeaderProps {
  onOpenConsultation: (pref?: string) => void;
  activeSection: string;
}

export default function Header({ onOpenConsultation, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "EXPERIENCES", targetId: "experiences" },
    { label: "OUR PHILOSOPHY", targetId: "philosophy" },
    { label: "CONCIERGE", targetId: "concierge" },
    { label: "THE JOURNEY", targetId: "timeline" },
    { label: "TRUST", targetId: "testimonials" }
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#050505]/95 backdrop-blur-md border-b border-brand-gold/10 py-4 shadow-xl"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <div
            className="flex flex-col cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="flex items-center gap-2">
              <span className="text-[#B9965B] transform group-hover:scale-105 transition-transform duration-500">
                <Crown size={24} strokeWidth={1.2} />
              </span>
              <span
                className="text-2xl font-cinzel font-semibold tracking-[0.25em] text-[#F4EFE7] group-hover:text-[#B9965B] transition-colors duration-500"
              >
                MIQAT
              </span>
            </div>
            <span className="text-[8px] font-sans font-light tracking-[0.3em] text-[#B9965B]/80 text-center mt-1 uppercase">
              LUXURY HAJJ & UMRAH EXPERIENCES
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {menuItems.map((item) => {
              const isActive = activeSection === item.targetId;
              return (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.targetId)}
                  className={`text-xs font-sans tracking-[0.2em] transition-colors duration-300 relative py-1 uppercase ${
                    isActive
                      ? "text-[#B9965B] font-medium"
                      : "text-[#F4EFE7]/70 hover:text-[#F4EFE7]"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B9965B] transition-all duration-500 ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-50"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Luxury CTA Option */}
          <div className="hidden sm:flex items-center gap-6">
            <button
              id="cta-private-consultation"
              onClick={() => onOpenConsultation()}
              className="group border border-[#B9965B]/40 hover:border-[#B9965B] bg-[#B9965B]/5 hover:bg-[#B9965B]/10 px-6 py-2.5 text-[10px] tracking-[0.25em] text-[#F4EFE7] font-semibold transition-all duration-500 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles size={12} className="text-[#B9965B]" />
                PRIVATE CONSULTATION
              </span>
              <div className="absolute inset-0 bg-[#B9965B] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out opacity-[0.05]" />
            </button>

            {/* Micro Hamburguer menu for styling */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden text-[#F4EFE7] hover:text-[#B9965B] transition-colors duration-300"
              aria-label="Open mobile menu"
            >
              <Menu size={20} strokeWidth={1} />
            </button>
          </div>

          {/* Mobile hamburger alone */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="sm:hidden text-[#F4EFE7] hover:text-[#B9965B] py-1 transition-colors duration-300"
            aria-label="Open mobile menu"
          >
            <Menu size={20} strokeWidth={1} />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#050505]/98 transition-all duration-700 pointer-events-none ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
        }`}
      >
        <div className="absolute top-6 right-8">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#F4EFE7] hover:text-[#B9965B] p-2 transition-colors duration-300"
          >
            <X size={24} strokeWidth={1} />
          </button>
        </div>

        <div className="h-full flex flex-col justify-center px-12 md:px-24">
          <div className="mb-12">
            <span className="text-[#B9965B] text-xs tracking-[0.3em] font-sans font-semibold">MIQAT</span>
            <div className="h-px w-12 bg-[#B9965B]/40 mt-3" />
          </div>

          <nav className="flex flex-col gap-6 text-left">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.targetId)}
                className="text-xl md:text-3xl font-serif tracking-widest text-[#F4EFE7] hover:text-[#B9965B] transition-colors py-1 text-left"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-16 flex flex-col gap-8 max-w-sm">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full border border-[#B9965B] bg-[#B9965B] text-[#050505] font-semibold py-4 text-xs tracking-[0.25em] flex items-center justify-center gap-2"
            >
              <Calendar size={14} />
              BOOK CONSULTATION
            </button>
            <span className="text-[10px] text-[#F4EFE7]/40 tracking-wider">
              RESERVED FOR FAMILIES, EXECUTIVES & DIGNITARIES DEMANDING ULTIMATE DISCRETION.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
