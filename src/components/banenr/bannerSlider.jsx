'use client';

import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import manImg from '../../asset/man.png';
import womanImg from '../../asset/woman.png';
import manmobileImage from '../../asset/Frame 59.png';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const BannerSlider = () => {
  return (
    <div className="mx-auto max-w-screen-xl relative my-14 lg:my-20">
      <div className=" hidden md:block">
        <Swiper
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          navigation={{ nextEl: '.arrow-left2', prevEl: '.arrow-right2' }}
          className="mySwiper"
          modules={[Pagination, Navigation]}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="flex items-center justify-center gap-10">
              <div className="m-auto flex-1 text-center ">
                <div>
                  <img className="m-auto" src={manImg.src} alt="mans" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-[52px] font-medium">MEN COLLECTION</h4>
                <div className=" pt-5 flex items-center justify-center md:justify-start">
                  <a
                    href="#"
                    className="bg-[#8F71E1] text-white text-[19px]  py-3 px-8 font-normal rounded-full"
                  >
                    Shop Now
                  </a>
                  <span className=" cursor-pointer bg-[#8F71E1] text-white text-[19px] w-12 h-12 items-center justify-center  rounded-full flex">
                    <BsArrowUpRight></BsArrowUpRight>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center gap-10">
              <div className="m-auto flex-1 text-center ">
                <div>
                  <img className="m-auto" src={manImg.src} alt="mans" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-[52px] font-medium">MEN COLLECTION</h4>
                <div className=" pt-5 flex items-center justify-center md:justify-start">
                  <a
                    href="#"
                    className="bg-[#8F71E1] text-white text-[19px]  py-3 px-8 font-normal rounded-full"
                  >
                    Shop Now
                  </a>
                  <span className=" cursor-pointer bg-[#8F71E1] text-white text-[19px] w-12 h-12 items-center justify-center  rounded-full flex">
                    <BsArrowUpRight></BsArrowUpRight>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center gap-10">
              <div className="m-auto flex-1 text-center ">
                <div>
                  <img className="m-auto" src={manImg.src} alt="mans" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="text-[52px] font-medium">MEN COLLECTION</h4>
                <div className=" pt-5 flex items-center justify-center md:justify-start">
                  <a
                    href="#"
                    className="bg-[#8F71E1] text-white text-[19px]  py-3 px-8 font-normal rounded-full"
                  >
                    Shop Now
                  </a>
                  <span className=" cursor-pointer bg-[#8F71E1] text-white text-[19px] w-12 h-12 items-center justify-center  rounded-full flex">
                    <BsArrowUpRight></BsArrowUpRight>
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="custom-pagination mt-20  hidden md:flex"></div>
      <div className="hidden absolute lg:top-10 top-8 xl:right-0 right-4  gap-3">
        <button className="arrow-right2  border-[#7E53D4] flex items-center justify-center border w-8 h-8 rounded-full">
          <FaArrowLeft fill="#7E53D4" className="text-[#7E53D4]"></FaArrowLeft>
        </button>
        <button className="arrow-left2  rounded-full flex items-center justify-center  border-[#7E53D4] border w-8 h-8">
          <FaArrowRight
            fill="#7E53D4"
            className="text-[#7E53D4]"
          ></FaArrowRight>
        </button>
      </div>

      <div className="md:hidden  items-center justify-center gap-10 px-4">
        <div className="m-auto flex-1 text-center ">
          <div>
            <img
              className="m-auto w-full"
              src={manmobileImage.src}
              alt="mans"
            />
          </div>
        </div>
        <div className="flex-1 pt-2">
          <h4 className="md:text-[52px] text-[23px] font-medium">
            MAN COLLECTION
          </h4>
          <div className=" pt-5 flex items-center justify-start md:justify-start">
            <a
              href="#"
              className="bg-[#8F71E1] text-white text-[19px]  py-3 px-8 font-normal rounded-full"
            >
              Shop Now
            </a>
            <span className=" cursor-pointer bg-[#8F71E1] text-white text-[19px] w-12 h-12 items-center justify-center  rounded-full flex">
              <BsArrowUpRight></BsArrowUpRight>
            </span>
          </div>
        </div>
      </div>
      <div className="md:hidden  items-center justify-center gap-10 px-4">
        <div className="m-auto flex-1 text-center ">
          <div>
            <img className="m-auto w-full" src={womanImg.src} alt="mans" />
          </div>
        </div>
        <div className="flex-1 pt-2">
          <h4 className="md:text-[52px] text-[23px] font-medium">
            WOMAN COLLECTION
          </h4>
          <div className=" pt-5 flex items-center justify-start md:justify-start">
            <a
              href="#"
              className="bg-[#8F71E1] text-white text-[19px]  py-3 px-8 font-normal rounded-full"
            >
              Shop Now
            </a>
            <span className=" cursor-pointer bg-[#8F71E1] text-white text-[19px] w-12 h-12 items-center justify-center  rounded-full flex">
              <BsArrowUpRight></BsArrowUpRight>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
