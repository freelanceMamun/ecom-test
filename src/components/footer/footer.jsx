import React from 'react';
import Logo from '../../asset/logo (3).png';
import facebookIcon from '../../asset/Facebook.png';
import Linkdin from '../../asset/Linkedin.png';
import twitter from '../../asset/Twitter.png';

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-black py-10">
        <div className="container mx-auto max-w-screen-xl  p-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="max-w-md">
              <div>
                <a href="/">
                  <img
                    className="w-full md:w-[195px]"
                    src={Logo.src}
                    alt="Brand Logo"
                  />
                </a>
              </div>
              <div className="py-6">
                <p className="text-white text-[16px]">
                  Saepe quo suscipit vitae quia. Repudiandae nobis quis.
                  Laboriosam unde quae qui quasi mollitia tenetur. Dicta
                  explicabo est consectetur maxime quos fugit velit assumenda
                  est.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h4 className="text-white text-[23px] mb-2">
                  Sign Up For Our Newsletter!
                </h4>
                <p className="text-white text-[16px]">
                  Get notified about updates and be the first to get early
                  access to new Podcast episodes.
                </p>
              </div>
              <div className="subscribe py-10">
                <form action="w-full">
                  <div className="flex w-full">
                    <input
                      type="text"
                      className="bg-white w-full px-4  rounded-l-md py-3 placeholder:text-black"
                      placeholder="Your email address"
                    />
                    <button className="bg-[#7E53D4] rounded-r-md text-white px-10">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 justify-between py-7">
            <div className="text-white">
              <p className="pb-2">
                <a href="#" className="text-[16px] font-medium">
                  Contact Us
                </a>
              </p>
              <p>
                <a href="#">support@we5ive.com</a>
              </p>
            </div>
            <div className="text-white">
              <p className="pb-2">
                <a href="#">About Us</a>
              </p>
              <p>
                <a href="#">Contact Us</a>
              </p>
            </div>
            <div className="text-white">
              <p className="pb-2">
                <a href="#">Privacy policy</a>
              </p>
              <p>
                <a href="#">Terms & Condition</a>
              </p>
            </div>
            <div className="text-white ">
              <p className="pb-2">
                <a href="#">Social Link</a>
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#">
                  <img className="w-6" src={facebookIcon.src} alt="facebook" />
                </a>
                <a href="#">
                  <img className="w-6" src={twitter.src} alt="x-com" />
                </a>
                <a href="#">
                  <img className="w-6" src={Linkdin.src} alt="linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#7E53D4] text- py-4">
        <p className="text-center text-white text-[14px]">© 2024 | We5ive</p>
      </div>
    </footer>
  );
};

export default Footer;
