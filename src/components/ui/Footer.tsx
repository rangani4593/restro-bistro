"use client";

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }} className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <p
              className="font-display text-2xl font-light tracking-widest text-white"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              RESTRO
            </p>
            <p className="eyebrow text-[0.52rem] text-[var(--teal-light)] mb-3 mt-0.5">Global Cuisine Bar & Bistro</p>
            <p className="font-body text-white/35 text-xs leading-relaxed">
              Anand&apos;s finest dining destination.<br />Rated 4.8★ by 1,100+ guests.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <p className="eyebrow text-[0.62rem] text-white/30 mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {["Our Story","Menu","Gallery","Experiences","Reservations"].map(l=>(
                <li key={l}>
                  <a href="#" className="font-body text-white/45 text-sm hover:text-[var(--teal-light)] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <p className="eyebrow text-[0.62rem] text-white/30 mb-4">Experiences</p>
            <ul className="space-y-2.5">
              {["All You Can Eat","Happy Hour","Private Dining","Corporate Events","Birthday Packages"].map(l=>(
                <li key={l}>
                  <a href="#" className="font-body text-white/45 text-sm hover:text-[var(--teal-light)] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="eyebrow text-[0.62rem] text-white/30 mb-4">Visit Us</p>
            <p className="font-body text-white/40 text-xs leading-relaxed mb-3">
              Lambhvel Road, Opp. Hero Showroom<br />Anand, Gujarat — 388001
            </p>
            <p className="font-body text-white/40 text-sm select-all mb-4">+91 98765 43210</p>
            <div className="flex items-center gap-3">
              {["IG","FB","ZO"].map(s=>(
                <span key={s} className="w-8 h-8 border border-white/10 flex items-center justify-center text-[var(--teal-light)] text-xs font-medium cursor-pointer hover:border-[var(--teal)] transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/18 text-xs">
            © 2024 Restro Global Cuisine Bar & Bistro. All rights reserved.
          </p>
          <p className="font-body text-white/18 text-xs">Crafted with care · Anand, Gujarat</p>
        </div>
      </div>
    </footer>
  );
}
