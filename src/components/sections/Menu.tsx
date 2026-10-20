"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATS = ["All", "Starters", "Mains", "Asian", "Continental", "Desserts", "Drinks"];

const ITEMS = [
  { id:1,  name:"Truffle Mushroom Bruschetta", cat:"Starters",     price:"₹320", desc:"Wild mushrooms, truffle oil, sourdough, parmesan",      tag:"Chef's Pick", veg:true,  img:"/images/9.webp"  },
  { id:2,  name:"Sushi Boat (8 pcs)",          cat:"Asian",        price:"₹680", desc:"California, spicy tuna, dragon roll, pickled ginger",   tag:"Bestseller",  veg:false, img:"/images/8.webp"  },
  { id:3,  name:"Butter Chicken",              cat:"Mains",        price:"₹440", desc:"Slow-cooked chicken, rich tomato-cream masala, naan",   tag:"Bestseller",  veg:false, img:"/images/6.webp"  },
  { id:4,  name:"Avocado Toast",               cat:"Starters",     price:"₹280", desc:"Multigrain sourdough, smashed avocado, cherry tomato",  tag:"",            veg:true,  img:"/images/9.webp"  },
  { id:5,  name:"Thai Green Curry",            cat:"Asian",        price:"₹420", desc:"Coconut milk, lemongrass, jasmine rice, Thai basil",    tag:"Chef's Pick", veg:true,  img:"/images/6.webp"  },
  { id:6,  name:"Pasta Carbonara",             cat:"Continental",  price:"₹520", desc:"Spaghetti, guanciale, pecorino romano, egg yolk",       tag:"",            veg:false, img:"/images/6.webp"  },
  { id:7,  name:"Chocolate Mirror Cake",       cat:"Desserts",     price:"₹340", desc:"Belgian chocolate glaze, chocolate sponge, ganache",    tag:"Must Try",    veg:true,  img:"/images/3.webp"  },
  { id:8,  name:"Watermelon Sculpture Cooler", cat:"Drinks",       price:"₹320", desc:"Fresh watermelon, mint, lime, soda — carved to order",  tag:"Signature",   veg:true,  img:"/images/10.webp" },
  { id:9,  name:"Berry Crush Cocktail",        cat:"Drinks",       price:"₹280", desc:"Mixed berries, elderflower, sparkling water, mint",     tag:"Popular",     veg:true,  img:"/images/14.webp" },
  { id:10, name:"Coconut Margarita",           cat:"Drinks",       price:"₹350", desc:"Coconut cream, lime, triple sec, salted rim",           tag:"Chef's Pick", veg:true,  img:"/images/15.webp" },
  { id:11, name:"Filet Mignon",                cat:"Continental",  price:"₹950", desc:"200g tenderloin, red wine jus, truffle mash",           tag:"Premium",     veg:false, img:"/images/6.webp"  },
  { id:12, name:"Sunset Mocktail",             cat:"Drinks",       price:"₹220", desc:"Passion fruit, kiwi, orange, watermelon heart garnish", tag:"Bestseller",  veg:true,  img:"/images/13.webp" },
];

const TAG_STYLE: Record<string, { bg: string; color: string }> = {
  "Chef's Pick": { bg: "rgba(27,143,160,0.9)",   color: "#fff" },
  "Bestseller":  { bg: "rgba(212,119,42,0.9)",   color: "#fff" },
  "Must Try":    { bg: "rgba(212,119,42,0.9)",   color: "#fff" },
  "Signature":   { bg: "rgba(27,143,160,0.9)",   color: "#fff" },
  "Popular":     { bg: "rgba(27,143,160,0.9)",   color: "#fff" },
  "Premium":     { bg: "rgba(124,58,237,0.9)",   color: "#fff" },
};

