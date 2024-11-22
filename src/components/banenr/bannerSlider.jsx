import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import manImg from '../../asset/man.png';
import womanImg from '../../asset/woman.png';

const BannerSlider = () => {
  return (
    <div className="mx-auto max-w-screen-xl   my-12">
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
      <div className="md:hidden  items-center justify-center gap-10">
        <div className="m-auto flex-1 text-center ">
          <div>
            <img className="m-auto" src={womanImg.src} alt="mans" />
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
    </div>
  );
};

export default BannerSlider;
