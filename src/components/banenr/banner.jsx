import React from 'react';
import background from '../../asset/h3-slide-2.jpg';
const Banner = () => {
  return (
    <div className="h-[80vh] bg-black">
      <div className="container h-[100%] flex items-center justify-center mx-auto max-w-screen-xl p-4">
        <div className="">
          <div className="">
            <h1 className="text-[48px] font-bold">
              Elevate Your Everyday Style
            </h1>
            <p className="text-[19px] font-normal">
              Discover the Latest Trends in Sustainable Fashion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
