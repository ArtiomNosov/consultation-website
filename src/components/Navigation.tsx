'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Услуги', href: '/services' },
    { name: 'Истории успеха', href: '/cases' },
    { name: 'Контакты', href: '/contact' },
  ];

  return (
    <>
      {/* Sticky iOS-style Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
          {/* Logo and Brand Bubble */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 group"
          >
            {/* Logo Bubble */}
            <div className="backdrop-blur-md bg-neutral-200/70 border border-neutral-300/50 rounded-full px-3 sm:px-4 py-2 sm:py-3 shadow-lg hover:bg-neutral-200/80 transition-all duration-200 flex items-center justify-center min-w-fit">
              <span className="text-lg sm:text-xl font-black text-neutral-900">N</span>
            </div>

            {/* Brand Name Bubble - Hidden on very small screens */}
            <div className="hidden sm:flex backdrop-blur-md bg-neutral-200/70 border border-neutral-300/50 rounded-full px-4 py-2 sm:py-3 shadow-lg hover:bg-neutral-200/80 transition-all duration-200">
              <span className="text-sm sm:text-base font-black text-neutral-900 whitespace-nowrap">Наставник</span>
            </div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-2 pointer-events-auto">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="backdrop-blur-md bg-neutral-200/70 border border-neutral-300/50 rounded-full px-4 py-2 sm:py-3 shadow-lg hover:bg-neutral-200/80 transition-all duration-200 text-sm font-bold text-neutral-900 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden backdrop-blur-md bg-neutral-200/70 border border-neutral-300/50 rounded-full p-2 sm:p-3 shadow-lg hover:bg-neutral-200/80 transition-all duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-neutral-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 pointer-events-auto">
            <div className="backdrop-blur-md bg-neutral-200/80 border border-neutral-300/50 rounded-3xl shadow-lg overflow-hidden">
              <div className="flex flex-col divide-y divide-neutral-200">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-6 py-4 text-center font-bold text-neutral-900 hover:bg-neutral-50 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 sm:h-20 md:h-16" />
    </>
  );
}
