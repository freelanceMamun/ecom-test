import React from 'react';
import Logo from '../../asset/logowhite.png';
const Footer = () => {
  return (
    <footer className="">
      <div className="bg-black">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="grid">
            <div className="">
              <div>
                <a href="/">
                  <img src={Logo.src} alt="Brand Logo" />
                </a>
              </div>
            </div>
            <div></div>
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
