/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Heart, CheckCircle, ShieldCheck, HelpCircle, ArrowRight, Sparkles } from "lucide-react";
import { IMAGES } from "../data";

export default function Philosophy() {
  const principles = [
    {
      title: "SACRED PURPOSE",
      description: "Every service we provide is fundamentally rooted in deep spiritual alignment, utmost respect, and ancestral devotion.",
      icon: Heart,
    },
    {
      title: "HUMAN TOUCH",
      description: "We combine precise digital logistics with genuine personal concierge hospitality and attentive care for your elders.",
      icon: Sparkles,
    },
    {
      title: "FLAWLESS EXECUTION",
      description: "From custom private suites to quiet crowd bypass routes inside Mina, our execution remains sovereign and uncompromising.",
      icon: CheckCircle,
    },
    {
      title: "TOTAL TRUST",
      description: "Your family's safety, comfort, and peace are fully cataloged, guarded, and refined throughout the entire spiritual journey.",
      icon: ShieldCheck,
    }
  ];

  // Path to generated high-fidelity asset
  const philosophyDoor = IMAGES.philosophyDoor;

  return (
    <section id="philosophy" className="py-24 md:py-36 bg-[#050505] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Upper Editorial Row containing Text and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-24">
          
          {/* Left Side: Typography */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[10px] font-sans tracking-[0.3em] font-semibold text-[#B9965B] block uppercase">
              OUR PHILOSOPHY
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4EFE7] tracking-wider leading-[1.15]">
              PILGRIMAGE DESERVES <br />
              <span className="italic font-light text-gold-gradient">EXCELLENCE.</span>
            </h2>

            {/* Sparkles / star divider in gold line */}
            <div className="flex items-center gap-4 py-4 max-w-sm">
              <div className="h-[0.5px] w-12 bg-[#B9965B]/40" />
              <span className="text-[#B9965B] text-xs">✦</span>
              <div className="h-[0.5px] flex-grow bg-white/10" />
            </div>

            <p className="text-sm md:text-base text-[#F4EFE7]/80 font-sans font-light tracking-wide leading-relaxed max-w-lg">
              We believe that a sacred journey should be defined by absolute tranquility, clarity of mind, and flawless material execution. Every minute detail is crafted to honor your faith and shield you from operational noise.
            </p>

            <div className="pt-4">
              <a
                href="#experiences"
                className="group inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] text-[#B9965B] font-semibold hover:text-[#F4EFE7] transition-colors"
              >
                DISCOVER OUR EXPERIENCES
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Side: Portrait Luxury Frame */}
          <div className="lg:col-span-6">
            <div className="relative border border-white/10 p-2.5 bg-black/40 group overflow-hidden">
              <div className="aspect-[4/3] bg-neutral-900 overflow-hidden relative">
                <img
                  src={philosophyDoor}
                  alt="Scenic view looking towards the Holy Kaaba through elegant gold filigree screens"
                  className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-[10px] tracking-wider font-sans text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B9965B] animate-pulse" />
                  PERSPECTIVE OF MASJID AL-HARAM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Grid containing 4 Core Principles (No Rounded SaaS Styling, High End Rectangular Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((pr, idx) => {
            const IconComponent = pr.icon;
            return (
              <div
                key={pr.title}
                className="group border border-white/10 hover:border-[#B9965B]/50 p-8 bg-[#0c0c0c] transition-all duration-500 hover:shadow-2xl relative"
              >
                {/* Micro outline number */}
                <span className="absolute top-4 right-6 text-[10px] font-mono font-bold tracking-widest text-white/5 group-hover:text-[#B9965B]/15 transition-colors duration-500">
                  0{idx + 1}
                </span>

                <div className="mb-6 text-[#B9965B] transform group-hover:scale-105 transition-transform duration-500">
                  <IconComponent size={24} strokeWidth={1} />
                </div>

                <h3 className="text-sm font-sans tracking-[0.2em] font-semibold text-[#F4EFE7] mb-3 group-hover:text-[#B9965B] transition-colors">
                  {pr.title}
                </h3>

                <p className="text-xs text-[#F4EFE7]/60 font-sans font-light tracking-wide leading-relaxed">
                  {pr.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
