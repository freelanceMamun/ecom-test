import React from 'react';
import bannerImage from '../../asset/image.png';
import { BsArrowUpRight } from 'react-icons/bs';

const SecondBanner = () => {
  return (
    <div className="mx-auto max-w-screen-xl my-12  bg-[#EEECFB] h-[450px] overflow-hidden">
      <div className="flex justify-between items-center px-14 h-full pt-5">
        <div>
          <p className={`text-[#6F42C1]  pacifico-regular text-[24px] `}>
            Big Deal
          </p>
          <h3 className="xl:text-[52px] md:text-[38px] font-semibold pt-4">
            <span className="text-[#6F42C1]">30%</span> Off for New Customers
          </h3>

          <div className=" pt-5 flex items-center justify-start">
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
        <div>
          <img
            className="h-[450px] object-cover"
            src={bannerImage.src}
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
