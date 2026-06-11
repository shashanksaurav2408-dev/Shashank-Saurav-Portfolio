import React from "react";
import { motion } from "framer-motion";
import { Squiggle, HandArrow, StarBurst } from "./Doodles";

const projects = [
  {
    id: "dammn-kombucha",
    title: "DAMMN KOMBUCHA",
    summary:
      "The new way for Indians to socialise. A differentiated positioning strategy for a new functional beverage brand.",
    tag: "Brand Positioning",
    href: "#",
    palette: { bg: "#F6D34B", img: "#ff5a8a" },
    cover: (
      <svg viewBox="0 0 400 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#ffe06b" />
        <rect x="20" y="20" width="170" height="240" fill="#ff5a8a" />
        <rect x="210" y="20" width="170" height="240" fill="#fff196" />
        <rect x="65" y="50" width="80" height="180" rx="14" fill="#ff2d70" />
        <rect x="255" y="50" width="80" height="180" rx="14" fill="#fff7d1" />
        <text x="105" y="150" textAnchor="middle" fontFamily="Cabinet Grotesk" fontWeight="900" fontSize="22" fill="#1A1A24">DAMMN</text>
        <text x="295" y="150" textAnchor="middle" fontFamily="Cabinet Grotesk" fontWeight="900" fontSize="22" fill="#1A1A24">DAMMN</text>
      </svg>
    ),
  },
  {
    id: "sound-of-home",
    title: "THE SOUND OF HOME",
    summary:
      "Understanding how a utilitarian kitchen appliance became a symbol of care, prosperity and belonging.",
    tag: "Cultural Research",
    href: "#",
    palette: { bg: "#1A1A24", img: "#F6D34B" },
    cover: (
      <svg viewBox="0 0 400 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="280" fill="#1A1A24" />
        <rect x="0" y="40" width="400" height="60" fill="#F6D34B" />
        <text x="200" y="82" textAnchor="middle" fontFamily="Cabinet Grotesk" fontWeight="900" fontSize="30" fill="#1A1A24">THE SOUND OF HOME</text>
        <ellipse cx="200" cy="200" rx="80" ry="20" fill="#3a3a48" />
        <rect x="150" y="140" width="100" height="60" rx="6" fill="#9aa3ad" />
        <rect x="195" y="120" width="10" height="20" fill="#9aa3ad" />
        <path d="M170 110 Q 180 90, 200 100 Q 220 90, 230 110" stroke="#fff" strokeWidth="3" fill="none" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: "djanae",
    title: "D'JANAÉ",
    summary:
      "A consumer-centric strategic framework and positioning system for a luxury fragrance brand entering India.",
    tag: "Luxury Strategy",
    href: "#",
    palette: { bg: "#DDE6F5", img: "#6B88B3" },
    cover: (
      <svg viewBox="0 0 400 280" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="silk" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f3e3c0" />
            <stop offset="100%" stopColor="#c8a978" />
          </linearGradient>
        </defs>
        <rect width="400" height="280" fill="url(#silk)" />
        {[60, 140, 220, 300].map((x, i) => (
          <g key={x} transform={`translate(${x},80)`}>
            <rect x="-22" y="40" width="44" height="120" fill={["#b81e3b", "#1f5b3a", "#d97aa3", "#e0a93b"][i]} stroke="#1A1A24" strokeWidth="1.5" />
            <rect x="-12" y="20" width="24" height="22" fill="#1A1A24" />
            <circle cx="0" cy="14" r="14" fill={["#b81e3b", "#1f5b3a", "#d97aa3", "#e0a93b"][i]} stroke="#1A1A24" strokeWidth="1.5" />
            <text x="0" y="105" textAnchor="middle" fontFamily="Cabinet Grotesk" fontWeight="900" fontSize="9" fill="#1A1A24">D'JANAÉ</text>
          </g>
        ))}
      </svg>
    ),
  },
];

const Collections = () => {
  return (
    <section
      id="collections"
      data-testid="collections-section"
      className="relative bg-powder paper-grain py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] text-ink/70 mb-3">04 — SELECTED WORK</p>
            <h2
              data-testid="collections-headline"
              className="font-cabinet font-black text-ink text-5xl sm:text-6xl md:text-7xl leading-none"
            >
              COLLECTIONS
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Squiggle className="w-24 h-6" color="#1A1A24" />
            <p className="font-hand text-3xl md:text-4xl text-steel">of my latest work ✦</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white border-2 border-ink rounded-3xl overflow-hidden shadow-hard hover:shadow-hardLg transition-all duration-300"
              data-testid={`project-card-${p.id}`}
            >
              <div className="relative overflow-hidden border-b-2 border-ink">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="aspect-[4/3]">
                  {p.cover}
                </motion.div>
                <span className="absolute top-3 left-3 bg-ink text-sun font-mono text-[10px] tracking-[0.2em] px-2 py-1 rounded-full">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-cabinet font-black text-ink text-2xl mb-3">{p.title}</h3>
                <p className="text-ink/75 leading-relaxed text-sm md:text-base mb-5">{p.summary}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`project-read-more-${p.id}`}
                  className="inline-flex items-center gap-2 bg-steel text-white font-cabinet font-bold border-2 border-ink px-5 py-2.5 rounded-full shadow-hardSm hover:bg-sun hover:text-ink transition-colors"
                >
                  READ MORE
                  <span aria-hidden>→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Doodles */}
        <div className="absolute -bottom-4 right-6 hidden md:block w-14 h-14 opacity-90">
          <StarBurst className="w-full h-full" />
        </div>
        <div className="absolute top-32 right-12 hidden md:block w-24 h-16 rotate-12 opacity-80">
          <HandArrow className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Collections;
