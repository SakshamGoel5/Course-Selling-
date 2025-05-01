import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import Course_Card from "./Course_Card";

function Course_Slider({ Courses }) {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          // loop={true}
          modules={[FreeMode, Pagination]}
          pagination={{ clickable: true }} // Add pagination
          autoplay={{
            delay: 3000, // Auto-swiping every 3 seconds
            disableOnInteraction: false, // Continue autoplay even after interaction
          }}
          breakpoints={{
            640: {
              slidesPerView: 2, // Show 2 slides on small screens
            },
            1024: {
              slidesPerView: 3, // Show 3 slides on large screens
            },
          }}
          className="max-h-[30rem]"
        >
          {Courses.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"h-[250px]"} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-black">No Course Found</p>
      )}
    </>
  );
}

export default Course_Slider;
