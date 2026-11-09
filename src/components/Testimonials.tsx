import React from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Attributable Member Proof
            </div>
            <h2
              className="font-condensed font-extrabold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Measured adaptations. Unquestioned outcomes.
            </h2>
          </div>

          <div className="text-sm text-neutral-400 max-w-sm">
            Read documented transformations from founders, endurance athletes, and executives 
            who train daily within our Downtown Austin facility.
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 sm:p-10 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Metric Callout Adjacency */}
                <div className="flex items-start justify-between gap-4 pb-6 border-b border-neutral-800/80 mb-6">
                  <div>
                    <div className="font-condensed font-extrabold text-3xl sm:text-4xl text-white tracking-tight tabular-nums">
                      {t.outcomeMetric}
                    </div>
                    <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider mt-0.5">
                      {t.metricLabel}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="flex items-center justify-between text-xs text-neutral-400 pt-4 border-t border-neutral-800/80">
                <div>
                  <div className="font-semibold text-white text-sm">
                    {t.name}
                  </div>
                  <div className="text-neutral-400 mt-0.5">
                    {t.role}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-neutral-300 font-medium">
                    {t.memberTier}
                  </div>
                  <div className="text-neutral-500 text-[11px]">
                    {t.memberSince}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
