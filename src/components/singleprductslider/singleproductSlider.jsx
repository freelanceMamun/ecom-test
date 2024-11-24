'use  client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import img from '@/asset/image 9 (1).png';
import img1 from '@/asset/03.png';
import img2 from '@/asset/02.png';
import img3 from '@/asset/4.png';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function SliderSingleProducts() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 h-[520px]"
      >
        <SwiperSlide>
          <div className="bg-[#F6F5FD] rounded-2xl">
            <img src={img.src} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F6F5FD] rounded-2xl">
            <img src={img.src} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F6F5FD] rounded-2xl">
            <img src={img.src} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F6F5FD] rounded-2xl">
            <img src={img.src} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F6F5FD] rounded-2xl">
            <img src={img.src} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F6F5FD] rounded-2xl">
            <img src={img.src} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F6F5FD] rounded-2xl">
            <img src={img.src} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F6F5FD] rounded-2xl">
            <img src={img.src} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F6F5FD] rounded-2xl">
            <img src={img.src} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F6F5FD] rounded-2xl">
            <img src={img.src} />
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-3"
      >
        <SwiperSlide>
          <div className="bg-[#ECE9FE] rounded-2xl">
            <img src={img1.src} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ECE9FE] rounded-2xl">
            <img src={img2.src} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ECE9FE] rounded-2xl">
            <img src={img3.src} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ECE9FE] rounded-2xl">
            <img src={img1.src} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ECE9FE] rounded-2xl">
            <img src={img1.src} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ECE9FE] rounded-2xl">
            <img src={img1.src} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ECE9FE] rounded-2xl">
            <img src={img1.src} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ECE9FE] rounded-2xl">
            <img src={img1.src} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ECE9FE] rounded-2xl">
            <img src={img1.src} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#ECE9FE] rounded-2xl">
            <img src={img1.src} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
