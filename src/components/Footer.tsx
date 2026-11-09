import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';
import { CLUB_INFO } from '../data/gymData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenMemberships: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenMemberships }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterError('Please provide a valid email');
      return;
    }
    setNewsletterError('');
    setNewsletterSubscribed(true);
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-white mb-4">
                <span className="w-8 h-8 rounded-sm bg-neutral-100 text-neutral-950 font-condensed font-extrabold text-xl flex items-center justify-center tracking-wider">
                  A
                </span>
                <span className="font-condensed font-extrabold text-2xl tracking-widest">
                  AURA <span className="text-neutral-400 font-light text-xl">ATHLETIC</span>
                </span>
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mb-6">
                Austin’s private 35,000 sq ft athletic sanctuary. Olympic lifting platforms, 
                biometric-led training, and contrast thermal recovery built for high-output human longevity.
              </p>

              <div className="space-y-1.5 text-xs text-neutral-400">
                <p>{CLUB_INFO.address}</p>
                <p>Concierge: {CLUB_INFO.phone}</p>
                <p>Inquiries: {CLUB_INFO.email}</p>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-condensed font-bold text-sm tracking-widest uppercase text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Philosophy & Pillars
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-white transition-colors">
                  Architectural Spaces
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-white transition-colors">
                  Weekly Class Timetable
                </a>
              </li>
              <li>
                <a href="#trainers" className="hover:text-white transition-colors">
                  Coaching Cadre
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-white transition-colors">
                  1:1 Personal Coaching
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Membership Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Amenities & Zones */}
          <div className="lg:col-span-2">
            <h4 className="font-condensed font-bold text-sm tracking-widest uppercase text-white mb-4">
              Facilities
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>Eleiko Olympic Weightlifting Hall</li>
              <li>Finnish Cedar Saunas (200°F)</li>
              <li>Cold Plunge Pools (38°F)</li>
              <li>60-Yard Sprint Turf Track</li>
              <li>Hyperbaric Oxygen Lounge</li>
              <li>NormaTec Compression Suite</li>
              <li>Valet & Private Lockers</li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="font-condensed font-bold text-sm tracking-widest uppercase text-white mb-2">
                The AURA Dispatch
              </h4>
              <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                Receive monthly athletic research digests, hypertrophy periodization guides, and private club guest announcements.
              </p>

              {!newsletterSubscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="your.email@domain.com"
                      className="bg-neutral-900 border border-neutral-800 rounded px-3 py-2 text-xs text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white flex-1"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-white text-neutral-950 font-bold uppercase tracking-wider text-xs rounded hover:bg-neutral-100 transition-colors whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </div>
                  {newsletterError && (
                    <p className="text-red-400 text-[11px]">{newsletterError}</p>
                  )}
                </form>
              ) : (
                <div className="flex items-center gap-2 p-3 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Subscribed to The AURA Dispatch. Welcome.</span>
                </div>
              )}
            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider border border-neutral-800 rounded hover:bg-neutral-900 text-neutral-300 hover:text-white transition-colors"
              >
                Claim Free Day Trial Pass
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} AURA Athletic Club LLC. All rights reserved. Austin, Texas.
          </div>

          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span aria-hidden="true">·</span>
            <span>Terms of Club Service</span>
            <span aria-hidden="true">·</span>
            <span>Athlete Charter</span>
          </div>

          <div className="text-neutral-600 text-center sm:text-right">
            Demonstration portfolio sample built for elite fitness club web architecture.
          </div>
        </div>
      </div>
    </footer>
  );
};
