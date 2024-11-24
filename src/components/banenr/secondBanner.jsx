import React from 'react';
import bannerImage from '../../asset/image.png';
import { BsArrowUpRight } from 'react-icons/bs';


const SecondBanner = () => {
  return (
    <div className="mx-auto max-w-screen-xl my-12  bg-[#EEECFB] h-[755px] lg:h-[450px] lg:overflow-hidden">
      <div className="flex flex-wrap lg:justify-between lg:flex-nowrap justify-center items-center lg:px-14 px-6 h-full pt-5">
        <div className="text-center md:text-start lg:pt-0 pt-5 pb-10 lg:pb-0">
          <p
            className={`text-[#6F42C1] font-medium pacifico-regular text-[24px] `}
          >
            Big Deal
          </p>
          <h3 className="xl:text-[52px] md:text-[38px] text-[32px]  font-semibold pt-4">
            <span className="text-[#6F42C1]">30%</span> Off for New Customers
          </h3>

          <div className=" button-element pt-5 flex items-center justify-center md:justify-start">
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
            className="h-[450px]  object-cover"
            src={bannerImage.src}
            alt="Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondBanner;
