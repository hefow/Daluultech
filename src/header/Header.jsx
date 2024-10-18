import React, { useState, useEffect } from "react";
import logo from'../images/logo.jpg'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex-shrink-0">
            <a href="#" title="" className="flex ">
              <img className="w-auto h-8 lg:h-10" src={logo} alt="Daluultech Logo" />
            </a>
          </div>

          <button
            type="button"
            className={`inline-flex p-2 transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100 ${
              isScrolled ? "text-gray-600" : "text-white"
            }`}
          >
            <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            </svg>
          </button>

          <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
            <a
              href="#"
              className={`text-base font-medium transition-all duration-200 hover:text-blue-600 focus:text-blue-600 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Home
            </a>
            <a
              href="#Services"
              className={`text-base font-medium transition-all duration-200 hover:text-blue-600 focus:text-blue-600 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Service
            </a>
            <a
              href="#About"
              className={`text-base font-medium transition-all duration-200 hover:text-blue-600 focus:text-blue-600 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              About
            </a>
            <a
              href="#ContactForm"
              className={`text-base font-medium transition-all duration-200 hover:text-blue-600 focus:text-blue-600 ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Contact
            </a>
          </div>

          <a
            href="#"
            className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700"
            role="button"
          >
            Get started now
          </a>
        </nav>

        {/* Mobile menu - hidden by default */}
        <nav className="hidden pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
          <div className="flow-root">
            <div className="flex flex-col px-6 -my-2 space-y-1">
              <a href="#" className="inline-flex py-2 text-base font-medium text-gray-900 transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Home
              </a>
              <a href="#Services" className="inline-flex py-2 text-base font-medium text-gray-900 transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Service
              </a>
              <a href="#About" className="inline-flex py-2 text-base font-medium text-gray-900 transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                About
              </a>
              <a href="#ContactForm" className="inline-flex py-2 text-base font-medium text-gray-900 transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                Contact
              </a>
            </div>
          </div>

          <div className="px-6 mt-6">
            <a
              href="#"
              className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md items-center hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              Get started now
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;