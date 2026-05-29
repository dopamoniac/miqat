/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { TESTIMONIALS, STATS, PARTNERS } from "../data";
import { ArrowLeft, ArrowRight, Quote, Star, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-36 bg-white border-t border-[#B9965B]/15 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-28">
        
        {/* Upper stats grid section (Section 07 in Image 6) */}
        <div>
          {/* Header */}
          <div className="mb-16 space-y-4 text-center">
            <span className="text-[10px] tracking-[0.3em] font-sans font-semibold text-[#B9965B] block uppercase">
              TRUST & EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1C1814] tracking-wider">
              Trusted by Thousands. <br className="sm:hidden" />
              <span className="italic font-light text-[#B9965B]">Chosen for Excellence.</span>
            </h2>
          </div>

          {/* Stats quad boxes (no rounded corners, simple gold borders) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="border border-[#B9965B]/15 hover:border-[#B9965B] bg-[#FAF7F2] p-8 text-center space-y-3 transition-colors duration-500 shadow-sm"
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-mono text-[#1C1814] tracking-wider block font-light">
                  {stat.value}
                </span>
                <span className="text-[9px] tracking-[0.2em] font-sans font-bold text-[#B9965B]/85 block uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Middle Testimonial Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#FAF7F2] border border-[#B9965B]/15 p-10 md:p-16 relative shadow-md">
          
          {/* Quote Icon watermark background */}
          <div className="absolute top-8 right-12 text-[#B9965B]/5 pointer-events-none select-none">
            <Quote size={160} strokeWidth={0.5} />
          </div>

          {/* Left Column: Testimonial details */}
          <div className="lg:col-span-8 space-y-8 relative z-10 font-sans">
            <span className="text-[#B9965B]">
              <Quote size={40} className="stroke-[1px]" />
            </span>

            {/* Quote content */}
            <p className="text-base sm:text-lg md:text-xl font-serif text-[#1C1814] tracking-wide leading-relaxed italic">
              "{TESTIMONIALS[activeIdx].quote}"
            </p>

            {/* Profile Row */}
            <div className="flex items-center gap-4">
              <img
                src={TESTIMONIALS[activeIdx].avatar}
                alt={TESTIMONIALS[activeIdx].name}
                className="w-12 h-12 rounded-full object-cover border border-[#B9965B]/30"
                referrerPolicy="no-referrer"
              />
              <div className="space-y-0.5">
                <h4 className="text-xs font-sans tracking-[0.15em] font-bold text-[#1C1814] uppercase">
                  {TESTIMONIALS[activeIdx].name}
                </h4>
                <p className="text-[10px] font-sans tracking-wider text-[#B9965B]/85">
                  {TESTIMONIALS[activeIdx].location}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interaction Navigation / Control block */}
          <div className="lg:col-span-4 flex flex-col justify-between items-center lg:items-end h-full min-h-[140px] border-t lg:border-t-0 lg:border-l border-[#B9965B]/15 pt-8 lg:pt-0 lg:pl-12 font-sans">
            
            {/* Rating Stars */}
            <div className="flex items-center gap-1.5 mb-6 lg:mb-0">
              {[...Array(TESTIMONIALS[activeIdx].rating)].map((_, i) => (
                <Star key={i} size={14} fill="#B9965B" className="text-[#B9965B]" />
              ))}
            </div>

            {/* Index Tracker */}
            <span className="text-xs font-mono tracking-widest text-[#1C1814]/50 block mb-6 lg:mb-0">
              0{activeIdx + 1} &mdash; 0{TESTIMONIALS.length}
            </span>

            {/* Slider Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="w-12 h-12 border border-[#B9965B]/30 hover:border-[#B9965B] bg-white rounded-full flex items-center justify-center text-[#1C1814]/70 hover:text-[#B9965B] transition-colors shadow-sm"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 border border-[#B9965B]/30 hover:border-[#B9965B] bg-white rounded-full flex items-center justify-center text-[#1C1814]/70 hover:text-[#B9965B] transition-colors shadow-sm"
                aria-label="Next testimonial"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Lower Corporate Partners Grid */}
        <div className="space-y-12">
          <div className="flex items-center justify-between gap-6">
            <h4 className="text-[10px] tracking-[0.25em] font-sans font-semibold text-[#1C1814]/40 uppercase">
              RECOGNIZED AIRLINES & HOSPITALITY PARAGON PARTNERS
            </h4>
            <div className="h-[0.5px] flex-grow bg-[#B9965B]/15 hidden md:block" />
          </div>

          {/* Reconstructed Beautiful logos layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center text-center">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="group border border-[#B9965B]/15 py-6 px-4 hover:border-[#B9965B]/40 bg-[#FAF7F2]/40 hover:bg-white transition-colors duration-500 flex flex-col items-center justify-center shadow-xs"
              >
                <span className="text-base sm:text-lg font-cinzel font-semibold tracking-[0.3em] text-[#1C1814]/40 group-hover:text-[#B9965B] transition-colors duration-500 block">
                  {partner.name}
                </span>
                <span className="text-[8px] font-sans font-light tracking-wider text-[#1C1814]/30 group-hover:text-[#1C1814]/50 transition-colors duration-500 block mt-1 uppercase">
                  {partner.tagline}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
