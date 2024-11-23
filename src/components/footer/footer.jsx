import React from 'react';
import Logo from '../../asset/logo (3).png';
const Footer = () => {
  return (
    <footer className="">
      <div className="bg-black py-10">
        <div className="container mx-auto max-w-screen-xl flex justify-between items-center p-4">
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
                <h4 className="text-white text-[23px]">
                  Sign Up For Our Newsletter!
                </h4>
                <p className="text-white text-[16px]">
                  Get notified about updates and be the first to get early
                  access to new Podcast episodes.
                </p>
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
