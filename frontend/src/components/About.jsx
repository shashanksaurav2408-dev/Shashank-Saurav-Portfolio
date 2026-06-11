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
          <div className="relative w-full max-w-[440px] mx-auto">
            <div className="absolute -inset-3 border-[3px] border-ink rounded-[2rem] rotate-[-2deg]" />
            <div className="relative bg-powder border-2 border-ink rounded-[1.8rem] overflow-hidden shadow-hardLg aspect-[4/5] flex items-end justify-center">
              {/* Soft paper-texture inside the frame */}
              <div className="absolute inset-0 paper-grain" aria-hidden />
              <img
                src="/portraits/engineer.png"
                alt="Shashank Saurav as an engineer with hard hat"
                loading="lazy"
                className="relative z-10 w-full h-full object-contain object-bottom"
                style={{ filter: "grayscale(1) contrast(1.05)" }}
              />
            </div>
            {/* Doodles around */}
            <div className="absolute -top-8 -right-6 w-20 h-14 rotate-[15deg] z-20">
              <HandArrow className="w-full h-full" color="#1A1A24" />
            </div>
            <div className="absolute -bottom-6 -left-8 w-24 h-10 rotate-[-10deg] z-20">
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
