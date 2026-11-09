import React, { useState } from 'react';
import { ArrowRight, Check, Droplets, Dumbbell, Zap, Layers } from 'lucide-react';
import { FACILITY_ZONES } from '../data/gymData';

interface FacilitiesProps {
  onOpenBooking: (zoneName?: string) => void;
}

export const Facilities: React.FC<FacilitiesProps> = ({ onOpenBooking }) => {
  const [activeZoneId, setActiveZoneId] = useState<string>(FACILITY_ZONES[0].id);

  const activeZone = FACILITY_ZONES.find((z) => z.id === activeZoneId) || FACILITY_ZONES[0];

  const zoneIcons: Record<string, React.ReactNode> = {
    'olympic-hall': <Dumbbell className="w-4 h-4" />,
    'contrast-spa': <Droplets className="w-4 h-4" />,
    'turf-arena': <Zap className="w-4 h-4" />,
  };

  return (
    <section id="facilities" className="py-24 bg-neutral-950 border-t border-neutral-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Architectural Spaces
            </div>
            <h2
              className="font-condensed font-extrabold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Curated training zones. Zero compromises.
            </h2>
          </div>

          <p className="max-w-md text-sm text-neutral-400 leading-relaxed">
            Every zone at AURA is acoustically and ergonomically isolated to create optimal flow, 
            acoustic dampening, and clinical hygiene.
          </p>
        </div>

        {/* Interactive Zone Filter Tabs (Functional segmented buttons per §1.A) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-neutral-900/80 rounded-lg border border-neutral-800 w-fit">
          {FACILITY_ZONES.map((zone) => {
            const isActive = zone.id === activeZoneId;
            return (
              <button
                key={zone.id}
                type="button"
                onClick={() => setActiveZoneId(zone.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-neutral-100 text-neutral-950 shadow-md font-bold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                {zoneIcons[zone.id] || <Layers className="w-4 h-4" />}
                <span>{zone.name}</span>
              </button>
            );
          })}
        </div>

        {/* Marquee Active Zone Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-xl bg-neutral-900/40 border border-neutral-800/90 overflow-hidden p-6 sm:p-8 lg:p-10">
          {/* Left Column: Imagery */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative rounded-lg overflow-hidden border border-neutral-800 aspect-[16/10] bg-neutral-900">
              <img
                src={activeZone.image}
                alt={`${activeZone.name} - ${activeZone.tag}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-90 hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-neutral-950/80 backdrop-blur-md rounded text-xs font-semibold tracking-wider uppercase text-neutral-200 border border-neutral-800">
                {activeZone.tag}
              </div>
            </div>

            {/* Spec Note Banner */}
            {activeZone.specNote && (
              <div className="mt-4 p-4 rounded-md bg-neutral-950/70 border border-neutral-800 text-xs sm:text-sm text-neutral-400 flex items-start gap-2.5">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                <span><strong className="text-neutral-200 font-semibold">Engineering Note:</strong> {activeZone.specNote}</span>
              </div>
            )}
          </div>

          {/* Right Column: Zone Details & Specs */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-4 lg:pt-0">
            <div>
              <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-1">
                Zone Spotlight
              </div>
              <h3 className="font-condensed font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4">
                {activeZone.name}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                {activeZone.description}
              </p>

              {/* Equipment Inventory */}
              <div className="mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  Dedicated Hardware & Technology
                </div>
                <div className="flex flex-col gap-2.5">
                  {activeZone.equipment.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <div className="w-4 h-4 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-cyan-400" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural features */}
              <div className="mb-8 border-t border-neutral-800 pt-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
                  Environmental Controls
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-neutral-400">
                  {activeZone.features.map((feat, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-neutral-950 border border-neutral-800 text-neutral-300"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Zone Action CTA */}
            <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => onOpenBooking(activeZone.name)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold tracking-wider uppercase text-neutral-950 bg-white hover:bg-neutral-100 rounded-md transition-all shadow-md active:scale-98 whitespace-nowrap"
              >
                <span>Experience {activeZone.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
