"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { IconArrow, IconCalendar } from "@/components/ui/Icons";

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0 },
};

export default function Hero() {
  const bgRef  = useRef<HTMLDivElement>(null);

  /* Subtle parallax on scroll */
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        gsap.set(bgRef.current, { y: window.scrollY * 0.25 });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[640px] flex flex-col overflow-hidden">

      {/* ── Background image ── */}
      <div ref={bgRef} className="absolute inset-0 scale-[1.08] will-change-transform">
        <img
          src="/images/4.webp"
          alt="Restro interior"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* ── Gradient layers ── */}
      {/* bottom-heavy dark fade so text sits clearly */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/60 to-[#0C0C0C]/20" />
      {/* left fade for extra legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/70 via-transparent to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto w-full px-6 pb-16 md:pb-20">

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.13 } } }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={FADE_UP}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-5 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-[var(--teal)]" />
            Est. Anand, Gujarat &nbsp;·&nbsp; 4.8 ★ Google Rating
          </motion.p>

          {/* Main headline */}
          <motion.h1
            variants={FADE_UP}
            transition={{ duration: 0.75 }}
            className="font-display font-light text-white leading-[0.95] tracking-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(4.5rem, 11vw, 9.5rem)",
            }}
          >
            Restro
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={FADE_UP}
            transition={{ duration: 0.65 }}
            className="font-display italic text-[var(--teal-light)] leading-tight tracking-wide mt-1"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
            }}
          >
            Global Cuisine Bar &amp; Bistro
          </motion.p>

          {/* Divider */}
          <motion.div
            variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
            transition={{ duration: 0.6 }}
            className="origin-left w-24 h-px bg-[var(--teal)] mt-6 mb-6"
          />

          {/* Description */}
          <motion.p
            variants={FADE_UP}
            transition={{ duration: 0.6 }}
            className="font-body text-white/60 font-light leading-relaxed max-w-xl"
            style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}
          >
            Six continents of flavour. One extraordinary space. All-you-can-eat indulgence,
            handcrafted cocktails, and private dining — in the heart of Anand.
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={FADE_UP}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mt-10 flex-wrap"
          >
            <a href="#reservation" className="btn-primary">
              <IconCalendar size={15} />
              Reserve a Table
            </a>
            <a href="#menu" className="btn-ghost">
              View Menu
              <IconArrow size={15} />
            </a>
          </motion.div>
        </motion.div>

        {/* ── Bottom info strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute bottom-8 right-6 hidden md:flex flex-col items-end gap-1"
        >
          {[
            { val: "4.8★",  label: "Rating"         },
            { val: "1.1K+", label: "Happy Guests"   },
            { val: "AYCE",  label: "All You Can Eat" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="font-body text-[0.6rem] tracking-widest uppercase text-white/35">
                {item.label}
              </span>
              <span className="font-display text-[var(--amber)] text-lg font-light"
                style={{ fontFamily: "var(--font-cormorant)" }}>
                {item.val}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-[var(--teal)] to-transparent"
        />
        <span
          className="eyebrow text-[0.5rem] text-white/25 tracking-[0.4em]"
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
