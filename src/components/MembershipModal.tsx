import React, { useState } from 'react';
import { X, Check, CheckCircle2, ShieldCheck, ArrowRight, CreditCard } from 'lucide-react';
import { MembershipPlan } from '../types';
import { CLUB_INFO } from '../data/gymData';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: MembershipPlan | null;
  initialAnnual?: boolean;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  onClose,
  selectedPlan,
  initialAnnual = true,
}) => {
  const [isAnnual, setIsAnnual] = useState(initialAnnual);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [memberId, setMemberId] = useState('');

  if (!isOpen || !selectedPlan) return null;

  const price = isAnnual ? selectedPlan.annualPrice : selectedPlan.monthlyPrice;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full legal name is required';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Valid email address required';
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Valid 10-digit phone number required';
    }
    if (!agreedToTerms) {
      errs.terms = 'Please accept the club charter and membership policies';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `AURA-MBR-${Math.floor(10000 + Math.random() * 90000)}`;
      setMemberId(generatedId);
      setIsConfirmed(true);
    }, 800);
  };

  const handleClose = () => {
    setIsConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl my-8 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl p-6 sm:p-8 text-neutral-100">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isConfirmed ? (
          <div>
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-1">
              Membership Onboarding
            </div>
            <h3 className="font-condensed font-extrabold text-3xl text-white uppercase tracking-tight mb-2">
              Enroll in {selectedPlan.name}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6">
              Complete your athlete profile. Your access credential and biometric orientation 
              will be scheduled immediately upon confirmation.
            </p>

            {/* Plan Summary Card */}
            <div className="p-4 rounded-lg bg-neutral-950 border border-neutral-800 mb-6">
              <div className="flex items-baseline justify-between mb-2">
                <span className="font-condensed font-bold text-xl text-white">
                  {selectedPlan.name}
                </span>
                <div className="text-right">
                  <span className="font-condensed font-bold text-2xl text-white tabular-nums">
                    ₹{price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-neutral-400"> / month</span>
                </div>
              </div>

              {/* Billing Switch inside modal */}
              <div className="flex items-center justify-between pt-3 border-t border-neutral-800 text-xs">
                <span className="text-neutral-400">Billing Cadence:</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAnnual(false)}
                    className={`px-2.5 py-1 rounded text-xs transition-colors ${
                      !isAnnual ? 'bg-neutral-800 text-white font-medium' : 'text-neutral-500'
                    }`}
                  >
                    Monthly (₹{selectedPlan.monthlyPrice.toLocaleString('en-IN')})
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsAnnual(true)}
                    className={`px-2.5 py-1 rounded text-xs transition-colors ${
                      isAnnual ? 'bg-neutral-800 text-white font-medium' : 'text-neutral-500'
                    }`}
                  >
                    Annual (₹{selectedPlan.annualPrice.toLocaleString('en-IN')} / mo · Save 15%)
                  </button>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-neutral-800/60 flex items-center justify-between text-xs text-neutral-400">
                <span>Initiation Fee:</span>
                <span className="text-emerald-400 font-semibold">₹0 (Promotion Waived · Save ₹5,000)</span>
              </div>
            </div>

            {/* Member Form */}
            <form onSubmit={handleEnroll} className="flex flex-col gap-4 text-xs sm:text-sm">
              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Full Legal Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Jordan Mitchell"
                  className={`w-full bg-neutral-950 border rounded-md py-2.5 px-3 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white transition-all ${
                    errors.fullName ? 'border-red-500' : 'border-neutral-800'
                  }`}
                />
                {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jordan@domain.com"
                    className={`w-full bg-neutral-950 border rounded-md py-2.5 px-3 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white transition-all ${
                      errors.email ? 'border-red-500' : 'border-neutral-800'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(512) 555-0182"
                    className={`w-full bg-neutral-950 border rounded-md py-2.5 px-3 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white transition-all ${
                      errors.phone ? 'border-red-500' : 'border-neutral-800'
                    }`}
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Agreement checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-neutral-400">
                  <input
                    type="checkbox"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-0.5 rounded border-neutral-700 bg-neutral-950 text-cyan-500 focus:ring-0"
                  />
                  <span>
                    I accept the AURA Athletic Club charter, 14-day satisfaction refund policy, and agree to respectful shared space etiquette.
                  </span>
                </label>
                {errors.terms && <p className="text-red-400 text-xs mt-1">{errors.terms}</p>}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-xs font-bold tracking-wider uppercase text-neutral-950 bg-white hover:bg-neutral-100 rounded-md transition-all shadow-lg active:scale-98 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Processing Enrollment...</span>
                  ) : (
                    <>
                      <span>Complete Membership Enrollment</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-neutral-500 text-[11px] pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Backed by our 14-day 100% money-back performance guarantee.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-cyan-400" />
            </div>

            <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-1">
              Membership Provisioned
            </div>
            <h3 className="font-condensed font-extrabold text-3xl text-white uppercase tracking-tight mb-2">
              Welcome to AURA, {fullName.split(' ')[0]}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto mb-6">
              Your athlete profile is officially active. Your assigned Member ID is{' '}
              <strong className="text-white font-mono">{memberId}</strong>.
            </p>

            {/* Member Card Summary */}
            <div className="p-5 rounded-lg bg-neutral-950 border border-neutral-800 text-left max-w-md mx-auto mb-6">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-3 text-xs">
                <span className="text-neutral-500">Tier:</span>
                <span className="font-bold text-white uppercase">{selectedPlan.name}</span>
              </div>
              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Rate:</span>
                  <span className="text-neutral-200 font-medium">₹{price.toLocaleString('en-IN')} / month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Access:</span>
                  <span className="text-neutral-200 font-medium">{selectedPlan.accessHours}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Locker:</span>
                  <span className="text-neutral-200 font-medium">{selectedPlan.lockerService}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Recovery:</span>
                  <span className="text-neutral-200 font-medium">{selectedPlan.recoveryCredits}</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-md bg-neutral-900/80 border border-neutral-800 text-left max-w-md mx-auto mb-6 text-xs text-neutral-400">
              <strong className="text-white block font-semibold mb-1">Next Step:</strong>
              Your physical encrypted RFID card is ready for collection at the front desk ({CLUB_INFO.address}). Present your photo ID and Member ID upon arrival.
            </div>

            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2.5 text-xs font-bold tracking-wider uppercase bg-white text-neutral-950 rounded hover:bg-neutral-100 transition-colors"
            >
              Done & Explore Facilities
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
