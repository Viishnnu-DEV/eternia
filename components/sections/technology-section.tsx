"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
function ScrollRevealText({ text, progress }: { text: string; progress: number }) {
  const words = text.split(" ");
  
  return (
    <p className="font-display text-4xl font-medium leading-snug text-white md:text-5xl lg:text-6xl">
      {words.map((word, index) => {
        // Calculate blur and opacity based on scroll progress
        const appearProgress = progress * (words.length + 1);
        const wordAppearProgress = Math.max(0, Math.min(1, appearProgress - index));
        const wordOpacity = wordAppearProgress;
        const wordBlur = (1 - wordAppearProgress) * 40;
        
        return (
          <span
            key={index}
            className="inline-block"
            style={{
              opacity: wordOpacity,
              filter: `blur(${wordBlur}px)`,
              marginRight: '0.3em',
            }}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
}

const sideImages = [
  {
    src: "/images/wedding-interior.png",
    alt: "Elegant wedding floral arrangements",
    position: "left",
  },
  {
    src: "/images/wedding-texture.png",
    alt: "Luxury table setting details",
    position: "right",
  },
];

const textCycles = [
  "Elegance & Romance.",
  "Bespoke Celebrations.",
  "Memories Forever.",
];

export function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textSectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [textProgress, setTextProgress] = useState(0);
  
  const descriptionText = "Crystal chandeliers, intimate gardens, expert coordination — every celebration becomes a treasured memory from first dance to final toast.";

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollableHeight = window.innerHeight * 4; // Increased for 3 text cycles
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      
      setScrollProgress(progress);

      // Text scroll progress
      if (textSectionRef.current) {
        const textRect = textSectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const textHeight = textSectionRef.current.offsetHeight;
        const scrollableRange = textHeight - windowHeight;
        const textScrolled = -textRect.top;
        
        const rawProgress = Math.max(0, Math.min(1, textScrolled / scrollableRange));
        // Map to 0.15 to 0.85
        const newTextProgress = Math.max(0, Math.min(1, (rawProgress - 0.15) / 0.7));
        setTextProgress(newTextProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Image transforms start after title fades (0.2 to 1)
  const imageProgress = Math.max(0, Math.min(1, (scrollProgress - 0.2) / 0.8));
  
  // Smooth interpolations
  const centerWidth = 100 - (imageProgress * 58); // 100% to 42%
  const centerHeight = 100 - (imageProgress * 30); // 100% to 70%
  const sideWidth = imageProgress * 22; // 0% to 22%
  const sideOpacity = imageProgress;
  const sideTranslateLeft = -100 + (imageProgress * 100); // -100% to 0%
  const sideTranslateRight = 100 - (imageProgress * 100); // 100% to 0%
  const gap = imageProgress * 16; // 0px to 16px

  return (
    <section ref={sectionRef} className="relative bg-[#1a0a0e]">
      {/* Sticky container for scroll animation */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Subtle ambient glow */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_50%,rgba(212,168,85,0.04),transparent_60%)]" />
        
        <div className="flex h-full w-full items-center justify-center">
          {/* Bento Grid Container */}
          <div 
            className="relative flex h-full w-full items-stretch justify-center"
            style={{ gap: `${gap}px`, padding: `${imageProgress * 16}px` }}
          >
            
            {/* Left Column */}
            <div 
              className="relative overflow-hidden will-change-transform"
              style={{
                width: `${sideWidth}%`,
                height: "100%",
                transform: `translateX(${sideTranslateLeft}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter(img => img.position === "left").map((img, idx) => (
                <div key={idx} className="absolute inset-0">
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1a0a0e]/25" />
                </div>
              ))}
            </div>

            {/* Main Center Image */}
            <div 
              className="relative self-center overflow-hidden will-change-transform"
              style={{
                width: `${centerWidth}%`,
                height: `${centerHeight}%`,
                flex: "0 0 auto",
              }}
            >
              {/* Layered Images - Progressive Fade In */}
              {/* Image 1 - Base layer - Morning light */}
              <Image
                src="/images/venue-1.png"
                alt="Wedding venue at sunrise"
                fill
                className="object-cover"
                style={{
                  opacity: scrollProgress < 0.25 ? 1 : 1,
                }}
              />
              
              {/* Image 2 - Daytime scene */}
              <Image
                src="/images/venue-2.png"
                alt="Wedding venue in daylight"
                fill
                className="absolute inset-0 object-cover"
                style={{
                  opacity: Math.max(0, Math.min(1, (scrollProgress - 0.1) / 0.2)),
                }}
              />
              
              {/* Image 3 - Dusk/Evening */}
              <Image
                src="/images/venue-3.png"
                alt="Wedding venue at dusk"
                fill
                className="absolute inset-0 object-cover"
                style={{
                  opacity: Math.max(0, Math.min(1, (scrollProgress - 0.4) / 0.2)),
                }}
              />
              
              {/* Image 4 - Night with magical lighting */}
              <Image
                src="/images/venue-4.png"
                alt="Wedding venue at night"
                fill
                className="absolute inset-0 object-cover"
                style={{
                  opacity: Math.max(0, Math.min(1, (scrollProgress - 0.7) / 0.2)),
                }}
              />
              
              {/* Enhanced overlays */}
              <div className="absolute inset-0 bg-[#1a0a0e]/35" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(208,131,39,0.06),transparent_30rem),linear-gradient(180deg,rgba(26,10,14,0.08),rgba(26,10,14,0.52))]" />
              
              {/* Title Text - Cycles through 3 texts with blur effect */}
              <div 
                className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
              >
                {/* Enhanced label */}
                <div className="absolute top-[16vh] flex items-center gap-3">
                  <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#D08327]/60" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#D08327]">
                    The Venue
                  </p>
                  <div className="h-px w-6 bg-gradient-to-l from-transparent to-[#D08327]/60" />
                </div>
                {textCycles.map((text, cycleIndex) => {
                  // Each text cycle takes 1/3 of the scroll progress
                  const cycleStart = cycleIndex / textCycles.length;
                  const cycleEnd = (cycleIndex + 1) / textCycles.length;
                  const words = text.split(" ");
                  
                  return (
                    <h2 
                      key={cycleIndex}
                      className="absolute max-w-4xl font-display text-5xl font-medium leading-[0.96] tracking-normal text-white md:text-6xl lg:text-8xl"
                    >
                      {words.map((word, wordIndex) => {
                        let wordOpacity = 0;
                        let wordBlur = 40;
                        
                        if (cycleIndex === 0 && scrollProgress < cycleEnd) {
                          const localProgress = scrollProgress / (cycleEnd - cycleStart);
                          if (localProgress < 0.5) {
                            wordOpacity = 1;
                            wordBlur = 0;
                          } else {
                            const disappearProgress = ((localProgress - 0.5) / 0.5) * (words.length + 1);
                            const wordDisappearProgress = Math.max(0, Math.min(1, disappearProgress - wordIndex));
                            wordOpacity = 1 - wordDisappearProgress;
                            wordBlur = wordDisappearProgress * 40;
                          }
                        } else if (scrollProgress >= cycleStart && scrollProgress < cycleEnd) {
                          const localProgress = (scrollProgress - cycleStart) / (cycleEnd - cycleStart);
                          
                          // First half: appear (blur 40 to 0, opacity 0 to 1)
                          if (localProgress < 0.5) {
                            const appearProgress = (localProgress / 0.5) * (words.length + 1);
                            const wordAppearProgress = Math.max(0, Math.min(1, appearProgress - wordIndex));
                            wordOpacity = wordAppearProgress;
                            wordBlur = (1 - wordAppearProgress) * 40;
                          } 
                          // Second half: disappear (blur 0 to 40, opacity 1 to 0)
                          else {
                            const disappearProgress = ((localProgress - 0.5) / 0.5) * (words.length + 1);
                            const wordDisappearProgress = Math.max(0, Math.min(1, disappearProgress - wordIndex));
                            wordOpacity = 1 - wordDisappearProgress;
                            wordBlur = wordDisappearProgress * 40;
                          }
                        }
                        
                        return (
                          <span
                            key={wordIndex}
                            className="inline-block"
                            style={{
                              opacity: wordOpacity,
                              filter: `blur(${wordBlur}px)`,
                              marginRight: '0.3em',
                            }}
                          >
                            {word}
                          </span>
                        );
                      })}
                    </h2>
                  );
                })}
              </div>
            </div>

            {/* Right Column */}
            <div 
              className="relative overflow-hidden will-change-transform"
              style={{
                width: `${sideWidth}%`,
                height: "100%",
                transform: `translateX(${sideTranslateRight}%)`,
                opacity: sideOpacity,
              }}
            >
              {sideImages.filter(img => img.position === "right").map((img, idx) => (
                <div key={idx} className="absolute inset-0">
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#1a0a0e]/25" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Scroll space to enable animation - increased for 3 text cycles */}
      <div className="h-[400vh]" />

      {/* Description Section with Background Image and Scroll Reveal */}
      <div 
        ref={textSectionRef}
        className="relative bg-[#120810]"
        style={{ height: "200vh" }}
      >
        <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
          <div className="absolute inset-0" style={{ backgroundImage: "url('/images/wedding-texture.png')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.1 + textProgress * 0.08 }} />
          
          {/* Gradient Overlay - Top to transparent */}
          <div 
            className="absolute top-0 left-0 right-0 z-0 pointer-events-none"
            style={{
              height: '150px',
              background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)'
            }}
          />

          {/* Decorative ambient glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(208,131,39,0.05),transparent_50%)]" />

          {/* Text Content */}
          <div className="relative z-10 mx-auto w-full max-w-4xl px-6">
            <div className="mb-8 flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-[#D08327] to-transparent" />
              <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#D08327]">
                Crafted Celebrations
              </p>
            </div>
            <ScrollRevealText text={descriptionText} progress={textProgress} />
          </div>
        </div>
      </div>
    </section>
  );
}
