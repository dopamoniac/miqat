/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { TIMELINE_STEPS, IMAGES } from "../data";
import { Compass, Star, ChevronRight, HelpCircle } from "lucide-react";

export default function Timeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Path to beautiful mosque hall generated
  const mosqueHall = IMAGES.mosqueHall;

  return (
    <section id="timeline" className="py-24 md:py-36 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      
      {/* Decorative vertical gold wash */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[0.5px] bg-[#B9965B]/10 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] tracking-[0.3em] font-sans font-semibold text-[#B9965B] block uppercase">
              THE JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4EFE7] tracking-wider leading-tight">
              A Seamless Path <br className="sm:hidden" />
              <span className="italic font-light text-gold-gradient">From Intention to Return.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs text-[#F4EFE7]/50 font-sans tracking-wide leading-relaxed font-light">
              We govern all earthly logistics with supreme care and discretion, enabling you to step onto the sacred soil with uninterrupted devotion.
            </p>
          </div>
        </div>

        {/* Central Split Section: Large Graphics Card + Step list */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Architectural Screen */}
          <div className="lg:col-span-5">
            <div className="border border-white/10 p-2 bg-[#0c0c0c] relative group shadow-2xl">
              <div className="aspect-[4/3] sm:aspect-video lg:aspect-[1/1] overflow-hidden relative">
                <img
                  src={mosqueHall}
                  alt="Elegant sunlit archways of Al-Masjid al-Haram representing a smooth spiritual sequence"
                  className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                {/* Custom Gradient to black bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                {/* Text Indicator overlay */}
                <div className="absolute bottom-6 left-6 right-6 space-y-2.5 text-left">
                  <span className="text-[9px] font-sans tracking-[0.25em] text-[#B9965B] uppercase block">
                    {TIMELINE_STEPS[activeStep].subtitle} EXPERIENCE
                  </span>
                  <h4 className="text-xl font-serif text-[#F4EFE7] tracking-wider uppercase">
                    {TIMELINE_STEPS[activeStep].title}
                  </h4>
                  <p className="text-xs text-[#F4EFE7]/70 font-sans font-light tracking-wide leading-relaxed">
                    {TIMELINE_STEPS[activeStep].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Step by Step Navigation Column */}
          <div className="lg:col-span-7 space-y-4">
            {TIMELINE_STEPS.map((st, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={st.step}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-6 border transition-all duration-500 flex items-start gap-6 select-none ${
                    isActive
                      ? "border-[#B9965B] bg-[#B9965B]/5 shadow-lg"
                      : "border-white/5 bg-[#0c0c0c] hover:border-white/10"
                  }`}
                >
                  {/* Step Index Circle */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-500 ${
                      isActive
                        ? "bg-[#B9965B] text-black scale-105"
                        : "bg-white/5 text-[#F4EFE7]/40"
                    }`}
                  >
                    {st.step}
                  </div>

                  {/* Step explanations and indicators */}
                  <div className="space-y-1.5 flex-grow">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-sans font-semibold tracking-widest text-[#B9965B]">
                        {st.subtitle}
                      </span>
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#B9965B] animate-pulse" />}
                    </div>

                    <h3
                      className={`text-sm tracking-[0.15em] font-medium transition-colors ${
                        isActive ? "text-[#F4EFE7]" : "text-[#F4EFE7]/70"
                      }`}
                    >
                      {st.title}
                    </h3>

                    {/* Expandable text */}
                    <div
                      className={`transition-all duration-500 overflow-hidden ${
                        isActive ? "max-h-24 opacity-100 mt-2" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-xs text-[#F4EFE7]/75 font-sans font-light tracking-wide leading-relaxed">
                        {st.description}
                      </p>
                    </div>
                  </div>

                  {/* Right hand minimal arrow styling */}
                  <div className="pt-2">
                    <ChevronRight
                      size={16}
                      className={`transition-transform duration-300 ${
                        isActive ? "text-[#B9965B] rotate-90" : "text-[#F4EFE7]/20"
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Horizontal connect timeline line visualization on Desktop */}
        <div className="hidden lg:grid grid-cols-5 gap-4 pt-24 border-t border-white/5 mt-20 relative">
          <div className="absolute top-24 left-0 right-0 h-[1px] bg-white/10 z-0" />
          
          {TIMELINE_STEPS.map((st, idx) => {
            const isActive = idx === activeStep;
            return (
              <div
                key={st.step + "-horizontal"}
                onClick={() => setActiveStep(idx)}
                className="relative z-10 pt-8 group cursor-pointer text-center"
              >
                {/* Floating pointer dot on connector line */}
                <div
                  className={`absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border transform -translate-y-[1px] transition-all duration-500 ${
                    isActive
                      ? "bg-[#B9965B] border-[#B9965B] scale-125"
                      : "bg-[#050505] border-white/20 group-hover:border-white/50"
                  }`}
                />

                <span className="text-[9px] font-mono tracking-wider text-[#B9965B]/60 font-semibold block mb-2">
                  0{idx + 1}
                </span>

                <h4
                  className={`text-[11px] font-sans font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${
                    isActive ? "text-[#B9965B]" : "text-[#F4EFE7]/50 group-hover:text-[#F4EFE7]"
                  }`}
                >
                  {st.title}
                </h4>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
