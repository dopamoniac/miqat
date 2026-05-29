/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from "react";
import { X, Check, ArrowRight, ShieldCheck, Clock, Crown, Sparkles, AlertCircle, Heart } from "lucide-react";
import { ConsultationRequest } from "../types";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageNamePreset?: string;
}

export default function ConsultationModal({ isOpen, onClose, packageNamePreset }: ConsultationModalProps) {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<ConsultationRequest>({
    fullName: "",
    email: "",
    phone: "",
    whatsappCode: "+44",
    packagePreference: "Signature Umrah Frame",
    travelDate: "Ramadan (Holy Peak Season)",
    groupSize: 2,
    specialRequests: "",
    agreeToPrivacy: true,
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [reservationId, setReservationId] = useState<string>("");

  useEffect(() => {
    if (packageNamePreset) {
      setFormData((prev) => ({
        ...prev,
        packagePreference: packageNamePreset,
      }));
    }
  }, [packageNamePreset, isOpen]);

  if (!isOpen) return null;

  const handleNextStep = () => {
    if (step === 1) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        alert("Please complete all personal coordinates to maintain integrity.");
        return;
      }
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToPrivacy) {
      alert("Please agree to the discretion policy.");
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury concierge broadcast log
    setTimeout(() => {
      // Create a majestic mock booking index
      const randNum = Math.floor(Math.random() * 9000) + 1000;
      setReservationId(`MQT-${randNum}-2026`);
      setIsSubmitting(false);
      setIsCompleted(true);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      
      {/* Absolute Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-8 text-white/60 hover:text-white p-2 transition-colors duration-300 z-10 cursor-pointer"
        aria-label="Close form"
      >
        <X size={24} strokeWidth={1} />
      </button>

      {/* Main Board Container */}
      <div className="w-full max-w-2xl bg-[#FAF7F2] border border-[#B9965B]/40 p-8 sm:p-12 relative my-12 shadow-2xl">
        
        {/* Decorative corner borders */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#B9965B]" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#B9965B]" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#B9965B]" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#B9965B]" />

        {/* 1. Loader Submitting State */}
        {isSubmitting && (
          <div className="py-24 text-center space-y-6 flex flex-col items-center justify-center font-sans">
            <span className="w-12 h-12 border-2 border-[#B9965B]/20 border-t-[#B9965B] rounded-full animate-spin block" />
            <h3 className="text-sm font-sans tracking-[0.25em] text-[#B9965B] uppercase font-semibold">
              ANCHORING SECURE ENCRYPTED CHANNELS
            </h3>
            <p className="text-xs text-[#1C1814]/50 max-w-xs font-light">
              We are broadcasting your spiritual intent to our Senior Butler at Ritz-Carlton Mecca residence.
            </p>
          </div>
        )}

        {/* 2. Success Devotional Docket State */}
        {isCompleted && !isSubmitting && (
          <div className="py-8 space-y-8 text-center flex flex-col items-center font-sans">
            <span className="text-[#B9965B] p-4 border border-[#B9965B]/30 rounded-full animate-pulse">
              <Crown size={32} strokeWidth={1} />
            </span>

            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.3em] font-sans font-semibold text-[#B9965B] block uppercase">
                RESERVATION RECEIVED
              </span>
              <h3 className="text-xl font-serif text-[#1C1814] tracking-wider uppercase">
                May Peace be Upon Your Path.
              </h3>
              <p className="text-xs text-[#1C1814]/70 max-w-md mx-auto font-sans leading-relaxed">
                Our Senior Concierge Butler is reviewing your coordinates of intent. You will receive an encrypted text summary and direct priority phone callback within <strong>15 minutes</strong>.
              </p>
            </div>

            {/* Receipt Table */}
            <div className="w-full border border-[#B9965B]/15 bg-white p-6 text-left space-y-4 font-sans text-xs tracking-wider shadow-sm">
              <div className="flex justify-between items-center border-b border-[#B9965B]/15 pb-3">
                <span className="text-[#1C1814]/50 uppercase text-[9px]">RESERVATION ID:</span>
                <span className="font-mono font-bold text-[#B9965B] text-sm">{reservationId}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#B9965B]/15 pb-3">
                <span className="text-[#1C1814]/50 uppercase text-[9px]">PILGRIM OF INTENT:</span>
                <span className="text-[#1C1814]">{formData.fullName}</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#B9965B]/15 pb-3">
                <span className="text-[#1C1814]/50 uppercase text-[9px]">SELECTED TIER FRAMEWORK:</span>
                <span className="text-[#1C1814] font-semibold uppercase font-sans text-[11px] text-[#B9965B]">
                  {formData.packagePreference}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#1C1814]/50 uppercase text-[9px]">ASSISTANCE ASSIGNED:</span>
                <span className="text-[#1C1814] flex items-center gap-1">
                  <Heart size={10} className="text-[#B9965B]" />
                  VIP Elder Care Elite Team
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsCompleted(false);
                setStep(1);
                onClose();
              }}
              className="bg-[#B9965B] hover:bg-[#8C6F3E] text-white px-8 py-3.5 text-xs font-semibold tracking-[0.25em] cursor-pointer"
            >
              RETURN TO SANCTUARY
            </button>
          </div>
        )}

        {/* 3. Steps forms content */}
        {!isSubmitting && !isCompleted && (
          <form onSubmit={handleSubmitForm} className="space-y-8">
            
            {/* Modal Headers */}
            <div className="space-y-3 text-center sm:text-left">
              <span className="text-[10px] tracking-[0.3em] font-sans font-semibold text-[#B9965B] block uppercase">
                PRIVATE PORTAL &mdash; PORTRAIT OF INTENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1C1814] tracking-wider leading-none">
                Begin Your <span className="italic font-light text-[#B9965B]">Sacred Curation</span>
              </h2>
              <div className="h-px bg-[#B9965B]/20 w-16 mx-auto sm:mx-0 pt-2" />
            </div>

            {/* Step Progress indicators */}
            <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-[#1C1814]/40">
              <span className={step === 1 ? "text-[#B9965B] font-bold" : ""}>01 COORDINATES</span>
              <span className="h-px flex-grow bg-[#B9965B]/20 mx-4" />
              <span className={step === 2 ? "text-[#B9965B] font-bold" : ""}>02 PILGRIMAGE PRESET</span>
              <span className="h-px flex-grow bg-[#B9965B]/20 mx-4" />
              <span className={step === 3 ? "text-[#B9965B] font-bold" : ""}>03 DISCRETION</span>
            </div>

            {/* STEP 1: PERSONAL COORDINATES */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-[9px] font-sans tracking-[0.2em] text-[#B9965B] font-semibold uppercase block">
                    FULL FAMILY HEAD NAME (REPRESENTATIVE)
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="E.g., Al-Farabi Bin Abdul-Aziz"
                    className="w-full bg-white border border-[#B9965B]/35 p-4 text-xs tracking-wider text-[#1C1814] focus:border-[#B9965B] outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[9px] font-sans tracking-[0.2em] text-[#B9965B] font-semibold uppercase block">
                      SECURE PERSONAL EMAIL ADDRESS
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., binaziz@royal-consulate.com"
                      className="w-full bg-white border border-[#B9965B]/35 p-4 text-xs tracking-wider text-[#1C1814] focus:border-[#B9965B] outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-[9px] font-sans tracking-[0.2em] text-[#B9965B] font-semibold uppercase block">
                      WHATSAPP DIRECT CONTACT PHONE LINE
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={formData.whatsappCode}
                        onChange={(e) => setFormData({ ...formData, whatsappCode: e.target.value })}
                        className="bg-white border border-[#B9965B]/35 p-4 text-xs text-[#1C1814] focus:border-[#B9965B] outline-none"
                      >
                        <option value="+44">+44 (UK)</option>
                        <option value="+966">+966 (KSA)</option>
                        <option value="+1">+1 (US)</option>
                        <option value="+971">+971 (UAE)</option>
                        <option value="+33">+33 (FR)</option>
                      </select>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="7123 456789"
                        className="w-full bg-white border border-[#B9965B]/35 p-4 text-xs tracking-wider text-[#1C1814] focus:border-[#B9965B] outline-none transition-colors flex-grow"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-[#B9965B] text-white hover:bg-[#8C6F3E] text-xs font-semibold tracking-[0.25em] py-4 px-8 flex items-center gap-2 group cursor-pointer"
                  >
                    SELECT PATH DETAILS
                    <ArrowRight size={12} className="text-white transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: SACRED PATH SELECTION */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Package target */}
                  <div className="space-y-2">
                    <label htmlFor="packagePreference" className="text-[9px] font-sans tracking-[0.2em] text-[#B9965B] font-semibold uppercase block">
                      SELECT FOUNDATIONAL TIER
                    </label>
                    <select
                      id="packagePreference"
                      value={formData.packagePreference}
                      onChange={(e) => setFormData({ ...formData, packagePreference: e.target.value })}
                      className="w-full bg-white border border-[#B9965B]/35 p-4 text-xs text-[#1C1814] focus:border-[#B9965B] outline-none tracking-wider"
                    >
                      <option value="Signature Umrah Frame">Signature Umrah (5★ Frontline Suite)</option>
                      <option value="Royal Hajj Framework">Royal Hajj Framework (Mina Sovereign Tents)</option>
                      <option value="Private Group Curation">Private Suite Floor Curation</option>
                      <option value="Corporate/Consultant Package">Executive Corporate Sanctuary</option>
                    </select>
                  </div>

                  {/* Travelling season */}
                  <div className="space-y-2">
                    <label htmlFor="travelDate" className="text-[9px] font-sans tracking-[0.2em] text-[#B9965B] font-semibold uppercase block">
                      TARGET SEASON OF PILGRIMAGE
                    </label>
                    <select
                      id="travelDate"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full bg-white border border-[#B9965B]/35 p-4 text-xs text-[#1C1814] focus:border-[#B9965B] outline-none tracking-wider"
                    >
                      <option value="Ramadan (Holy Peak Season)">Ramadan (Peak Sacred Devotion)</option>
                      <option value="Dhul Hijjah (Hajj Period)">Dhul-Hijjah (Hajj Ritual Sequence)</option>
                      <option value="Quiet Meditative Season">Quiet Meditative Season (Soft Days)</option>
                      <option value="Immediate Next Available">Immediate Booking (Next Month)</option>
                    </select>
                  </div>
                </div>

                {/* Group size */}
                <div className="space-y-2">
                  <label htmlFor="groupSelector" className="text-[9px] font-sans tracking-[0.2em] text-[#B9965B] font-semibold uppercase block">
                    HOW MANY PILGRIMS EXPECTED? (INCLUDING ELDERS)
                  </label>
                  <div className="flex items-center gap-4">
                    {[1, 2, 3, 4, 5, "6+"].map((numOption) => {
                      const isSelected =
                        (numOption === "6+" && formData.groupSize >= 6) ||
                        formData.groupSize === numOption;
                      return (
                        <button
                          key={numOption}
                          type="button"
                          onClick={() => setFormData({ ...formData, groupSize: numOption === "6+" ? 6 : (numOption as number) })}
                          className={`w-12 h-12 border text-xs font-mono font-bold transition-all duration-300 ${
                            isSelected
                              ? "border-[#B9965B] bg-[#B9965B]/10 text-[#1C1814]"
                              : "border-[#B9965B]/30 bg-white text-[#1C1814]/60 hover:border-[#B9965B]/50 cursor-pointer"
                          }`}
                        >
                          {numOption}
                        </button>
                      );
                    })}
                    <span className="text-[10px] text-[#1C1814]/50 tracking-wide font-sans pl-2">
                      Custom suites tailored to sizes
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="border border-[#B9965B]/30 text-[#1C1814]/75 hover:bg-[#B9965B]/5 text-xs font-semibold tracking-[0.25em] py-4 px-8 cursor-pointer"
                  >
                    BACK
                  </button>
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="bg-[#B9965B] text-white hover:bg-[#8C6F3E] text-xs font-semibold tracking-[0.25em] py-4 px-8 flex items-center gap-2 group cursor-pointer"
                  >
                    PROCEED TO DISCRETION
                    <ArrowRight size={12} className="text-white transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: SOVEREIGN DISCRETION & PRIVACY */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="specialRequests" className="text-[9px] font-sans tracking-[0.2em] text-[#B9965B] font-semibold uppercase block">
                    SPECIAL REQUESTS, ELDERLY ACCORD OR DIETARY REQUIREMENTS
                  </label>
                  <textarea
                    id="specialRequests"
                    rows={4}
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    placeholder="We provide executive wheelchair escorts during Tawaf, private pediatric and mobility nurses, private chefs, or dedicated language translators. List any specifications here."
                    className="w-full bg-white border border-[#B9965B]/35 p-4 text-xs tracking-wider text-[#1C1814] focus:border-[#B9965B] outline-none transition-colors"
                  />
                </div>

                {/* Privacy checkbox */}
                <div className="flex items-start gap-3 bg-white p-4 border border-[#B9965B]/15 shadow-sm">
                  <input
                    id="privacyCheck"
                    type="checkbox"
                    required
                    checked={formData.agreeToPrivacy}
                    onChange={(e) => setFormData({ ...formData, agreeToPrivacy: e.target.checked })}
                    className="mt-1 accent-[#B9965B] cursor-pointer"
                  />
                  <label htmlFor="privacyCheck" className="text-[10px] text-[#1C1814]/60 font-sans tracking-wide leading-relaxed cursor-pointer select-none">
                    I agree to the <strong>Miqat Sovereign Integrity & Privacy Accord</strong>. I understand my telemetry details, phone digits, and destination requirements are kept completely confidential and encrypted under diplomatic parameters.
                  </label>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="border border-[#B9965B]/30 text-[#1C1814]/75 hover:bg-[#B9965B]/5 text-xs font-semibold tracking-[0.25em] py-4 px-8 cursor-pointer"
                  >
                    BACK
                  </button>
                  <button
                    type="submit"
                    className="bg-[#B9965B] text-white hover:bg-[#8C6F3E] text-xs font-semibold tracking-[0.25em] py-4 px-8 flex items-center gap-2 group cursor-pointer"
                  >
                    BROADCAST PORTRAIT
                    <Check size={12} className="text-white stroke-[3px]" />
                  </button>
                </div>
              </div>
            )}

            {/* Privacy note */}
            <div className="flex items-center justify-center gap-2 text-[8px] tracking-widest text-[#1C1814]/40 font-sans text-center pt-2">
              <ShieldCheck size={11} className="text-[#B9965B]" />
              SECURED BY DIPLOMATIC HIGH TIER SSL &bull; NO MARKETING SPAM GUARANTEED
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
