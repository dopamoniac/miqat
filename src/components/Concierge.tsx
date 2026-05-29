/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  FileText,
  Hotel,
  Car,
  UserCheck,
  Plane,
  Compass,
  Users,
  Sparkles,
  Crown
} from "lucide-react";
import { CONCIERGE_SERVICES } from "../data";

export default function Concierge() {
  // Map icons dynamically
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "FileText":
        return <FileText size={22} strokeWidth={1} />;
      case "Hotel":
        return <Hotel size={22} strokeWidth={1} />;
      case "Car":
        return <Car size={22} strokeWidth={1} />;
      case "UserCheck":
        return <UserCheck size={22} strokeWidth={1} />;
      case "PlaneTakeoff":
        return <Plane size={22} strokeWidth={1} />;
      case "Compass":
        return <Compass size={22} strokeWidth={1} />;
      case "Users":
        return <Users size={22} strokeWidth={1} />;
      case "Sparkles":
        return <Sparkles size={22} strokeWidth={1} />;
      case "Crown":
        return <Crown size={22} strokeWidth={1} />;
      default:
        return <Sparkles size={22} strokeWidth={1} />;
    }
  };

  return (
    <section id="concierge" className="py-24 md:py-36 bg-[#FAF7F2] border-t border-[#B9965B]/15 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] tracking-[0.3em] font-sans font-semibold text-[#B9965B] block uppercase">
              CONCIERGE SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1C1814] tracking-wider leading-tight">
              Every Detail, <br className="sm:hidden" />
              <span className="italic font-light text-[#B9965B]">Managed with Discretion.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs text-[#1C1814]/65 font-sans tracking-wide leading-relaxed font-light">
              From diplomatic immigration clearance to custom private menus, we are committed to absolute operational silent-assistance, guarding your family’s privacy.
            </p>
          </div>
        </div>

        {/* 3x3 Luxury Grid of Services (No Rounded SaaS Cards, Precise Rectangular Lines) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-r border-[#B9965B]/15 font-sans">
          {CONCIERGE_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="group border-l border-b border-[#B9965B]/15 hover:border-[#B9965B]/50 p-10 bg-white hover:bg-[#FAF7F2] transition-all duration-700 relative flex flex-col justify-between"
            >
              {/* Subtle gold line indicator on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#B9965B] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="space-y-6">
                {/* Icon wrapper with fine circular boundary */}
                <div className="w-12 h-12 rounded-full border border-[#B9965B]/20 group-hover:border-[#B9965B] flex items-center justify-center text-[#B9965B] transform group-hover:scale-105 transition-all duration-500">
                  {getIcon(srv.iconName)}
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-xs font-sans tracking-[0.25em] font-semibold text-[#1C1814] group-hover:text-[#B9965B] transition-colors uppercase">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#1C1814]/70 font-sans font-light tracking-wide leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </div>

              {/* Minimal decoration arrow */}
              <div className="pt-6 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] font-mono text-[#B9965B] tracking-widest hidden sm:inline">
                  RESERVED SELECTION
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic bottom badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2.5 bg-white border border-[#B9965B]/20 px-6 py-3 shadow-md">
            <span className="h-2 w-2 rounded-full bg-[#B9965B] animate-pulse" />
            <span className="text-[10px] font-sans tracking-[0.2em] text-[#1C1814]/70 uppercase">
              ALL LOGISTICS UNDERGO QUADRUPLE REVERIFICATION AND MEDICAL REDUNDANCY PROTOCOLS.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
