"use client";
import review from "@/utils/review";
// Import Swiper React components
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function App() {
  const reviews = review();
  return (
    <div className="py-16 bg-gray-100">
      <div className="mx-auto flex w-11/12  xl:w-[1200px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          rewind={true}
          navigation={true}
          autoplay={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {reviews.map(function (res) {
            return (
              <SwiperSlide
                className="flex flex-col items-center w-full px-2 text-center justify-center bg-white  border-2 py-2 rounded-2xl lg:w-[304.5px]"
                style={{
                  boxShadow:
                    "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
                }}
              >
                <div className=" flex flex-col items-center gap-5">
                  <div className="">
                    <img
                      src="/photo.webp"
                      className="w-20 rounded-full h-20 object-cover object-top border-2 shadow-xl z-40"
                      alt=""
                    />
                  </div>
                  <span className="flex gap-2">
                    <img src="/star.svg" className="w-5" alt="" />
                    <img src="/star.svg" className="w-5" alt="" />
                    <img src="/star.svg" className="w-5" alt="" />
                    <img src="/star.svg" className="w-5" alt="" />
                    <img src="/star.svg" className="w-5" alt="" />
                  </span>
                  <span className="text-2xl font-bold">{res.othor}</span>

                  <div className="w-full bg-blue-300 text-justify p-4 rounded-xl">
                    <span className="text-sm content-box text-white font-semibold">
                      {res.title}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

// box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
