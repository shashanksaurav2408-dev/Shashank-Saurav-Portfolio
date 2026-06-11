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
            <div className="relative w-[280px] h-[400px] md:w-[360px] md:h-[500px] flex items-end justify-center">
              <img
                src="/portraits/thanks-pointing.png"
                alt="Shashank pointing down"
                loading="lazy"
                className="w-full h-full object-contain object-bottom drop-shadow-[6px_6px_0_rgba(26,26,36,0.25)]"
                style={{ filter: "grayscale(1) contrast(1.05)" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYou;
