"use client";

import { motion } from "framer-motion";
import { IconPin, IconClock, IconPhone } from "@/components/ui/Icons";

const CARDS = [
  {
    Icon: IconPin,
    title: "Location",
    content: (
      <>
        <p className="font-body text-white/50 text-sm leading-relaxed">
          Lambhvel Road, Opp. Hero Showroom<br />Near GIDC, Anand<br />Gujarat — 388001
        </p>
        <a
          href="https://maps.google.com/?q=Restro+Global+Cuisine+Bar+Bistro+Anand"
          target="_blank" rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 eyebrow text-[0.62rem] text-[var(--teal-light)] border-b border-[var(--teal)]/30 hover:border-[var(--teal)] transition-colors pb-px"
        >
          Open in Maps →
        </a>
      </>
    ),
  },
  {
    Icon: IconClock,
    title: "Hours",
    content: (
      <div className="space-y-4">
        {[
          { d: "Mon – Thu", t: "12:00 PM – 11:00 PM" },
          { d: "Friday",    t: "12:00 PM – 12:00 AM" },
          { d: "Sat – Sun", t: "11:00 AM – 12:00 AM" },
        ].map(h => (
          <div key={h.d}>
            <p className="eyebrow text-[0.6rem] text-white/30">{h.d}</p>
            <p className="font-body text-white/60 text-sm">{h.t}</p>
          </div>
        ))}
        <div className="flex items-center gap-2 pt-1">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="eyebrow text-[0.6rem] text-green-400/80">Open Now</span>
        </div>
      </div>
    ),
  },
  {
    Icon: IconPhone,
    title: "Contact",
    content: (
      <div className="space-y-4">
        <div>
          <p className="eyebrow text-[0.6rem] text-white/30 mb-1">Phone / WhatsApp</p>
          <p className="font-body text-white/65 text-sm select-all">+91 98765 43210</p>
        </div>
        <div>
          <p className="eyebrow text-[0.6rem] text-white/30 mb-1">Email</p>
          <p className="font-body text-white/65 text-sm select-all">hello@restrobistro.in</p>
        </div>
        <div>
          <p className="eyebrow text-[0.6rem] text-white/30 mb-2">Follow Us</p>
          <div className="flex gap-3">
            {["Instagram", "Facebook", "Zomato"].map(s => (
              <span key={s} className="font-body text-xs text-[var(--teal-light)] hover:text-white transition-colors cursor-pointer">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-36" style={{ background: "var(--dark-3)" }}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Find Us</p>
          <h2
            className="font-display font-light text-white"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem,5vw,4rem)" }}
          >
            Come Visit{" "}
            <span style={{ color: "var(--teal-light)", fontStyle: "italic" }}>Us</span>
          </h2>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass p-8"
              style={{ borderRadius: "16px" }}
            >
              {/* Icon in teal circle */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-5"
                style={{ background: "rgba(27,143,160,0.14)", color: "var(--teal-light)" }}
              >
                <card.Icon size={18} strokeWidth={1.5} />
              </div>
              <h3
                className="font-display font-light text-white mb-5"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.4rem" }}
              >
                {card.title}
              </h3>
              {card.content}
            </motion.div>
          ))}
        </div>

        {/* Exterior photo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-64 md:h-80 overflow-hidden"
          style={{ borderRadius: "20px", border: "1px solid rgba(27,143,160,0.15)" }}
        >
          <img src="/images/7.webp" alt="Restro exterior" className="w-full h-full object-cover opacity-50" />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "rgba(12,12,12,0.45)" }}
          >
            <div className="text-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(27,143,160,0.2)", color: "var(--teal-light)" }}
              >
                <IconPin size={22} strokeWidth={1.4} />
              </div>
              <p
                className="font-display font-light text-white mb-1"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem" }}
              >
                Restro Global Cuisine Bar &amp; Bistro
              </p>
              <p className="eyebrow text-[0.62rem] text-white/40 mb-6">
                Lambhvel Road, Anand, Gujarat
              </p>
              <a
                href="https://maps.google.com/?q=Restro+Global+Cuisine+Bar+Bistro+Anand+Gujarat"
                target="_blank" rel="noopener noreferrer"
                className="btn-primary btn-sm"
              >
                <IconPin size={13} />
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
