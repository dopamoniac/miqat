/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crown, Sparkles, MessageSquare, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  
  const handleWhatsAppSimulation = () => {
    // Elegant luxury notification or action simulation
    const phoneNumber = "966500000000"; // Holy sanctuary mock concierge
    const text = encodeURIComponent("Peace be upon you. I would like to enquire about Miqat luxury experiences.");
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 relative z-10 pt-24 pb-12">
      
      {/* Decorative Golden Ray Top Line */}
      <div className="absolute top-0 left-0 right-0 h-[0.5px] bg-gradient-to-r from-transparent via-[#B9965B]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
        
        {/* Massive Call To Action Block (Section 10 in Image 6) */}
        <div className="text-center space-y-8 max-w-2xl mx-auto py-12 border border-white/5 bg-[#0c0c0c]/80 relative overflow-hidden p-6 sm:p-12">
          {/* Decorative Spark */}
          <span className="text-[#B9965B] inline-block animate-pulse">
            <Sparkles size={24} strokeWidth={1} />
          </span>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F4EFE7] tracking-wider leading-tight">
            READY TO BEGIN YOUR <br />
            <span className="italic font-light text-gold-gradient">SACRED JOURNEY?</span>
          </h3>

          <p className="text-xs sm:text-sm text-[#F4EFE7]/60 max-w-md mx-auto font-sans font-light tracking-wide leading-relaxed">
            Let our master travel butlers craft your bespoke Hajj or Umrah package. Fill out our secure concierge questionnaire for private callback.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto bg-[#B9965B] hover:bg-[#8C6F3E] text-black px-8 py-4 text-xs font-semibold tracking-[0.25em] transition-all duration-300 transform"
            >
              GET PRIVATE CONSULTATION
            </button>

            <button
              onClick={handleWhatsAppSimulation}
              className="w-full sm:w-auto border border-white/20 hover:border-[#B9965B] text-[#F4EFE7] px-8 py-4 text-xs font-semibold tracking-[0.25em] transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageSquare size={14} className="text-[#B9965B]" />
              WHATSAPP CONCIERGE
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[9px] text-[#F4EFE7]/30 tracking-wider">
            <ShieldCheck size={11} className="text-[#B9965B]" />
            SOVEREIGN ENVELOPE ENCRYPTION GUARANTEED
          </div>
        </div>

        {/* Directory columns & Logo Branding Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Logo Brand Segment */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-[#B9965B]">
                <Crown size={24} strokeWidth={1} />
              </span>
              <span className="text-xl font-cinzel font-semibold tracking-[0.25em] text-[#F4EFE7]">
                MIQAT
              </span>
            </div>
            
            <p className="text-xs text-[#F4EFE7]/50 font-sans tracking-wide leading-relaxed font-light">
              Miqat stands as a premier luxury Hajj & Umrah platform, designing sacred pathways for discerning pilgrim families demanding sovereign execution, absolute privacy, and spiritual deep alignment.
            </p>

            <div className="space-y-3.5 pt-4 text-[11px] font-sans tracking-wider text-[#F4EFE7]/60 font-light">
              <div className="flex items-center gap-3">
                <MapPin size={14} className="text-[#B9965B]" />
                <span>Ritz-Carlton Residences, Mecca / Knightsbridge, London</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-[#B9965B]" />
                <a href="mailto:concierge@miqat-hajj.com" className="hover:text-white transition-colors">concierge@miqat-hajj.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-[#B9965B]" />
                <span>+966 (050) 000 0000</span>
              </div>
            </div>
          </div>

          {/* Directory columns map (Section 11 in Image 6) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Nav links */}
            <div className="space-y-4 text-left">
              <span className="text-[10px] tracking-[0.2em] font-sans font-bold text-[#B9965B] block uppercase">
                EXPERIENCES
              </span>
              <ul className="space-y-3 text-xs tracking-wide text-[#F4EFE7]/50 font-sans font-light">
                <li><a href="#experiences" className="hover:text-white transition-colors block py-0.5">Signature Umrah</a></li>
                <li><a href="#experiences" className="hover:text-white transition-colors block py-0.5">Royal Hajj Framework</a></li>
                <li><a href="#experiences" className="hover:text-white transition-colors block py-0.5">Private Group Journeys</a></li>
                <li><a href="#experiences" className="hover:text-white transition-colors block py-0.5">Corporate Travel Curation</a></li>
              </ul>
            </div>

            {/* Support links */}
            <div className="space-y-4 text-left">
              <span className="text-[10px] tracking-[0.2em] font-sans font-bold text-[#B9965B] block uppercase">
                THE SERVICE
              </span>
              <ul className="space-y-3 text-xs tracking-wide text-[#F4EFE7]/50 font-sans font-light">
                <li><a href="#concierge" className="hover:text-[#B9965B] transition-colors block py-0.5">Tarmac Airport Meet</a></li>
                <li><a href="#concierge" className="hover:text-[#B9965B] transition-colors block py-0.5">Elite Islamic Scholars</a></li>
                <li><a href="#concierge" className="hover:text-[#B9965B] transition-colors block py-0.5">Mina Royal Tents</a></li>
                <li><a href="#concierge" className="hover:text-[#B9965B] transition-colors block py-0.5">Discreet Medical Escorts</a></li>
              </ul>
            </div>

            {/* Regulatory links */}
            <div className="space-y-4 text-left">
              <span className="text-[10px] tracking-[0.2em] font-sans font-bold text-[#B9965B] block uppercase">
                ACCORD
              </span>
              <ul className="space-y-3 text-xs tracking-wide text-[#F4EFE7]/50 font-sans font-light">
                <li><a href="#" className="hover:text-white transition-colors block py-0.5">Privacy Charter</a></li>
                <li><a href="#" className="hover:text-white transition-colors block py-0.5">Regulatory License Numbers</a></li>
                <li><a href="#" className="hover:text-white transition-colors block py-0.5">Refund and Intent Accord</a></li>
                <li><a href="#" className="hover:text-white transition-colors block py-0.5">Elders Care Protocol</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* Divider and copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/5 pt-12 text-center sm:text-left">
          <p className="text-[10px] tracking-wider text-[#F4EFE7]/30 font-sans font-light">
            &copy; {new Date().getFullYear()} MIQAT INTERNATIONAL COPR. LICENSE NO. 14789-A2. MECCA HQ. ALL RIGHTS PRESERVED.
          </p>
          <div className="flex items-center gap-6 text-[10px] tracking-wider text-white/30 font-sans font-light">
            <span>MADE WITH DEVOTION</span>
            <span className="h-3 w-[1px] bg-white/10" />
            <span>DESIGNED FOR SACRED PEACE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
