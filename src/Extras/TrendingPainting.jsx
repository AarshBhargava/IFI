import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TrendingPaintings() {
  return (
    <section className="py-20 bg-white px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-12">
        Trending Paintings
      </h2>
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={3}   // Show 3 at a time
          slidesPerGroup={1}  // Move only 1 painting at a time
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={true}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <SwiperSlide key={i}>
              <div className="h-[350px] rounded-xl overflow-hidden shadow-md">
                <img
                  src={`https://picsum.photos/300/400?random=${i + 3}`}
                  alt={`Painting ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
