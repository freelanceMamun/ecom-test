'use client';
import React from 'react';
import staricon from '@/asset/star1.svg';
import staricon1 from '@/asset/star-w.svg';

import FeatureProduct from '@/components/FeatureProduct/featureProduct';
import Dropdown from '@/components/dropdown/dropdown';
import thums from '@/asset/thumbs-up.svg';
import reviewimg from '@/asset/Frame 97.png';

import SliderSingleProducts from '@/components/singleprductslider/singleproductSlider';

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
        <div className="grid grid-cols-2 gap-10">
          {/* Prduct Switcher  Gallary */}
          <div className="">
            <SliderSingleProducts></SliderSingleProducts>
          </div>
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

        {/* == Product Details Review  content == */}
        <div className="my-12">
          <div className="text-sm font-medium text-center text-gray-500  dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap gap-16 ">
              <li className="me-2">
                <a
                  href="#"
                  className="inline-block text-[#747474] text-[19px]  rounded-t-lg  "
                >
                  Details
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className="inline-block text-[#7E53D4] font-medium text-[19px]  rounded-t-lg active "
                  aria-current="page"
                >
                  Review & Rating
                </a>
              </li>
              <li className="me-2">
                <a
                  href="#"
                  className="inline-block text-[#747474] text-[19px]  rounded-t-lg  "
                  aria-current="page"
                >
                  Discussion
                </a>
              </li>
            </ul>
          </div>
          <div className="review py-10">
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <Dropdown />
                <div className="my-5">
                  {/* ==== Review customer element  */}
                  <div className="py-4">
                    <div className="flex gap-3">
                      <img
                        src={reviewimg.src}
                        className="w-10 h-10 rounded-full"
                        alt=""
                      />
                      <div>
                        <h4 className="text-black mb-1 text-[16px] font-semibold ">
                          Cameron Williamson{' '}
                          <span className="text-[#656565] font-light text-[12px] ml-2">
                            3days
                          </span>
                        </h4>
                        <div className="flex gap-1 pt-1 ">
                          <a href="#">
                            <img src={staricon.src} alt="star" />
                          </a>
                          <a href="#">
                            <img src={staricon.src} alt="star" />
                          </a>
                          <a href="#">
                            <img src={staricon.src} alt="star" />
                          </a>
                          <a href="#">
                            <img src={staricon.src} alt="star" />
                          </a>
                          <a href="#">
                            <img src={staricon1.src} alt="star" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="py-6">
                      <p className="text-black font-semibold">Very Nice!!</p>
                      <p className="flex  gap-1 items-center pt-3">
                        <a href="#">
                          <img src={thums.src} alt="" />
                        </a>
                        10
                      </p>
                    </div>
                  </div>

                  <div className="py-4">
                    <div className="flex gap-3">
                      <img
                        src={reviewimg.src}
                        className="w-10 h-10 rounded-full"
                        alt=""
                      />
                      <div>
                        <h4 className="text-black mb-1 text-[16px] font-semibold ">
                          Cameron Williamson{' '}
                          <span className="text-[#656565] font-light text-[12px] ml-2">
                            3days
                          </span>
                        </h4>
                        <div className="flex gap-1 pt-1 ">
                          <a href="#">
                            <img src={staricon.src} alt="star" />
                          </a>
                          <a href="#">
                            <img src={staricon.src} alt="star" />
                          </a>
                          <a href="#">
                            <img src={staricon.src} alt="star" />
                          </a>
                          <a href="#">
                            <img src={staricon.src} alt="star" />
                          </a>
                          <a href="#">
                            <img src={staricon1.src} alt="star" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="py-6">
                      <p className="text-black font-semibold">Very Nice!!</p>
                      <p className="flex  gap-1 items-center pt-3">
                        <a href="#">
                          <img src={thums.src} alt="" />
                        </a>
                        10
                      </p>
                    </div>
                  </div>

                  {/* ==== Review customer element  */}
                </div>
              </div>
              <div className="">
                <div className="flex gap-2">
                  <p className="text-black font-semibold">Product Review</p>
                  <p className="text-[#7E53D4] font-semibold">121 reviews</p>
                </div>
                <div className="rattingstar  flex justify-between py-4">
                  <div className="flex gap-1">
                    <img src={staricon.src} alt="star" />
                    <img src={staricon.src} alt="star" />
                    <img src={staricon.src} alt="star" />
                    <img src={staricon.src} alt="star" />
                    <img src={staricon1.src} alt="star" />
                  </div>
                  <div className="font-semibold">(4.0)</div>
                </div>
                <div className="py-5">
                  <div className="flex items-center gap-2 pb-3">
                    <div>5</div>
                    <div className="w-full bg-[#DFDFDF] rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-[#FFCF11] h-2.5 rounded-full w-[45%]"></div>{' '}
                    </div>
                    <div>50</div>
                  </div>
                  <div className="flex items-center gap-2 pb-3">
                    <div>4</div>
                    <div className="w-full bg-[#DFDFDF] rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-[#FFCF11] h-2.5 rounded-full w-[45%]"></div>{' '}
                    </div>
                    <div>5</div>
                  </div>

                  <div className="flex items-center gap-2 pb-3">
                    <div>3</div>
                    <div className="w-full bg-[#DFDFDF] rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-[#FFCF11] h-2.5 rounded-full w-[45%]"></div>{' '}
                    </div>
                    <div>10</div>
                  </div>
                  <div className="flex items-center gap-2 pb-3">
                    <div>2</div>
                    <div className="w-full bg-[#DFDFDF] rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-[#FFCF11] h-2.5 rounded-full w-[45%]"></div>{' '}
                    </div>
                    <div>30</div>
                  </div>
                  <div className="flex items-center gap-2 pb-3">
                    <div>1</div>
                    <div className="w-full bg-[#DFDFDF] rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-[#FFCF11] h-2.5 rounded-full w-[45%]"></div>{' '}
                    </div>
                    <div>2</div>
                  </div>
                </div>
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
