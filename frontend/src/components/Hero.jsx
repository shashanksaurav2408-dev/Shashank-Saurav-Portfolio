import React from "react";
import { motion } from "framer-motion";
import { ArrowSquiggle, StarBurst, Squiggle, PaperCut, HandArrow } from "./Doodles";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Hero = () => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen bg-steel overflow-hidden flex items-center pt-24 pb-12"
    >
      {/* Floating doodles */}
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-28 left-[8%] w-20 h-20 hidden md:block"
      >
        <StarBurst className="w-full h-full" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-24 left-[20%] w-32 h-24 hidden md:block opacity-90"
      >
        <PaperCut className="w-full h-full" color="#DDE6F5" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/3 right-[6%] w-28 h-20 hidden lg:block"
      >
        <Squiggle className="w-full h-full" color="#F6D34B" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center w-full">
        {/* Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-powder mb-8"
            data-testid="hero-eyebrow"
          >
            BUILDING DISRUPTIVE BRAND STRATEGIES WITH UNOBVIOUS INSIGHTS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            data-testid="hero-headline"
            className="font-cabinet font-black text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight"
          >
            Welcome to the<br /> World of <span className="italic">Disruption</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            data-testid="hero-subhead"
            className="mt-6 text-white/95 text-lg md:text-xl max-w-md"
          >
            Human Thinking. <span className="text-sun font-semibold">AI Speed.</span> Real Results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex items-center gap-4 relative"
          >
            <motion.div
              animate={{ x: [0, 6, 0], rotate: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-12"
            >
              <HandArrow className="w-full h-full" color="#F6D34B" />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              data-testid="hero-cta-lets-disrupt"
              onClick={() => scrollTo("about")}
              className="bg-sun text-ink font-cabinet font-bold text-lg md:text-xl px-8 py-4 border-2 border-ink rounded-full shadow-hard hover:shadow-hardLg transition-all duration-200"
            >
              Let&apos;s Disrupt →
            </motion.button>
          </motion.div>
        </div>

        {/* Right – portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* Decorative outlined frame */}
            <div className="absolute -inset-4 border-[3px] border-sun rounded-[2.5rem] rotate-[2deg]" />
            <motion.div
              whileHover={{ rotate: -1, y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative w-[260px] h-[360px] md:w-[340px] md:h-[460px] bg-powder border-2 border-ink rounded-[2rem] overflow-hidden shadow-hardLg"
              data-testid="hero-portrait"
            >
              {/* Placeholder silhouette portrait */}
              <svg viewBox="0 0 340 460" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="bg1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DDE6F5" />
                    <stop offset="100%" stopColor="#a9b9d3" />
                  </linearGradient>
                  <linearGradient id="suit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3a3a48" />
                    <stop offset="100%" stopColor="#1A1A24" />
                  </linearGradient>
                </defs>
                <rect width="340" height="460" fill="url(#bg1)" />
                {/* Body */}
                <path d="M50 460 C 60 360, 110 320, 170 320 C 230 320, 280 360, 290 460 Z" fill="url(#suit)" />
                {/* Shirt collar */}
                <path d="M150 320 L170 360 L190 320 Z" fill="#f5f5f5" />
                <path d="M165 340 L170 460 L175 340 Z" fill="#1A1A24" />
                {/* Neck */}
                <rect x="155" y="280" width="30" height="50" fill="#5a4a40" />
                {/* Head */}
                <ellipse cx="170" cy="220" rx="68" ry="80" fill="#6d574b" />
                {/* Hair */}
                <path d="M105 200 C 110 145, 230 145, 235 205 C 235 175, 215 155, 170 152 C 125 155, 105 175, 105 200 Z" fill="#1A1A24" />
                {/* Beard */}
                <path d="M115 240 C 125 295, 215 295, 225 240 C 215 275, 125 275, 115 240 Z" fill="#1A1A24" />
                {/* Eyes */}
                <ellipse cx="145" cy="218" rx="3" ry="4" fill="#1A1A24" />
                <ellipse cx="195" cy="218" rx="3" ry="4" fill="#1A1A24" />
                {/* Smile */}
                <path d="M150 252 Q 170 268, 190 252" stroke="#1A1A24" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </motion.div>
            {/* corner sticky */}
            <div className="absolute -top-6 -left-6 w-12 h-12 hidden md:block">
              <StarBurst className="w-full h-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
