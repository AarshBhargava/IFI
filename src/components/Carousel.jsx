import React, { useRef, useEffect } from "react";

export default function Carousel({
  items = [],
  renderItem,
  itemsToShow = 4,
  autoplay = true,
  autoplayInterval = 4000,
  gap = 24,
}) {
  const railRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (autoplay && items.length > itemsToShow) {
      intervalRef.current = setInterval(() => {
        scrollNext();
      }, autoplayInterval);
    }
    return () => clearInterval(intervalRef.current);
  }, [items, itemsToShow, autoplay, autoplayInterval]);

  const scrollNext = () => {
    const rail = railRef.current;
    if (!rail || rail.children.length === 0) return;
    const cardWidth = rail.children[0].offsetWidth + gap;
    if (rail.scrollLeft + cardWidth >= rail.scrollWidth) {
      rail.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      rail.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    const rail = railRef.current;
    if (!rail || rail.children.length === 0) return;
    const cardWidth = rail.children[0].offsetWidth + gap;
    rail.scrollBy({ left: -cardWidth, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={railRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ gap: `${gap}px` }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="snap-start flex-shrink-0"
            style={{ width: `calc(${100 / itemsToShow}% - ${gap}px)` }}
          >
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        aria-label="Previous"
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md"
      >
        ‹
      </button>
      <button
        aria-label="Next"
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md"
      >
        ›
      </button>
    </div>
  );
}
