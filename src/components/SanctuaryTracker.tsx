/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Compass, Moon, Sun, MapPin, Clock, Star, Sparkles, Navigation, CalendarDays } from "lucide-react";

interface CityCoordinates {
  name: string;
  country: string;
  lat: number;
  lng: number;
  distanceKm: number;
  bearing: number;
  fajr: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
}

const CITADEL_COORDINATES: CityCoordinates[] = [
  {
    name: "Knightsbridge, London",
    country: "United Kingdom",
    lat: 51.5014,
    lng: -0.1631,
    distanceKm: 4792,
    bearing: 119,
    fajr: "03:12",
    dhuhr: "13:06",
    asr: "17:18",
    maghrib: "21:12",
    isha: "22:45"
  },
  {
    name: "Avenue Montaigne, Paris",
    country: "France",
    lat: 48.8661,
    lng: 2.3080,
    distanceKm: 4431,
    bearing: 122,
    fajr: "03:40",
    dhuhr: "13:46",
    asr: "17:52",
    maghrib: "21:44",
    isha: "23:10"
  },
  {
    name: "Fifth Avenue, New York",
    country: "United States",
    lat: 40.7744,
    lng: -73.9632,
    distanceKm: 10284,
    bearing: 58,
    fajr: "04:02",
    dhuhr: "12:58",
    asr: "16:54",
    maghrib: "20:15",
    isha: "21:48"
  },
  {
    name: "Downtown Penthouse, Dubai",
    country: "United Arab Emirates",
    lat: 25.2048,
    lng: 55.2708,
    distanceKm: 1648,
    bearing: 247,
    fajr: "04:10",
    dhuhr: "12:22",
    asr: "15:44",
    maghrib: "19:08",
    isha: "20:34"
  },
  {
    name: "Marina Bay Residences, Singapore",
    country: "Singapore",
    lat: 1.3521,
    lng: 103.8198,
    distanceKm: 7291,
    bearing: 293,
    fajr: "05:42",
    dhuhr: "13:04",
    asr: "16:29",
    maghrib: "19:12",
    isha: "20:25"
  }
];

