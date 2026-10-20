"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TIME_SLOTS = [
  "12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM",
  "6:30 PM","7:00 PM","7:30 PM","8:00 PM","8:30 PM","9:00 PM","9:30 PM",
];

export default function Reservation() {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name:"", phone:"", email:"", date:"", time:"", guests:"2", occasion:"", notes:"",
  });

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => { e.preventDefault(); setDone(true); };

  return (
    <section id="reservation" className="relative py-24 md:py-36 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <img src="/images/4.webp" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "rgba(12,12,12,0.88)" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left info */}
          <div>
            <p className="eyebrow mb-5">Make a Reservation</p>
            <h2
              className="font-display font-light text-white leading-tight mb-7"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem,5vw,4.2rem)" }}
            >
              Reserve Your<br />
              <span style={{ color: "var(--teal-light)", fontStyle: "italic" }}>Evening</span>
            </h2>
            <div className="teal-line mb-7" />
            <p className="font-body text-white/50 font-light leading-relaxed mb-10 max-w-sm text-sm">
              Secure your table at Anand&apos;s most celebrated dining destination. For large groups
              or private events, our team will personally reach out to customise your experience.
            </p>

            {[
              { icon: "🕐", label:"Lunch",   val:"12:00 PM – 3:30 PM"              },
              { icon: "🌙", label:"Dinner",  val:"6:30 PM – 11:00 PM"              },
              { icon: "📍", label:"Address", val:"Lambhvel Rd, opp. Hero Showroom, Anand" },
              { icon: "📞", label:"Phone",   val:"+91 98765 43210"                 },
            ].map(i => (
              <div key={i.label} className="flex items-start gap-4 mb-5">
                <span className="text-lg mt-0.5">{i.icon}</span>
                <div>
                  <p className="eyebrow text-[0.58rem] text-white/30 mb-0.5">{i.label}</p>
                  <p className="font-body text-white/65 text-sm">{i.val}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right form */}
          <div className="glass p-8 md:p-10">
            <AnimatePresence mode="wait">
              {done ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 220, delay: 0.1 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "var(--teal)", fontSize: "1.8rem" }}
                  >
                    ✓
                  </motion.div>
                  <h3
                    className="font-display font-light mb-3"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "2rem", color: "var(--teal-light)" }}
                  >
                    Table Reserved!
                  </h3>
                  <p className="font-body text-white/50 text-sm leading-relaxed mb-7">
                    Thank you, {form.name}. We&apos;ll confirm your reservation via WhatsApp within 30 minutes.
                  </p>
                  <button onClick={() => setDone(false)} className="btn-ghost text-xs">
                    Make Another Reservation
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} className="space-y-4">
                  <h3
                    className="font-display font-light text-white mb-6"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.8rem" }}
                  >
                    Your Details
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="eyebrow text-[0.58rem] text-white/35 block mb-1.5">Full Name</label>
                      <input name="name" value={form.name} onChange={set} placeholder="Priya Sharma" required className="input-base" />
                    </div>
                    <div>
                      <label className="eyebrow text-[0.58rem] text-white/35 block mb-1.5">Phone</label>
                      <input name="phone" value={form.phone} onChange={set} placeholder="+91 98765 43210" required className="input-base" />
                    </div>
                  </div>

                  <div>
                    <label className="eyebrow text-[0.58rem] text-white/35 block mb-1.5">Email</label>
                    <input name="email" type="email" value={form.email} onChange={set} placeholder="priya@email.com" className="input-base" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="eyebrow text-[0.58rem] text-white/35 block mb-1.5">Date</label>
                      <input name="date" type="date" value={form.date} onChange={set} required className="input-base" style={{ colorScheme: "dark" }} />
                    </div>
                    <div>
                      <label className="eyebrow text-[0.58rem] text-white/35 block mb-1.5">Time</label>
                      <select name="time" value={form.time} onChange={set} required className="input-base">
                        <option value="">Select Time</option>
                        {TIME_SLOTS.map(t => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="eyebrow text-[0.58rem] text-white/35 block mb-1.5">Guests</label>
                      <select name="guests" value={form.guests} onChange={set} className="input-base">
                        {Array.from({length:12},(_,i)=>i+1).map(n=><option key={n}>{n}</option>)}
                        <option value="13+">13+ (Large Group)</option>
                      </select>
                    </div>
                    <div>
                      <label className="eyebrow text-[0.58rem] text-white/35 block mb-1.5">Occasion</label>
                      <select name="occasion" value={form.occasion} onChange={set} className="input-base">
                        <option>No Special Occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Date Night</option>
                        <option>Business Dinner</option>
                        <option>Family Gathering</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="eyebrow text-[0.58rem] text-white/35 block mb-1.5">Special Requests</label>
                    <textarea name="notes" value={form.notes} onChange={set}
                      placeholder="Dietary restrictions, seating preference, décor requests…"
                      rows={3} className="input-base resize-none" />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center mt-2">
                    Confirm Reservation
                  </button>
                  <p className="font-body text-white/22 text-xs text-center">
                    We&apos;ll confirm via WhatsApp within 30 minutes during business hours.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
