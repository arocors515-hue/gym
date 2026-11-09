import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, User, Phone, Mail, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import { CLUB_INFO, TRAINERS } from '../data/gymData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultGoal?: string;
  defaultCoach?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultGoal = 'Complimentary 1-Day Trial Pass',
  defaultCoach = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('6:30 AM – Morning Session');
  const [goal, setGoal] = useState(defaultGoal);
  const [coach, setCoach] = useState(defaultCoach);
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!email.trim()) {
      errs.email = 'Please provide an email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!phone.trim()) {
      errs.phone = 'Please provide a phone number for trial verification';
    } else if (phone.replace(/\D/g, '').length < 10) {
      errs.phone = 'Please provide a valid 10-digit phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const randomCode = `AURA-${Math.floor(100000 + Math.random() * 900000)}`;
      setConfirmationCode(randomCode);
      setIsConfirmed(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl my-8 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl p-6 sm:p-8 text-neutral-100">
        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isConfirmed ? (
          <div>
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-1">
              VIP Guest Access
            </div>
            <h3 className="font-condensed font-extrabold text-3xl text-white uppercase tracking-tight mb-2">
              Claim Your 1-Day Experience Pass
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6">
              Experience Austin’s premier athletic facility with zero commitment. 
              Full platform access, contrast sauna & cold plunge suite, and dedicated concierge orientation.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs sm:text-sm">
              {/* Full Name */}
              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-neutral-500" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Alexander Hayes"
                    className={`w-full bg-neutral-950 border rounded-md py-2.5 pl-10 pr-3 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white transition-all ${
                      errors.fullName ? 'border-red-500' : 'border-neutral-800'
                    }`}
                  />
                </div>
                {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Email Address <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 w-4 h-4 text-neutral-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alexander@domain.com"
                      className={`w-full bg-neutral-950 border rounded-md py-2.5 pl-10 pr-3 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white transition-all ${
                        errors.email ? 'border-red-500' : 'border-neutral-800'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-neutral-500" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(512) 555-0199"
                      className={`w-full bg-neutral-950 border rounded-md py-2.5 pl-10 pr-3 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white transition-all ${
                        errors.phone ? 'border-red-500' : 'border-neutral-800'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Preferred Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-md py-2.5 px-3 text-neutral-200 focus:outline-none focus:ring-1 focus:ring-white"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Time Window
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-md py-2.5 px-3 text-neutral-200 focus:outline-none focus:ring-1 focus:ring-white"
                  >
                    <option value="6:00 AM – Early Morning">6:00 AM – Early Morning</option>
                    <option value="8:30 AM – Morning Session">8:30 AM – Morning Session</option>
                    <option value="12:00 PM – Midday Power">12:00 PM – Midday Power</option>
                    <option value="5:30 PM – Evening Prime">5:30 PM – Evening Prime</option>
                    <option value="7:00 PM – Late Session & Thermal">7:00 PM – Late Session & Thermal</option>
                  </select>
                </div>
              </div>

              {/* Primary Focus & Coach Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Primary Focus
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-md py-2.5 px-3 text-neutral-200 focus:outline-none focus:ring-1 focus:ring-white"
                  >
                    <option value="Complimentary 1-Day Trial Pass">Full Facility Free Pass</option>
                    <option value="Olympic Weightlifting & Strength">Barbell & Absolute Strength</option>
                    <option value="Hyrox & Turf Conditioning">Hyrox / Metabolic Conditioning</option>
                    <option value="Contrast Spa & Recovery Sanctuary">Contrast Saunas & Cold Plunge</option>
                    <option value="1:1 Personal Coaching Consult">1:1 Coach Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Coach Preference
                  </label>
                  <select
                    value={coach}
                    onChange={(e) => setCoach(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-md py-2.5 px-3 text-neutral-200 focus:outline-none focus:ring-1 focus:ring-white"
                  >
                    <option value="">No Preference (General Orientation)</option>
                    {TRAINERS.map((t) => (
                      <option key={t.id} value={t.name}>
                        {t.name} ({t.role.split(':')[0]})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Extra Notes */}
              <div>
                <label className="block text-neutral-300 font-medium mb-1">
                  Specific Training Goals or Physical History (Optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  placeholder="e.g. Preparing for Hyrox Houston, looking to assess lower back recovery..."
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-md py-2 px-3 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-xs font-bold tracking-wider uppercase text-neutral-950 bg-white hover:bg-neutral-100 rounded-md transition-all shadow-lg active:scale-98 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Issuing Credential...</span>
                  ) : (
                    <>
                      <span>Generate Guest Access Pass</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-neutral-500 text-[11px] pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero sales pressure. Pass valid for 1 full training day.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>

            <div className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-1">
              Guest Credential Activated
            </div>
            <h3 className="font-condensed font-extrabold text-3xl text-white uppercase tracking-tight mb-2">
              You’re On the Guest List, {fullName.split(' ')[0]}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto mb-6">
              Your guest pass has been reserved at the front concierge desk. 
              A confirmation email has been dispatched to <strong className="text-neutral-200">{email}</strong>.
            </p>

            {/* Pass Card */}
            <div className="p-5 rounded-lg bg-neutral-950 border border-neutral-800 text-left max-w-md mx-auto mb-6">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-3 text-xs">
                <span className="text-neutral-500">Access Pass Code:</span>
                <span className="font-mono font-bold text-cyan-400 tracking-wider">
                  {confirmationCode}
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-neutral-300">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Date:</span>
                  <span className="text-neutral-200 font-medium">{date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Time Window:</span>
                  <span className="text-neutral-200 font-medium">{timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Focus:</span>
                  <span className="text-neutral-200 font-medium">{goal}</span>
                </div>
                {coach && (
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Coach Pairing:</span>
                    <span className="text-neutral-200 font-medium">{coach}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-neutral-500">Address:</span>
                  <span className="text-neutral-200 font-medium">{CLUB_INFO.address}</span>
                </div>
              </div>
            </div>

            {/* Arrival Checklist */}
            <div className="p-4 rounded-md bg-neutral-900/80 border border-neutral-800 text-left max-w-md mx-auto mb-6 text-xs text-neutral-400 space-y-1">
              <strong className="text-white block font-semibold mb-1">What to Bring:</strong>
              <p>• Government-issued photo ID matching your pass name</p>
              <p>• Athletic training attire & clean footwear</p>
              <p>• Towel service, locks, chilled water, and recovery showers are fully provided</p>
            </div>

            <button
              type="button"
              onClick={handleResetAndClose}
              className="px-6 py-2.5 text-xs font-bold tracking-wider uppercase bg-white text-neutral-950 rounded hover:bg-neutral-100 transition-colors"
            >
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
