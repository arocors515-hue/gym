import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { CLUB_INFO } from '../data/gymData';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      index: '01',
      title: 'Structural Strength Architecture',
      description:
        'We prioritize barbell mechanics and closed-chain multi-joint strength. 12 dedicated Eleiko platforms ensure you never wait for a squat rack or clean station.',
      details: ['Eleiko IWF bars & calibrated plates', 'Barbell velocity cameras', 'Zero commercial gym clutter'],
    },
    {
      index: '02',
      title: 'High-Output Metabolic Engine',
      description:
        'Durability is built through intelligent pacing and sustained output. Our 60-yard turf track and Concept2 ergometers train both aerobic efficiency and anaerobic power.',
      details: ['Official Hyrox obstacle simulation', 'Lactate threshold tracking', 'SkiErgs, RowErgs, & Sleds'],
    },
    {
      index: '03',
      title: 'Cellular Contrast Recovery',
      description:
        'Stimulate heat shock proteins in our 200°F Finnish cedar sauna, followed immediately by 38°F cold thermogenesis to reduce systemic inflammation and accelerate neural reset.',
      details: ['Continuous UV-C water sanitization', 'Hyperbaric soft chambers', 'NormaTec compression lounge'],
    },
    {
      index: '04',
      title: 'Biometric Precision & Diagnostics',
      description:
        'We do not guess; we measure. Every member receives regular InBody 770 biometric assessments, functional movement screenings, and periodized training adaptations.',
      details: ['InBody 770 segmental analysis', 'Movement biomechanics screen', 'Periodized training blueprints'],
    },
  ];

  return (
    <section id="about" className="py-24 bg-neutral-950 border-t border-neutral-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              The AURA Philosophy
            </div>
            <h2
              className="font-condensed font-extrabold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Engineered for those who refuse commercial mediocrity.
            </h2>
          </div>

          <div className="max-w-md text-sm sm:text-base text-neutral-400 leading-relaxed">
            Founded in Downtown Austin, AURA was built on a single premise: 
            commercial fitness chains trade quality for volume. We cap our active membership 
            at 450 athletes to ensure immaculate equipment, zero wait times, and restorative tranquility.
          </div>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.index}
              className="p-8 sm:p-10 rounded-lg bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-condensed font-bold text-3xl sm:text-4xl text-neutral-500 tabular-nums">
                    {pillar.index}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                    Core Standard
                  </span>
                </div>

                <h3 className="font-condensed font-bold text-2xl sm:text-3xl text-white uppercase tracking-wide mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="border-t border-neutral-800/80 pt-4 flex flex-col gap-2">
                {pillar.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Facility Quote & Tour Callout */}
        <div className="p-8 sm:p-12 rounded-lg bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-neutral-900/40 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              Private Club Standards
            </div>
            <h4 className="font-condensed font-bold text-2xl sm:text-3xl text-white uppercase tracking-wide mb-2">
              Ready to experience Austin’s most complete training ground?
            </h4>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Book a guided walk-through with our head concierge. Try the platforms, 
              test the contrast pools, and discover what your training should feel like.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-neutral-950 bg-white hover:bg-neutral-100 rounded-md transition-all shadow-md active:scale-98 whitespace-nowrap shrink-0"
          >
            <span>Request Facility Walkthrough</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
