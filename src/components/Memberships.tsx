import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/gymData';
import { MembershipPlan } from '../types';

interface MembershipsProps {
  onJoinPlan: (plan: MembershipPlan, isAnnual: boolean) => void;
}

export const Memberships: React.FC<MembershipsProps> = ({ onJoinPlan }) => {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);
  const [showComparison, setShowComparison] = useState<boolean>(false);

  return (
    <section id="pricing" className="py-24 bg-neutral-950 border-t border-neutral-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
            Membership Architecture
          </div>
          <h2
            className="font-condensed font-extrabold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Transparent memberships. Uncompromised privileges.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed">
            All memberships include daily towel service, full Eleiko platform access, 
            and our 450-member capacity guarantee. Zero initiation hidden fees.
          </p>

          {/* Billing Frequency Segmented Control (Functional Buttons per §1.A) */}
          <div className="inline-flex items-center gap-1 p-1 bg-neutral-900 rounded-lg border border-neutral-800 mt-8">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                !isAnnual
                  ? 'bg-neutral-100 text-neutral-950 shadow-sm font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap flex items-center gap-1.5 ${
                isAnnual
                  ? 'bg-neutral-100 text-neutral-950 shadow-sm font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <span>Annual Commitment</span>
              <span className="text-[10px] text-emerald-400 uppercase tracking-wider font-extrabold">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Tier Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {MEMBERSHIP_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`rounded-xl p-8 flex flex-col justify-between transition-all relative ${
                  plan.popular
                    ? 'bg-neutral-900 border-2 border-white shadow-2xl shadow-neutral-900/50'
                    : 'bg-neutral-900/50 border border-neutral-800/90 hover:border-neutral-700'
                }`}
              >
                {/* Popular Ribbon without candy pill styling */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-neutral-950 text-[11px] font-extrabold uppercase tracking-widest rounded-sm shadow-md whitespace-nowrap">
                    Most Selected by Athletes
                  </div>
                )}

                <div>
                  {/* Tier Title & Tagline */}
                  <div className="border-b border-neutral-800 pb-6 mb-6">
                    <h3 className="font-condensed font-bold text-3xl text-white uppercase tracking-wide mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed min-h-[32px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Pricing Display */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="font-condensed font-extrabold text-5xl sm:text-6xl text-white tabular-nums">
                        ₹{price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-sm text-neutral-400 font-medium">/ month</span>
                    </div>
                    <div className="text-xs text-neutral-500 mt-1">
                      {isAnnual ? 'Billed annually · Includes 2 extra guest passes' : 'Billed monthly · 30-day cancellation'}
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-4">
                      Tier Privileges
                    </div>
                    <div className="flex flex-col gap-3">
                      {plan.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="pt-6 border-t border-neutral-800/80">
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
                    <span>Guest Passes:</span>
                    <strong className="text-neutral-200">
                      {plan.guestPassesPerMonth + (isAnnual ? 1 : 0)} / mo
                    </strong>
                  </div>

                  <button
                    type="button"
                    onClick={() => onJoinPlan(plan, isAnnual)}
                    className={`w-full py-3.5 text-xs font-bold tracking-wider uppercase rounded-md transition-all text-center flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-white text-neutral-950 hover:bg-neutral-100 shadow-lg active:scale-98'
                        : 'bg-neutral-800 text-white hover:bg-neutral-700 active:scale-98'
                    }`}
                  >
                    <span>Select {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Toggle Detailed Feature Comparison Table */}
        <div className="text-center mb-6">
          <button
            type="button"
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
          >
            <span>{showComparison ? 'Hide Comprehensive Amenity Comparison' : 'View Detailed Amenity & Policy Comparison'}</span>
            {showComparison ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Side-by-Side Amenities Comparison Table */}
        {showComparison && (
          <div className="rounded-xl bg-neutral-900/60 border border-neutral-800 overflow-hidden mb-12 animate-in fade-in duration-300">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-neutral-800 bg-neutral-900 text-neutral-400">
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider">Privilege / Amenity</th>
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider">Foundation</th>
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-white">Performance Elite</th>
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider">Black Onyx</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/60 text-neutral-300">
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-white">Lifting Platforms & Turf Access</td>
                    <td className="py-3.5 px-6">Unlimited</td>
                    <td className="py-3.5 px-6 text-white font-medium">Unlimited</td>
                    <td className="py-3.5 px-6">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-white">Club Hours</td>
                    <td className="py-3.5 px-6">5 AM – 10 PM</td>
                    <td className="py-3.5 px-6 text-white font-medium">5 AM – 10 PM</td>
                    <td className="py-3.5 px-6 text-cyan-400 font-semibold">24/7 Keycard & Biometric</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-white">Signature Group Classes</td>
                    <td className="py-3.5 px-6 text-neutral-500">₹1,200 drop-in</td>
                    <td className="py-3.5 px-6 text-cyan-400 font-semibold">Unlimited Included</td>
                    <td className="py-3.5 px-6 text-cyan-400 font-semibold">Unlimited Included</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-white">Contrast Therapy (Sauna & Plunge)</td>
                    <td className="py-3.5 px-6 text-neutral-500">2 passes / month</td>
                    <td className="py-3.5 px-6 text-cyan-400 font-semibold">Unlimited Daily</td>
                    <td className="py-3.5 px-6 text-cyan-400 font-semibold">Unlimited Daily + VIP Suite</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-white">Personal Training Sessions</td>
                    <td className="py-3.5 px-6 text-neutral-500">A La Carte</td>
                    <td className="py-3.5 px-6 text-neutral-500">10% member discount</td>
                    <td className="py-3.5 px-6 text-white font-semibold">2 Sessions / Mo Included</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-white">Locker Amenity</td>
                    <td className="py-3.5 px-6">Day Electronic</td>
                    <td className="py-3.5 px-6">Day Electronic + Valet</td>
                    <td className="py-3.5 px-6 text-white font-semibold">Permanent Cedar + Laundry</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-6 font-medium text-white">Complimentary Valet Parking</td>
                    <td className="py-3.5 px-6 text-neutral-500">No</td>
                    <td className="py-3.5 px-6 text-white">2 Hours Daily</td>
                    <td className="py-3.5 px-6 text-white font-semibold">Unlimited Valet</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Satisfaction Guarantee Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-neutral-400 text-center">
          <ShieldCheck className="w-4 h-4 text-neutral-300" />
          <span>
            <strong>14-Day Performance Guarantee:</strong> If AURA does not exceed your training standards, cancel within 14 days for a 100% full refund.
          </span>
        </div>
      </div>
    </section>
  );
};
