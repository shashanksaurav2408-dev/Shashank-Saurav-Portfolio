import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StarBurst, Squiggle } from "./Doodles";

const faqs = [
  {
    q: "What do you mean by disruption?",
    a: "Some problems are obvious. Others hide in habits, assumptions, and everyday behaviours. I find the latter · and turn them into business opportunities people didn't know existed.",
  },
  {
    q: "Are you really Superman?",
    a: "If I told you, I'd have to kill you. But let's just say I enjoy seeing what others overlook. Call it Heat Vision for hidden tensions in brands.",
  },
  {
    q: "Can we request a demo or case challenge?",
    a: "Absolutely. Curiosity is my favourite superpower. Send me a category, a brief, or a stuck brand · and I'll walk you through how I'd unpack it.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative bg-steel py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="mb-12">
          <p className="font-mono text-[10px] tracking-[0.3em] text-powder mb-3">05 · CURIOSITY</p>
          <h2
            data-testid="faq-headline"
            className="font-cabinet font-black text-white text-5xl md:text-7xl leading-none"
          >
            FAQs
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`border-2 border-ink rounded-3xl overflow-hidden ${
                  isOpen ? "bg-sun shadow-hardLg" : "bg-powder shadow-hard"
                } transition-all duration-300`}
                data-testid={`faq-item-${i}`}
              >
                <button
                  data-testid={`faq-toggle-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 p-6 md:p-7 text-left"
                >
                  <span className="font-cabinet font-black text-ink text-xl md:text-3xl">{item.q}</span>
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-full border-2 border-ink flex items-center justify-center font-bold text-xl bg-white transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 md:px-7 pb-6 md:pb-7 text-ink/85 text-base md:text-lg leading-relaxed"
                      data-testid={`faq-content-${i}`}
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-16 right-10 w-14 h-14 hidden md:block">
        <StarBurst className="w-full h-full" />
      </div>
      <div className="absolute bottom-12 left-10 w-32 h-10 hidden md:block opacity-90">
        <Squiggle className="w-full h-full" color="#F6D34B" />
      </div>
    </section>
  );
};

export default FAQ;
