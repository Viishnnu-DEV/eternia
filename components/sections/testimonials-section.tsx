"use client";

import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-[#1a0a0e]">
      {/* About Image with Text Overlay */}
      <div className="relative min-h-[70vh] w-full overflow-hidden md:aspect-[16/9]">
        <Image
          src="/images/testimonial-wedding.png"
          alt="Beautiful wedding celebration at our luxury venue"
          fill
          className="object-cover"
        />
        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0406]/92 via-[#1a0a0e]/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(208,131,39,0.08),transparent_35rem)]" />

        {/* Subtle vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_40%,rgba(10,4,6,0.3)_100%)]" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-end justify-center px-6 pb-16 md:px-12 md:pb-24 lg:px-20 lg:pb-32">
          <div className="mx-auto max-w-5xl text-center">
            {/* Decorative element */}
            <div className="mb-8 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#D08327]/50" />
              <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#D08327]">
                About Eternia
              </p>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-[#D08327]/50" />
            </div>
            
            <p className="font-display text-3xl leading-snug text-white md:text-5xl lg:text-6xl">
              Your love story deserves nothing less than{" "}
              <span className="bg-gradient-to-r from-[#D08327] via-[#f0d7ad] to-[#D08327] bg-clip-text text-transparent">
                perfection
              </span>
              .
            </p>
            
            {/* Decorative bottom element */}
            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#D08327]/30" />
              <div className="h-1.5 w-1.5 rotate-45 bg-[#D08327]/40" />
              <div className="h-px w-6 bg-gradient-to-l from-transparent to-[#D08327]/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
