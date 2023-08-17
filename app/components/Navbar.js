"use client";


import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`fixed w-full  z-50  transition-all duration-300 ${
        menuOpen && window.scrollY > 0 ? 'bg-white' : '',
        scrolling ? 'shadow-md  bg-white text-black' : 'bg-transparent  text-white'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto py-6 md:px-10 lg:px-52">

        <div className="flex items-center">
          <Image
            src={scrolling  ? '/assets/images/logoB.svg' : '/assets/images/logoW.svg'}
            alt="Logo"
            width={140}
            height={140}
          />
        </div>
        <div className="text-base hidden md:flex items-center space-x-6 nav-link">
          <a href="#" className="hover:text-amber-500">
            Home
          </a>
          <a href="#" className="hover:text-amber-500">
            About
          </a>
          <a href="#" className="hover:text-amber-500">
            Portfolio
          </a>
          <a href="#" className="hover:text-amber-500">
            Gallery
          </a>
          <a href="#" className="hover:text-amber-500">
            Contact
          </a>
          <button className="quote-btn">
           <span className=' text-base'>Get Quote</span> 
          </button>
        </div>
        <div className="md:hidden flex items-center mr-8">
          {/* <button
            className={` focus:outline-none ${
                scrolling ? ' text-black' : ' text-white'
              }`}
            className='focus:outline-none text-black'
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button> */}
          <button onClick={toggleMenu} 
  className="flex flex-col justify-center items-center">
    <span className={` ${
    scrolling ? ' bg-black' : ' bg-white'
  } block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${menuOpen ? 
                    'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`} >
    </span>
    <span className={`${
    scrolling ? ' bg-black' : ' bg-white'
  } block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${menuOpen ? 
                    'opacity-0' : 'opacity-100'
                    }`} >
    </span>
    <span className={`${
    scrolling ? ' bg-black' : ' bg-white'
  } block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${menuOpen ? 
                    '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`} >
    </span>    

  </button>
        </div>
      </div>
      {menuOpen && (
          <div 
          className={` py-4 drop-shadow-xl  top-0 left-0 w-[65vw] bg-white border-t-2 border-t-amber-500  p-10 text-grey-80 fixed h-full z-40 ${
            menuOpen ? "translate-x-0 " : "translate-x-full"
          }`}>
          
          <a href="#" className="block px-4 py-2 text-gray-800">
            Home
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800">
            About
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800">
            Portfolio
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800">
            Gallery
          </a>
          <a href="#" className="block px-4 py-2 text-gray-800">
            Contact
          </a>
          <button className="quote-btn hidden md:block">
            Get Quote
          </button>
          </div>
        
      )}
    </nav>
  );
};

export default Navbar;

