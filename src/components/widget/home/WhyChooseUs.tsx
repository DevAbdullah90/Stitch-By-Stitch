"use client";

import { motion } from "framer-motion";
import { Scissors, Shirt, Clock, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Scissors className="w-6 h-6 text-brand-gold" />,
      title: "Bespoke Tailoring",
      desc: "Every garment is crafted to your exact measurements & style.",
    },
    {
      icon: <Shirt className="w-6 h-6 text-brand-gold" />,
      title: "Premium Fabrics",
      desc: "Sourced from the finest mills to ensure elegance & durability.",
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-gold" />,
      title: "Timely Delivery",
      desc: "Your outfits arrive on schedule, every time.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-gold" />,
      title: "Luxury Finish",
      desc: "Attention to detail for a flawless couture experience.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-brand-white via-brand-sage/10 to-brand-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Fashion Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl shadow-2xl border-4 border-brand-gold/30">
            <img
              src="https://images.unsplash.com/photo-1602810318383-e37787f8c21e"
              alt="Tailoring"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Decorative overlay */}
          <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-brand-gold/20 rounded-full blur-3xl" />
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-charcoal">
              Why <span className="text-brand-gold">Choose Us?</span>
            </h2>
            <p className="mt-4 text-lg text-brand-charcoal/70 max-w-xl font-body">
              We blend timeless craftsmanship with modern elegance, making every
              stitch a celebration of your individuality.
            </p>
          </div>

          {/* Features with dividers */}
          <div className="space-y-6">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 border-l-2 border-brand-gold pl-6 hover:translate-x-2 transition-transform"
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-charcoal">
                    {item.title}
                  </h3>
                  <p className="text-brand-sage/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
