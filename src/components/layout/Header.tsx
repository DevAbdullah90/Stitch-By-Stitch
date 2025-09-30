"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-brand-white border-b border-brand-sage shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-heading font-bold">
          <span className="text-brand-charcoal">Stitch</span>{" "}
          <span className="text-brand-gold">by Stitch</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-body text-brand-charcoal">
          <a href="#" className="hover:text-brand-gold transition">Home</a>
          <a href="#" className="hover:text-brand-gold transition">Shop</a>
          <a href="#" className="hover:text-brand-gold transition">Book a Tailor</a>
          <a href="#" className="hover:text-brand-gold transition">Services</a>
          <a href="#" className="hover:text-brand-gold transition">About</a>
          <a href="#" className="hover:text-brand-gold transition">Contact</a>
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#book"
            className="px-5 py-2 rounded-lg bg-brand-gold text-white font-semibold hover:bg-brand-sage hover:text-brand-charcoal transition-all"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-charcoal"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-brand-white border-t border-brand-sage shadow-lg">
          <nav className="flex flex-col p-4 space-y-4 font-body text-brand-charcoal">
            <a href="#" className="hover:text-brand-gold transition">Home</a>
            <a href="#" className="hover:text-brand-gold transition">Shop</a>
            <a href="#" className="hover:text-brand-gold transition">Book a Tailor</a>
            <a href="#" className="hover:text-brand-gold transition">Services</a>
            <a href="#" className="hover:text-brand-gold transition">About</a>
            <a href="#" className="hover:text-brand-gold transition">Contact</a>
            <a
              href="#book"
              className="px-4 py-2 rounded-lg bg-brand-gold text-white font-semibold hover:bg-brand-sage hover:text-brand-charcoal transition-all text-center"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
