import React, { useState } from 'react';
import { Target, Calendar, Sparkles, ArrowRight, CheckCircle2, Flame, Droplets } from 'lucide-react';

interface GoalCalculatorProps {
  onSelectPlan: (planId: string) => void;
  onOpenBooking: (goalSummary: string) => void;
}

export const GoalCalculator: React.FC<GoalCalculatorProps> = ({
  onSelectPlan,
  onOpenBooking,
}) => {
  const [primaryGoal, setPrimaryGoal] = useState<'hypertrophy' | 'hyrox' | 'recomp' | 'longevity'>(
    'hypertrophy'
  );
  const [frequency, setFrequency] = useState<number>(4);
  const [recoveryFocus, setRecoveryFocus] = useState<boolean>(true);

  // Recommendations based on inputs
  const goalProfiles = {
    hypertrophy: {
      title: 'Hypertrophy & Absolute Strength',
      recommendedTier: 'Performance Elite',
      tierId: 'performance',
      weeklyBlueprint: [
        '3x Barbell & Compound Lifts (Eleiko Hall)',
        '1x Sprint & Conditioning Session (Turf)',
        '2x Finnish Sauna & Cold Plunge Sessions',
      ],
      expectedOutcomes: 'Projected +6–12 lbs lean tissue gain and 15–25% increase in 1RM compound lifts over 16 weeks.',
      recommendedCoach: 'Marcus Vance (CSCS)',
    },
    hyrox: {
      title: 'Hyrox & Hybrid Work Capacity',
      recommendedTier: 'Performance Elite',
      tierId: 'performance',
      weeklyBlueprint: [
        '2x Hybrid MetCon Engine Sessions (Turf)',
        '2x Sled, SkiErg & Lactate Pacing Drills',
        '2x Contrast Thermogenesis & Breathwork',
      ],
      expectedOutcomes: 'Significant reduction in 1000m row/ski split times and 20% improvement in aerobic work capacity.',
      recommendedCoach: 'Kai Tanaka (Hyrox Lead)',
    },
    recomp: {
      title: 'Metabolic Recomposition & Fat Loss',
      recommendedTier: 'Performance Elite',
      tierId: 'performance',
      weeklyBlueprint: [
        '3x Full-Body Resistance Circuits',
        '2x Low-Heart-Rate Zone 2 Cardio Blocks',
        '2x Infrared Sauna & Contrast Immersions',
      ],
      expectedOutcomes: 'Target 4–8% body fat reduction with preservation of skeletal muscle mass verified via monthly InBody 770.',
      recommendedCoach: 'Elena Rostova (Biomechanics)',
    },
    longevity: {
      title: 'Joint Durability & Total Longevity',
      recommendedTier: 'Black Onyx Sanctuary',
      tierId: 'black-onyx',
      weeklyBlueprint: [
        '2x FRC Mobility & Joint Decompression Sessions',
        '2x Structural Strength & Postural Stability',
        '3x Full Contrast Therapy, Cold Plunge & Hyperbaric',
      ],
      expectedOutcomes: 'Restored spinal & hip mobility, elimination of chronic lower back soreness, and reduced systemic inflammation.',
      recommendedCoach: 'Dr. Sarah Jenkins (DPT)',
    },
  };

  const currentProfile = goalProfiles[primaryGoal];

  return (
    <section className="py-20 bg-neutral-900/40 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
            Interactive Training Calculator
          </div>
          <h2
            className="font-condensed font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Calculate Your Customized Athletic Blueprint
          </h2>
          <p className="text-sm text-neutral-400 mt-3">
            Select your primary objective to receive a tailored weekly training split, 
            recommended coach, and optimal membership configuration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-neutral-900/80 border border-neutral-800 flex flex-col gap-6">
            {/* Step 1: Goal */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-3">
                1. Select Primary Objective
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'hypertrophy', label: 'Strength & Mass' },
                  { id: 'hyrox', label: 'Hyrox & Conditioning' },
                  { id: 'recomp', label: 'Fat Loss & Recomp' },
                  { id: 'longevity', label: 'Joints & Longevity' },
                ].map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setPrimaryGoal(g.id as any)}
                    className={`p-3 text-xs font-semibold rounded-md text-left transition-all border ${
                      primaryGoal === g.id
                        ? 'bg-neutral-100 text-neutral-950 border-neutral-100 font-bold shadow-sm'
                        : 'bg-neutral-950/70 text-neutral-400 hover:text-white border-neutral-800'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Training Days Per Week */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                  2. Training Frequency
                </label>
                <span className="text-xs font-semibold text-white tabular-nums">
                  {frequency} Days / Week
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="6"
                step="1"
                value={frequency}
                onChange={(e) => setFrequency(parseInt(e.target.value))}
                className="w-full accent-cyan-400 bg-neutral-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 mt-1">
                <span>2 days</span>
                <span>3 days</span>
                <span>4 days</span>
                <span>5 days</span>
                <span>6 days</span>
              </div>
            </div>

            {/* Step 3: Contrast Therapy */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-300 block mb-2">
                3. Contrast Recovery Priority
              </label>
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={() => setRecoveryFocus(true)}
                  className={`flex-1 p-2.5 text-xs font-medium rounded-md border text-center transition-all ${
                    recoveryFocus
                      ? 'bg-neutral-800 border-neutral-600 text-white font-semibold'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                  }`}
                >
                  High (Sauna & Cold Plunge)
                </button>
                <button
                  type="button"
                  onClick={() => setRecoveryFocus(false)}
                  className={`flex-1 p-2.5 text-xs font-medium rounded-md border text-center transition-all ${
                    !recoveryFocus
                      ? 'bg-neutral-800 border-neutral-600 text-white font-semibold'
                      : 'bg-neutral-950 border-neutral-800 text-neutral-400'
                  }`}
                >
                  Standard Gym Floor
                </button>
              </div>
            </div>
          </div>

          {/* Results Output Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold block">
                    Tailored Protocol
                  </span>
                  <h3 className="font-condensed font-bold text-2xl sm:text-3xl text-white uppercase tracking-wide">
                    {currentProfile.title}
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 block">
                    Ideal Tier Match
                  </span>
                  <span className="font-condensed font-bold text-lg text-white">
                    {currentProfile.recommendedTier}
                  </span>
                </div>
              </div>

              {/* Weekly Split Breakdown */}
              <div className="mb-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
                  Optimal {frequency}-Day Weekly Split
                </div>
                <div className="flex flex-col gap-2.5">
                  {currentProfile.weeklyBlueprint.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expected Physiological Outcomes */}
              <div className="p-4 rounded-md bg-neutral-950/80 border border-neutral-800/80 text-xs sm:text-sm text-neutral-300 mb-6">
                <strong className="text-white font-semibold">Projected Milestone:</strong>{' '}
                {currentProfile.expectedOutcomes}
              </div>

              <div className="text-xs text-neutral-400 mb-6">
                <span>Recommended Lead Coach: </span>
                <strong className="text-neutral-200">{currentProfile.recommendedCoach}</strong>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  onOpenBooking(`Calculated Blueprint: ${currentProfile.title} (${frequency} days/week)`)
                }
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold tracking-wider uppercase text-neutral-950 bg-white hover:bg-neutral-100 rounded-md transition-all shadow-md active:scale-98 whitespace-nowrap"
              >
                <span>Book Free Assessment on This Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onSelectPlan(currentProfile.tierId)}
                className="w-full sm:w-auto px-5 py-3 text-xs font-semibold tracking-wider uppercase text-neutral-300 hover:text-white border border-neutral-700 rounded-md hover:bg-neutral-800 transition-colors whitespace-nowrap"
              >
                View {currentProfile.recommendedTier}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
