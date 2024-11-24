import { FiSearch } from 'react-icons/fi';
import Search from '@/asset/search-01.svg';

import userLogo from '../../asset/user.svg';
import Logo from '../../asset/logo (1).png';
import shopinglogo from '../../asset/shopping.svg';

import menuIcon from '../../asset/menu-02.svg';
const Header = () => {
  return (
    <header className="bg-[#F6F5FD]">
      <div className="container mx-auto max-w-screen-xl">
        <div className="container mx-auto flex justify-between items-center p-4">
          <a href="#" className="lg:hidden text-[25px] mr-3">
            <img src={menuIcon.src} alt="menu" />
          </a>
          <a href="#" className="text-2xl font-bold">
            <img
              className="w-[140px] md:w-full"
              src={Logo.src}
              alt="brand-logo"
            />
          </a>

          <div className="lg:flex items-center flex-1 justify-between hidden ">
            <nav className="hidden flex-1 justify-center md:flex space-x-6">
              <a
                href="#home"
                className="text-[#581FC1] font-semibold text-[16px]"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-blue-400 text-[#646464] font-semibold text-[16px]"
              >
                Shop
              </a>
              <a
                href="#services"
                className="hover:text-blue-400 text-[#646464] font-semibold text-[16px]"
              >
                Deals
              </a>
              <a
                href="#contact"
                className="hover:text-blue-400 text-[#646464] font-semibold text-[16px]"
              >
                What's New
              </a>
            </nav>

            <div className="mx-4 px-4 py-2 bg-white rounded-full text-gray-800 flex gap-3">
              <img src={Search.src} alt="" />
              <input
                type="text"
                placeholder="Search"
                className="focus:outline-none placeholder:text-gray-800"
              />
            </div>
          </div>

          <div className="flex-1 md:flex-none justify-end flex">
            <div className="flex gap-4 md:gap-5">
              <div className="lg:hidden ">
                <a href="#" className="text-[24px]">
                  <FiSearch />
                </a>
              </div>
              <div className="">
                <a href="#" className="text-[24px] relative">
                  <span className="w-5 h-5 text-white absolute right-[-8px] top-[-5px] bg-black rounded-full flex justify-center items-center text-[11px]">
                    10
                  </span>
                  <img src={shopinglogo.src} alt="shoping" />
                </a>
              </div>
              <div className="">
                <a href="#">
                  <img src={userLogo.src} alt="user"></img>
                </a>
              </div>
            </div>
          </div>

          <button
            id="mobile-menu-btn"
            className="block md:hidden text-2xl focus:outline-none"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div id="mobile-menu" className="hidden md:hidden bg-gray-700">
          <nav className="flex flex-col space-y-4 p-4">
            <a href="#home" className="hover:text-blue-400">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
            <a href="#services" className="hover:text-blue-400">
              Services
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
