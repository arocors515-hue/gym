import React from 'react';
import { Award, Star, ArrowRight, Calendar } from 'lucide-react';
import { TRAINERS } from '../data/gymData';
import { Trainer } from '../types';

interface TrainersProps {
  onBookTrainer: (trainer: Trainer) => void;
}

export const Trainers: React.FC<TrainersProps> = ({ onBookTrainer }) => {
  return (
    <section id="trainers" className="py-24 bg-neutral-950 border-t border-neutral-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              The Coaching Cadre
            </div>
            <h2
              className="font-condensed font-extrabold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Elite practitioners. Proven pedigrees.
            </h2>
          </div>

          <p className="max-w-md text-sm text-neutral-400 leading-relaxed">
            Every AURA coach holds verified gold-standard credentials (CSCS, USAW, DPT), 
            with minimum 8+ years coaching collegiate, tactical, or professional athletes.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              className="rounded-lg bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 transition-all flex flex-col justify-between overflow-hidden group"
            >
              {/* Photo Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900">
                <img
                  src={trainer.photo}
                  alt={`${trainer.name} - ${trainer.role}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter brightness-95 group-hover:scale-103 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                {/* Rating badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-neutral-950/80 backdrop-blur-md rounded text-xs font-semibold text-neutral-200 border border-neutral-800 flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="tabular-nums">{trainer.rating}</span>
                </div>

                {/* Role overlay on image bottom */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-0.5">
                    {trainer.role}
                  </div>
                  <h3 className="font-condensed font-bold text-2xl text-white tracking-wide">
                    {trainer.name}
                  </h3>
                </div>
              </div>

              {/* Bio & Credentials Content */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  {/* Clean unboxed credentials per §1.A */}
                  <div className="text-xs text-neutral-400 mb-3 flex flex-wrap gap-x-1.5 gap-y-0.5 font-medium">
                    {trainer.credentials.map((cred, idx) => (
                      <React.Fragment key={idx}>
                        <span>{cred}</span>
                        {idx < trainer.credentials.length - 1 && <span aria-hidden="true">·</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3 mb-4">
                    {trainer.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-1.5">
                      Specialties
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {trainer.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-neutral-950 text-neutral-300 text-[11px] border border-neutral-800"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="p-3 rounded bg-neutral-950/60 border border-neutral-800/80 text-[11px] italic text-neutral-400 mb-4">
                    "{trainer.quote}"
                  </div>
                </div>

                {/* Rate & Consultation Button */}
                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                  <div className="text-xs">
                    <span className="font-condensed font-bold text-lg text-white tabular-nums">
                      ₹{trainer.ratePerHour.toLocaleString('en-IN')}
                    </span>
                    <span className="text-neutral-500"> / hour</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onBookTrainer(trainer)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold tracking-wider uppercase bg-white hover:bg-neutral-100 text-neutral-950 rounded transition-all active:scale-98 whitespace-nowrap"
                  >
                    <span>Book 1:1</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
