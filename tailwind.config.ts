import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "#ffffff",
          sage: "#c8d3c0",
          gold: "#c6a664",
          charcoal: "#1a1a1a",
          "soft-charcoal": "#4a4a4a", // Added for body text
        },
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"], // elegant
        body: ["'Inter'", "sans-serif"],         // modern clean
      },
      boxShadow: {
        // Updated for a better "glow" effect and to include a hover state
        "gold-glow": "0 0 40px 0px rgba(198, 166, 100, 0.35)",
        "gold-glow-hover": "0 0 50px 10px rgba(198, 166, 100, 0.45)",
      },
      // --- ADDED FOR ANIMATION ---
      animation: {
        "infinite-scroll": "infinite-scroll 50s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      // --- END OF ADDED ANIMATION ---
    },
  },
  plugins: [],
};

export default config;