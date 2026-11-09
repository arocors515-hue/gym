export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number; // billed annually per month
  popular?: boolean;
  features: string[];
  guestPassesPerMonth: number;
  recoveryCredits: string;
  accessHours: string;
  lockerService: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  photo: string;
  credentials: string[];
  bio: string;
  specialties: string[];
  experienceYears: number;
  rating: number;
  sessionsCompleted: number;
  quote: string;
  ratePerHour: number;
}

export type ClassCategory = 'all' | 'strength' | 'conditioning' | 'recovery' | 'mobility' | 'combat';

export interface GymClass {
  id: string;
  title: string;
  category: 'strength' | 'conditioning' | 'recovery' | 'mobility' | 'combat';
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  time: string;
  durationMin: number;
  coachId: string;
  coachName: string;
  coachPhoto: string;
  intensityLevel: number; // 1 to 5
  spotsTotal: number;
  spotsBooked: number;
  room: string;
  description: string;
}

export interface FacilityZone {
  id: string;
  name: string;
  tag: string;
  image: string;
  description: string;
  equipment: string[];
  features: string[];
  specNote?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  outcomeMetric: string;
  metricLabel: string;
  quote: string;
  memberTier: string;
  memberSince: string;
}

export interface BookingFormState {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  fitnessGoal: string;
  preferredCoach?: string;
  selectedPlan?: string;
  notes?: string;
}
