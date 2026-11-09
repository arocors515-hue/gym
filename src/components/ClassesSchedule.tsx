import React, { useState } from 'react';
import { Clock, MapPin, User, Flame, ArrowRight, Check } from 'lucide-react';
import { GYM_CLASSES } from '../data/gymData';
import { GymClass } from '../types';

interface ClassesScheduleProps {
  onReserveClass: (gymClass: GymClass) => void;
}

const DAYS: ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const ClassesSchedule: React.FC<ClassesScheduleProps> = ({ onReserveClass }) => {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredClasses = GYM_CLASSES.filter((c) => {
    const matchDay = selectedDay === 'all' || c.day === selectedDay;
    const matchCategory = selectedCategory === 'all' || c.category === selectedCategory;
    return matchDay && matchCategory;
  });

  return (
    <section id="schedule" className="py-24 bg-neutral-950 border-t border-neutral-900 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
              Programs & Weekly Timetable
            </div>
            <h2
              className="font-condensed font-extrabold text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Curated small-group athletic protocols.
            </h2>
          </div>

          <p className="max-w-md text-sm text-neutral-400 leading-relaxed">
            Every session is capped at 12–18 athletes to guarantee hands-on coaching, 
            instant biomechanical correction, and dedicated platform space.
          </p>
        </div>

        {/* Day of Week Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {DAYS.map((day) => {
            const isDayActive = selectedDay === day;
            return (
              <button
                key={day}
                type="button"
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-md text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-colors ${
                  isDayActive
                    ? 'bg-neutral-100 text-neutral-950 shadow-sm font-bold'
                    : 'bg-neutral-900/90 text-neutral-400 hover:text-white hover:bg-neutral-850 border border-neutral-800'
                }`}
              >
                {day}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => setSelectedDay('all')}
            className={`px-4 py-2 rounded-md text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-colors ${
              selectedDay === 'all'
                ? 'bg-neutral-100 text-neutral-950 shadow-sm font-bold'
                : 'bg-neutral-900/90 text-neutral-400 hover:text-white hover:bg-neutral-850 border border-neutral-800'
            }`}
          >
            All Week View
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 text-xs">
          <span className="text-neutral-500 font-medium mr-1 uppercase tracking-wider">Discipline:</span>
          {[
            { id: 'all', label: 'All Sessions' },
            { id: 'strength', label: 'Barbell & Strength' },
            { id: 'conditioning', label: 'Hyrox & Conditioning' },
            { id: 'recovery', label: 'Thermal Recovery' },
            { id: 'mobility', label: 'Mobility & Joint Rehab' },
            { id: 'combat', label: 'Boxing Conditioning' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-neutral-800 text-white font-medium border border-neutral-700'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Class Cards Grid */}
        {filteredClasses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredClasses.map((item) => {
              const spotsLeft = item.spotsTotal - item.spotsBooked;
              return (
                <div
                  key={item.id}
                  className="p-6 sm:p-7 rounded-lg bg-neutral-900/50 border border-neutral-800/80 hover:border-neutral-700 transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Unboxed clean metadata per §1.A */}
                    <div className="flex items-center justify-between gap-4 text-xs text-neutral-400 mb-3">
                      <div className="flex items-center gap-2 font-medium">
                        <Clock className="w-3.5 h-3.5 text-neutral-400" />
                        <span className="text-white font-semibold">{item.time}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.durationMin} Min</span>
                        <span aria-hidden="true">·</span>
                        <span className="capitalize">{item.day}</span>
                      </div>

                      <div className="text-xs text-neutral-400 flex items-center gap-1.5">
                        <span>Intensity:</span>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((lvl) => (
                            <div
                              key={lvl}
                              className={`w-1.5 h-3 rounded-xs ${
                                lvl <= item.intensityLevel ? 'bg-cyan-400' : 'bg-neutral-800'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Class Title */}
                    <h3 className="font-condensed font-bold text-2xl sm:text-3xl text-white uppercase tracking-wide mb-2 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Room & Coach Info */}
                    <div className="flex items-center justify-between text-xs text-neutral-400 pb-5 border-b border-neutral-800/80">
                      <div className="flex items-center gap-2">
                        <img
                          src={item.coachPhoto}
                          alt={item.coachName}
                          referrerPolicy="no-referrer"
                          className="w-7 h-7 rounded-full object-cover border border-neutral-700"
                        />
                        <div>
                          <span className="text-neutral-500">Coach: </span>
                          <span className="text-neutral-200 font-medium">{item.coachName}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-neutral-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.room}</span>
                      </div>
                    </div>
                  </div>

                  {/* Booking Row */}
                  <div className="pt-4 flex items-center justify-between gap-4">
                    <div className="text-xs">
                      <span className="font-semibold text-neutral-200 tabular-nums">
                        {spotsLeft} of {item.spotsTotal}
                      </span>{' '}
                      <span className="text-neutral-500">spots available</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onReserveClass(item)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold tracking-wider uppercase bg-white hover:bg-neutral-100 text-neutral-950 rounded transition-all active:scale-98 whitespace-nowrap"
                    >
                      <span>Reserve Spot</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="p-12 text-center rounded-lg bg-neutral-900/30 border border-neutral-800">
            <p className="text-neutral-400 text-sm">
              No classes scheduled for the selected filters. Please choose another day or category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
