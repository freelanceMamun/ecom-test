import React from 'react';
import ShopingBag from '@/asset/shopping-basket-01.svg';
const BagBatch = () => {
  return (
    <div className="fixed right-0 top-72">
      <div className="bg-[#581FC1] rounded-l-xl text-white p-4 px-6 text-center">
        <img src={ShopingBag.src} alt="" className="m-auto pb-2" />
        <p>your bag</p>
        <p>0</p>
      </div>
    </div>
  );
};

export default BagBatch;
