"use client";

import { motion } from "framer-motion";
import { IconFork, IconWine, IconLock } from "@/components/ui/Icons";

const CARDS = [
  {
    Icon: IconFork,
    title: "All You Can Eat",
    sub: "Weekend Lunch Buffet",
    badge: "Weekends Only",
    desc: "Over 40 dishes spanning Indian, Asian, Continental and Lebanese cuisines. Bottomless bread, live counters, dessert station — one flat price.",
    price: "₹699 / person",
    img: "/images/6.webp",
  },
  {
    Icon: IconWine,
    title: "Happy Hour",
    sub: "Every Day · 4 PM – 7 PM",
    badge: "Daily Special",
    desc: "Handcrafted cocktails, curated mocktails, and bar bites at half the price. Our mixologists rotate the menu weekly so there's always something new.",
    price: "50% Off Drinks",
    img: "/images/11.webp",
  },
  {
    Icon: IconLock,
    title: "Private Dining",
    sub: "For 8 – 40 Guests",
    badge: "Pre-booking Required",
    desc: "Celebrate milestones in a space designed for intimacy. Custom menus, dedicated service, curated décor — whether anniversary dinner or board meeting.",
    price: "Custom Packages",
    img: "/images/5.webp",
  },
];

const REVIEWS = [
  {
    name: "Priya M.",
    rating: 5,
    text: "The ambiance is unlike anything Anand has seen. We came for a birthday and left with memories that'll last years. The cocktails alone are worth the visit.",
    date: "Oct 2024",
  },
  {
    name: "Rahul S.",
    rating: 5,
    text: "Happy hour is genuinely the best deal in town. Staff is warm without being intrusive — a rare balance. The watermelon cocktail presentation is unreal.",
    date: "Sep 2024",
  },
  {
    name: "Meera K.",
    rating: 5,
    text: "Booked private dining for our anniversary. Chef came out personally, food was immaculate, service impeccable. Cannot recommend enough.",
    date: "Aug 2024",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-36" style={{ background: "var(--dark-2)" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">Crafted Experiences</p>
          <h2
            className="font-display font-light text-white"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem,5vw,4rem)" }}
          >
            More Than a <span style={{ color: "var(--teal-light)", fontStyle: "italic" }}>Meal</span>
          </h2>
        </div>

        {/* Experience cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-24">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -5 }}
              className="glass overflow-hidden group"
            >
              {/* Top image */}
              <div className="img-zoom h-48 overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(27,143,160,0.14)", color: "var(--teal-light)" }}>
                    <c.Icon size={17} strokeWidth={1.5} />
                  </span>
                  <span className="eyebrow text-[0.58rem] text-[var(--teal-light)]">{c.badge}</span>
                </div>
                <h3
                  className="font-display font-light text-white mb-0.5"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.6rem" }}
                >
                  {c.title}
                </h3>
                <p className="font-body text-white/35 text-xs tracking-wide mb-4">{c.sub}</p>
                <div className="teal-line mb-4" />
                <p className="font-body text-white/55 text-sm leading-relaxed mb-6">{c.desc}</p>
                <div className="flex items-center justify-between">
                  <span
                    className="font-display font-light text-[var(--amber)]"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem" }}
                  >
                    {c.price}
                  </span>
                  <a
                    href="#reservation"
                    className="eyebrow text-[0.62rem] text-[var(--teal-light)] border-b border-[var(--teal)]/30 hover:border-[var(--teal)] transition-colors pb-px"
                  >
                    Book Now →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reviews */}
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">Guest Reviews</p>
          <h3
            className="font-display font-light text-white"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem,4vw,3rem)" }}
          >
            What Our Guests Say
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass p-7"
            >
              <div className="stars text-sm mb-4">{"★".repeat(r.rating)}</div>
              <p
                className="font-display italic text-white/75 leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.15rem" }}
              >
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body text-sm text-white/70 font-medium">{r.name}</p>
                  <p className="eyebrow text-[0.58rem] text-white/28">{r.date}</p>
                </div>
                <span className="font-body text-[var(--teal-light)] text-sm font-semibold">Google</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
