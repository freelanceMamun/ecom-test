const Header = () => {
  return (
    <header className="bg-[#F5F3FF]">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="#" className="text-2xl font-bold">
          <span className="text-blue-500">My</span>Brand
        </a>

        <div className="flex items-center flex-1 justify-between">
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

          <div className="mx-4">
            <input
              type="text"
              placeholder="Search products..."
              className="px-4 py-2 bg-white rounded-full text-gray-800  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="hidden md:block px-4 py-2 ">

          
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
    </header>
  );
};

export default Header;
