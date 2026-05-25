"use client";

import { FadeImage } from "@/components/fade-image";

const features = [
  { image: "/images/gallery-1.png", span: "col-span-2 row-span-2", title: "Grand Ballroom" },
  { image: "/images/gallery-2.png", span: "col-span-1 row-span-1", title: "Floral Ceremony" },
  { image: "/images/gallery-3.png", span: "col-span-1 row-span-1", title: "Candlelit Dining" },
  { image: "/images/gallery-4.png", span: "col-span-1 row-span-2", title: "Bridal Entry" },
  { image: "/images/gallery-5.png", span: "col-span-1 row-span-1", title: "Garden Vows" },
  { image: "/images/gallery-6.png", span: "col-span-2 row-span-1", title: "Reception Styling" },
  { image: "/images/gallery-7.png", span: "col-span-1 row-span-1", title: "Tablescapes" },
  { image: "/images/gallery-8.png", span: "col-span-1 row-span-2", title: "Evening Glow" },
  { image: "/images/gallery-9.png", span: "col-span-2 row-span-1", title: "Private Lounges" },
  { image: "/images/gallery-10.png", span: "col-span-1 row-span-1", title: "Quiet Details" },
];

export function FeaturedProductsSection() {
  return (
    <section id="technology" className="relative overflow-hidden bg-[#FEFBF2] py-20 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(208,131,39,0.06),transparent_50%)]" />
      
      <div className="px-4 md:px-12 lg:px-20">
        <div className="mx-auto mb-14 max-w-7xl md:mb-20">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-[#D08327] to-transparent" />
            <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#D08327]">
              Venue Highlights
            </p>
          </div>
          <h2 className="mt-5 max-w-2xl font-display text-4xl font-medium leading-[1.1] text-foreground md:text-6xl">
            Every space, a story waiting to unfold.
          </h2>
        </div>
        
        {/* Bento Grid */}
        <div className="grid w-full max-w-7xl auto-rows-[160px] grid-cols-2 gap-3 md:mx-auto md:auto-rows-[230px] md:grid-cols-4 md:gap-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl border border-[#D08327]/10 bg-secondary shadow-[0_20px_60px_rgba(58,15,24,0.08)] transition-all duration-500 hover:shadow-[0_30px_80px_rgba(58,15,24,0.14)] ${feature.span}`}
            >
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0e]/65 via-[#1a0a0e]/5 to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-95" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#D08327]/8 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white md:p-5">
                <p className="font-display text-lg leading-tight md:text-xl">
                  {feature.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
