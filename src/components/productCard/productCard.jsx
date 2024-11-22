'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
const ProductCard = (data) => {
  console.log(data);

  return (
    <div className="bg-white p-2 rounded-2xl">
      <div className="bg-[#F6F5FD] rounded-lg">
        <Link href={`/product/${data.data.id}`}>
          <img
            className="w-full h-[287px] object-contain"
            src={data.data.image.src}
            alt={'Sharee'}
          />
        </Link>
      </div>
      <div className=" py-4 px-2">
        <div className="flex justify-between items-center">
          <p>{data.data.name}</p>
          <p className="text-black font-bold text-[19px]">
            BDT {data.data.price}
          </p>
        </div>
      </div>
      <div className="addtocard pb-2">
        <button className="w-full py-2 rounded-lg font-semibold text-[16px] text-[#7E53D4] border border-[#7E53D4]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
