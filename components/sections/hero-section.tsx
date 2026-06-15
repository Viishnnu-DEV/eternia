"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const word = "ETERNIA";

const sideImages = [
  {
    src: "/images/wedding-side-1.png",
    alt: "Elegant wedding ceremony garden",
    position: "left",
    span: 1,
  },
  {
    src: "/images/wedding-side-2.png",
    alt: "Luxury bridal suite",
    position: "left",
    span: 1,
  },
  {
    src: "/images/wedding-side-3.png",
    alt: "Romantic reception dinner",
    position: "right",
    span: 1,
  },
  {
    src: "/images/wedding-side-4.png",
    alt: "Venue at romantic evening",
    position: "right",
    span: 1,
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 2;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Text fades out first (0 to 0.2)
  const textOpacity = Math.max(0, 1 - (scrollProgress / 0.2));
  
  // Image transforms start after text fades (0.2 to 1)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));
  
  const centerWidth = 100 - (imageProgress * 80);
  const centerHeight = 100;
  const sideWidth = imageProgress * 40;
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + (imageProgress * 100);
  const sideTranslateRight = 100 - (imageProgress * 100);
  const borderRadius = 0;
  const gap = imageProgress * 8;
  const sideTranslateY = -(imageProgress * 15);

  return (
    <section id="hero" ref={sectionRef} className="relative bg-background">
      {/* Sticky container for scroll animation */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="flex h-full w-full items-center justify-center">
          <div 
            className="relative flex h-full w-full items-stretch justify-center"
            style={{ gap: `${gap}px` }}
          >
            {/* Left Column */}
            <div 
              className="flex h-full flex-row will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateLeft}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter(img => img.position === "left").map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative h-full overflow-hidden will-change-transform"
                  style={{ flex: img.span, borderRadius: `${borderRadius}px` }}
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0e]/50 via-transparent to-[#D08327]/5" />
                </div>
              ))}
            </div>

            {/* Main Hero Image - Center */}
            <div 
              className="relative overflow-hidden will-change-transform"
              style={{
                width: `${centerWidth}%`,
                height: `${centerHeight}%`,
                flex: "0 0 auto",
                borderRadius: `${borderRadius}px`,
              }}
            >
              {/* Text Behind - Fades out first */}
              <div 
                className="absolute inset-0 z-0 flex items-center justify-center"
                style={{ opacity: textOpacity, transform: 'translateY(-200px)' }}
              >
                <h1 className="whitespace-nowrap text-[35vw] font-bold leading-[0.8] tracking-tighter text-black">
                  {word.split("").map((letter, index) => (
                    <span
                      key={index}
                      className="inline-block animate-[slideUp_0.8s_ease-out_forwards] opacity-0"
                      style={{
                        animationDelay: `${index * 0.08}s`,
                        transition: 'all 1.5s',
                        transitionTimingFunction: 'cubic-bezier(0.86, 0, 0.07, 1)',
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </h1>
              </div>
              
              {/* NEW hero image */}
              <Image
                src="/images/hero-ballroom.png"
                alt="Grand luxury wedding ballroom with crystal chandeliers"
                fill
                className="absolute inset-0 z-10 object-cover"
                priority
              />
              
              {/* Cinematic overlays */}
              <div className="absolute inset-0 z-20 bg-[linear-gradient(135deg,rgba(10,4,6,0.82)_0%,rgba(10,4,6,0.40)_45%,rgba(10,4,6,0.08)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 z-20 h-3/4 bg-gradient-to-t from-[#0a0406]/85 via-[#1a0a0e]/30 to-transparent" />
              
              {/* Warm golden glow from center */}
              <div className="absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_60%_40%,rgba(208,131,39,0.08),transparent_60%)]" />
              
              {/* Hero Content */}
              <div
                className="absolute inset-0 z-30 flex items-center justify-center px-6 pb-12 md:justify-start md:pb-0 md:px-12 lg:px-20"
                style={{ opacity: textOpacity }}
              >
                <div className="max-w-3xl text-white text-center md:text-left flex flex-col items-center md:items-start w-full">
                  {/* Decorative gold line */}
                  <div className="mb-6 flex items-center justify-center gap-3 md:justify-start w-full">
                    <div className="md:hidden h-px w-8 bg-gradient-to-r from-transparent to-[#D08327]" />
                    <div className="hidden md:block h-px w-10 bg-gradient-to-r from-[#D08327] to-transparent" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.55em] text-[#D08327]">
                      Luxury Wedding Venue
                    </p>
                    <div className="md:hidden h-px w-8 bg-gradient-to-l from-transparent to-[#D08327]" />
                  </div>
                  
                  <h1 className="font-display text-[15vw] font-medium leading-[0.88] tracking-[-0.02em] md:text-[10vw] lg:text-[8vw]">
                    <span className="block bg-gradient-to-r from-white via-[#f0d7ad] to-white bg-clip-text text-transparent">
                      ETERNIA
                    </span>
                  </h1>
                  
                  <p className="mt-6 max-w-md text-base leading-relaxed text-white/65 md:text-lg">
                    Where timeless celebrations begin.
                  </p>
                  
                  <div className="mt-10 flex w-full max-w-xs flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center md:justify-start">
                    <Link
                      href="#reserve"
                      className="btn-shimmer inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-gradient-to-r from-[#D08327] to-[#b06a1a] px-8 py-3.5 text-[13px] font-bold tracking-wide text-[#0a0406] shadow-[0_16px_50px_rgba(208,131,39,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(208,131,39,0.45)]"
                    >
                      Book a Private Tour
                    </Link>
                    <Link
                      href="#gallery"
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-[13px] font-semibold tracking-wide text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D08327]/40 hover:bg-white/5"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div 
              className="flex h-full flex-row will-change-transform"
              style={{
                width: `${sideWidth}%`,
                gap: `${gap}px`,
                transform: `translateX(${sideTranslateRight}%) translateY(${sideTranslateY}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter(img => img.position === "right").map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative h-full overflow-hidden will-change-transform"
                  style={{ flex: img.span, borderRadius: `${borderRadius}px` }}
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0e]/50 via-transparent to-[#D08327]/5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tagline Section - Fixed at bottom */}
      <div 
        className="pointer-events-none fixed bottom-0 left-0 right-0 z-40 px-6 pb-8 md:px-12 md:pb-12 lg:px-20 lg:pb-14"
        style={{ opacity: textOpacity }}
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 pt-5 text-center md:flex-row md:text-left">
          <p className="font-display text-xl leading-tight text-white/80 md:text-2xl">
            Ballrooms · Gardens · Couture Service
          </p>
          <div className="flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-[#D08327]/60" />
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#D08327]/70">
              Beverly Hills, CA
            </p>
          </div>
        </div>
      </div>

      {/* Scroll space */}
      <div className="h-[200vh]" />
    </section>
  );
}
