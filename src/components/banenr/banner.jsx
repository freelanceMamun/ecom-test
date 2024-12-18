import React from 'react';
import background from '../../asset/hero.png';
import { BsArrowUpRight } from 'react-icons/bs';
import { FaCarSide } from 'react-icons/fa';
import { AiOutlineUndo } from 'react-icons/ai';
import { AiOutlineCreditCard } from 'react-icons/ai';

import shipIcon from '../../asset/truck-delivery.svg';
import EXCHANGE from '../../asset/exchange-01.svg';
import payment from '../../asset/payment-02.svg';

import optonImg from '../../asset/option1.png';
const Banner = () => {
  return (
    <>
      <div
        className="lg:h-[80vh] h-[360px] bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <div className="container h-[100%] flex items-center justify-center mx-auto max-w-screen-xl p-4">
          <div className="mt-16">
            <div className="text-center text-white">
              <h1 className="lg:text-[58px] text-[28px] font-bold md:my-5">
                Elevate Your Everyday Style
              </h1>
              <p className="md:text-[19px] text-[16px] font-normal">
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
      <div
        className="py-4  relative before:top-0 before:right-0 before:absolute before:w-full before:h-full before:bg-[#6341c2d0] text-white bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${optonImg.src})` }}
      >
        <div className="container z-10 flex flex-wrap gap-7 items-center justify-between mx-auto max-w-screen-xl p-4">
          <div className="text-white flex gap-3 z-10 ">
            <div className="text-[28px]">
              <img src={shipIcon.src} alt="SHIPPING" />
            </div>
            <div>
              <h4>FREE SHIPPING</h4>
              <p className="text-[13px] my-1">
                BUY BDT 3000+ & GET FREE DELIVERY
              </p>
            </div>
          </div>
          <div className="text-white flex gap-3 z-10 ">
            <div className="text-[28px]">
              <img src={EXCHANGE.src} alt="EXCHANGE"></img>
            </div>
            <div>
              <h4>7 DAYS EXCHANGE</h4>
              <p className="text-[13px] my-1">
                EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS
              </p>
            </div>
          </div>
          <div className="text-white flex gap-3 z-10 ">
            <div className="text-[28px]">
              <img src={payment.src} alt="payment" />
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