export default function SanctuaryTracker() {
  const [selectedCity, setSelectedCity] = useState<CityCoordinates>(CITADEL_COORDINATES[0]);
  const [meccaTime, setMeccaTime] = useState<string>("");
  const [nextPrayerName, setNextPrayerName] = useState<string>("Fajr");
  const [nextPrayerCountdown, setNextPrayerCountdown] = useState<string>("04h 12m");
  const [nextPrayerPercentage, setNextPrayerPercentage] = useState<number>(65);

  // Approximate moon phase calculation based on current year/month/day
  const [moonPhaseName, setMoonPhaseName] = useState<string>("Waxing Crescent");
  const [moonIllumination, setMoonIllumination] = useState<number>(35);
  const [moonAgeDays, setMoonAgeDays] = useState<number>(4);

  // Time effect
  useEffect(() => {
    const updateTime = () => {
      // Mecca is UTC +3
      const d = new Date();
      const utc = d.getTime() + d.getTimezoneOffset() * 60000;
      const meccaDate = new Date(utc + 3600000 * 3);
      setMeccaTime(meccaDate.toLocaleTimeString("en-GB", { hour: "numeric", minute: "2-digit", second: "2-digit" }));

      // Cycle mock next prayer times countdown logically based on real hour
      const hrs = meccaDate.getHours();
      let pName = "Fajr";
      let timeDiffStr = "02h 15m";
      let pct = 80;

      if (hrs >= 4 && hrs < 12) {
        pName = "Dhuhr";
        const diffHr = 12 - hrs;
        timeDiffStr = `${diffHr}h 22m`;
        pct = Math.round((1 - diffHr/8) * 100);
      } else if (hrs >= 12 && hrs < 15) {
        pName = "Asr";
        const diffHr = 15 - hrs;
        timeDiffStr = `${diffHr}h 44m`;
        pct = Math.round((1 - diffHr/3) * 100);
      } else if (hrs >= 15 && hrs < 19) {
        pName = "Maghrib";
        const diffHr = 19 - hrs;
        timeDiffStr = `${diffHr}h 08m`;
        pct = Math.round((1 - diffHr/4) * 100);
      } else if (hrs >= 19 && hrs < 21) {
        pName = "Isha";
        const diffHr = 21 - hrs;
        timeDiffStr = `${diffHr}h 34m`;
        pct = Math.round((1 - diffHr/2) * 100);
      } else {
        pName = "Fajr";
        const diffHr = hrs >= 21 ? (24 - hrs + 4) : (4 - hrs);
        timeDiffStr = `${diffHr}h 10m`;
        pct = Math.round((1 - diffHr/7) * 100);
      }

      setNextPrayerName(pName);
      setNextPrayerCountdown(timeDiffStr);
      setNextPrayerPercentage(pct);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Astronomical Moon Phase code base on simple synodic month (29.53059 days)
  useEffect(() => {
    // Reference date: New Moon Jan 6 2000 UTC
    const refNewMoon = new Date(Date.UTC(2000, 0, 6, 18, 14, 0)).getTime();
    const now = new Date().getTime();
    const diffMs = now - refNewMoon;
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    const synodicCycle = 29.530588853;
    const cyclePosition = (diffDays % synodicCycle) / synodicCycle;
    const rawAge = cyclePosition * synodicCycle;
    setMoonAgeDays(parseFloat(rawAge.toFixed(1)));

    // Set gorgeous dynamic outputs
    let name = "New Moon";
    let illum = 0;

    if (cyclePosition < 0.03 || cyclePosition > 0.97) {
      name = "New Moon (Hilal Invisible)";
      illum = 0;
    } else if (cyclePosition < 0.23) {
      name = "Waxing Crescent (Shahr Hilal)";
      illum = Math.round(cyclePosition * 4 * 100);
    } else if (cyclePosition < 0.27) {
      name = "First Quarter (Half Moon)";
      illum = 50;
    } else if (cyclePosition < 0.47) {
      name = "Waxing Gibbous";
      illum = Math.round(50 + (cyclePosition - 0.25) * 4 * 100);
    } else if (cyclePosition < 0.53) {
      name = "Full Moon (Badr)";
      illum = 100;
    } else if (cyclePosition < 0.73) {
      name = "Waning Gibbous";
      illum = Math.round(100 - (cyclePosition - 0.5) * 4 * 100);
    } else if (cyclePosition < 0.77) {
      name = "Third Quarter";
      illum = 50;
    } else {
      name = "Waning Crescent";
      illum = Math.round(50 - (cyclePosition - 0.75) * 4 * 100);
    }

    setMoonIllumination(illum);
    setMoonPhaseName(name);
  }, []);

  return (
    <section id="sanctuary-tracker" className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      {/* Dynamic Star background effect */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#B9965B_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-[10px] tracking-[0.3em] font-sans font-semibold text-[#B9965B] block uppercase">
              SACRED INSTRUMENTS & METADATA
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F4EFE7] tracking-wider leading-tight">
              Sovereign Sanctuary <br className="sm:hidden" />
              <span className="italic font-light text-gold-gradient">Coordinates & Live Timers</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-xs text-[#F4EFE7]/50 font-sans tracking-wide leading-relaxed font-light">
              Interactive calculations detailing the cosmic alignment, Mecca real-time prayer schedule, lunar phases, and localized Qibla bearings.
            </p>
          </div>
        </div>

        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Qibla Selector compass (8 cols) */}
          <div className="lg:col-span-8 bg-[#0c0c0c] border border-white/5 p-8 flex flex-col justify-between space-y-8 relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#B9965B]/5 to-transparent pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[9px] tracking-widest font-mono text-[#B9965B] font-bold block uppercase">
                  LOCALIZED DIPLOMATIC PORTALS
                </span>
                <h3 className="text-base font-serif text-[#F4EFE7] uppercase tracking-wide">
                  Select Your Origin Point
                </h3>
              </div>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-mono tracking-widest text-[#F4EFE7]/40 uppercase">
                  ACTIVE REAL-TIME COMPUTATIONS
                </span>
              </div>
            </div>

            {/* Metros toggles selector pills */}
            <div className="flex flex-wrap gap-2.5">
              {CITADEL_COORDINATES.map((city) => {
                const isSelected = selectedCity.name === city.name;
                return (
                  <button
                    key={city.name}
                    onClick={() => setSelectedCity(city)}
                    className={`px-4 py-3 border text-xs tracking-wider transition-all duration-300 font-sans ${
                      isSelected
                        ? "border-[#B9965B] bg-[#B9965B]/5 text-white"
                        : "border-white/5 bg-black/40 text-[#F4EFE7]/50 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <MapPin size={11} className={isSelected ? "text-[#B9965B]" : "text-white/20"} />
                      <div className="text-left font-sans">
                        <span className="block font-semibold tracking-widest uppercase">{city.name.split(", ")[1]}</span>
                        <span className="block text-[8px] opacity-70 font-light uppercase tracking-wider">{city.country}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Split row: Details vs Visual compass dial */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#050505]/60 border border-white/5 p-6 sm:p-8">
              
              {/* Left detail listing */}
              <div className="space-y-6">
                <div className="space-y-1">
                  <span className="text-[9px] text-[#B9965B]/65 font-mono uppercase tracking-widest block">SELECTED RESIDENCE PORTAL</span>
                  <h4 className="text-sm font-sans font-bold tracking-widest text-[#F4EFE7] uppercase">
                    {selectedCity.name}
                  </h4>
                  <p className="text-[10px] text-[#F4EFE7]/40 font-light font-sans tracking-wide">
                    Coordinates: {selectedCity.lat.toFixed(4)}° N, {selectedCity.lng.toFixed(4)}° E
                  </p>
                </div>

                <div className="h-px bg-white/5" />

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-[8px] text-[#F4EFE7]/40 font-semibold uppercase tracking-widest block">SACRED DISTANCE</span>
                    <span className="text-base font-mono font-bold text-white tracking-wider block">
                      {selectedCity.distanceKm.toLocaleString()} KM
                    </span>
                    <span className="text-[8px] text-[#B9965B] uppercase font-sans tracking-wide block">Direct Geodesic Line</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[8px] text-[#F4EFE7]/40 font-semibold uppercase tracking-widest block">QIBLA BEARING</span>
                    <span className="text-base font-mono font-bold text-white tracking-wider block">
                      {selectedCity.bearing}° E of N
                    </span>
                    <span className="text-[8px] text-[#B9965B] uppercase font-sans tracking-wide block">True Compass Path</span>
                  </div>
                </div>

                <div className="h-px bg-white/5" />

                {/* Local prayer timing row for selected metro */}
                <div className="space-y-2">
                  <span className="text-[8px] text-[#F4EFE7]/40 font-semibold uppercase tracking-widest block">LOCAL PORTAL TIME PRAYER SCHEDULE</span>
                  <div className="grid grid-cols-5 gap-1.5 text-center font-mono text-[9px] tracking-wider text-white">
                    <div className="bg-black/50 p-1.5 border border-white/5">
                      <span className="block text-[#B9965B]/60 text-[7px] mb-0.5">FAJR</span>
                      <span>{selectedCity.fajr}</span>
                    </div>
                    <div className="bg-black/50 p-1.5 border border-white/5">
                      <span className="block text-[#B9965B]/60 text-[7px] mb-0.5">DHUHR</span>
                      <span>{selectedCity.dhuhr}</span>
                    </div>
                    <div className="bg-black/50 p-1.5 border border-white/5">
                      <span className="block text-[#B9965B]/60 text-[7px] mb-0.5">ASR</span>
                      <span>{selectedCity.asr}</span>
                    </div>
                    <div className="bg-black/50 p-1.5 border border-white/5">
                      <span className="block text-[#B9965B]/60 text-[7px] mb-0.5">MAGHRIB</span>
                      <span>{selectedCity.maghrib}</span>
                    </div>
                    <div className="bg-black/50 p-1.5 border border-white/5">
                      <span className="block text-[#B9965B]/60 text-[7px] mb-0.5">ISHA</span>
                      <span>{selectedCity.isha}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Qibla compass dial overlay */}
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="relative w-44 h-44 rounded-full border border-white/10 flex items-center justify-center p-3 bg-black/40">
                  
                  {/* Outer degrees markings */}
                  <div className="absolute inset-2 border border-dashed border-[#B9965B]/15 rounded-full" />
                  
                  {/* Compass directions */}
                  <span className="absolute top-1 text-[9px] font-mono font-bold text-white/50">N</span>
                  <span className="absolute bottom-1 text-[9px] font-mono font-bold text-white/50">S</span>
                  <span className="absolute right-1 text-[9px] font-mono font-bold text-white/50">E</span>
                  <span className="absolute left-1 text-[9px] font-mono font-bold text-white/50">W</span>

                  {/* Mecca marker target point at Mecca's standard mock angle */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center transition-all duration-1000"
                    style={{ transform: `rotate(${selectedCity.bearing}deg)` }}
                  >
                    {/* Golden pointing arrow */}
                    <div className="w-1.5 h-20 relative flex flex-col items-center">
                      <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[10px] border-b-[#B9965B] transform -translate-y-1.5" />
                      <div className="w-[1.5px] h-12 bg-gradient-to-b from-[#B9965B] to-transparent" />
                      
                      {/* Micro floating beacon */}
                      <span className="absolute -top-4 text-[#B9965B] text-[8px] font-bold uppercase tracking-widest flex flex-col items-center gap-0.5">
                        <Sparkles size={8} className="animate-pulse" />
                        <span>MQT</span>
                      </span>
                    </div>
                  </div>

                  {/* Core hub dial */}
                  <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex flex-col items-center justify-center z-10 shadow-lg">
                    <Navigation size={14} className="text-[#B9965B] fill-[#B9965B]/10 rotate-45 transform -translate-x-[1px]" />
                  </div>
                </div>
                
                <span className="text-[9px] font-mono tracking-[0.2em] text-[#F4EFE7]/40 uppercase text-center">
                  DIAL ROTATES TO MECCA BEARING AT {selectedCity.bearing}°
                </span>
              </div>

            </div>

          </div>

          {/* Right Block: Live Clocks & Moon phase (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            
            {/* 1. Live Mecca Time & Countdown Card */}
            <div className="bg-[#0c0c0c] border border-[rgba(185,150,91,0.2)] p-6 flex flex-col justify-between space-y-6 relative h-1/2">
              <div className="absolute top-4 right-4 text-[#B9965B]">
                <Clock size={16} strokeWidth={1.5} />
              </div>

              <div className="space-y-1">
                <span className="text-[8px] tracking-[0.2em] font-mono text-[#B9965B] font-bold uppercase block">
                  HOLY MOSQUE SANCTUARY
                </span>
                <h3 className="text-sm font-serif text-[#F4EFE7] tracking-[0.1em] uppercase">
                  Holy City of Mecca Clocks
                </h3>
              </div>

              {/* Huge clock */}
              <div className="space-y-1">
                <span className="text-3xl font-mono tracking-wider font-light text-[#F4EFE7] block">
                  {meccaTime || "00:00:00"}
                </span>
                <span className="text-[8px] font-mono tracking-widest text-[#F4EFE7]/30 uppercase block">
                  GMT +3 MECCA RESIDENCE ZONE
                </span>
              </div>

              {/* Dynamic countdown slider */}
              <div className="space-y-2.5 pt-2 border-t border-white/5">
                <div className="flex justify-between items-center text-[9px] font-sans tracking-wide">
                  <span className="text-[#F4EFE7]/50 uppercase">NEXT SACRED HOUR: <strong className="text-[#B9965B]">{nextPrayerName}</strong></span>
                  <span className="font-mono text-[#F4EFE7] font-bold">{nextPrayerCountdown}</span>
                </div>
                <div className="w-full h-1 bg-white/5 relative">
                  <div 
                    className="absolute top-0 bottom-0 left-0 bg-[#B9965B] transition-all duration-1000"
                    style={{ width: `${nextPrayerPercentage}%` }}
                  />
                </div>
              </div>
            </div>

            {/* 2. Lunar Phase indicator */}
            <div className="bg-[#0c0c0c] border border-white/5 p-6 flex flex-col justify-between space-y-6 relative h-1/2">
              <div className="absolute top-4 right-4 text-[#B9965B]">
                <CalendarDays size={16} strokeWidth={1.5} />
              </div>

              <div className="space-y-1">
                <span className="text-[8px] tracking-[0.2em] font-mono text-[#B9965B] font-bold uppercase block">
                  ASTRO DISCRETIONARY CHART
                </span>
                <h3 className="text-sm font-serif text-[#F4EFE7] tracking-[0.1em] uppercase">
                  Saudi Hijri Lunar Phase
                </h3>
              </div>

              {/* Split layout: Phase description & circular moon representation */}
              <div className="flex items-center gap-4 justify-between bg-black/40 p-3.5 border border-white/5">
                <div className="space-y-1">
                  <span className="text-[10px] font-sans tracking-widest font-bold text-[#F4EFE7] uppercase block text-[#B9965B]">
                    {moonPhaseName}
                  </span>
                  <span className="block text-[9px] tracking-wide text-white/50 font-mono">
                    Illumination: {moonIllumination}%
                  </span>
                  <span className="block text-[8px] tracking-wide text-[#F4EFE7]/30 font-sans">
                    Cycle Age: {moonAgeDays} / 29.5 Days
                  </span>
                </div>

                {/* SVG glowing crescent moon representation */}
                <div className="relative w-14 h-14 bg-slate-950/40 rounded-full border border-white/10 flex items-center justify-center p-1.5 shadow-inner">
                  {/* Glowing background halo */}
                  <div className="absolute inset-0 rounded-full bg-[#B9965B]/10 blur-md pointer-events-none" />
                  
                  <svg className="w-full h-full transform -rotate-12" viewBox="0 0 100 100">
                    {/* Shadowed base moon outline */}
                    <circle cx="50" cy="50" r="43" fill="#030712" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                    
                    {/* Highlighted crescent path based on illumination approximation */}
                    {moonIllumination < 50 ? (
                      // Crescent path
                      <path 
                        d="M 50 7 A 43 43 0 0 1 50 93 A 33 43 0 0 0 50 7 Z" 
                        fill="#B9965B" 
                        opacity="0.85" 
                      />
                    ) : moonIllumination === 100 ? (
                      // Full Moon
                      <circle cx="50" cy="50" r="43" fill="#B9965B" opacity="0.85" />
                    ) : (
                      // Gibbous/Half Moon path
                      <path 
                        d="M 50 7 A 43 43 0 0 1 50 93 A -13 43 0 0 0 50 7 Z" 
                        fill="#B9965B" 
                        opacity="0.85" 
                      />
                    )}
                  </svg>
                </div>
              </div>

              <div className="text-[8px] font-sans tracking-[0.15em] text-[#F4EFE7]/30 uppercase text-center leading-relaxed">
                THE SYSTEM CALCULATES MOON COUPLINGS ACCORDING TO GLOBAL SYNODIC ORBITS.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
