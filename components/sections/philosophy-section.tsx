"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const titles = [
  "Timeless Elegance.",
  "Unforgettable Moments.",
  "Your Perfect Day.",
];

const descriptionWords = "Grand ballrooms meet intimate gardens — every detail curated for celebrations that linger in memory.".split(" ");

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const descriptionRef = useRef<HTMLDivElement>(null);

  // Clear references arrays on render to prevent accumulation
  titleRefs.current = [];
  wordRefs.current = [];

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Initialize GSAP timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5, // Re-added a balanced smoothing delay (0.5s instead of 1s or 0s)
          pin: false, // Rely on CSS sticky top-0
        },
      });

      // 2. Set initial state of elements (3D rotated, scaled, blurred)
      titleRefs.current.forEach((ref) => {
        if (ref) {
          gsap.set(ref, {
            rotationX: 75,
            y: 250,
            scale: 1.35,
            filter: "blur(20px)",
            opacity: 0.15,
          });
        }
      });

      wordRefs.current.forEach((ref) => {
        if (ref) {
          gsap.set(ref, {
            filter: "blur(20px)",
            opacity: 0.15,
          });
        }
      });

      // 3. Staged Animation Progression
      
      // Title 1 (Timeless Elegance.) : 0% -> 30% of scroll
      tl.to(titleRefs.current[0], { rotationX: 0, y: 0, scale: 1, duration: 0.10, ease: "none" }, 0);
      tl.to(titleRefs.current[0], { filter: "blur(0px)", opacity: 1, duration: 0.08, ease: "none" }, 0.02); 
      tl.to(titleRefs.current[0], { rotationX: -75, y: -150, scale: 0.9, filter: "blur(20px)", opacity: 0, duration: 0.10, ease: "none" }, 0.20);

      // Title 2 (Unforgettable Moments.) : 25% -> 55% of scroll
      tl.to(titleRefs.current[1], { rotationX: 0, y: 0, scale: 1, duration: 0.10, ease: "none" }, 0.25);
      tl.to(titleRefs.current[1], { filter: "blur(0px)", opacity: 1, duration: 0.08, ease: "none" }, 0.27); 
      tl.to(titleRefs.current[1], { rotationX: -75, y: -150, scale: 0.9, filter: "blur(20px)", opacity: 0, duration: 0.10, ease: "none" }, 0.45);

      // Title 3 (Your Perfect Day.) : 50% -> stays
      tl.to(titleRefs.current[2], { rotationX: 0, y: 0, scale: 1, duration: 0.10, ease: "none" }, 0.50);
      tl.to(titleRefs.current[2], { filter: "blur(0px)", opacity: 1, duration: 0.08, ease: "none" }, 0.52); 
      // Title 3 stays visible during description reveal

      // Description words reveal : 60% -> 80% of scroll
      const totalWords = wordRefs.current.length;
      wordRefs.current.forEach((wordRef, idx) => {
        if (wordRef) {
          const wordStart = 0.60 + (idx / totalWords) * 0.20;
          tl.to(
            wordRef,
            { filter: "blur(0px)", opacity: 1, duration: 0.05, ease: "none" },
            wordStart
          );
        }
      });

      // Outro transition smoothly into next section: 90% -> 100% of scroll
      tl.to(
        [labelRef.current, titleRefs.current[2], descriptionRef.current],
        { opacity: 0, y: -100, duration: 0.10, ease: "none" },
        0.90
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="products"
      className="relative h-[350vh] overflow-visible bg-background"
    >
      {/* Sticky container matching h-screen */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col items-center justify-center">
        {/* Decorative radial gradients */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(208,131,39,0.12),transparent_30rem)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(58,15,24,0.05),transparent_25rem)]" />

        {/* Content Wrapper */}
        <div
          ref={contentWrapperRef}
          className="relative w-full max-w-5xl px-6 text-center flex flex-col items-center justify-center z-10"
        >
          {/* Label */}
          <div ref={labelRef} className="mb-8 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#D08327]/60" />
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.5em] text-[#D08327]">
              Signature Atmosphere
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#D08327]/60" />
          </div>

          {/* Titles Stacking Container */}
          <div
            className="relative w-full min-h-[120px] flex items-center justify-center mb-6"
            style={{ perspective: "1400px", transformStyle: "preserve-3d" }}
          >
            {titles.map((title, index) => (
              <h2
                key={index}
                ref={(el) => {
                  if (el) titleRefs.current.push(el);
                }}
                className="absolute text-center font-display text-[8vw] font-medium leading-[0.9] tracking-normal sm:text-[6vw] md:text-[5vw] lg:text-[4.5vw]"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  background:
                    "linear-gradient(135deg, #1a0a0e 0%, #3a0f18 40%, #1a0a0e 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  willChange: "transform, opacity, filter",
                }}
              >
                {title}
              </h2>
            ))}
          </div>

          {/* Description Container */}
          <div ref={descriptionRef} className="mt-8 max-w-4xl">
            {/* Decorative diamond separator */}
            <div className="mb-8 flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D08327]/40" />
              <div className="h-2 w-2 rotate-45 border border-[#D08327]/40" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D08327]/40" />
            </div>

            <p className="text-center font-display text-2xl leading-snug text-[#3a0f18] md:text-4xl md:leading-tight">
              {descriptionWords.map((word, index) => (
                <span
                  key={index}
                  ref={(el) => {
                    if (el) wordRefs.current.push(el);
                  }}
                  className="inline-block mr-[0.25em]"
                  style={{ willChange: "opacity, filter" }}
                >
                  {word}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
