"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Pin } from "lucide-react";

// --- Custom Signature SVG ---
const SignatureSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="240"
    height="90"
    viewBox="0 0 300 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <text
      x="10"
      y="70"
      fontFamily="Playfair Display"
      fontSize="42"
      fill="currentColor"
      fontWeight="600"
    >
      Stitch by Stitch
    </text>
  </svg>
);

const ArrowRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 12H19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 5L19 12L12 19"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden font-body text-brand-charcoal bg-gradient-to-b from-brand-sage/10 via-brand-white to-brand-white">
      {/* Decorative Background Accents */}
      <div className="absolute -top-40 -left-20 w-[40rem] h-[40rem] bg-brand-sage/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-[35rem] h-[35rem] bg-brand-gold/20 rounded-full blur-3xl opacity-40 shadow-gold-glow" />

      <div className="relative container mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-brand-white/80 backdrop-blur-md p-10 rounded-3xl shadow-gold-glow hover:shadow-gold-glow-hover transition-shadow duration-300 border border-brand-gold/30 relative z-10"
          >
            <h3 className="font-heading text-3xl font-bold text-brand-charcoal mb-4">
              Become an Insider
            </h3>
            <p className="mb-8 max-w-lg text-brand-charcoal/80">
              Get exclusive access to new collections, private events, and
              atelier experiences. We’ll stitch elegance right into your inbox.
            </p>
            <form className="flex flex-col sm:flex-row items-start sm:items-center w-full max-w-lg gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 bg-white/60 border border-brand-charcoal/20 rounded-full focus:ring-2 focus:ring-brand-gold focus:outline-none transition duration-300 placeholder:text-brand-charcoal/50"
              />
              <button
                type="submit"
                className="group flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-brand-gold text-brand-white rounded-full hover:bg-brand-sage hover:text-brand-charcoal transition-colors duration-300 shadow-gold-glow hover:shadow-gold-glow-hover"
              >
                <span>Subscribe</span>
                <ArrowRightIcon className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>

          {/* Links & Signature */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <SignatureSVG className="text-brand-charcoal h-16 w-auto mb-10 drop-shadow" />
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h4 className="font-heading font-bold text-lg text-brand-charcoal mb-4">
                    Company
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="hover:text-brand-gold transition-colors"
                      >
                        Our Story
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-brand-gold transition-colors"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-brand-gold transition-colors"
                      >
                        Press
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-lg text-brand-charcoal mb-4">
                    Services
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a
                        href="#"
                        className="hover:text-brand-gold transition-colors"
                      >
                        Bespoke Tailoring
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-brand-gold transition-colors"
                      >
                        Alterations
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-brand-gold transition-colors"
                      >
                        Consultations
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-brand-sage/30 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-brand-charcoal/70">
            &copy; {new Date().getFullYear()} Stitch by Stitch. All Rights
            Reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 sm:mt-0 text-brand-charcoal">
            <a
              href="#"
              className="hover:text-brand-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-brand-gold transition-colors"
              aria-label="Pinterest"
            >
              <Pin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-brand-gold transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
