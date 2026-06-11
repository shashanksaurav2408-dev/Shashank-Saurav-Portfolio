import React from "react";
import { motion } from "framer-motion";
import { CurvyArrowDown } from "./Doodles";

const ThankYou = () => {
  return (
    <section
      id="thanks"
      data-testid="thanks-section"
      className="relative bg-powder py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-ink/70 mb-4">06 — THANK YOU</p>
          <h2
            data-testid="thanks-headline"
            className="font-cabinet font-black text-ink text-5xl sm:text-6xl md:text-7xl leading-[0.95]"
          >
            Thanks for making it this far!
          </h2>
          <p className="font-mono text-[11px] tracking-[0.25em] text-ink/80 mt-6 uppercase">
            I can&apos;t wait to see where your business can go next.
          </p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-14 h-20 mt-10"
          >
            <CurvyArrowDown className="w-full h-full" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 border-[3px] border-ink rounded-[2.5rem] rotate-[3deg]" />
            <div className="relative w-[260px] h-[360px] md:w-[340px] md:h-[460px] bg-white border-2 border-ink rounded-[2rem] overflow-hidden shadow-hardLg">
              <svg viewBox="0 0 340 460" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="ty-bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#EFF3FB" />
                    <stop offset="100%" stopColor="#c5d2e8" />
                  </linearGradient>
                </defs>
                <rect width="340" height="460" fill="url(#ty-bg)" />
                {/* Casual shirt */}
                <path d="M50 460 C 60 350, 110 320, 170 320 C 230 320, 280 350, 290 460 Z" fill="#1A1A24" />
                <rect x="165" y="335" width="10" height="125" fill="#3a3a48" />
                {/* Head */}
                <ellipse cx="170" cy="220" rx="65" ry="78" fill="#6d574b" />
                <path d="M104 200 C 110 145, 230 145, 236 200 C 215 165, 125 165, 104 200 Z" fill="#1A1A24" />
                <path d="M120 245 C 130 295, 210 295, 220 245 C 210 280, 130 280, 120 245 Z" fill="#1A1A24" />
                {/* Glasses */}
                <circle cx="146" cy="218" r="14" fill="none" stroke="#1A1A24" strokeWidth="3" />
                <circle cx="194" cy="218" r="14" fill="none" stroke="#1A1A24" strokeWidth="3" />
                <line x1="160" y1="218" x2="180" y2="218" stroke="#1A1A24" strokeWidth="3" />
                {/* Pointing down hands */}
                <path d="M80 380 L 60 440 L 70 445 L 90 390 Z" fill="#6d574b" stroke="#1A1A24" strokeWidth="1.5" />
                <path d="M260 380 L 280 440 L 270 445 L 250 390 Z" fill="#6d574b" stroke="#1A1A24" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYou;
