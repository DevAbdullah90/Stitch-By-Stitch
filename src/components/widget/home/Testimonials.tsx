// components/Testimonials.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    role: "Bride",
    quote: "Stitch by Stitch made my wedding unforgettable. The craftsmanship and attention to detail felt like royalty.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
    positionClasses: "top-1/4 left-[15%] -rotate-6",
  },
  {
    id: 2,
    name: "Sara Malik",
    role: "Entrepreneur",
    quote: "My custom suit was beyond perfection. Confidence and elegance stitched into every detail.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop",
    positionClasses: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-3",
  },
  {
    id: 3,
    name: "Zainab Fatima",
    role: "Event Host",
    quote: "Their evening gown made me feel powerful yet graceful — like I owned the night.",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=800&auto=format&fit=crop",
    positionClasses: "top-[30%] right-[15%] rotate-8",
  },
];

// --- A decorative SVG for the background atmosphere ---
const DressFormSVG = () => (
    <svg width="200" height="400" viewBox="0 0 159 414" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-20 -left-24 text-brand-sage/10 opacity-50 -z-10">
        <path d="M80.3333 112.333C84.6667 112.333 87.6667 109 87.6667 105.333V4C87.6667 2.33333 82.3333 1 80 1C77.6667 1 72.3333 2.33333 72.3333 4V105.333C72.3333 109 76 112.333 80.3333 112.333Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M116.5 133C121 148.5 120.167 172.167 119 181L114.5 240C113 259.5 103.833 283.333 98.5 292.5L80.5 321L62.5 292.5C57.1667 283.333 48 259.5 46.5 240L42 181C40.8333 172.167 40 148.5 44.5 133C48.1667 121.333 58.3333 116.167 65.5 115.5C72.6667 114.833 79.5 118 79.5 118C79.5 118 88.3333 114.833 95.5 115.5C102.667 116.167 112.833 121.333 116.5 133Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M1 413H158" stroke="currentColor" strokeWidth="2"/>
        <path d="M80 321V413" stroke="currentColor" strokeWidth="2"/>
    </svg>
);


export default function Testimonials() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedTestimonial = testimonials.find((t) => t.id === selectedId);

  return (
    <section className="relative bg-brand-white py-28 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
       <DressFormSVG />
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-sage/5 to-brand-gold/5 -z-20"></div>

        {/* Header */}
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="relative z-10 text-center mb-12"
        >
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-brand-charcoal">
                From the <span className="italic text-brand-gold">Atelier</span>
            </h2>
            <p className="mt-6 text-lg text-brand-soft-charcoal max-w-2xl mx-auto">
                Select a portrait to read the story behind the stitches.
            </p>
        </motion.div>

        {/* Interactive Collage Canvas */}
        <div className="relative w-full max-w-5xl h-[60vh] z-0">
            {testimonials.map((item) => (
                <motion.div
                    key={item.id}
                    layoutId={`testimonial-card-${item.id}`}
                    onClick={() => setSelectedId(item.id)}
                    className={`absolute cursor-pointer p-2 bg-white rounded-lg shadow-gold-glow ${item.positionClasses}`}
                    whileHover={{ scale: 1.05, rotate: item.positionClasses.includes('rotate-8') ? 10 : -4, zIndex: 20 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                    <motion.img
                        layoutId={`testimonial-image-${item.id}`}
                        src={item.image}
                        alt={item.name}
                        className="w-40 h-56 md:w-52 md:h-72 object-cover rounded"
                    />
                </motion.div>
            ))}
        </div>

        {/* Modal for Focused View */}
        <AnimatePresence>
            {selectedId && selectedTestimonial && (
                <motion.div
                    onClick={() => setSelectedId(null)}
                    className="fixed inset-0 bg-brand-charcoal/50 backdrop-blur-md flex items-center justify-center z-50 p-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center" onClick={(e) => e.stopPropagation()}>
                        {/* The Magic Motion Image */}
                        <motion.div layoutId={`testimonial-card-${selectedId}`} className="p-3 bg-white rounded-xl shadow-gold-glow-hover">
                            <motion.img
                                layoutId={`testimonial-image-${selectedId}`}
                                src={selectedTestimonial.image}
                                alt={selectedTestimonial.name}
                                className="w-full h-[60vh] max-h-[500px] object-cover rounded-lg"
                            />
                        </motion.div>
                        
                        {/* The Story Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <span className="font-heading text-8xl text-brand-gold/30 leading-none">“</span>
                            <blockquote className="mt-[-2rem]">
                                <p className="font-heading text-3xl italic text-brand-white leading-relaxed">
                                    {selectedTestimonial.quote}
                                </p>
                            </blockquote>
                            <div className="mt-6 text-left">
                                <p className="font-body text-xl font-bold text-white">{selectedTestimonial.name}</p>
                                <p className="font-body text-white/70">{selectedTestimonial.role}</p>
                            </div>
                        </motion.div>
                    </div>
                     {/* Close Button */}
                    <motion.button 
                        onClick={() => setSelectedId(null)}
                        className="absolute top-6 right-6 text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/10"
                        whileHover={{ scale: 1.1, rotate: 90 }}
                    >
                       ✕
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    </section>
  );
}