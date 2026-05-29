/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Package {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  inclusions: string[];
  stars: number;
  featured?: boolean;
}

export interface ConciergeService {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
}

export interface ConsultationRequest {
  fullName: string;
  email: string;
  phone: string;
  whatsappCode: string;
  packagePreference: string;
  travelDate: string;
  groupSize: number;
  specialRequests: string;
  agreeToPrivacy: boolean;
}

export interface CustomPackageConfig {
  type: "umrah" | "hajj";
  hotelStar: "luxury-front" | "premium-front" | "classic-close";
  duration: number; // in days
  passengers: number;
  addons: string[];
}
