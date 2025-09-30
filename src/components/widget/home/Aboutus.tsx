"use client";

import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="relative bg-brand-white py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-20 w-96 h-96 bg-brand-sage/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 px-6">
        {/* Left - Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="lg:col-span-6 space-y-8"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
            About{" "}
            <span className="text-brand-gold italic relative after:absolute after:-bottom-2 after:left-0 after:w-3/4 after:h-1 after:bg-brand-gold/50">
              Stitch
            </span>{" "}
            by Stitch
          </h2>

          <p className="text-lg text-brand-charcoal/80 leading-relaxed max-w-xl font-body">
            We are not just tailors — we are storytellers of elegance. Every
            stitch, every seam, every fold of fabric embodies the artistry of
            women’s bespoke fashion.{" "}
            <span className="text-brand-gold font-semibold">
              Modern couture for the modern woman.
            </span>
          </p>

          <p className="text-lg text-brand-charcoal/70 leading-relaxed max-w-xl font-body">
            From handcrafted couture pieces to large-scale fabric production, we
            redefine luxury tailoring with precision and passion.
          </p>

          {/* Stats - Modern Vertical Layout */}
          <div className="flex gap-12 mt-10">
            <div className="flex flex-col">
              <span className="text-5xl font-bold text-brand-gold">10+</span>
              <span className="uppercase text-sm tracking-widest text-brand-charcoal/70">
                Years
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-bold text-brand-gold">5k+</span>
              <span className="uppercase text-sm tracking-widest text-brand-charcoal/70">
                Clients
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-bold text-brand-gold">20k+</span>
              <span className="uppercase text-sm tracking-widest text-brand-charcoal/70">
                Garments
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right - Editorial Photo Collage */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="lg:col-span-6 relative"
        >
          {/* Main image */}
          <div className="relative w-full h-[550px] rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1612336307429-8c9ef66f7d28"
              alt="Fashion Tailoring"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping smaller image */}
          <div className="absolute -bottom-10 -left-10 w-60 h-72 rounded-2xl overflow-hidden shadow-lg border-4 border-brand-gold/30">
            <img
              src="https://images.unsplash.com/photo-1617957741731-3b73d0d9c7a6"
              alt="Model"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative line (stitch effect) */}
          <div className="absolute -top-6 right-10 w-[2px] h-[120%] bg-gradient-to-b from-brand-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
