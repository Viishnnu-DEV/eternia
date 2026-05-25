"use client";

import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const specs = [
  { label: "Capacity", value: "300+", suffix: "guests" },
  { label: "Venues", value: "5", suffix: "spaces" },
  { label: "Events Yearly", value: "200+", suffix: "celebrations" },
  { label: "Satisfaction", value: "100%", suffix: "rated" },
];

export function EditorialSection() {
  const videoRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const updateParallax = useCallback(() => {
    if (!videoRef.current) return;
    
    const rect = videoRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate when video enters and exits viewport
    const videoTop = rect.top;
    const videoBottom = rect.bottom;
    
    // Progress from 0 (entering viewport) to 1 (exiting viewport)
    if (videoBottom > 0 && videoTop < windowHeight) {
      const progress = 1 - (videoTop + rect.height / 2) / (windowHeight + rect.height);
      setScrollProgress(Math.max(0, Math.min(1, progress)));
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateParallax]);

  // Parallax effect: video moves up as you scroll down
  const parallaxY = (scrollProgress - 0.5) * 30; // -15px to +15px range

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

      {/* Full-width Video with Parallax */}
      <div ref={videoRef} className="relative aspect-[16/9] w-full md:aspect-[21/9] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            transform: `scale(1.15) translate3d(0, ${parallaxY}px, 0) translateZ(0)`,
            WebkitTransform: `scale(1.15) translate3d(0, ${parallaxY}px, 0) translateZ(0)`,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            willChange: 'transform',
          }}
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27eb7fb4-0105-4010-ac9e-0ac977a31b05_1-FZ89nvBAAsR3caRJbhYv7T2mjBofth.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0e]/45 via-transparent to-[#D08327]/3" />
        
        {/* Gold accent border at top */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D08327]/30 to-transparent" />
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
