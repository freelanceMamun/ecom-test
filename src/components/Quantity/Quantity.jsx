'use client';
import React, { useState } from 'react';

const Quantity = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count < 2) return;
    setCount((prev) => prev - 1);
  };
  return (
    <div>
      <div className="py-6">
        <h5 className="text-[19px] font-medium pb-4">Quantity</h5>
        <div className="bg-[#ECE9FE] flex items-center justify-between rounded-full w-[150px]">
          <button onClick={decrement} className="py-2 text-3xl px-4">
            -
          </button>
          <p className="text-lg">{count}</p>
          <button className="py-2 text-3xl px-4" onClick={increment}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quantity;
