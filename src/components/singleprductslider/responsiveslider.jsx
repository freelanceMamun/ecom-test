import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import img from '@/asset/image 9 (1).png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import ArroRight from '@/asset/arroright.png';
import Arrowleft from '@/asset/Frame 52.png';

const Responsiveslider = ({ subtitle, title, newstyle }) => {
  const pagination = {
    clickable: true,
    type: 'fraction',
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div className={`container mx-auto  ${newstyle}`}>
      {/* Slider */}

      <div className=" relative">
        <Swiper
          pagination={pagination}
          modules={[Pagination, Navigation]}
          navigation={{ nextEl: '.arrowr-left', prevEl: '.arrowr-right' }}
          spaceBetween={15}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img src={img.src} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img.src} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img.src} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img.src} />
          </SwiperSlide>
        </Swiper>

        <div className=" z-[1] w-full justify-between absolute  top-28 flex gap-3">
          <button className="arrowr-right ">
            <img src={Arrowleft.src} alt="" className="w-9" />
          </button>
          <button className="arrowr-left ">
            <img src={ArroRight.src} className="w-9" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Responsiveslider;
