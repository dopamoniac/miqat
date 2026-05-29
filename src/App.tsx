/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import SanctuaryTracker from "./components/SanctuaryTracker";
import Experiences from "./components/Experiences";
import Timeline from "./components/Timeline";
import Concierge from "./components/Concierge";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationPreset, setConsultationPreset] = useState<string>("");
  const [activeSection, setActiveSection] = useState("hero");

  // Command control for landing page overlays
  const handleOpenConsultation = (preset?: string) => {
    if (preset) {
      setConsultationPreset(preset);
    } else {
      setConsultationPreset("General Private Consultation");
    }
    setConsultationOpen(true);
  };

  const handleExploreExperiences = () => {
    const element = document.getElementById("experiences");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Modern scroll intersection spy for highlighting current active visual section
  useEffect(() => {
    const sections = ["hero", "philosophy", "experiences", "timeline", "testimonials"];
    
    const observers = sections.map((secId) => {
      const element = document.getElementById(secId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(secId);
            }
          });
        },
        {
          rootMargin: "-25% 0px -25% 0px", // triggers when 50% section is centered
          threshold: 0.1
        }
      );
      
      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, []);

  return (
    <div className="bg-[#050505] text-[#F4EFE7] min-h-screen relative font-sans selection:bg-[#B9965B] selection:text-black">
      
      {/* Brand Header & Responsive Sidebars */}
      <Header onOpenConsultation={handleOpenConsultation} activeSection={activeSection} />
      
      {/* Cinematic Hero Section with Mecca Background */}
      <Hero onExploreClick={handleExploreExperiences} onOpenConsultation={handleOpenConsultation} />
      
      {/* The Brand Philosophy with Core Pillars */}
      <Philosophy />
      
      {/* Live Astronomical Lunar Phase & Mecca coordinates utility */}
      <SanctuaryTracker />
      
      {/* Selected Sacred Frame packages & Interactive Curation Calculator */}
      <Experiences onOpenConsultation={handleOpenConsultation} />
      
      {/* Timeline sequence from Intention to Return */}
      <Timeline />
      
      {/* Discreet 3x3 Concierge services grid */}
      <Concierge />
      
      {/* High-End Testimonials slide and partners stats */}
      <Testimonials />
      
      {/* Elegant foot with large custom call actions */}
      <Footer onOpenConsultation={handleOpenConsultation} />
      
      {/* Sovereign consultation docket booking modal dialog */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        packageNamePreset={consultationPreset}
      />
    </div>
  );
}
