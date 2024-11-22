import React from 'react';
import background from '../../asset/h3-slide-2.jpg';
import { BsArrowUpRight } from 'react-icons/bs';
import { FaCarSide } from 'react-icons/fa';
import { AiOutlineUndo } from 'react-icons/ai';
import { AiOutlineCreditCard } from 'react-icons/ai';

const Banner = () => {
  return (
    <>
      <div className="h-[80vh] bg-black">
        <div className="container h-[100%] flex items-center justify-center mx-auto max-w-screen-xl p-4">
          <div className="">
            <div className="text-center text-white">
              <h1 className="text-[48px] font-bold my-5">
                Elevate Your Everyday Style
              </h1>
              <p className="text-[19px] font-normal">
                Discover the Latest Trends in Sustainable Fashion
              </p>
              <div className="button-element my-8">
                <div className="flex items-center justify-center">
                  <a
                    href="#"
                    className="bg-[#8F71E1] text-white text-[19px]  py-3 px-8 font-normal rounded-full"
                  >
                    Shop Now
                  </a>
                  <span className="bg-[#8F71E1] text-white text-[19px] w-12 h-12 items-center justify-center  rounded-full flex">
                    <BsArrowUpRight></BsArrowUpRight>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#6441C2E5] py-4text-white">
        <div className="container h-[100%] flex flex-wrap gap-7 items-center justify-between mx-auto max-w-screen-xl p-4">
          <div className="text-white flex gap-3">
            <div className="text-[28px]">
              <FaCarSide></FaCarSide>
            </div>
            <div>
              <h4>FREE SHIPPING</h4>
              <p className="text-[13px] my-1">
                BUY BDT 3000+ & GET FREE DELIVERY
              </p>
            </div>
          </div>
          <div className="text-white flex gap-3">
            <div className="text-[28px]">
              <AiOutlineUndo></AiOutlineUndo>
            </div>
            <div>
              <h4>7 DAYS EXCHANGE</h4>
              <p className="text-[13px] my-1">
                EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS
              </p>
            </div>
          </div>
          <div className="text-white flex gap-3">
            <div className="text-[28px]">
              <AiOutlineCreditCard></AiOutlineCreditCard>
            </div>
            <div>
              <h4>100% PAYMENT SECURE</h4>
              <p className="text-[13px] my-1">
                CASH ON DELIVERY AND SECURED ONLINE PAYMENT
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