export default function Menu() {
  const [active, setActive] = useState("All");
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const filtered = active === "All" ? ITEMS : ITEMS.filter(m => m.cat === active);

  /* Drag-to-scroll */
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollLeft.current - (x - startX.current) * 1.2;
  };
  const stopDrag = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  return (
    <section id="menu" className="py-24 md:py-36 overflow-hidden" style={{ background: "var(--dark-3)" }}>

      {/* ── Header ── */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">Curated Selection</p>
            <h2
              className="font-display font-light text-white leading-tight"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.8rem,6vw,5rem)" }}
            >
              A World on<br />
              <span style={{ color: "var(--teal-light)", fontStyle: "italic" }}>Your Plate</span>
            </h2>
          </div>
          <div className="md:text-right md:max-w-xs">
            <p className="font-body text-white/40 text-sm leading-relaxed mb-5">
              Six continents of flavour. Crafted fresh, plated with intention — every visit a new discovery.
            </p>
            <a href="#reservation" className="btn-primary btn-sm">Reserve a Table</a>
          </div>
        </div>
      </div>

      {/* ── Pill filter tabs ── */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
          {CATS.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileTap={{ scale: 0.95 }}
              className={`flex-shrink-0 px-5 py-2 text-[0.68rem] tracking-widest uppercase font-medium transition-all duration-300 rounded-full border ${
                active === cat
                  ? "bg-[var(--teal)] border-[var(--teal)] text-white shadow-[0_4px_18px_rgba(27,143,160,0.35)]"
                  : "border-white/12 text-white/45 hover:border-[var(--teal)]/50 hover:text-white/75 bg-transparent"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── Horizontal scroll carousel ── */}
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        className="flex gap-4 overflow-x-auto px-6 pb-4 select-none"
        style={{
          scrollSnapType: "x mandatory",
          cursor: "grab",
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          paddingLeft: "max(24px, calc((100vw - 1280px) / 2 + 24px))",
          paddingRight: "max(24px, calc((100vw - 1280px) / 2 + 24px))",
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="relative flex-shrink-0 overflow-hidden group"
              style={{
                scrollSnapAlign: "start",
                width: "clamp(240px, 28vw, 320px)",
                height: "clamp(360px, 50vh, 460px)",
                borderRadius: "20px",
              }}
            >
              {/* Full-bleed image */}
              <img
                src={item.img}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                draggable={false}
              />

              {/* Bottom gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.55) 45%, rgba(10,10,10,0.05) 100%)",
                }}
              />

              {/* Top row: tag + veg indicator */}
              <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                {item.tag ? (
                  <span
                    className="font-body text-[0.6rem] font-semibold tracking-wider uppercase px-3 py-1"
                    style={{
                      background: TAG_STYLE[item.tag]?.bg ?? "rgba(27,143,160,0.9)",
                      color: TAG_STYLE[item.tag]?.color ?? "#fff",
                      borderRadius: "100px",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {item.tag}
                  </span>
                ) : <span />}
                <span
                  className="w-5 h-5 flex items-center justify-center"
                  style={{
                    border: `2px solid ${item.veg ? "#4ade80" : "#f87171"}`,
                    borderRadius: "3px",
                    background: "rgba(0,0,0,0.5)",
                  }}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: item.veg ? "#4ade80" : "#f87171" }}
                  />
                </span>
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                {/* Category */}
                <p className="eyebrow text-[0.55rem] text-white/45 mb-2">{item.cat}</p>
                {/* Name */}
                <h3
                  className="font-display font-light text-white leading-tight mb-2"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.45rem" }}
                >
                  {item.name}
                </h3>
                {/* Divider */}
                <div className="w-8 h-px bg-[var(--teal)] mb-3 transition-all duration-300 group-hover:w-16" />
                {/* Desc */}
                <p className="font-body text-white/45 text-xs leading-relaxed mb-4 line-clamp-2">{item.desc}</p>
                {/* Price */}
                <span
                  className="font-display font-light"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.6rem",
                    color: "var(--amber)",
                  }}
                >
                  {item.price}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Scroll hint */}
      <div className="max-w-7xl mx-auto px-6 mt-5 flex items-center gap-3">
        <div className="h-px flex-1 bg-white/5" />
        <p className="font-body text-[0.6rem] tracking-widest uppercase text-white/20">Drag to explore</p>
        <div className="h-px flex-1 bg-white/5" />
      </div>

      {/* ── AYCE Promo Banner ── */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden"
          style={{ borderRadius: "24px", minHeight: "280px" }}
        >
          {/* BG */}
          <img src="/images/6.webp" alt="AYCE" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,10,10,0.93) 50%, rgba(10,10,10,0.65) 100%)" }} />

          {/* Teal accent bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--teal)]" />

          <div className="relative px-10 md:px-16 py-12 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <p className="eyebrow mb-4">Weekend Buffet Special</p>
              <h3
                className="font-display font-light text-white leading-tight mb-4"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2rem,4vw,3.2rem)" }}
              >
                All You Can Eat —{" "}
                <span style={{ color: "var(--teal-light)" }}>₹699</span>
                <span className="text-white/40 text-2xl"> / person</span>
              </h3>
              <p className="font-body text-white/50 text-sm leading-relaxed max-w-md">
                Saturday &amp; Sunday lunch. 40+ dishes across Indian, Asian, Continental &amp; Lebanese cuisines. Live counters, dessert station, bottomless bread.
              </p>
            </div>
            <div className="flex-shrink-0 text-center">
              {/* Circular badge */}
              <div
                className="w-32 h-32 rounded-full flex flex-col items-center justify-center mb-5"
                style={{ border: "1.5px solid rgba(27,143,160,0.4)", background: "rgba(27,143,160,0.1)" }}
              >
                <p className="font-body text-[0.55rem] tracking-widest uppercase text-[var(--teal-light)] mb-1">Starting at</p>
                <p className="font-display font-light text-white" style={{ fontFamily: "var(--font-cormorant)", fontSize: "2rem" }}>₹699</p>
                <p className="font-body text-[0.55rem] tracking-widest uppercase text-white/35">per person</p>
              </div>
              <a href="#reservation" className="btn-primary btn-sm">Book Your Seat</a>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
