/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { PACKAGES } from "../data";
import { Star, ArrowRight, Sparkles, Check, ChevronRight, Settings2, Shield, Plane, Crown, Users } from "lucide-react";
import { Package } from "../types";

interface ExperiencesProps {
  onOpenConsultation: (pref?: string) => void;
}

export default function Experiences({ onOpenConsultation }: ExperiencesProps) {
  // Estimated calculator local states
  const [estimateTier, setEstimateTier] = useState<"signature" | "royal" | "private">("signature");
  const [estimateProximity, setEstimateProximity] = useState<"frontline" | "plaza" | "view">("frontline");
  const [estimateSeason, setEstimateSeason] = useState<"ramadan" | "dhul-hijjah" | "off-peak">("ramadan");
  const [groupSize, setGroupSize] = useState<number>(2);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["guide"]);

  const addonsList = [
    { id: "guide", label: "Dedicated Scholar 1-on-1", price: 3500, desc: "Personal English-fluent religious doctor of Islamic studies" },
    { id: "jet", label: "Tarmac Transfer & Private Jet", price: 45000, desc: "Tarmac S-Class pick-up and private runway integration" },
    { id: "butler", label: "24/7 Dedicated Palace Butler", price: 6000, desc: "White-glove certified steward for all dietary & shopping needs" },
    { id: "medical", label: "Private Medical Escort Unit", price: 8000, desc: "Personal doctor and travel mobility nurse tracking your pace" },
    { id: "fast-track", label: "VIP Express Immigration", price: 1500, desc: "Tethered diplomatic fast passage with zero queues" }
  ];

  const handleToggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Perform a gorgeous luxury computation
  const calculateEstimateValue = () => {
    let basePricePerPerson = 0;
    
    // Tier base
    if (estimateTier === "signature") basePricePerPerson = 14500;
    else if (estimateTier === "royal") basePricePerPerson = 65000;
    else basePricePerPerson = 38000;

    // View multipliers
    let viewMultiplier = 1.0;
    if (estimateProximity === "frontline") viewMultiplier = 1.5; // direct front Kaaba view is top luxury
    else if (estimateProximity === "plaza") viewMultiplier = 1.25;
    else viewMultiplier = 1.0;

    // Season multipliers
    let seasonMultiplier = 1.0;
    if (estimateSeason === "ramadan") seasonMultiplier = 1.75; // high holy-month
    else if (estimateSeason === "dhul-hijjah") seasonMultiplier = 2.2; // Hajj is top-cost
    else seasonMultiplier = 1.0; // standard custom

    let totalPersonCost = basePricePerPerson * viewMultiplier * seasonMultiplier;
    let addonsCost = selectedAddons.reduce((acc, currentId) => {
      const addon = addonsList.find((a) => a.id === currentId);
      return acc + (addon ? addon.price : 0);
    }, 0);

    return Math.round((totalPersonCost * groupSize) + addonsCost);
  };

  const handleReserveCuratedPath = () => {
    const tierName = estimateTier.toUpperCase();
    const seasonName = estimateSeason === "ramadan" ? "Ramadan Peak" : estimateSeason === "dhul-hijjah" ? "Dhul-Hijjah Hajj" : "Quiet Season";
    const prefSummary = `Curated: ${tierName} Tier, ${seasonName}, ${groupSize} Pax, Addons: ${selectedAddons.join(", ")}`;
    onOpenConsultation(prefSummary);
  };

  return (
    <section id="experiences" className="py-24 md:py-36 bg-[#FAF7F2] border-t border-[#B9965B]/15 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block and Text Slide */}
        <div className="mb-20 text-center space-y-4">
          <span className="text-[10px] tracking-[0.3em] font-sans font-semibold text-[#B9965B] block uppercase">
            SACRED PACKAGES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1C1814] tracking-wider leading-tight">
            Curated Journeys. <br className="sm:hidden" />
            <span className="italic font-light text-[#B9965B]">Tailored for You.</span>
          </h2>
          <p className="text-xs md:text-sm text-[#1C1814]/65 max-w-lg mx-auto font-light tracking-wide leading-relaxed">
            Choose from our three foundational frameworks, each fully custom-tailorable by our master travel butlers to fit your exact spiritual sequence.
          </p>
        </div>

        {/* 3 Main Experience Columns - High luxury layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white border border-[#B9965B]/15 hover:border-[#B9965B] transition-all duration-700 hover:shadow-2xl flex flex-col justify-between group"
            >
              <div>
                {/* Visual Banner */}
                <div className="aspect-[4/3] w-full overflow-hidden relative border-b border-[#B9965B]/15">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-[8s] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-transparent to-transparent" />
                  
                  {/* Luxury Indicators */}
                  <div className="absolute top-4 left-4 bg-[#FAF7F2]/90 backdrop-blur-sm border border-[#B9965B]/30 px-3 py-1 font-mono text-[9px] tracking-widest text-[#B9965B]">
                    {pkg.number}
                  </div>
                  
                  <div className="absolute bottom-4 left-6">
                    <span className="text-[9px] font-sans tracking-[0.25em] text-[#B9965B] uppercase block mb-1">
                      {pkg.subtitle}
                    </span>
                    <h3 className="text-lg font-serif text-white tracking-widest uppercase">
                      {pkg.name}
                    </h3>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-8 space-y-6">
                  <p className="text-xs text-[#1C1814]/75 font-sans tracking-wide leading-relaxed font-light">
                    {pkg.description}
                  </p>

                  <div className="h-px bg-[#B9965B]/15" />

                  {/* Bullet points inclusions list with subtle elegant custom icons */}
                  <div className="space-y-3">
                    <span className="text-[9px] font-sans tracking-[0.2em] text-[#B9965B] block font-semibold uppercase">
                      KEY ELEVATIONS Included:
                    </span>
                    {pkg.inclusions.map((inc) => (
                      <div key={inc} className="flex items-start gap-3">
                        <span className="text-[#B9965B] text-xs pt-0.5 font-light">✦</span>
                        <span className="text-xs font-sans font-light tracking-wide text-[#1C1814]/80 leading-relaxed">
                          {inc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action row */}
              <div className="p-8 pt-0 mt-auto">
                <button
                  onClick={() => onOpenConsultation(pkg.name)}
                  className="w-full text-center border border-[#B9965B]/40 hover:border-[#B9965B] bg-transparent hover:bg-[#B9965B]/5 py-3.5 text-[10px] tracking-[0.25em] text-[#1C1814] font-semibold transition-all duration-500 uppercase flex items-center justify-center gap-2"
                >
                  VIEW EXPERIENCE 
                  <ArrowRight size={12} className="text-[#B9965B] transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* INTERACTIVE LUXURY CURATION PYRAMID (DYNAMIC ESTIMATOR) */}
        <div className="border border-[#B9965B]/15 bg-white p-8 md:p-12 relative overflow-hidden shadow-xl">
          {/* Subtle luxurious background accent */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#B9965B]/5 to-transparent pointer-events-none hidden lg:block" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Inputs Controls Panel */}
            <div className="lg:col-span-8 space-y-8">
              <div className="flex items-center gap-3">
                <Settings2 size={16} className="text-[#B9965B]" />
                <h3 className="text-sm font-sans tracking-[0.25em] font-semibold text-[#1C1814] uppercase">
                  CURATE YOUR SACRED PATH
                </h3>
              </div>
              
              <div className="h-px bg-[#B9965B]/15" />

              {/* Toggles Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 1. Tier selection */}
                <div className="space-y-3">
                  <label className="text-[9px] font-sans tracking-[0.2em] text-[#B9965B] uppercase block font-semibold">
                    1. BASE TIER SELECT
                  </label>
                  <div className="flex flex-col gap-2">
                    {[
                      { id: "signature", name: "Signature", desc: "First-Class Elite" },
                      { id: "royal", name: "Royal Hajj", desc: "VIP Royal Tent & Fleet" },
                      { id: "private", name: "Private Executive", desc: "Private Penthouses" }
                    ].map((tier) => (
                      <button
                        key={tier.id}
                        onClick={() => setEstimateTier(tier.id as any)}
                        className={`text-left p-3 border text-xs tracking-wider transition-all duration-300 ${
                          estimateTier === tier.id
                            ? "border-[#B9965B] bg-[#B9965B]/10 text-[#1C1814] font-semibold"
                            : "border-[#B9965B]/15 bg-[#FAF7F2]/40 text-[#1C1814]/60 hover:border-[#B9965B]/30"
                        }`}
                      >
                        <span className="block font-semibold uppercase tracking-widest">{tier.name}</span>
                        <span className="block text-[9px] opacity-75 mt-0.5 font-light font-sans">{tier.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Hotel view proximity */}
                <div className="space-y-3">
                  <label className="text-[9px] font-sans tracking-[0.2em] text-[#B9965B] uppercase block font-semibold">
                    2. HOTEL PROXIMITY
                  </label>
                  <div className="flex flex-col gap-2">
                    {[
                      { id: "frontline", name: "Kaaba Front Window", desc: "Front row overlooking Kaaba" },
                      { id: "plaza", name: "Frontline Piazza", desc: "Immediate access to courtyard" },
                      { id: "view", name: "Masjid al-Haram View", desc: "Scenic high-floor skyline" }
                    ].map((prox) => (
                      <button
                        key={prox.id}
                        onClick={() => setEstimateProximity(prox.id as any)}
                        className={`text-left p-3 border text-xs tracking-wider transition-all duration-300 ${
                          estimateProximity === prox.id
                            ? "border-[#B9965B] bg-[#B9965B]/10 text-[#1C1814] font-semibold"
                            : "border-[#B9965B]/15 bg-[#FAF7F2]/40 text-[#1C1814]/60 hover:border-[#B9965B]/30"
                        }`}
                      >
                        <span className="block font-semibold uppercase tracking-widest">{prox.name}</span>
                        <span className="block text-[9px] opacity-75 mt-0.5 font-light font-sans">{prox.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Season Selection */}
                <div className="space-y-3">
                  <label className="text-[9px] font-sans tracking-[0.2em] text-[#B9965B] uppercase block font-semibold">
                    3. DEVOTIONAL SEASON
                  </label>
                  <div className="flex flex-col gap-2">
                    {[
                      { id: "ramadan", name: "Ramadan (Holy Month)", desc: "Maximum crowd & devotion" },
                      { id: "dhul-hijjah", name: "Dhul-Hijjah (Hajj)", desc: "Sovereign annual rituals" },
                      { id: "off-peak", name: "Standard Custom", desc: "Deep meditation quiet days" }
                    ].map((szn) => (
                      <button
                        key={szn.id}
                        onClick={() => setEstimateSeason(szn.id as any)}
                        className={`text-left p-3 border text-xs tracking-wider transition-all duration-300 ${
                          estimateSeason === szn.id
                            ? "border-[#B9965B] bg-[#B9965B]/10 text-[#1C1814] font-semibold"
                            : "border-[#B9965B]/15 bg-[#FAF7F2]/40 text-[#1C1814]/60 hover:border-[#B9965B]/30"
                        }`}
                      >
                        <span className="block font-semibold uppercase tracking-widest">{szn.name}</span>
                        <span className="block text-[9px] opacity-75 mt-0.5 font-light font-sans">{szn.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Passenger Toggles & Addons Checklist */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-4">
                {/* Pax selector */}
                <div className="space-y-4">
                  <span className="text-[9px] font-sans tracking-[0.2em] text-[#B9965B] block font-semibold uppercase">
                    4. GUESTS & PILGRIMS
                  </span>
                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                      className="w-10 h-10 border border-[#B9965B]/30 text-[#1C1814] hover:border-[#B9965B] hover:bg-[#B9965B]/5 text-lg font-mono flex items-center justify-center bg-transparent transition-colors"
                    >
                      -
                    </button>
                    <span className="text-2xl font-mono text-[#1C1814] font-semibold tracking-widest w-6 text-center">
                      {groupSize}
                    </span>
                    <button
                      onClick={() => setGroupSize(Math.min(12, groupSize + 1))}
                      className="w-10 h-10 border border-[#B9965B]/30 text-[#1C1814] hover:border-[#B9965B] hover:bg-[#B9965B]/5 text-lg font-mono flex items-center justify-center bg-transparent transition-colors"
                    >
                      +
                    </button>
                    <span className="text-xs text-[#1C1814]/60 font-sans tracking-wide">
                      Pilgrims in private suite group
                    </span>
                  </div>
                </div>

                {/* Checklist Addons */}
                <div className="space-y-3">
                  <span className="text-[9px] font-sans tracking-[0.2em] text-[#B9965B] block font-semibold uppercase">
                    5. ULTRA-PREMIUM ELEVATIONS
                  </span>
                  <div className="space-y-2">
                    {addonsList.map((ad) => {
                      const selected = selectedAddons.includes(ad.id);
                      return (
                        <button
                          key={ad.id}
                          onClick={() => handleToggleAddon(ad.id)}
                          className="w-full flex items-start gap-3 p-2.5 border border-[#B9965B]/15 bg-white hover:border-[#B9965B]/30 transition-all text-left shadow-sm group"
                        >
                          <div className={`mt-0.5 w-4 h-4 border flex items-center justify-center transition-colors duration-300 ${
                            selected ? "border-[#B9965B] bg-[#B9965B]" : "border-[#B9965B]/30 bg-transparent"
                          }`}>
                            {selected && <Check size={10} className="text-white stroke-[3px]" />}
                          </div>
                          <div className="space-y-0.5">
                            <span className="text-[11px] font-sans font-medium text-[#1C1814] block tracking-wide">
                              {ad.label}
                            </span>
                            <span className="text-[9px] font-sans font-light text-[#1C1814]/55 block leading-tight">
                              {ad.desc}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Output Sum Calculations */}
            <div className="lg:col-span-4 border border-[#B9965B]/35 p-8 space-y-8 bg-[#FAF7F2] text-center flex flex-col justify-between h-full relative shadow-md">
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.2em] font-sans text-[#B9965B] font-semibold block uppercase">
                  ESTIMANT QUOTATION
                </span>
                <p className="text-[10px] uppercase font-sans tracking-[0.15em] text-[#1C1814]/60 max-w-xs mx-auto">
                  Fully bespoke luxury pricing based on sovereign specifications
                </p>
                
                <div className="h-px w-12 bg-[#B9965B]/30 mx-auto" />
              </div>

              {/* Dynamic Cost Counter */}
              <div className="space-y-2.5 py-4">
                <span className="text-4xl sm:text-5xl font-mono text-[#1C1814] tracking-wider block font-light">
                  ${calculateEstimateValue().toLocaleString()}
                </span>
                <span className="text-[9px] tracking-[0.2em] text-[#B9965B] font-sans block">
                  ESTIMATION VALUE (USD)
                </span>
                <span className="text-[8px] text-[#1C1814]/50 font-sans block">
                  ALL HOTEL INCLUSIONS & INTERNAL TRANSPORT COMPREHENSIVE
                </span>
              </div>

              {/* Submit to Concierge Call Trigger */}
              <button
                onClick={handleReserveCuratedPath}
                className="w-full bg-[#B9965B] text-white hover:bg-[#8C6F3E] font-semibold tracking-[0.25em] py-4 text-xs font-sans transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                RESERVE THIS CURATION
                <ArrowRight size={12} className="text-white transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[8px] tracking-wide font-sans text-[#1C1814]/40">
                <Shield size={10} className="text-[#B9965B]" />
                ENCRYPTED & GUARANTEED MAXIMUM DISCRETION
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
