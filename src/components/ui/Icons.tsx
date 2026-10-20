interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

const base = (size = 24, color = "currentColor", sw = 1.4) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: color,
  strokeWidth: sw,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export const IconFork = ({ size = 24, color = "currentColor", strokeWidth = 1.4, className = "" }: IconProps) => (
  <svg {...base(size, color, strokeWidth)} className={className}>
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
);

export const IconCocktail = ({ size = 24, color = "currentColor", strokeWidth = 1.4, className = "" }: IconProps) => (
  <svg {...base(size, color, strokeWidth)} className={className}>
    <path d="M8 22h8" />
    <path d="M12 11v11" />
    <path d="m19 3-7 8-7-8Z" />
    <path d="M6.3 8h11.4" />
  </svg>
);

export const IconLock = ({ size = 24, color = "currentColor", strokeWidth = 1.4, className = "" }: IconProps) => (
  <svg {...base(size, color, strokeWidth)} className={className}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <circle cx="12" cy="16" r="1" fill={color} stroke="none" />
  </svg>
);

export const IconGlobe = ({ size = 24, color = "currentColor", strokeWidth = 1.4, className = "" }: IconProps) => (
  <svg {...base(size, color, strokeWidth)} className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

export const IconPin = ({ size = 24, color = "currentColor", strokeWidth = 1.4, className = "" }: IconProps) => (
  <svg {...base(size, color, strokeWidth)} className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconClock = ({ size = 24, color = "currentColor", strokeWidth = 1.4, className = "" }: IconProps) => (
  <svg {...base(size, color, strokeWidth)} className={className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const IconPhone = ({ size = 24, color = "currentColor", strokeWidth = 1.4, className = "" }: IconProps) => (
  <svg {...base(size, color, strokeWidth)} className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.4a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.72h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.4a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.18z" />
  </svg>
);

export const IconStar = ({ size = 24, color = "currentColor", strokeWidth = 1.4, className = "" }: IconProps) => (
  <svg {...base(size, color, strokeWidth)} className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const IconArrow = ({ size = 24, color = "currentColor", strokeWidth = 1.4, className = "" }: IconProps) => (
  <svg {...base(size, color, strokeWidth)} className={className}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const IconUsers = ({ size = 24, color = "currentColor", strokeWidth = 1.4, className = "" }: IconProps) => (
  <svg {...base(size, color, strokeWidth)} className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const IconMusic = ({ size = 24, color = "currentColor", strokeWidth = 1.4, className = "" }: IconProps) => (
  <svg {...base(size, color, strokeWidth)} className={className}>
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

export const IconCalendar = ({ size = 24, color = "currentColor", strokeWidth = 1.4, className = "" }: IconProps) => (
  <svg {...base(size, color, strokeWidth)} className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

export const IconWine = ({ size = 24, color = "currentColor", strokeWidth = 1.4, className = "" }: IconProps) => (
  <svg {...base(size, color, strokeWidth)} className={className}>
    <path d="M8 22h8" />
    <path d="M7 10h10" />
    <path d="M12 15v7" />
    <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
  </svg>
);

export const IconCheck = ({ size = 24, color = "currentColor", strokeWidth = 1.4, className = "" }: IconProps) => (
  <svg {...base(size, color, strokeWidth)} className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const IconInstagram = ({ size = 24, color = "currentColor", strokeWidth = 1.4, className = "" }: IconProps) => (
  <svg {...base(size, color, strokeWidth)} className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const IconFacebook = ({ size = 24, color = "currentColor", strokeWidth = 1.4, className = "" }: IconProps) => (
  <svg {...base(size, color, strokeWidth)} className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

/* ── Zomato Z mark ── */
export const IconZomato = ({ size = 24, color = "currentColor", className = "" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 14H8.5l5-8H9V6h6.5l-5 8H15.5v2z" />
  </svg>
);

export const IconLeaf = ({ size = 24, color = "currentColor", strokeWidth = 1.4, className = "" }: IconProps) => (
  <svg {...base(size, color, strokeWidth)} className={className}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
  </svg>
);
