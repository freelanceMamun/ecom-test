'use client';
import React from 'react';
import staricon from '@/asset/star1.svg';
import staricon1 from '@/asset/star-w.svg';

import FeatureProduct from '@/components/FeatureProduct/featureProduct';

const DetailProduct = () => {
  return (
    <div className="mx-auto max-w-screen-xl p-4">
      <div className="">
        {/* nav Breadcum */}
        <div className=" py-4">
          <a href="#">Feature Product / </a>
          <a href="#" className="text-[#7E53D4] font-medium">
            New Arrival
          </a>
        </div>
        {/* nav Breadcum end */}
        <div className="grid grid-cols-2">
          <div className=""></div>
          <div className="">
            <div className="pb-3">
              <button className="bg-[#2F1C59] rounded-lg px-14 py-3 text-white">
                {' '}
                New Arrival
              </button>
            </div>
            <div className="productName">
              <h4 className="text-[33px] font-semibold">White Hoodie</h4>
              <div className="flex gap-2 py-5 items-center">
                <div className="ratting">
                  <div className="flex gap-1">
                    <img src={staricon.src} alt="star" />
                    <img src={staricon.src} alt="star" />
                    <img src={staricon.src} alt="star" />
                    <img src={staricon.src} alt="star" />
                    <img src={staricon1.src} alt="star" />
                  </div>
                </div>
                <div className="flex  gap-2">
                  <p>(4.0)</p>
                  <p className="text-[#7E53D4]">121 reviews</p>
                </div>
              </div>
              <div className="price">
                <h3 className="text-[28px] font-bold">BDT 2500</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 py-8">
              <div>
                <h5 className="text-[19px] font-medium pb-3">Available Size</h5>
                <div className="flex gap-2">
                  <button className=" py-2 px-4 border rounded-md border-[#7E53D4]">
                    S
                  </button>
                  <button className="py-2 px-4 rounded-md">M</button>
                  <button className=" py-2 px-4 rounded-md">L</button>
                  <button className=" py-2 px-4 rounded-md">XL</button>
                </div>
              </div>
              <div>
                <h5 className="text-[19px] font-medium pb-3">
                  Available Color
                </h5>
              </div>
            </div>

            <div className="py-6">
              <h5 className="text-[19px] font-medium pb-4">Quantity</h5>
              <div className="bg-[#ECE9FE] flex items-center justify-between rounded-full w-[150px]">
                <button className="py-2 text-3xl px-4">-</button>
                <p className="text-lg">1</p>
                <button className="py-2 text-3xl px-4">+</button>
              </div>
            </div>

            {/* add to card */}
            <div className="grid grid-cols-2 gap-3 py-4">
              <div>
                <button className="bg-[#7E53D4] text-white py-2 w-full rounded-lg">
                  Buy Now
                </button>
              </div>
              <div>
                <button className="text-[#7E53D4] border w-full py-2 rounded-lg border-[#7E53D4]">
                  {' '}
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Related Products */}
        <FeatureProduct subtitle={'Related Products'}></FeatureProduct>
      </div>
    </div>
  );
};

export default DetailProduct;
