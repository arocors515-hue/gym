import React from 'react';
import { ArrowRight, ShieldCheck, Flame, Sparkles, MapPin } from 'lucide-react';
import { CLUB_INFO, IMAGES } from '../data/gymData';

interface HeroProps {
  onOpenBooking: (goal?: string) => void;
  onOpenMemberships: () => void;
  onScrollToFacilities: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenBooking,
  onOpenMemberships,
  onScrollToFacilities,
}) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-neutral-950">
      {/* Background Hero Image with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="AURA Athletic Club luxury Olympic lifting floor with Eleiko barbell platforms and city skyline views"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-65 contrast-115 scale-102 transition-transform duration-1000 ease-out"
        />
        {/* Measured contrast scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/30" />
        <div className="absolute inset-0 bg-radial from-transparent via-neutral-950/40 to-neutral-950/90" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 lg:pt-24 my-auto">
        <div className="max-w-3xl">
          {/* Subtle editorial kicker without pill badges */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-4">
            <span className="text-cyan-400 font-bold">Austin, Texas</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Private Athletic Sanctuary</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Est. 2021</span>
          </div>

          {/* Display Headline with balanced wrapping */}
          <h1
            className="font-condensed font-extrabold text-white uppercase tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] mb-6"
            style={{ textWrap: 'balance' }}
          >
            PRECISION STRENGTH. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-400">
              RESTORATIVE LUXURY.
            </span>
          </h1>

          {/* Grounded Value Proposition */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mb-8">
            Austin’s premier 35,000 sq ft performance club. Olympic Eleiko platforms, 
            metabolic sprint turf, private 38°F contrast plunge suites, and biometric coaching 
            engineered for longevity and human high output.
          </p>

          {/* Action Button Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            <button
              type="button"
              onClick={() => onOpenBooking('Free Trial Day Pass')}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold tracking-wider uppercase text-neutral-950 bg-white hover:bg-neutral-100 rounded-md transition-all shadow-xl shadow-white/10 hover:shadow-white/20 active:scale-98 whitespace-nowrap"
            >
              <span>Book a Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenMemberships}
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wider uppercase text-neutral-100 hover:text-white bg-neutral-900/80 hover:bg-neutral-800/90 border border-neutral-700/80 rounded-md backdrop-blur-sm transition-all whitespace-nowrap"
            >
              Explore Memberships
            </button>

            <button
              type="button"
              onClick={onScrollToFacilities}
              className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-medium text-neutral-400 hover:text-neutral-200 transition-colors whitespace-nowrap"
            >
              Virtual Tour & Facilities
            </button>
          </div>

          {/* Trust markers without decorative pulsing dots */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400 border-t border-neutral-800/80 pt-6">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-neutral-300" />
              <span>Strict 450-Member Cap (No Crowds)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-neutral-200">Eleiko & Rogue</span>
              <span>Certified Platforms</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-neutral-200">24/7 Keycard Access</span>
              <span>Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width Quantitative Rigor Strip below hero split */}
      <div className="relative z-10 w-full mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5 px-6 rounded-lg bg-neutral-900/70 border border-neutral-800/80 backdrop-blur-md">
            <div>
              <div className="font-condensed font-bold text-2xl sm:text-3xl text-white tracking-wide tabular-nums">
                35,000
              </div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider mt-0.5">
                Square Feet Facility
              </div>
            </div>

            <div>
              <div className="font-condensed font-bold text-2xl sm:text-3xl text-white tracking-wide tabular-nums">
                12 Racks
              </div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider mt-0.5">
                Eleiko Olympic Stations
              </div>
            </div>

            <div>
              <div className="font-condensed font-bold text-2xl sm:text-3xl text-cyan-400 tracking-wide tabular-nums">
                38°F / 200°F
              </div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider mt-0.5">
                Cold Plunge & Cedar Sauna
              </div>
            </div>

            <div>
              <div className="font-condensed font-bold text-2xl sm:text-3xl text-white tracking-wide tabular-nums">
                4.98 / 5.0
              </div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider mt-0.5">
                Attributable Member Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
