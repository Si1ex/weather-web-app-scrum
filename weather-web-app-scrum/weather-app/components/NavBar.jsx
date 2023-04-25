import Link from 'next/link';
import React from 'react';
import LoginBtn from './LoginBtn';
import { useState, useRef, useEffect } from 'react';

export default function NavBar() {
  const menuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Add event listener to document for clicks
    document.addEventListener('click', handleClickOutsideMenu);

    return () => {
      // Remove event listener when component unmounts
      document.removeEventListener('click', handleClickOutsideMenu);
    };
  }, []);

  function handleClickOutsideMenu(event) {
    // Check if target element is inside the menu or the hamburger button
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !event.target.closest('.absolute')
    ) {
      // Hide the menu
      var menu = document.getElementById('menu');
      menu.classList.add('max-[1024px]:hidden');
    }
  }

  function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.classList.contains('max-[1024px]:hidden')) {
      menu.classList.remove('max-[1024px]:hidden');
    } else {
      setIsOpen(!isOpen);
      menu.classList.add('max-[1024px]:block');
    }
  }

  return (
    <nav className="bg-transparent rounded-b-lg w-full absolute top-0 ">
      <div className="flex max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center text-xl h-16 mx-auto">
          <div className={'absolute flex'}>
            <button
              type="button"
              onClick={toggleMenu}
              id="hamburger-menu"
              className="block lg:hidden mx-5 min-[640px]:mx-1 md:mx-10 mt-20 rounded-xl text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {/* <!-- Icon when menu is closed. -->
                <!--
                  Heroicon name: outline/menu

                  Menu open: "hidden", Menu closed: "block"
                --> */}
              <svg
                className={`block h-10 w-10`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* <!-- Icon when menu is open. -->
                <!--
                  Heroicon name: outline/x

                  Menu open: "block", Menu closed: "hidden"
                --> */}
              <svg
                className="hidden h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-1 flex">
          {/* <!-- Logo --> */}

          {/* <!-- Navigation links --> */}
          <div className="hidden lg:mt-12 lg:block container text-white">
            <div className="flex items-center justify-center space-x-20">
              <Link
                href="/"
                className="text-white dark:text-white border-b-2 border-blue-500 mx-1.5"
              >
                Haku
              </Link>
              <Link
                href="/"
                className="border-b-2 border-transparent text-white transition-all duration-300 ease-in-out hover:border-blue-500 mx-1.5"
              >
                Historiallinen data
              </Link>
              <LoginBtn />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Mobile navigation links --> */}
      <div //Hamburger menu
        className={`max-[1024px]:hidden lg:hidden absolute left-20 md:left-28 top-12 mt-1 px-1 w-48 h-34 shadow-lg ring-1 bg-repeat-space bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 rounded-2xl ${
          isOpen ? `max-[1024px]:block` : ``
        }`}
        id="menu"
        ref={menuRef}
      >
        <div className="flex flex-col text-white text-lg items-start px-3 py-3 space-y-2 ">
          <Link href="/" className="dark:text-white border-b-2 border-blue-500">
            Haku
          </Link>
          <Link
            href="/"
            className="border-b-2 border-transparent transition-all duration-300 ease-in-out hover:border-blue-500"
          >
            Historiallinen data
          </Link>
          <LoginBtn />
        </div>
      </div>
    </nav>
  );
}
