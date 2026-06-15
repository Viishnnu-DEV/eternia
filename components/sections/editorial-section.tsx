"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const specs = [
  { label: "Capacity", value: "300+", suffix: "guests" },
  { label: "Venues", value: "5", suffix: "spaces" },
  { label: "Events Yearly", value: "200+", suffix: "celebrations" },
  { label: "Satisfaction", value: "100%", suffix: "rated" },
];

export function EditorialSection() {
  return (
    <section className="bg-background">
      {/* Booking Banner */}
      <div id="reserve" className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Decorative top border */}
          <div className="mb-12 flex items-center gap-4 md:mb-16">
            <div className="h-px flex-1 bg-gradient-to-r from-[#D08327]/30 to-transparent" />
            <div className="h-2 w-2 rotate-45 border border-[#D08327]/40" />
            <div className="h-px flex-1 bg-gradient-to-l from-[#D08327]/30 to-transparent" />
          </div>

          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-start md:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-gradient-to-r from-[#D08327] to-transparent" />
                <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#D08327]">
                  Private Viewings
                </p>
              </div>
              <h2 className="mt-5 font-display text-4xl font-medium leading-[1.1] text-foreground md:text-6xl">
                Begin shaping your celebration.
              </h2>
            </div>
            <div className="md:pt-4">
              <p className="max-w-md text-[15px] leading-7 text-muted-foreground">
                Guided tours with styling notes and date availability.
              </p>
              
              {/* Contact details */}
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail size={14} className="text-[#D08327]" />
                  <span>events@eternia.example</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone size={14} className="text-[#D08327]" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin size={14} className="text-[#D08327]" />
                  <span>Beverly Hills, CA</span>
                </div>
              </div>
              
              <Link
                href="mailto:events@eternia.example"
                className="btn-shimmer mt-8 inline-flex rounded-full bg-gradient-to-r from-[#3a0f18] to-[#5a1f2e] px-8 py-3.5 text-sm font-bold tracking-wide text-[#f0d7ad] shadow-[0_16px_45px_rgba(58,15,24,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_55px_rgba(58,15,24,0.22)]"
              >
                Request Availability
              </Link>
            </div>
          </div>

          {/* Bottom decorative border */}
          <div className="mt-12 flex items-center gap-4 md:mt-16">
            <div className="h-px flex-1 bg-gradient-to-r from-[#D08327]/30 to-transparent" />
            <div className="h-2 w-2 rotate-45 border border-[#D08327]/40" />
            <div className="h-px flex-1 bg-gradient-to-l from-[#D08327]/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* Specs Grid */}
      <div className="grid grid-cols-2 border-t border-[#D08327]/15 bg-[#FEFBF2] md:grid-cols-4">
        {specs.map((spec, idx) => (
          <div
            key={spec.label}
            className={`group border-b border-r border-[#D08327]/10 p-8 text-center transition-colors duration-300 hover:bg-[#FEFAF0] last:border-r-0 md:border-b-0 md:p-12 ${idx === 0 ? '' : ''}`}
          >
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.4em] text-[#D08327]">
              {spec.label}
            </p>
            <p className="font-display text-5xl font-medium text-foreground transition-colors duration-300 group-hover:text-[#3a0f18] md:text-6xl">
              {spec.value}
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground/60">
              {spec.suffix}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
