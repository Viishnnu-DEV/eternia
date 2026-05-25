"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

export function GallerySection() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  const images = [
    { src: "/images/venue-1.png", alt: "Wedding venue at sunrise" },
    { src: "/images/venue-2.png", alt: "Wedding venue in daylight" },
    { src: "/images/venue-3.png", alt: "Wedding venue at dusk" },
    { src: "/images/venue-4.png", alt: "Wedding venue at night" },
  ];

  const updateTransform = useCallback(() => {
    if (!galleryRef.current) return;
    
    const rect = galleryRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const sectionHeight = galleryRef.current.offsetHeight;
    
    // Calculate scroll progress through the section
    const scrollableRange = sectionHeight - windowHeight;
    const scrolled = -rect.top;
    const progress = scrollableRange > 0 ? Math.max(0, Math.min(1, scrolled / scrollableRange)) : 0;
    
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateTransform);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateTransform();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateTransform]);

  const isLastImage = images.length - 1;
  
  // Calculate fullscreen progress for the last image in the last 25% of scroll
  const fullscreenStartProgress = 0.75;
  const fullscreenProgress = Math.max(0, Math.min(1, (scrollProgress - fullscreenStartProgress) / (1 - fullscreenStartProgress)));
  const easedFullscreenProgress = 1 - Math.pow(1 - fullscreenProgress, 3);

  return (
    <section 
      id="gallery"
      ref={galleryRef}
      className="relative bg-[#0f0609]"
      style={{ minHeight: `${(images.length + 1) * 100}vh` }}
    >
      {/* Subtle ambient glow */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(208,131,39,0.03),transparent_60%)]" />
      
      {/* Sticky container using flex-col to avoid text overlap */}
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-4">
        
        {/* Gallery Header sitting naturally above images */}
        <div className="mb-6 w-full max-w-5xl px-6 text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#D08327]/50" />
            <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#D08327]">
              Gallery
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#D08327]/50" />
          </div>
          <h2 className="mx-auto mt-2 max-w-3xl font-display text-3xl font-medium leading-tight text-white md:text-5xl">
            Watch the venue move from golden morning to candlelit night.
          </h2>
        </div>

        {/* Stacking image container */}
        <div className="relative h-[55vh] w-full max-w-5xl md:h-[60vh]">
          {images.map((image, index) => {
            const isLast = index === isLastImage;
            
            // Calculate stacking progress for each image
            let stackProgress = 0;
            if (index === 0) {
              stackProgress = 1; // Base image is fully visible from start
            } else {
              const start = (index - 1) / (images.length - 1);
              const end = index / (images.length - 1);
              stackProgress = Math.max(0, Math.min(1, (scrollProgress - start) / (end - start)));
            }
            
            // Images start below and move up to stack
            let translateY = (1 - stackProgress) * 100; // 100% to 0%
            let scale = 0.8 + (stackProgress * 0.2); // 0.8 to 1
            let opacity = stackProgress;
            
            // Last image expands to fullscreen smoothly
            if (isLast) {
              const baseScale = 0.8 + (stackProgress * 0.2);
              scale = baseScale * (1 + easedFullscreenProgress * 0.5);
            }
            
            const zIndex = index;
            const borderRadius = isLast && easedFullscreenProgress > 0.3 ? (1 - easedFullscreenProgress) * 16 : undefined;
            
            return (
              <div
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  zIndex,
                  transform: `translate3d(0, ${translateY}%, 0) scale(${scale}) translateZ(0)`,
                  WebkitTransform: `translate3d(0, ${translateY}%, 0) scale(${scale}) translateZ(0)`,
                  opacity,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  willChange: 'transform, opacity',
                  WebkitFontSmoothing: 'antialiased',
                }}
              >
                <div 
                  className="relative h-full w-full overflow-hidden rounded-2xl border border-[#D08327]/10 shadow-[0_34px_110px_rgba(0,0,0,0.5)] md:rounded-3xl"
                  style={{
                    borderRadius: borderRadius !== undefined ? `${borderRadius}px` : undefined,
                  }}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0609]/50 via-transparent to-[#D08327]/3" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
