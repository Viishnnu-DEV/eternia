"use client";

import React from "react";

interface LogoProps {
  isScrolled?: boolean;
  className?: string;
  variant?: "icon" | "full";
}

export function Logo({ isScrolled = false, className = "", variant = "full" }: LogoProps) {
  // Gold gradient color stops
  const stop1 = "#EED7A1"; // Champagne gold
  const stop2 = "#D08327"; // Primary gold
  const stop3 = "#A86415"; // Rich copper gold

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Dynamic Logo Crest Emblem */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-500 hover:rotate-12"
      >
        <defs>
          <linearGradient id="logo-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={stop1} />
            <stop offset="50%" stopColor={stop2} />
            <stop offset="100%" stopColor={stop3} />
          </linearGradient>
        </defs>

        {/* Delicate outer dotted ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#logo-gold-grad)"
          strokeWidth="1.2"
          strokeDasharray="3 3"
          className="opacity-60"
        />

        {/* Solid outer boundary circle */}
        <circle
          cx="50"
          cy="50"
          r="41"
          stroke="url(#logo-gold-grad)"
          strokeWidth="0.8"
          className="opacity-80"
        />

        {/* Left Ring (represents love and commitment) */}
        <ellipse
          cx="43"
          cy="50"
          rx="14"
          ry="14"
          stroke="url(#logo-gold-grad)"
          strokeWidth="1.5"
          transform="rotate(-15 43 50)"
          className="opacity-90"
        />

        {/* Right Ring (interlocking second ring) */}
        <ellipse
          cx="57"
          cy="50"
          rx="14"
          ry="14"
          stroke="url(#logo-gold-grad)"
          strokeWidth="1.5"
          transform="rotate(15 57 50)"
          className="opacity-90"
        />

        {/* Central luxury 'E' Monogram in Serif */}
        <text
          x="50.5"
          y="58"
          fill="url(#logo-gold-grad)"
          fontSize="24"
          fontWeight="bold"
          fontFamily="var(--font-display), 'Ethdown', 'Georgia', serif"
          textAnchor="middle"
          letterSpacing="0"
        >
          E
        </text>

        {/* Sparkles / Diamonds surrounding the crest */}
        {/* Top Sparkle */}
        <path
          d="M 50 18 L 51 22 L 55 23 L 51 24 L 50 28 L 49 24 L 45 23 L 49 22 Z"
          fill="url(#logo-gold-grad)"
        />
        {/* Left Accent Dot */}
        <circle cx="20" cy="50" r="1.5" fill="url(#logo-gold-grad)" />
        {/* Right Accent Dot */}
        <circle cx="80" cy="50" r="1.5" fill="url(#logo-gold-grad)" />
      </svg>

      {/* Brand Text Name (only if full variant is requested) */}
      {variant === "full" && (
        <span
          className={`font-display text-xl font-medium tracking-[0.24em] transition-all duration-500 ${
            isScrolled
              ? "text-[#1a0a0e]" // Dark primary text on scroll
              : "text-white"      // White text on transparent/dark top state
          }`}
        >
          ETERNIA
        </span>
      )}
    </div>
  );
}
