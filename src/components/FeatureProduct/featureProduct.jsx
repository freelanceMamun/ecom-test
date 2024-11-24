'use client';

import React from 'react';
import ProductCard from '@/components/productCard/productCard';
import productData from '@/util/productData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const featureProduct = ({ title, subtitle, newstyle }) => {
  return (
    <div
      className={`container mx-auto max-w-screen-xl my-16 mb-0 relative px-5 md:px-4 xl:px-0 ${newstyle}`}
    >
      <div className="py-6">
        <h4 className="text-[#7E53D4] text-[19px]">{title && title}</h4>
        <h3 className="text-black font-bold text-[28px]">
          {subtitle ? subtitle : 'New Arrivals'}
        </h3>
      </div>
      {/* Slider */}
      <div>
        <Swiper
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{ nextEl: '.arrow-left', prevEl: '.arrow-right' }}
          modules={[Autoplay, Navigation]}
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
        >
          {productData.map((value) => {
            return (
              <SwiperSlide key={value.id}>
                <ProductCard data={value}></ProductCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className=" absolute lg:top-10 top-8 xl:right-0 right-4 flex gap-3">
          <button className="arrow-right arrow border-[#7E53D4] flex items-center justify-center border w-8 h-8 rounded-full">
            <FaArrowLeft
              fill="#7E53D4"
              className="text-[#7E53D4]"
            ></FaArrowLeft>
          </button>
          <button className="arrow-left  rounded-full flex items-center justify-center arrow border-[#7E53D4] border w-8 h-8">
            <FaArrowRight
              fill="#7E53D4"
              className="text-[#7E53D4]"
            ></FaArrowRight>
          </button>
        </div>
      </div>

      {/* Slider end */}
      <div className="seemore py-6 text-center">
        <button className="bg-[#7E53D4] py-2 px-6 text-white rounded-lg">
          See more
        </button>
      </div>
    </div>
  );
};

export default featureProduct;
