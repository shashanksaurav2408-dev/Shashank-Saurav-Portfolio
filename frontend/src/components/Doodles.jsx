// Hand-drawn SVG doodles used throughout the portfolio.
// Each component returns an inline SVG so it can be styled with Tailwind.

import React from "react";

export const ArrowSquiggle = ({ className = "", color = "#1A1A24" }) => (
  <svg viewBox="0 0 120 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 15 C 25 5, 45 35, 65 20 S 95 55, 110 40"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    <path d="M110 40 L100 32 M110 40 L102 50" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const CurvyArrowDown = ({ className = "", color = "#1A1A24" }) => (
  <svg viewBox="0 0 60 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 5 C 10 25, 50 50, 25 75 L 25 90" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M25 90 L15 80 M25 90 L35 80" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const StarBurst = ({ className = "", color = "#F6D34B" }) => (
  <svg viewBox="0 0 60 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 5 L34 24 L52 24 L37 35 L43 53 L30 42 L17 53 L23 35 L8 24 L26 24 Z" fill={color} stroke="#1A1A24" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

export const Squiggle = ({ className = "", color = "#1A1A24" }) => (
  <svg viewBox="0 0 200 30" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 15 C 25 0, 50 30, 75 15 S 125 0, 150 15 S 200 30, 198 15" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
  </svg>
);

export const StickyNote = ({ className = "", color = "#F6D34B", rotate = -4 }) => (
  <div
    className={className}
    style={{
      background: color,
      transform: `rotate(${rotate}deg)`,
      boxShadow: "6px 6px 0 0 #1A1A24",
      border: "2px solid #1A1A24",
      padding: "0.5rem 0.75rem",
    }}
  />
);

export const PaperCut = ({ className = "", color = "#DDE6F5" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 15 L 85 8 L 92 70 L 80 88 L 15 92 L 5 60 Z"
      fill={color}
      stroke="#1A1A24"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export const HandArrow = ({ className = "", color = "#1A1A24" }) => (
  <svg viewBox="0 0 80 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 30 Q 35 5, 70 28" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M70 28 L 60 22 M70 28 L 62 36" stroke={color} strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const SuperBadge = ({ className = "" }) => (
  <svg viewBox="0 0 120 140" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M60 5 L110 25 L100 90 L60 130 L20 90 L10 25 Z" fill="#1A1A24" stroke="#F6D34B" strokeWidth="3" />
    <text x="60" y="78" textAnchor="middle" fontFamily="Cabinet Grotesk, sans-serif" fontWeight="900" fontSize="36" fill="#F6D34B">S</text>
  </svg>
);
