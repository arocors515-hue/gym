import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { CLUB_INFO } from '../data/gymData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Membership & Tier Options');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Please provide your full name';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!message.trim()) {
      errs.message = 'Please provide a message or inquiry details';
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
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 border-t border-neutral-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Private Concierge Desk
            </div>
            <h2
              className="font-condensed font-extrabold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Get in touch with our team.
            </h2>
          </div>

          <p className="max-w-md text-sm text-neutral-400 leading-relaxed">
            Have questions regarding membership availability, corporate partnerships, 
            or specialized athletic conditioning? Our concierge responds within 2 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contacts & Concierge Protocol */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 rounded-xl bg-neutral-900/50 border border-neutral-800 flex flex-col gap-6">
              <h3 className="font-condensed font-bold text-2xl text-white uppercase tracking-wide">
                Direct Contact Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-500 text-xs block">Telephone (Direct Front Desk)</span>
                    <a href={`tel:${CLUB_INFO.phone}`} className="text-white font-medium hover:underline">
                      {CLUB_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-500 text-xs block">Concierge & Membership</span>
                    <a href={`mailto:${CLUB_INFO.email}`} className="text-white font-medium hover:underline">
                      {CLUB_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-500 text-xs block">Club Location</span>
                    <span className="text-white font-medium">{CLUB_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-500 text-xs block">Response Time</span>
                    <span className="text-neutral-300">Mon–Sun within 2 hours during operational schedule</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-md bg-neutral-950 border border-neutral-800 text-xs text-neutral-400 leading-relaxed">
                <strong>Corporate Inquiries:</strong> Looking to sponsor executive memberships or host private tactical conditioning workshops for your leadership team? Indicate "Corporate Athletic Partnerships" on the form.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-8 rounded-xl bg-neutral-900/60 border border-neutral-800">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-xs sm:text-sm">
                <h3 className="font-condensed font-bold text-2xl text-white uppercase tracking-wide mb-2">
                  Send a Message to Concierge
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      Your Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rachel Adams"
                      className={`w-full bg-neutral-950 border rounded-md py-2.5 px-3 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white transition-all ${
                        errors.name ? 'border-red-500' : 'border-neutral-800'
                      }`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="rachel@domain.com"
                      className={`w-full bg-neutral-950 border rounded-md py-2.5 px-3 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white transition-all ${
                        errors.email ? 'border-red-500' : 'border-neutral-800'
                      }`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(512) 555-0144"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-md py-2.5 px-3 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white"
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-300 font-medium mb-1">
                      Inquiry Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-md py-2.5 px-3 text-neutral-200 focus:outline-none focus:ring-1 focus:ring-white"
                    >
                      <option value="Membership & Tier Options">Membership & Tier Options</option>
                      <option value="Personal Coaching Consultation">Personal Coaching Consultation</option>
                      <option value="Corporate Athletic Partnerships">Corporate Athletic Partnerships</option>
                      <option value="Private Facility Hire & Media">Private Facility Hire & Media</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1">
                    Your Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Tell us about your fitness background, schedule, or questions..."
                    className={`w-full bg-neutral-950 border rounded-md py-2.5 px-3 text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-white transition-all ${
                      errors.message ? 'border-red-500' : 'border-neutral-800'
                    }`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-neutral-950 bg-white hover:bg-neutral-100 rounded-md transition-all shadow-md active:scale-98 self-start mt-2"
                >
                  {isSubmitting ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="py-12 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                </div>
                <h4 className="font-condensed font-extrabold text-2xl text-white uppercase tracking-wide mb-2">
                  Inquiry Dispatched
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-white">{name}</strong>. Our front desk concierge has logged your message regarding "{subject}". We will reply to <strong className="text-neutral-200">{email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setName('');
                    setEmail('');
                    setPhone('');
                    setMessage('');
                    setIsSubmitted(false);
                  }}
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white border border-neutral-700 rounded transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
