import React from "react";
import { motion } from "framer-motion";
import { Squiggle, HandArrow } from "./Doodles";

const projects = [
  {
    id: "dammn-kombucha",
    title: "DAMMN KOMBUCHA",
    summary:
      "The new way for Indians to socialise. A differentiated positioning strategy for a new functional beverage brand.",
    tag: "Brand Positioning",
    href: "https://canva.link/t1eob216gi5i5n8",
    image: "/projects/Damm.png",  },
  {
    id: "sound-of-home",
    title: "THE SOUND OF HOME",
    summary:
      "Understanding how a utilitarian kitchen appliance became a symbol of care, prosperity and belonging.",
    tag: "Cultural Research",
    href: "https://canva.link/ydj3yqaj4vjcxyd",
    image: "/projects/SOH.png",
  },
  {
    id: "djanae",
    title: "D'JANAÉ",
    summary:
      "A consumer-centric strategic framework and positioning system for a luxury fragrance brand entering India.",
    tag: "Luxury Strategy",
    href: "https://canva.link/jyi5fg4h576wiqo",
    image: "/projects/DJANAE.png",
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
            <p className="font-mono text-[10px] tracking-[0.3em] text-ink/70 mb-3">04 · SELECTED WORK</p>
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
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
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
        <div className="absolute top-32 right-12 hidden md:block w-24 h-16 rotate-12 opacity-80">
          <HandArrow className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Collections;
