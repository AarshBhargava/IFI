// components/HeroCarousel.jsx
import React, { useRef, useEffect } from "react";

/**
 * Props:
 *  - slides: [{id, title, subtitle, image, ctaLink}]
 *  - autoplay?: boolean
 */
export default function HeroCarousel({ slides = [], autoplay = true }) {
  const railRef = useRef(null);
  const indexRef = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (autoplay && slides.length > 1) {
      intervalRef.current = setInterval(() => {
        scrollToSlide(1);
      }, 6000);
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, [slides, autoplay]);

  const scrollToSlide = (dir) => {
    const el = railRef.current;
    if (!el) return;
    const w = el.clientWidth;
    // compute next index by rounding scrollLeft / width
    const current = Math.round(el.scrollLeft / w);
    let next = current + dir;
    if (next < 0) next = slides.length - 1;
    if (next >= slides.length) next = 0;
    el.scrollTo({ left: next * w, behavior: "smooth" });
    indexRef.current = next;
  };

  // keyboard support
  const onKey = (e) => {
    if (e.key === "ArrowLeft") scrollToSlide(-1);
    if (e.key === "ArrowRight") scrollToSlide(1);
  };

  return (
    <section aria-roledescription="carousel" onKeyDown={onKey} tabIndex={0} className="relative">
      <div ref={railRef} className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth h-[60vh] md:h-[80vh]">
        {slides.map((s, i) => (
          <div key={s.id} className="snap-start min-w-full relative flex items-center justify-center text-center">
            <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            <div className="relative z-10 bg-black/40 p-6 md:p-12 rounded max-w-3xl">
              <h1 className="text-white text-2xl md:text-4xl font-semibold">{s.title}</h1>
              {s.subtitle && <p className="text-white/90 mt-2">{s.subtitle}</p>}
              <div className="mt-4 flex gap-3 justify-center">
                <a href={s.ctaLink || "/shop"} className="bg-white text-indigo-700 px-4 py-2 rounded-full font-semibold">Shop Curated Collections</a>
                <a href="/collections" className="border border-white text-white px-4 py-2 rounded-full">Explore</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block">
        <button aria-label="Previous slide" onClick={() => scrollToSlide(-1)} className="bg-white/90 p-2 rounded-full">‹</button>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
        <button aria-label="Next slide" onClick={() => scrollToSlide(1)} className="bg-white/90 p-2 rounded-full">›</button>
      </div>

      {/* Indicators */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} aria-label={`Go to slide ${i+1}`} onClick={() => {
            const el = railRef.current;
            if (!el) return;
            const w = el.clientWidth;
            el.scrollTo({ left: i * w, behavior: "smooth" });
          }} className="w-2 h-2 rounded-full bg-white/80"></button>
        ))}
      </div>
    </section>
  );
}
