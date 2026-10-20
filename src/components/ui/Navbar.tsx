"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about",       label: "Our Story" },
  { href: "#menu",        label: "Menu" },
  { href: "#gallery",     label: "Gallery" },
  { href: "#experience",  label: "Experience" },
  { href: "#contact",     label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0C0C0C]/90 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Brand */}
          <a href="#" className="flex flex-col leading-none group">
            <span
              className="font-display text-[1.6rem] font-light tracking-[0.18em] text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              RESTRO
            </span>
            <span className="eyebrow text-[0.52rem] mt-0.5 tracking-[0.3em]">
              Global Cuisine Bar & Bistro
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link font-body text-xs font-light tracking-[0.18em] uppercase text-white/60 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a href="#reservation" className="hidden md:inline-flex btn-primary text-[0.7rem]">
            Reserve a Table
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden flex flex-col gap-[6px] w-8 justify-center"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  open
                    ? i === 0
                      ? { rotate: 45, y: 10 }
                      : i === 1
                      ? { opacity: 0 }
                      : { rotate: -45, y: -10 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                className="block h-px bg-white origin-center"
                style={{ width: i === 1 ? "75%" : "100%" }}
              />
            ))}
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0C0C0C] flex flex-col items-center justify-center gap-8"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="font-display text-5xl font-light text-white hover:text-[var(--teal-light)] transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href="#reservation"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 }}
              className="btn-primary mt-6"
            >
              Reserve a Table
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
