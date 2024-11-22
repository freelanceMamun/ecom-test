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

const featureProduct = () => {
  return (
    <div className="container mx-auto max-w-screen-xl my-16 mb-0 relative">
      <div className="py-6">
        <h4 className="text-[#7E53D4] text-[19px]">FEATURED PRODUCT</h4>
        <h3 className="text-black font-bold text-[28px]">New Arrivals</h3>
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
          modules={[Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={4}
        >
          {productData.map((value) => {
            return (
              <SwiperSlide key={value.id}>
                <ProductCard data={value}></ProductCard>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className=" absolute top-10 right-0 flex gap-3">
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
