"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl transition-all duration-500 ${isScrolled ? "border border-[#D08327]/20 bg-[#FEFBF2]/90 text-foreground shadow-[0_24px_80px_rgba(58,15,24,0.12)] backdrop-blur-2xl rounded-full" : "border border-white/15 bg-black/8 text-white backdrop-blur-[4px] rounded-full"}`}
      style={{
        boxShadow: isScrolled 
          ? "0 20px 60px rgba(58, 15, 24, 0.1), 0 4px 20px rgba(208, 131, 39, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.7)" 
          : "0 4px 30px rgba(0, 0, 0, 0.1)"
      }}
    >
      <div className="flex items-center justify-between transition-all duration-300 px-2 pl-5 py-2">
        {/* Logo */}
        <Link href="#hero" className="group">
          <Logo isScrolled={isScrolled} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-9 md:flex">
          {[
            { href: "#technology", label: "Venue" },
            { href: "#gallery", label: "Gallery" },
            { href: "#accessories", label: "Packages" },
            { href: "#about", label: "About" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative text-[13px] font-medium tracking-wide transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-[#D08327] after:transition-all after:duration-300 hover:after:w-full ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#reserve"
            className={`btn-shimmer rounded-full px-6 py-2.5 text-[13px] font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${isScrolled ? "bg-gradient-to-r from-[#3a0f18] to-[#5a1f2e] text-[#f0d7ad] shadow-[0_10px_30px_rgba(58,15,24,0.2)]" : "bg-white/95 text-[#3a0f18] shadow-[0_10px_30px_rgba(0,0,0,0.15)] hover:bg-white"}`}
          >
            Book a Tour
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="transition-colors md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mt-2 rounded-[1.5rem] border border-[#D08327]/20 bg-[#FEFBF2]/98 px-6 py-8 text-foreground shadow-[0_28px_80px_rgba(58,15,24,0.15)] backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-5">
            {[
              { href: "#technology", label: "Venue" },
              { href: "#gallery", label: "Gallery" },
              { href: "#accessories", label: "Packages" },
              { href: "#about", label: "About" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-display text-xl text-foreground transition-colors hover:text-[#D08327]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-gradient-to-r from-transparent via-[#D08327]/30 to-transparent" />
            <Link
              href="#reserve"
              className="btn-shimmer rounded-full bg-gradient-to-r from-[#3a0f18] to-[#5a1f2e] px-6 py-3.5 text-center text-sm font-semibold tracking-wide text-[#f0d7ad]"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Tour
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
