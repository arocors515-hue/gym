import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { CLUB_INFO } from '../data/gymData';

interface NavbarProps {
  onOpenBooking: (goal?: string, coach?: string) => void;
  onOpenMemberships: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenMemberships }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Philosophy', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Classes', href: '#schedule' },
    { label: 'Coaches', href: '#trainers' },
    { label: 'Memberships', href: '#pricing' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 py-3.5 shadow-2xl shadow-black/50'
            : 'bg-gradient-to-b from-neutral-950/80 via-neutral-950/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Zone 1 (Wordmark) — Zone 2 (Nav links) — Zone 3 (1 Primary Action) */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single text element wordmark */}
            <a
              href="#"
              className="flex items-center gap-2.5 text-neutral-100 hover:text-white transition-colors group whitespace-nowrap shrink-0"
            >
              <span className="w-8 h-8 rounded-sm bg-gradient-to-br from-neutral-100 to-neutral-400 text-neutral-950 font-condensed font-extrabold text-xl flex items-center justify-center tracking-wider shadow-sm group-hover:scale-105 transition-transform">
                A
              </span>
              <span className="font-condensed font-extrabold text-2xl tracking-widest text-neutral-100 group-hover:text-white">
                AURA <span className="text-neutral-400 font-light text-xl">ATHLETIC</span>
              </span>
            </a>

            {/* Zone 2: 4-6 clean single-line text navigation links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-neutral-500 whitespace-nowrap shrink-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onOpenBooking('Free Trial Day Pass')}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase text-neutral-950 bg-neutral-100 hover:bg-white rounded-md transition-all shadow-md hover:shadow-neutral-200/20 active:scale-98 whitespace-nowrap shrink-0"
              >
                Book Free Trial
              </button>

              {/* Mobile hamburger button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="lg:hidden p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-md transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-neutral-950/95 backdrop-blur-xl flex flex-col p-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
            <span className="font-condensed font-bold text-2xl tracking-widest text-white">
              AURA <span className="text-neutral-400 font-normal">ATHLETIC</span>
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 text-neutral-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="py-8 flex flex-col gap-6 text-lg font-medium text-neutral-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-neutral-800 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking('Free Trial Day Pass');
              }}
              className="w-full py-3 text-center text-sm font-semibold tracking-wider uppercase bg-white text-neutral-950 rounded-md shadow-md"
            >
              Book Complimentary Day Pass
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMemberships();
              }}
              className="w-full py-3 text-center text-sm font-semibold tracking-wider uppercase border border-neutral-700 text-neutral-200 hover:bg-neutral-900 rounded-md"
            >
              Explore Memberships
            </button>
            <p className="text-center text-xs text-neutral-500 pt-2">
              {CLUB_INFO.address} · {CLUB_INFO.phone}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
