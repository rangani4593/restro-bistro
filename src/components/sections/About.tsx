"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IconFork, IconCocktail, IconLock, IconGlobe, IconArrow } from "@/components/ui/Icons";

const FADE = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

const STATS = [
  { val: "4.8★", sub: "Google Rating"    },
  { val: "1.1K+", sub: "Reviews"         },
  { val: "50+",  sub: "Global Dishes"    },
  { val: "AYCE", sub: "All You Can Eat"  },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 md:py-36" style={{ background: "var(--dark-2)" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Two column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Images column */}
          <div className="relative">
            {/* Large image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="img-zoom aspect-[4/5] max-w-md"
            >
              <img
                src="/images/6.webp"
                alt="Restro dining room"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating second image */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="img-zoom absolute -bottom-8 -right-4 lg:-right-12 w-44 md:w-56 aspect-[3/4] border-4"
              style={{ borderColor: "var(--dark-2)" }}
            >
              <img
                src="/images/2.webp"
                alt="Restro interior detail"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Rating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="glass absolute top-6 -right-4 lg:-right-10 px-5 py-4 text-center"
            >
              <p className="font-display text-4xl font-light text-[var(--amber)]"
                 style={{ fontFamily: "var(--font-cormorant)" }}>
                4.8
              </p>
              <div className="stars text-xs mt-0.5">★★★★★</div>
              <p className="eyebrow text-[0.55rem] text-white/40 mt-1">Top Rated</p>
            </motion.div>
          </div>

          {/* Text column */}
          <div className="lg:pl-4">
            <motion.p {...FADE(0)} className="eyebrow mb-4">Our Story</motion.p>

            <motion.h2
              {...FADE(0.08)}
              className="font-display font-light text-white mb-5 leading-tight"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.6rem,5vw,4.2rem)" }}
            >
              Where Global Flavours<br />
              <span style={{ color: "var(--teal-light)", fontStyle: "italic" }}>
                Meet Local Heart
              </span>
            </motion.h2>

            <motion.div {...FADE(0.12)} className="teal-line mb-7" />

            <motion.p {...FADE(0.16)} className="font-body text-white/55 font-light leading-relaxed text-base mb-5">
              Tucked along Lambhvel Road, opposite the Hero Showroom, Restro was born from a
              simple belief — that Anand deserved a dining experience as rich and varied as the
              world itself.
            </motion.p>
            <motion.p {...FADE(0.2)} className="font-body text-white/55 font-light leading-relaxed text-base mb-10">
              From an all-you-can-eat feast that spans six continents to intimate private
              dining rooms crafted for life&apos;s special moments, every corner of Restro is
              designed to make you linger, laugh and return.
            </motion.p>

            {/* Features grid */}
            <motion.div {...FADE(0.24)} className="grid grid-cols-2 gap-4 mb-10">
              {[
                { Icon: IconFork,     txt: "All You Can Eat" },
                { Icon: IconCocktail, txt: "Happy Hour Bar"  },
                { Icon: IconLock,     txt: "Private Dining"  },
                { Icon: IconGlobe,    txt: "Global Cuisine"  },
              ].map((f) => (
                <div key={f.txt} className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(27,143,160,0.12)", color: "var(--teal-light)" }}>
                    <f.Icon size={15} strokeWidth={1.6} />
                  </span>
                  <span className="font-body text-sm text-white/65 tracking-wide">{f.txt}</span>
                </div>
              ))}
            </motion.div>

            <motion.div {...FADE(0.28)}>
              <a href="#menu" className="btn-ghost">
                Explore Our Menu
                <IconArrow size={15} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* ── Stats strip ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-20 border border-white/5">
          {STATS.map((s, i) => (
            <motion.div
              key={s.sub}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              className="py-10 text-center border-r border-white/5 last:border-r-0"
              style={{ background: "var(--dark-3)" }}
            >
              <p
                className="font-display font-light mb-1"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "2.4rem",
                  color: "var(--teal-light)",
                }}
              >
                {s.val}
              </p>
              <p className="eyebrow text-[0.62rem] text-white/35">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
