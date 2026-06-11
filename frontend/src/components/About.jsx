import React from "react";
import { motion } from "framer-motion";
import { HandArrow, Squiggle, StickyNote } from "./Doodles";

const facets = [
  "Mechanical Engineering",
  "Product Innovation",
  "Growth Strategy",
  "Brand Strategy",
  "Research",
  "Human Behaviour",
  "Business Storytelling",
];

const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative bg-powder paper-grain py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Engineer silhouette card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
          data-testid="about-image-card"
        >
          <div className="relative w-full max-w-[420px] mx-auto">
            <div className="absolute -inset-3 border-[3px] border-ink rounded-[2rem] rotate-[-2deg]" />
            <div className="relative bg-white border-2 border-ink rounded-[1.8rem] overflow-hidden shadow-hardLg">
              <svg viewBox="0 0 360 460" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="aboutBg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DDE6F5" />
                    <stop offset="100%" stopColor="#b1c2dd" />
                  </linearGradient>
                </defs>
                <rect width="360" height="460" fill="url(#aboutBg)" />
                {/* Body / vest */}
                <path d="M70 460 C 80 360, 130 330, 180 330 C 230 330, 280 360, 290 460 Z" fill="#1A1A24" />
                {/* Hi-vis vest */}
                <path d="M105 360 L 105 460 L 145 460 L 145 360 Z" fill="#F6D34B" />
                <path d="M215 360 L 215 460 L 255 460 L 255 360 Z" fill="#F6D34B" />
                {/* Reflective bands */}
                <rect x="105" y="395" width="40" height="6" fill="#fff" />
                <rect x="215" y="395" width="40" height="6" fill="#fff" />
                {/* Head */}
                <ellipse cx="180" cy="235" rx="62" ry="74" fill="#6d574b" />
                {/* Beard */}
                <path d="M130 250 C 140 305, 220 305, 230 250 C 220 285, 140 285, 130 250 Z" fill="#1A1A24" />
                {/* Smile */}
                <path d="M158 268 Q 180 280, 202 268" stroke="#1A1A24" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                {/* Helmet */}
                <path d="M108 200 C 108 145, 252 145, 252 200 L 252 215 L 108 215 Z" fill="#ffffff" stroke="#1A1A24" strokeWidth="3" />
                <rect x="108" y="208" width="144" height="10" fill="#ffffff" stroke="#1A1A24" strokeWidth="3" />
                <rect x="172" y="155" width="16" height="50" fill="#1A1A24" opacity="0.15" />
                {/* Arm holding wrench */}
                <path d="M225 360 C 270 340, 290 300, 285 280" stroke="#1A1A24" strokeWidth="22" strokeLinecap="round" fill="none" />
                <circle cx="288" cy="278" r="14" fill="#9aa3ad" stroke="#1A1A24" strokeWidth="2" />
                <rect x="282" y="245" width="12" height="40" fill="#9aa3ad" stroke="#1A1A24" strokeWidth="2" />
              </svg>
            </div>
            {/* Doodles around */}
            <div className="absolute -top-8 -right-6 w-20 h-14 rotate-[15deg]">
              <HandArrow className="w-full h-full" color="#1A1A24" />
            </div>
            <div className="absolute -bottom-6 -left-8 w-24 h-10 rotate-[-10deg]">
              <Squiggle className="w-full h-full" color="#F6D34B" />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <p className="font-mono text-[10px] tracking-[0.3em] text-ink/70 mb-3">02 — ORIGIN STORY</p>
            <h2
              data-testid="about-headline"
              className="font-cabinet font-black text-ink text-4xl sm:text-5xl md:text-6xl leading-[0.95]"
            >
              Hello, I&apos;m <br />
              <span className="font-hand font-bold text-steel text-5xl sm:text-6xl md:text-7xl italic">
                Shashank Saurav
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg md:text-xl text-ink/85 leading-relaxed mb-6"
            data-testid="about-narrative"
          >
            An <strong>Engineer</strong> turned <strong>Design Strategist</strong>, just because the{" "}
            <span className="scribble-underline font-semibold">HOWs</span> &{" "}
            <span className="scribble-underline font-semibold">WHYs</span> in my life refused to let me
            stay just an engineer.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="text-ink/75 leading-relaxed mb-8"
          >
            I dig into habits people don&apos;t notice, tensions brands don&apos;t see, and behaviours hiding in plain sight — then convert them into business opportunities.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            className="flex flex-wrap gap-2"
            data-testid="about-tags"
          >
            {facets.map((f, i) => (
              <motion.span
                key={f}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: { opacity: 1, y: 0 },
                }}
                className={`font-mono text-[10px] md:text-xs tracking-[0.15em] uppercase px-3 py-2 border-2 border-ink rounded-full ${
                  i % 3 === 0 ? "bg-sun" : i % 3 === 1 ? "bg-white" : "bg-steel text-white"
                }`}
              >
                {f}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
