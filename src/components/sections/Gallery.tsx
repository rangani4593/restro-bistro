"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { IconMusic, IconWine, IconCalendar, IconUsers, IconStar } from "@/components/ui/Icons";

const TAGS = [
  { Icon: IconStar,     label: "Candlelight Evenings"  },
  { Icon: IconMusic,    label: "Live Music Fridays"    },
  { Icon: IconWine,     label: "Anniversary Packages"  },
  { Icon: IconCalendar, label: "Birthday Specials"     },
  { Icon: IconUsers,    label: "Corporate Dining"      },
];

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="gallery" className="py-24 md:py-36" style={{ background: "var(--dark)" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow mb-3">Visual Journey</p>
            <h2
              className="font-display font-light text-white"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem,5vw,4.5rem)" }}
            >
              Inside{" "}
              <span style={{ color: "var(--teal-light)", fontStyle: "italic" }}>Restro</span>
            </h2>
          </div>
          <p className="font-body text-white/40 max-w-xs text-sm leading-relaxed">
            Every table is staged. Every corner considered. Come for the food, stay for the atmosphere.
          </p>
        </div>

        {/* ── Editorial Bento Grid ── */}
        <div
          className="grid gap-3"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "280px 280px",
          }}
        >
          {/* Large hero — 5 cols, 2 rows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="img-zoom relative overflow-hidden group cursor-pointer"
            style={{ gridColumn: "1 / 6", gridRow: "1 / 3", borderRadius: "16px" }}
          >
            <img src="/images/4.webp" alt="Restro at night" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6"
              style={{ background: "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 60%)" }}>
              <p className="eyebrow text-[0.6rem] text-white/70 mb-1">Restro · Anand</p>
              <p className="font-display font-light text-white text-2xl" style={{ fontFamily: "var(--font-cormorant)" }}>Evening Ambiance</p>
            </div>
          </motion.div>

          {/* Top-right tall — 4 cols, 1 row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="img-zoom relative overflow-hidden group cursor-pointer"
            style={{ gridColumn: "6 / 10", gridRow: "1 / 2", borderRadius: "16px" }}
          >
            <img src="/images/11.webp" alt="Signature cocktails" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
              style={{ background: "linear-gradient(to top, rgba(10,10,10,0.75) 0%, transparent 60%)" }}>
              <span className="eyebrow text-[0.58rem] text-white/80">Signature Cocktails</span>
            </div>
          </motion.div>

          {/* Top-right narrow — 3 cols, 1 row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="img-zoom relative overflow-hidden group cursor-pointer"
            style={{ gridColumn: "10 / 13", gridRow: "1 / 2", borderRadius: "16px" }}
          >
            <img src="/images/8.webp" alt="Sushi presentation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
              style={{ background: "linear-gradient(to top, rgba(10,10,10,0.75) 0%, transparent 60%)" }}>
              <span className="eyebrow text-[0.58rem] text-white/80">Sushi Platter</span>
            </div>
          </motion.div>

          {/* Bottom-middle wide — 4 cols, 1 row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="img-zoom relative overflow-hidden group cursor-pointer"
            style={{ gridColumn: "6 / 10", gridRow: "2 / 3", borderRadius: "16px" }}
          >
            <img src="/images/5.webp" alt="Daytime dining" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
              style={{ background: "linear-gradient(to top, rgba(10,10,10,0.75) 0%, transparent 60%)" }}>
              <span className="eyebrow text-[0.58rem] text-white/80">Daytime Dining</span>
            </div>
          </motion.div>

          {/* Bottom-right — 3 cols, 1 row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="img-zoom relative overflow-hidden group cursor-pointer"
            style={{ gridColumn: "10 / 13", gridRow: "2 / 3", borderRadius: "16px" }}
          >
            <img src="/images/10.webp" alt="Watermelon cocktail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4"
              style={{ background: "linear-gradient(to top, rgba(10,10,10,0.75) 0%, transparent 60%)" }}>
              <span className="eyebrow text-[0.58rem] text-white/80">Carved Cocktail</span>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom photo strip (horizontal scroll) ── */}
        <div
          className="flex gap-3 mt-3 overflow-x-auto pb-1"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {[
            { src: "/images/14.webp", alt: "Berry cocktail"    },
            { src: "/images/15.webp", alt: "Margarita"         },
            { src: "/images/13.webp", alt: "Sunset mocktail"   },
            { src: "/images/3.webp",  alt: "Chocolate dessert" },
            { src: "/images/7.webp",  alt: "Restro exterior"   },
            { src: "/images/2.webp",  alt: "Bistro seating"    },
            { src: "/images/9.webp",  alt: "Avocado toast"     },
          ].map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="img-zoom relative overflow-hidden group flex-shrink-0 cursor-pointer"
              style={{ width: "140px", height: "100px", borderRadius: "12px" }}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-2"
                style={{ background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 60%)" }}>
                <span className="eyebrow text-[0.5rem] text-white/70">{p.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Experience Tags ── */}
        <div className="flex flex-wrap justify-center gap-3 mt-14">
          {TAGS.map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -3, borderColor: "var(--teal)" }}
              className="flex items-center gap-2.5 glass px-5 py-3 cursor-default transition-all duration-300"
              style={{ borderRadius: "100px" }}
            >
              <span style={{ color: "var(--teal-light)" }}>
                <Icon size={14} strokeWidth={1.6} />
              </span>
              <span className="font-body text-sm text-white/55 tracking-wide">{label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
