/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Package, ConciergeService, Testimonial } from "./types";

// Import images through Vite ES Module resolution
import heroBg from "./assets/images/miqat_hero_light_1780073128462.png";
import signatureUmrah from "./assets/images/miqat_medina_dome_new_1780011408351.png";
import royalHajj from "./assets/images/miqat_kaaba_door_new_1780011428105.png";
import privateJourneys from "./assets/images/miqat_luxury_pethouse_new_1780011454537.png";
import philosophyDoor from "./assets/images/miqat_philosophy_door_1779993755118.png";
import mosqueHall from "./assets/images/miqat_mosque_hall_1779993781396.png";

export const IMAGES = {
  heroBg,
  signatureUmrah,
  royalHajj,
  privateJourneys,
  philosophyDoor,
  mosqueHall,
};

export const PACKAGES: Package[] = [
  {
    id: "signature-umrah",
    number: "01",
    name: "SIGNATURE UMRAH",
    subtitle: "OUR EXPERIENCES",
    description: "A serene and guided journey with exceptional comfort, expert companions, and premium services matching every detail of your devotion.",
    image: IMAGES.signatureUmrah,
    inclusions: [
      "5★ Ultra-Frontline Hotels (Facing Grand Mosque)",
      "Private Chauffeur & VIP Airport Fast Track",
      "Executive Scholars / Personalized Guidance",
      "All-Inclusive Visa & 24/7 Concierge Support",
      "Curated Historical and Spiritual Excursions"
    ],
    stars: 5,
    featured: true
  },
  {
    id: "royal-hajj",
    number: "02",
    name: "ROYAL HAJJ",
    subtitle: "THE ULTIMATE VIP HAJJ",
    description: "The ultimate VIP Hajj experience with unmatched luxury, absolute privacy, and dedicated guides accompanying your sacred rituals.",
    image: IMAGES.royalHajj,
    inclusions: [
      "Royal Sovereign Tents near Al-Jamarat (Mina)",
      "Premium Private Transport & Dedicated Helicopter Transfer Option",
      "Elite Scholars & 1-on-1 Spiritual Advisors",
      "Gourmet Catering & Private Medical Suite Access",
      "Fast-Track Ritual Support & Crowd Control Services"
    ],
    stars: 5,
    featured: true
  },
  {
    id: "private-journeys",
    number: "03",
    name: "PRIVATE JOURNEYS",
    subtitle: "FOR FAMILIES & EXECUTIVE GROUPS",
    description: "Fully customized, luxury journeys tailored specifically for families, business executives, or group travelers demanding maximum discretion.",
    image: IMAGES.privateJourneys,
    inclusions: [
      "Exclusive Floor Bookings at Clock Tower Penthouse",
      "Fully Bespoke Spiritual Itinerary & Speed",
      "Private Medical Staff & Travel Nanny Services",
      "Multi-destination Luxury Transport Options",
      "24/7 Dedicated Butler & Lifestyle Concierge"
    ],
    stars: 5,
    featured: false
  }
];

export const CONCIERGE_SERVICES: ConciergeService[] = [
  {
    id: "visa",
    title: "VISA & DOCUMENTATION",
    description: "Complimentary, expedited visa acquisition, secure processing, and elite border credentials handled quietly.",
    iconName: "FileText"
  },
  {
    id: "housing",
    title: "5★ ACCOMMODATIONS",
    description: "Elite frontline suites directly overlooking the Kaaba, offering immediate ingress and perfect luxury.",
    iconName: "Hotel"
  },
  {
    id: "transport",
    title: "PRIVATE TRANSPORT",
    description: "First-class Mercedes-Benz S-Class, GMC Yukon, or private jet charters with discreet professional drivers.",
    iconName: "Car"
  },
  {
    id: "scholars",
    title: "DEDICATED GUIDES",
    description: "Highly revered, English-fluent Islamic thinkers providing deep spiritual wisdom and historical depth.",
    iconName: "UserCheck"
  },
  {
    id: "airport",
    title: "AIRPORT ASSISTANCE",
    description: "Premium tarmac meet-and-greet, luxury lounge access, and hands-off private baggage customs clearance.",
    iconName: "PlaneTakeoff"
  },
  {
    id: "support",
    title: "ON-TRIP COORDINATION",
    description: "Full-duration support crew tracking crowd flows, timing prayer spaces, and assisting elders.",
    iconName: "Compass"
  },
  {
    id: "group-care",
    title: "FAMILY & GROUP CARE",
    description: "Bespoke arrangements with private spaces, childcare options, and customized meals for multigenerational groups.",
    iconName: "Users"
  },
  {
    id: "ritual",
    title: "RITUAL GUIDANCE",
    description: "One-on-one preparation courses, interactive virtual orientations, and supportive pacing during Tawaf.",
    iconName: "Sparkles"
  },
  {
    id: "vip-lounges",
    title: "VIP LOUNGE ACCESS",
    description: "Exclusive reservations in executive sanctuaries in Mecca, Medina, and airport departure bays.",
    iconName: "Crown"
  }
];

