"use client";

import { useState } from "react";

export default function HeroWithForm() {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    date: "",
    contact: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
    // TODO: Send booking data to backend or API
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 py-16">
      {/* Background Image */}
      <div className="absolute inset-0 object-cover">
        <img
          src="/assets/home/images/hero-2.png"
          alt="Hero Background"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl text-center text-white space-y-6">
        <h1 className="font-heading text-5xl md:text-6xl leading-tight">
          Stitch by <span className="text-brand-gold">Stitch</span>
        </h1>
        <p className="font-body text-lg text-white/90 max-w-2xl mx-auto">
          Bespoke women’s tailoring & custom clothing — from bridal couture to
          everyday elegance. Book your tailor today and bring your vision to
          life.
        </p>
        <div className="w-24 h-1 bg-brand-sage rounded-full mx-auto"></div>
      </div>

      {/* Booking Form - Horizontal below Hero Content */}
      <div className="relative top-44 z-10 mt-10 w-full max-w-6xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-7 shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="flex-1 px-4 py-3 rounded-lg border border-brand-gold bg-white/70 text-brand-charcoal focus:ring-2 focus:ring-brand-sage outline-none"
            required
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="flex-1 px-4 py-3 rounded-lg border border-brand-gold bg-white/70 text-brand-charcoal focus:ring-2 focus:ring-brand-sage outline-none"
            required
          >
            <option value="">Select Service</option>
            <option value="bridal">Bridal Stitching</option>
            <option value="party">Party Wear</option>
            <option value="casual">Casual Wear</option>
            <option value="custom">Custom Design</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="flex-1 px-4 py-3 rounded-lg border border-brand-gold bg-white/70 text-brand-charcoal focus:ring-2 focus:ring-brand-sage outline-none"
            required
          />
          <input
            type="text"
            name="contact"
            placeholder="Contact Number / Email"
            value={formData.contact}
            onChange={handleChange}
            className="flex-1 px-4 py-3 rounded-lg border border-brand-gold bg-white/70 text-brand-charcoal focus:ring-2 focus:ring-brand-sage outline-none"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 bg-brand-gold text-white font-semibold rounded-lg hover:bg-brand-sage hover:text-brand-charcoal transition-all"
          >
            Confirm
          </button>
        </form>
      </div>
    </section>
  );
}
