'use client';

import React from 'react';
import ProductCard from '@/components/productCard/productCard';
import productData from '@/util/productData';

const featureProduct = () => {
  return (
    <div className="container mx-auto max-w-screen-xl my-16">
      <div className="py-6">
        <h4 className="text-[#7E53D4] text-[19px]">FEATURED PRODUCT</h4>
        <h3 className="text-black font-bold text-[28px]">New Arrivals</h3>
      </div>
      <div className="">
        <div className=" grid grid-cols-4 gap-3">
          {productData.map((value, index) => {
            return <ProductCard key={value.id} data={value}></ProductCard>;
          })}
        </div>
      </div>
    </div>
  );
};

export default featureProduct;
