import React from 'react';
import { MapPin, Phone, Mail, Clock, Car, Navigation, ShieldCheck } from 'lucide-react';
import { CLUB_INFO } from '../data/gymData';

interface LocationHoursProps {
  onOpenBooking: () => void;
}

export const LocationHours: React.FC<LocationHoursProps> = ({ onOpenBooking }) => {
  return (
    <section id="location" className="py-24 bg-neutral-950 border-t border-neutral-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Club Destination & Schedule
            </div>
            <h2
              className="font-condensed font-extrabold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Downtown Austin Sanctuary
            </h2>
          </div>

          <div className="text-sm text-neutral-400 max-w-sm">
            Centrally situated on Colorado Street in the historic warehouse district, with direct street-level access and dedicated indoor member valet.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Hours & Contact Information */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Opening Hours Table */}
            <div className="p-6 sm:p-8 rounded-xl bg-neutral-900/50 border border-neutral-800">
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-neutral-300" />
                <h3 className="font-condensed font-bold text-2xl text-white uppercase tracking-wide">
                  Operating Hours
                </h3>
              </div>

              <div className="flex flex-col divide-y divide-neutral-800/80">
                {CLUB_INFO.hours.map((h, i) => (
                  <div key={i} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
                    <span className="text-neutral-400 font-medium">{h.days}</span>
                    <div className="text-right">
                      <div className="text-white font-semibold tabular-nums">{h.hours}</div>
                      <div className="text-[11px] text-neutral-500">{h.status}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Status pill removed per §1.A, replaced by quiet unboxed text */}
              <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
                <span>Current Status:</span>
                <span className="text-white font-semibold">Open Today · Concierge Available</span>
              </div>
            </div>

            {/* Address & Direct Concierge Details */}
            <div className="p-6 sm:p-8 rounded-xl bg-neutral-900/50 border border-neutral-800 flex flex-col gap-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold mb-0.5">Austin Location</strong>
                  <span className="text-neutral-300">{CLUB_INFO.address}</span>
                  <span className="text-neutral-500 block text-xs mt-1">Corner of 5th & Colorado · Private Ground Level Entrance</span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-neutral-800/60">
                <Phone className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold mb-0.5">Concierge Desk</strong>
                  <a href={`tel:${CLUB_INFO.phone}`} className="text-neutral-300 hover:text-white transition-colors">
                    {CLUB_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-neutral-800/60">
                <Mail className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold mb-0.5">Membership Inquiries</strong>
                  <a href={`mailto:${CLUB_INFO.email}`} className="text-neutral-300 hover:text-white transition-colors">
                    {CLUB_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Map Preview Card & Parking Protocol */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Visual Map Representation */}
            <div className="rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden relative">
              {/* Styled dark architectural map container */}
              <div className="h-72 sm:h-80 w-full bg-neutral-950 relative overflow-hidden flex items-center justify-center">
                {/* SVG Map Grid Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#525252" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Street Layout Lines */}
                  <line x1="0" y1="120" x2="1000" y2="120" stroke="#737373" strokeWidth="3" />
                  <line x1="0" y1="200" x2="1000" y2="200" stroke="#737373" strokeWidth="3" />
                  <line x1="280" y1="0" x2="280" y2="400" stroke="#737373" strokeWidth="4" />
                  <line x1="520" y1="0" x2="520" y2="400" stroke="#737373" strokeWidth="4" />
                  <line x1="760" y1="0" x2="760" y2="400" stroke="#737373" strokeWidth="3" />
                </svg>

                {/* Map Labels */}
                <div className="absolute top-6 left-12 text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
                  W 5TH STREET
                </div>
                <div className="absolute bottom-6 left-12 text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
                  W 4TH STREET
                </div>
                <div className="absolute top-12 left-1/2 text-[11px] font-mono tracking-widest text-neutral-500 uppercase -translate-x-1/2">
                  COLORADO STREET
                </div>

                {/* Pin Landmark */}
                <div className="relative z-10 flex flex-col items-center animate-bounce-subtle">
                  <div className="px-4 py-2 rounded bg-white text-neutral-950 font-condensed font-extrabold text-sm tracking-wider uppercase shadow-2xl flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    <span>AURA ATHLETIC CLUB</span>
                  </div>
                  <div className="w-3 h-3 bg-white rotate-45 -mt-1.5 shadow-md" />
                </div>

                <div className="absolute bottom-3 right-3 text-[11px] text-neutral-500 font-mono">
                  30.2672° N, 97.7431° W
                </div>
              </div>

              {/* Map Footer Bar */}
              <div className="p-4 sm:p-6 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-neutral-300">
                  <strong className="text-white">Arrival Coordinates:</strong> 420 Colorado St, Downtown Austin
                </div>

                <a
                  href="https://maps.google.com/?q=420+Colorado+St+Austin+TX+78701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-neutral-800 hover:bg-neutral-700 text-white rounded transition-colors whitespace-nowrap"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Navigation</span>
                </a>
              </div>
            </div>

            {/* Parking & Transit Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-lg bg-neutral-900/40 border border-neutral-800">
                <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm mb-2">
                  <Car className="w-4 h-4 text-cyan-400" />
                  <span>Member Valet & Garage</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Complimentary 2-hour valet parking at club entrance for Performance Elite and Onyx tiers. Validated subterranean self-parking available for all visitors.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-neutral-900/40 border border-neutral-800">
                <div className="flex items-center gap-2 text-white font-semibold text-xs sm:text-sm mb-2">
                  <ShieldCheck className="w-4 h-4 text-neutral-300" />
                  <span>Security & Arrival</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Staffed front desk during all operational hours. Biometric turnstile access and private shower suites available immediately upon entry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
