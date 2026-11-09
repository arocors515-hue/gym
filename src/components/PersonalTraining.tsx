import React from 'react';
import { ArrowRight, Check, Target, Activity, ShieldCheck, HeartPulse } from 'lucide-react';

interface PersonalTrainingProps {
  onOpenBooking: (goal?: string) => void;
}

export const PersonalTraining: React.FC<PersonalTrainingProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: '01',
      title: 'Biomechanical & Metabolic Audit',
      description:
        'Every coaching engagement begins with an InBody 770 body composition scan, digital video joint screening, and resting metabolic evaluation.',
    },
    {
      num: '02',
      title: 'Periodized Custom Protocol',
      description:
        'Your dedicated coach builds a 12-week block based on your precise sport, body mechanics, schedule, and recovery capacity. Zero recycled templates.',
    },
    {
      num: '03',
      title: 'Integrated Thermal Recovery',
      description:
        'Workouts are paired with infrared sauna, cold thermogenesis, and manual tissue recovery protocols led by our in-house physical therapists.',
    },
  ];

  const packages = [
    {
      name: 'Accelerate Pack',
      frequency: '1 Session / Week',
      monthlySessions: '4 Sessions Monthly',
      rate: '₹12,999 / mo',
      bestFor: 'Committed athletes needing periodic form calibrations and programming updates.',
    },
    {
      name: 'Performance Core',
      frequency: '2 Sessions / Week',
      monthlySessions: '8 Sessions Monthly',
      rate: '₹23,999 / mo',
      popular: true,
      bestFor: 'Our most popular track for rapid hypertrophy, body recomp, and athletic milestones.',
    },
    {
      name: 'Elite Mastery',
      frequency: '3 Sessions / Week',
      monthlySessions: '12 Sessions Monthly',
      rate: '₹34,999 / mo',
      bestFor: 'Comprehensive 1:1 supervision with nutrition planning, daily recovery, and concierge access.',
    },
  ];

  return (
    <section id="training" className="py-24 bg-neutral-950 border-t border-neutral-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Bespoke Human Coaching
            </div>
            <h2
              className="font-condensed font-extrabold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Scientific personal training. Zero guesswork.
            </h2>
          </div>

          <p className="max-w-md text-sm text-neutral-400 leading-relaxed">
            Move beyond generic fitness influencers. Our CSCS and DPT-certified coaches construct 
            periodized strength regimens backed by data and continuous physical adaptation.
          </p>
        </div>

        {/* 3 Step Protocol */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((s) => (
            <div
              key={s.num}
              className="p-8 rounded-lg bg-neutral-900/40 border border-neutral-800 flex flex-col justify-between"
            >
              <div>
                <span className="font-condensed font-bold text-3xl text-neutral-500 tabular-nums mb-3 block">
                  {s.num}
                </span>
                <h3 className="font-condensed font-bold text-2xl text-white uppercase tracking-wide mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* PT Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`p-8 rounded-lg flex flex-col justify-between transition-all ${
                pkg.popular
                  ? 'bg-neutral-900 border-2 border-neutral-200 shadow-xl'
                  : 'bg-neutral-900/50 border border-neutral-800'
              }`}
            >
              <div>
                {pkg.popular && (
                  <div className="text-[11px] font-bold uppercase tracking-widest text-neutral-950 bg-white px-2.5 py-0.5 rounded w-fit mb-3">
                    Most Popular Coaching Track
                  </div>
                )}
                <h3 className="font-condensed font-bold text-2xl text-white uppercase tracking-wide">
                  {pkg.name}
                </h3>
                <div className="text-xs text-neutral-400 mb-4">
                  {pkg.frequency} · {pkg.monthlySessions}
                </div>
                <div className="font-condensed font-extrabold text-3xl text-white tabular-nums mb-4">
                  {pkg.rate}
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                  {pkg.bestFor}
                </p>
              </div>

              <button
                type="button"
                onClick={() => onOpenBooking(`Personal Training: ${pkg.name}`)}
                className={`w-full py-3 text-xs font-bold tracking-wider uppercase rounded transition-all text-center ${
                  pkg.popular
                    ? 'bg-white text-neutral-950 hover:bg-neutral-100 shadow-md'
                    : 'border border-neutral-700 text-neutral-200 hover:bg-neutral-800'
                }`}
              >
                Request Coach Match
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
