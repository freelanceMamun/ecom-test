'use client';

import React from 'react';

import ProductCard from '@/components/productCard/productCard';
import productData from '@/util/productData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowLeft } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';
import { Navigation } from 'swiper/modules';

import ProductSecondCard from '../productCard/productSecondCard';
import 'swiper/css/grid';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const FeatureDeal = () => {
  return (
    <div className="container mx-auto max-w-screen-xl relative my-16 px-5 md:px-4 xl:px-0">
      <div className="py-6">
        <h4 className="text-[#7E53D4] text-[19px]">SUMMER</h4>
        <h3 className="text-black font-bold text-[28px]">Big Deal</h3>
      </div>
      {/* Slider */}
      <div>
        <Swiper
          grid={{
            rows: 1,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{ nextEl: '.arrow-left1', prevEl: '.arrow-right1' }}
          modules={[Navigation]}
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
              spaceBetween: 0,
              grid: {
                rows: 2,
                fill: 'row',
              },
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 0,

              grid: {
                rows: 2,
                fill: 'row',
              },
            },
          }}
        >
          {productData
            .map((value) => {
              return (
                <SwiperSlide key={value.id}>
                  <ProductSecondCard data={value}></ProductSecondCard>
                </SwiperSlide>
              );
            })
            .slice(0, 8)}
        </Swiper>

        <div className=" absolute lg:top-10 top-8 xl:right-0 right-4 flex gap-3">
          <button className="arrow-right1  border-[#7E53D4] flex items-center justify-center border w-8 h-8 rounded-full">
            <FaArrowLeft
              fill="#7E53D4"
              className="text-[#7E53D4]"
            ></FaArrowLeft>
          </button>
          <button className="arrow-left1  rounded-full flex items-center justify-center  border-[#7E53D4] border w-8 h-8">
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

export default FeatureDeal;
