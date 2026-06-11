import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { StarBurst, HandArrow, Squiggle } from "./Doodles";

const milestones = [
  { org: "PESIT South Bangalore", role: "BE — Mechanical Engineering", period: "2012 – 2016", side: "left" },
  { org: "ISDI Mumbai", role: "PGDD — Product Innovation & Strategy", period: "2020 – 2022", side: "right" },
  { org: "Open Strategy & Design", role: "Senior Growth Strategist", period: "May 2022 – Sept 2023", side: "left" },
  { org: "Gozoop Group", role: "Senior Brand Strategist", period: "Oct 2023 – May 2024", side: "right" },
  { org: "Lopez Design", role: "Senior Brand Strategist", period: "June 2024 – April 2025", side: "left" },
  { org: "Rite Angles Consultants", role: "Manager — Strategy & Marketing", period: "May 2025 – Nov 2025", side: "right" },
  { org: "Independent Strategy Consultant", role: "Currently disrupting brands", period: "Jan 2026 – Present", side: "left" },
];

const Journey = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Flying hero soars from upper-left across the section
  const flyX = useTransform(scrollYProgress, [0, 1], ["-8%", "62%"]);
  const flyY = useTransform(scrollYProgress, [0, 1], ["0%", "85%"]);
  const flyRot = useTransform(scrollYProgress, [0, 1], [-12, 8]);
  const flyScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.85]);

  return (
    <section
      ref={ref}
      id="journey"
      data-testid="journey-section"
      className="relative bg-steel py-24 md:py-32 overflow-hidden"
    >
      {/* Flying superhero — parallax-tracks scroll */}
      <motion.div
        style={{ x: flyX, y: flyY, rotate: flyRot, scale: flyScale }}
        className="pointer-events-none absolute top-24 left-0 w-[260px] md:w-[420px] z-20 hidden md:block"
        aria-hidden
      >
        <img
          src="/portraits/super-flying.png"
          alt=""
          className="w-full h-auto drop-shadow-[6px_6px_0_rgba(26,26,36,0.5)]"
        />
        {/* Speed trails */}
        <svg viewBox="0 0 200 80" className="absolute -left-24 top-1/3 w-32 h-12 -rotate-12 opacity-80" fill="none">
          <path d="M5 40 C 40 20, 80 60, 120 40 S 180 20, 195 40" stroke="#F6D34B" strokeWidth="4" strokeLinecap="round" />
          <path d="M5 20 C 50 5, 90 35, 140 20" stroke="#DDE6F5" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
        </svg>
      </motion.div>

      {/* Title block */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, rotate: -10, y: 12 }}
          whileInView={{ opacity: 1, rotate: -4, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-block"
        >
          <p className="font-mono text-[10px] tracking-[0.3em] text-powder mb-3">03 — TIMELINE</p>
          <h2
            data-testid="journey-headline"
            className="font-hand text-sun text-6xl md:text-8xl font-bold leading-none drop-shadow-[3px_3px_0_rgba(26,26,36,0.4)]"
          >
            How I moved in life
          </h2>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 z-10">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] bg-powder/40 md:-translate-x-1/2" aria-hidden />
        <div
          className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] md:-translate-x-1/2"
          style={{
            backgroundImage: "linear-gradient(180deg, #F6D34B 50%, transparent 50%)",
            backgroundSize: "3px 14px",
          }}
          aria-hidden
        />

        <ul className="space-y-12 md:space-y-16 relative">
          {milestones.map((m, i) => {
            const isLeft = m.side === "left";
            return (
              <motion.li
                key={m.org}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative flex md:items-center md:justify-between md:gap-8"
                data-testid={`journey-item-${i}`}
              >
                {/* checkpoint dot */}
                <span
                  className="absolute left-6 md:left-1/2 top-2 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-6 h-6 bg-sun border-2 border-ink rounded-full z-10"
                  aria-hidden
                />

                <div
                  className={`pl-16 md:pl-0 md:w-[46%] ${
                    isLeft ? "md:text-right md:pr-12" : "md:order-2 md:text-left md:pl-12"
                  }`}
                >
                  <div className="inline-block bg-powder border-2 border-ink rounded-2xl px-5 py-4 shadow-hard hover:shadow-hardLg hover:-translate-y-1 transition-all duration-200">
                    <p className="font-mono text-[10px] tracking-[0.2em] text-ink/70">{m.period}</p>
                    <h3 className="font-cabinet font-black text-ink text-xl md:text-2xl mt-1">{m.org}</h3>
                    <p className="text-ink/80 text-sm md:text-base mt-1">{m.role}</p>
                  </div>
                </div>
                <div className={`hidden md:block md:w-[46%] ${isLeft ? "" : "md:order-1"}`} />
              </motion.li>
            );
          })}
        </ul>

        {/* Standing superhero at end - next to "Independent" milestone */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="absolute right-2 md:right-6 -bottom-4 md:-bottom-16 w-[180px] md:w-[300px] pointer-events-none z-20 hidden md:block"
          aria-hidden
        >
          <img
            src="/portraits/super-standing.png"
            alt=""
            className="w-full h-auto drop-shadow-[6px_6px_0_rgba(26,26,36,0.4)]"
          />
        </motion.div>

        {/* Mobile-only standing hero, smaller */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:hidden flex justify-center mt-10"
        >
          <img
            src="/portraits/super-standing.png"
            alt=""
            className="w-44 h-auto"
          />
        </motion.div>

        {/* Hero pose at end */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-16 flex flex-col items-center"
        >
          <div className="flex items-center gap-4">
            <HandArrow className="w-14 h-10 -rotate-12" color="#F6D34B" />
            <p className="font-hand text-3xl md:text-5xl text-sun">…and the story continues</p>
            <HandArrow className="w-14 h-10 rotate-180" color="#F6D34B" />
          </div>
        </motion.div>
      </div>

      {/* floating decorations */}
      <div className="absolute top-10 left-6 md:left-16 w-10 h-10 opacity-90">
        <StarBurst className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 left-12 w-32 h-10 opacity-80 hidden md:block">
        <Squiggle className="w-full h-full" color="#F6D34B" />
      </div>
    </section>
  );
};

export default Journey;
