"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect } from "react";

const collections = [
  {
    title: "Bridal Couture",
    image: "https://images.unsplash.com/photo-1602347329434-b2c79be7b7e9",
    description: "Timeless silhouettes crafted for eternal love.",
    badge: "Exclusive",
  },
  {
    title: "Evening Wear",
    image: "https://images.unsplash.com/photo-1617957741731-3b73d0d9c7a6",
    description: "Bold designs for unforgettable nights.",
    badge: "New",
  },
  {
    title: "Heritage Sarees",
    image: "https://images.unsplash.com/photo-1612336307429-8c9ef66f7d28",
    description: "Reimagining tradition with modern finesse.",
    badge: "Heritage",
  },
  {
    title: "Power Suits",
    image: "https://images.unsplash.com/photo-1520975922071-3d1e07c6d37b",
    description: "Sharp tailoring for the ambitious woman.",
    badge: "Limited",
  },
  {
    title: "Luxury Pret",
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    description: "Effortless elegance, ready to wear.",
    badge: "Luxury",
  },
];

export default function SignatureCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free",
    slides: { perView: 1.2, spacing: 20 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2.2, spacing: 30 },
      },
      "(min-width: 1200px)": {
        slides: { perView: 3.2, spacing: 40 },
      },
    },
  });

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3500);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section className="relative bg-brand-white py-24 px-6 overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-sage/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-brand-gold/10 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-brand-charcoal">
            <span className="italic text-brand-gold">Signature</span> Collection
          </h2>
          <p className="text-lg text-brand-charcoal/70 max-w-2xl mx-auto">
            Experience our couture creations — each piece tells a story of
            elegance, artistry, and timeless beauty.
          </p>
        </div>

        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider">
          {collections.map((item, i) => (
            <div
              key={i}
              className="keen-slider__slide group relative rounded-3xl overflow-hidden shadow-2xl border border-brand-gold/30"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[500px] object-cover transform group-hover:scale-110 transition duration-700"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition duration-500 group-hover:from-black/90" />

              {/* Badge */}
              <div className="absolute top-6 left-6 bg-brand-gold text-brand-charcoal font-semibold text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                {item.badge}
              </div>

              {/* Text Content */}
              <div className="absolute bottom-10 left-6 right-6 text-white space-y-2">
                <h3 className="text-3xl font-heading font-bold tracking-wide relative">
                  {item.title}
                  <span className="absolute -bottom-2 left-0 w-12 h-1 bg-brand-gold" />
                </h3>
                <p className="text-sm text-gray-200">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