export const TIMELINE_STEPS = [
  {
    step: "01",
    title: "CONSULTATION",
    subtitle: "INTENT",
    description: "We host an intimate luxury call or live assembly to understand your family composition, rhythm, and dreams."
  },
  {
    step: "02",
    title: "PLANNING",
    subtitle: "CURATION",
    description: "An elite journey advisor plots out custom hotel configurations, private travel timing, and guide recommendations."
  },
  {
    step: "03",
    title: "PREPARATION",
    subtitle: "LOGISTICS",
    description: "We handle high-ticket secure credentials, medical validations, and host prep lectures prior to departure."
  },
  {
    step: "04",
    title: "THE EXPERIENCE",
    subtitle: "RITUALS",
    description: "You stand in tranquility facing the Kaaba or Al-Masjid an-Nabawi. We quietly manage logistics behind-the-scenes."
  },
  {
    step: "05",
    title: "THE RETURN",
    subtitle: "GRACE",
    description: "You depart with peace of heart. We ensure private baggage transfers and luxury transport back to your home."
  }
];

export const PHILOSOPHY_PRINCIPLES = [
  {
    title: "SACRED PURPOSE",
    description: "Every service we provide is rooted in absolute respect, sincerity, and devotional alignment.",
    iconName: "Heart"
  },
  {
    title: "HUMAN TOUCH",
    description: "We combine flawless modern mechanics with genuine personal care and ancestral hospitality.",
    iconName: "HandHelping"
  },
  {
    title: "FLAWLESS EXECUTION",
    description: "From micro-logistics inside Mina to custom suites, we deliver perfection designed with no compromise.",
    iconName: "CheckCircle"
  },
  {
    title: "TOTAL TRUST",
    description: "Your journey and security are fully preserved, before, during, and after your life-giving pilgrimage.",
    iconName: "ShieldCheck"
  }
];

export const STATS = [
  { value: "10+", label: "YEARS OF DEVOTION" },
  { value: "25K+", label: "HAPPY PILGRIMS" },
  { value: "50+", label: "ELITE HOTELS IN MECCA & MEDINA" },
  { value: "24/7", label: "CONCIERGE BUTLERS" }
];

export const PARTNERS = [
  { name: "SAUDIA", tagline: "Saudi Arabian Airlines" },
  { name: "EMIRATES", tagline: "Fly Better" },
  { name: "JUMEIRAH", tagline: "Stay Different" },
  { name: "SWISSÔTEL", tagline: "Hotels & Resorts" },
  { name: "ACCOR", tagline: "Live Limitless" },
  { name: "HILTON", tagline: "For The Stay" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "Every single detail was flawless. The proximity to Al-Masjid al-Haram, the patience of our scholar, and the whisper-quiet transportation let us experience Umrah with deep, uninterrupted peace. Highly recommended.",
    name: "Ahmed K.",
    location: "Paris, France",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    id: "2",
    quote: "The Signature family program was outstanding. Managing elderly parents during Hajj is usually extremely challenging, but Miqat's staff orchestrated every crowd bypass with ultimate grace.",
    name: "Fatima R.",
    location: "London, UK",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    id: "3",
    quote: "It truly felt like an Aman or Qatar Airways first-class flight translated directly to a pilgrimage. Absolute discretion, pristine penthouse view, and deeply knowledgeable guidance. Simply superb.",
    name: "Yusuf M.",
    location: "Dubai, UAE",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    rating: 5
  }
];
