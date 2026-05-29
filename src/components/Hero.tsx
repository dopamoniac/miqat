/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Play, X, ArrowRight, MousePointerClick, Volume2, VolumeX } from "lucide-react";
import { IMAGES } from "../data";

interface HeroProps {
  onExploreClick: () => void;
  onOpenConsultation: () => void;
}

export default function Hero({ onExploreClick, onOpenConsultation }: HeroProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // High fidelity generated background image of the Kaaba at night
  const heroImage = IMAGES.heroBg;

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen w-full flex items-center bg-[#050505] overflow-hidden"
      >
        {/* Background Image with Cinematic Art Direction */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="The Holy Kaaba at Night - Miqat Experiences"
            className="w-full h-full object-cover object-right md:object-center transform scale-102 transition-transform duration-[10s] ease-out select-none"
            referrerPolicy="no-referrer"
          />
          {/* Gradients: Left black vignette for text legibility, base dark shadow, bottom shadow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-[#050505]/10 md:via-[#050505]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#050505] to-transparent" />
        </div>

        {/* Content Layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-28 pb-16 min-h-screen flex flex-col justify-between">
          
          {/* Spacer to push content to middle */}
          <div className="flex-grow flex items-center">
            <div className="max-w-xl md:max-w-2xl py-8 md:py-12">
              {/* Badge top left */}
              <div className="flex items-center gap-2 mb-6 md:mb-8 animate-fade-in">
                <span className="h-[1px] w-6 bg-[#B9965B]" />
                <span className="text-[10px] uppercase font-sans tracking-[0.3em] font-semibold text-[#B9965B]">
                  BEYOND TRAVEL.
                </span>
              </div>

              {/* Huge Luxury Serif Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#F4EFE7] tracking-wider leading-[1.1] mb-6 animate-slide-up">
                A SACRED JOURNEY,
                <span className="block italic mt-1 text-gold-gradient font-light">
                  DESIGNED WITH PRECISION
                </span>
              </h1>

              {/* Fine horizontal line with custom diamond sparkly separator */}
              <div className="flex items-center gap-4 py-4 md:py-6 max-w-lg">
                <div className="h-[0.5px] flex-grow bg-white/10" />
                <span className="text-[#B9965B] text-xs font-light">✦</span>
                <div className="h-[0.5px] flex-grow bg-white/10" />
              </div>

              {/* Subtitle description */}
              <p className="text-sm md:text-base text-[#F4EFE7]/80 font-sans font-light tracking-wide leading-relaxed max-w-lg mb-8 md:mb-12">
                We craft bespoke Hajj & Umrah experiences with high-end precision,
                reverence, and expert care. Let us govern every material detail so you may commit
                fully to your sacred path.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-6 md:gap-8">
                <button
                  onClick={onExploreClick}
                  className="bg-[#B9965B] hover:bg-[#8C6F3E] text-[#050505] px-8 py-4 text-xs font-semibold tracking-[0.25em] transition-all duration-300 transform font-sans hover:-translate-y-0.5"
                >
                  EXPLORE EXPERIENCES
                </button>

                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="group flex items-center gap-3 text-xs tracking-[0.2em] font-sans font-medium text-[#F4EFE7]/90 hover:text-[#F4EFE7] transition-colors"
                >
                  <span className="w-10 h-10 rounded-full border border-white/20 group-hover:border-[#B9965B] flex items-center justify-center transition-all duration-300 transform group-hover:scale-105">
                    <Play size={12} fill="#F4EFE7" className="ml-0.5 text-[#F4EFE7]" />
                  </span>
                  WATCH INTRO
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Indicator row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/5 pt-8">
            {/* Horizontal parameters list */}
            <div className="flex items-center gap-4 text-[10px] font-sans tracking-[0.2em] text-[#F4EFE7]/40">
              <span className="hover:text-[#F4EFE7] transition-colors cursor-default">PRIVATE</span>
              <span className="h-3 w-[1px] bg-white/10" />
              <span className="hover:text-[#F4EFE7] transition-colors cursor-default">SEAMLESS</span>
              <span className="h-3 w-[1px] bg-white/10" />
              <span className="hover:text-[#F4EFE7] transition-colors cursor-default">SPIRITUAL</span>
            </div>

            {/* Mouse wheel scroll indicator */}
            <button
              onClick={onExploreClick}
              className="flex items-center gap-3 text-left text-[9px] font-sans tracking-[0.25em] text-[#B9965B] hover:text-[#F4EFE7]/90 transition-colors"
            >
              <div className="w-5 h-8 rounded-full border border-[#B9965B]/60 flex justify-center py-1.5 opacity-85">
                <span className="w-1 h-1.5 rounded-full bg-[#B9965B] animate-bounce" />
              </div>
              SCROLL TO DISCOVER
            </button>
          </div>
        </div>

        {/* Right side relative timeline highlights list (Vertical section tracker) */}
        <div className="hidden xl:flex absolute right-12 top-1/2 -translate-y-1/2 flex-col gap-6 z-20 items-end">
          {[
            { tag: "01", name: "VISUAL" },
            { tag: "02", name: "PHILOSOPHY" },
            { tag: "03", name: "EXPERIENCES" },
            { tag: "04", name: "JOURNEY" },
            { tag: "05", name: "TRUST" }
          ].map((sec, idx) => {
            const indexValue = idx + 1;
            const targetIds = ["hero", "philosophy", "experiences", "timeline", "testimonials"];
            return (
              <button
                key={sec.tag}
                onClick={() => {
                  const element = document.getElementById(targetIds[idx]);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`group flex items-center gap-3 text-right bg-transparent border-0 py-1 transition-all duration-300 cursor-pointer ${
                  indexValue === 1 ? "text-[#B9965B]" : "text-[#F4EFE7]/30"
                }`}
              >
                <span className="text-[10px] tracking-widest font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {sec.name}
                </span>
                <span className="text-xs font-mono font-bold tracking-wider">{sec.tag}</span>
                <span
                  className={`h-6 w-[1.5px] transition-all duration-300 ${
                    indexValue === 1 ? "bg-[#B9965B] h-10" : "bg-white/10 group-hover:bg-[#B9965B]/50"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </section>

      {/* Cinematic Modal Player Overlay */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in">
          <button
            onClick={() => setVideoModalOpen(false)}
            className="absolute top-6 right-8 text-white/70 hover:text-white p-2 transition-colors duration-300"
            aria-label="Close modal"
          >
            <X size={28} strokeWidth={1.5} />
          </button>

          <div className="w-full max-w-5xl aspect-video bg-black border border-white/10 flex flex-col justify-between overflow-hidden relative shadow-2xl">
            {/* Real embedded prayer atmospheric / aerial drone visual */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/S_8U9BvF350?autoplay=1&mute=0&controls=0&loop=1&playlist=S_8U9BvF350"
              title="Miqat Luxury Sacred Environments Drone Footage"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            {/* Muted luxury bar over inside controls */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-4 flex justify-between items-center pointer-events-none">
              <span className="text-[9px] font-sans tracking-[0.3em] text-[#B9965B]">MIQAT CAMPAIGN INTRO</span>
              <span className="text-[8px] font-mono text-[#F4EFE7]/50">4K AMBIENCE</span>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-[#F4EFE7]/40 text-[9px]">
              <span>Masjid al-Haram, Holy City of Mecca</span>
              <span>Click X to return to navigation</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
