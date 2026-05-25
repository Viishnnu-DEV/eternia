"use client";

import { FadeImage } from "@/components/fade-image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const accessories = [
  {
    id: 1,
    name: "Intimate Celebration",
    description: "Perfect for up to 50 guests with personalized service",
    price: "From $15,000",
    image: "/images/package-intimate.png",
    features: ["Private garden", "Personal coordinator", "Custom florals"],
  },
  {
    id: 2,
    name: "Classic Wedding",
    description: "Ideal for 150 guests with full venue access",
    price: "From $35,000",
    image: "/images/package-classic.png",
    features: ["Grand ballroom", "Full catering", "Live entertainment"],
  },
  {
    id: 3,
    name: "Grand Celebration",
    description: "Luxurious experience for up to 300 guests",
    price: "From $65,000",
    image: "/images/package-grand.png",
    features: ["Multiple venues", "Premium service", "Bespoke design"],
  },
];

export function CollectionSection() {
  return (
    <section id="accessories" className="bg-[#FEFBF2]">
      {/* Section Title */}
      <div className="px-6 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-gradient-to-r from-[#D08327] to-transparent" />
          <p className="text-[11px] font-bold uppercase tracking-[0.5em] text-[#D08327]">
            Services & Packages
          </p>
        </div>
        <h2 className="mt-5 max-w-4xl font-display text-4xl font-medium leading-[1.1] text-foreground md:text-6xl">
          Wedding Packages
        </h2>
      </div>

      {/* Accessories Grid/Carousel */}
      <div className="pb-24 md:pb-32">
        {/* Mobile: Horizontal Carousel */}
        <div className="flex gap-6 overflow-x-auto px-6 pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group flex-shrink-0 w-[75vw] snap-center">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary shadow-[0_20px_60px_rgba(58,15,24,0.12)]">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0e]/60 via-transparent to-transparent" />
                
                {/* Gold shimmer on hover */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#D08327]/8 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-medium leading-snug text-foreground">
                      {accessory.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                  <span className="text-right text-sm font-bold text-[#D08327]">
                    {accessory.price}
                  </span>
                </div>
                <Link href="#reserve" className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D08327]/30 px-5 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-gradient-to-r hover:from-[#3a0f18] hover:to-[#5a1f2e] hover:text-[#f0d7ad] hover:border-transparent">
                  Enquire
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 md:px-12 lg:px-20">
          {accessories.map((accessory) => (
            <div key={accessory.id} className="group">
              {/* Image */}
              <div className="relative aspect-[2/3] overflow-hidden rounded-2xl bg-secondary shadow-[0_24px_80px_rgba(58,15,24,0.1)] transition-shadow duration-500 group-hover:shadow-[0_32px_100px_rgba(58,15,24,0.18)]">
                <FadeImage
                  src={accessory.image || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a0e]/65 via-[#1a0a0e]/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Gold shimmer on hover */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#D08327]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#D08327]">
                      {accessory.price}
                    </span>
                    {/* Features list on hover */}
                    <div className="mt-2 flex flex-wrap gap-1.5 opacity-0 transition-all duration-500 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                      {accessory.features.map((feature) => (
                        <span key={feature} className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-white/80 backdrop-blur-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href="#reserve" className="btn-shimmer flex-shrink-0 rounded-full bg-gradient-to-r from-[#D08327] to-[#a86415] px-5 py-2.5 text-[11px] font-bold tracking-wide text-[#1a0a0e] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(208,131,39,0.35)]">
                    Enquire
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-display text-3xl font-medium leading-snug text-foreground">
                      {accessory.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {accessory.description}
                    </p>
                  </div>
                  <span className="hidden font-bold text-[#D08327] lg:block">
                    {accessory.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
