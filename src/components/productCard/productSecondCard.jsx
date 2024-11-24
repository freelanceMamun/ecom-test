'use client';
import Link from 'next/link';
import React from 'react';
import start from '../../asset/star.svg';
import start1 from '../../asset/star (1).svg';

const ProductSecondCard = (data) => {
  return (
    <div className="bg-white p-2 rounded-2xl lg:w-[300px] mb-5">
      <div className="bg-[#F6F5FD] rounded-lg  relative">
        <Link href={`/product/${data.data.id}`}>
          <img
            className="w-full h-[287px] object-contain"
            src={data.data.image.src}
            alt={'Sharee'}
          />
        </Link>
        {data.data.offer && (
          <div className="offer bg-[#7E53D4] w-11 h-[70px] right-2  rounded-b-full text-center  text-white absolute top-0">
            <p className="text-[14px] font-bold">
              up <br></br> to {data.data.offer}
            </p>
          </div>
        )}
      </div>
      {data.data.ratting && (
        <div className="review pt-4 pl-2">
          <div className="flex gap-1">
            <img src={start.src} alt="star" />
            <img src={start.src} alt="star" />
            <img src={start.src} alt="star" />
            <img src={start1.src} alt="star" />
            <img src={start1.src} alt="star" />
          </div>
        </div>
      )}

      <div className=" py-4 px-2">
        <div className="flex justify-between items-center">
          <p>{data.data.name}</p>
          <p className="text-black font-bold text-[19px]">
            BDT {data.data.price}
          </p>
        </div>
      </div>
      <div className="addtocard pb-2">
        <button className="w-full py-2 hover:bg-[#7E53D4] hover:text-white rounded-lg font-semibold text-[16px] text-[#7E53D4] border border-[#7E53D4]">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductSecondCard;
