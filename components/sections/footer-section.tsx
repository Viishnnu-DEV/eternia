"use client";

import Link from "next/link";
import { Logo } from "../logo";

const footerLinks = {
  explore: [
    { label: "Venue", href: "#products" },
    { label: "Spaces", href: "#technology" },
    { label: "Gallery", href: "#gallery" },
    { label: "Packages", href: "#accessories" },
  ],
  about: [
    { label: "Our Story", href: "#" },
    { label: "Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
  service: [
    { label: "FAQ", href: "#" },
    { label: "Consultations", href: "#" },
    { label: "Catering", href: "#" },
    { label: "Planning", href: "#" },
  ],
};

export function FooterSection() {
  return (
    <footer className="bg-[#0a0406] text-white">
      {/* Decorative top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D08327]/25 to-transparent" />
      
      {/* Main Footer Content */}
      <div className="px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <Link href="#hero" className="group inline-flex items-center">
              <Logo isScrolled={false} />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
              Where timeless celebrations begin.
            </p>
            
            {/* Newsletter mini form */}
            <div className="mt-8">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.4em] text-[#D08327]/70">
                Stay Inspired
              </p>
              <div className="flex max-w-xs overflow-hidden rounded-full border border-white/10 bg-white/5">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-transparent px-4 py-2.5 text-xs text-white placeholder:text-white/30 outline-none"
                />
                <button className="flex-shrink-0 bg-gradient-to-r from-[#D08327] to-[#a86415] px-5 py-2.5 text-[11px] font-bold tracking-wide text-[#1a0a0e] transition-all hover:from-[#f0a648] hover:to-[#D08327]">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.35em] text-[#D08327]">Explore</h4>
            <ul className="space-y-3.5">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors duration-300 hover:text-[#D08327]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.35em] text-[#D08327]">About</h4>
            <ul className="space-y-3.5">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors duration-300 hover:text-[#D08327]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="mb-5 text-[11px] font-bold uppercase tracking-[0.35em] text-[#D08327]">Service</h4>
            <ul className="space-y-3.5">
              {footerLinks.service.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors duration-300 hover:text-[#D08327]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8 px-6 py-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-[11px] text-white/35">
            © 2026 ETERNIA. All rights reserved.
          </p>
 
          {/* Social Links */}
          <div className="flex items-center gap-1">
            {["Instagram", "Pinterest", "Facebook"].map((social, i) => (
              <Link
                key={social}
                href="#"
                className="rounded-full px-3 py-1.5 text-[11px] text-white/40 transition-all duration-300 hover:bg-white/5 hover:text-[#D08327]"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
