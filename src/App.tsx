/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Facilities } from './components/Facilities';
import { ClassesSchedule } from './components/ClassesSchedule';
import { PersonalTraining } from './components/PersonalTraining';
import { Trainers } from './components/Trainers';
import { GoalCalculator } from './components/GoalCalculator';
import { Memberships } from './components/Memberships';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { LocationHours } from './components/LocationHours';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MembershipModal } from './components/MembershipModal';
import { MEMBERSHIP_PLANS } from './data/gymData';
import { MembershipPlan, Trainer, GymClass } from './types';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingGoal, setBookingGoal] = useState<string>('Free Trial Day Pass');
  const [bookingCoach, setBookingCoach] = useState<string>('');

  const [membershipModalOpen, setMembershipModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<MembershipPlan | null>(null);
  const [isAnnualPlan, setIsAnnualPlan] = useState(true);

  // Handlers
  const handleOpenBooking = (goal = 'Free Trial Day Pass', coach = '') => {
    setBookingGoal(goal);
    setBookingCoach(coach);
    setBookingModalOpen(true);
  };

  const handleOpenMemberships = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToFacilities = () => {
    const el = document.getElementById('facilities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookTrainer = (trainer: Trainer) => {
    handleOpenBooking(`1:1 Personal Coaching with ${trainer.name}`, trainer.name);
  };

  const handleReserveClass = (gymClass: GymClass) => {
    handleOpenBooking(
      `Class Spot Reservation: ${gymClass.title} (${gymClass.day} ${gymClass.time})`,
      gymClass.coachName
    );
  };

  const handleJoinPlan = (plan: MembershipPlan, annual: boolean) => {
    setSelectedPlan(plan);
    setIsAnnualPlan(annual);
    setMembershipModalOpen(true);
  };

  const handleSelectPlanFromCalculator = (planId: string) => {
    const found = MEMBERSHIP_PLANS.find((p) => p.id === planId) || MEMBERSHIP_PLANS[1];
    setSelectedPlan(found);
    setIsAnnualPlan(true);
    setMembershipModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans-body">
      {/* Top Bar Contract Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking('Free Trial Day Pass')}
        onOpenMemberships={handleOpenMemberships}
      />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenBooking={handleOpenBooking}
          onOpenMemberships={handleOpenMemberships}
          onScrollToFacilities={handleScrollToFacilities}
        />

        {/* Philosophy & Pillars */}
        <About onOpenBooking={() => handleOpenBooking('Facility Walkthrough')} />

        {/* Facilities & Architectural Spaces */}
        <Facilities onOpenBooking={(zone) => handleOpenBooking(`Tour of ${zone || 'Facilities'}`)} />

        {/* Classes & Weekly Timetable */}
        <ClassesSchedule onReserveClass={handleReserveClass} />

        {/* Personal Training & Periodization */}
        <PersonalTraining onOpenBooking={(pack) => handleOpenBooking(pack || 'Personal Coaching')} />

        {/* Trainers & Profiles */}
        <Trainers onBookTrainer={handleBookTrainer} />

        {/* Interactive Goal & Schedule Calculator */}
        <GoalCalculator
          onSelectPlan={handleSelectPlanFromCalculator}
          onOpenBooking={(calcSummary) => handleOpenBooking(calcSummary)}
        />

        {/* Membership Plans and Pricing */}
        <Memberships onJoinPlan={handleJoinPlan} />

        {/* Testimonials & Proof */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQSection />

        {/* Location & Opening Hours */}
        <LocationHours onOpenBooking={() => handleOpenBooking('Facility Visit')} />

        {/* Contact Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking('Free Trial Day Pass')}
        onOpenMemberships={handleOpenMemberships}
      />

      {/* Interactive Booking & Pass Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultGoal={bookingGoal}
        defaultCoach={bookingCoach}
      />

      {/* Interactive Membership Enrollment Modal */}
      <MembershipModal
        isOpen={membershipModalOpen}
        onClose={() => setMembershipModalOpen(false)}
        selectedPlan={selectedPlan}
        initialAnnual={isAnnualPlan}
      />
    </div>
  );
}
