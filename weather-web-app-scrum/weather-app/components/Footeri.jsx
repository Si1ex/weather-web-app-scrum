import React from 'react';

function Footeri({ position }) {
  return (
    <footer
      style={{ position }}
      className="fixed bottom-5 rounded-lg md:flex max-[1024px]:landscape:hidden items-center mt-10 left-0 mx-5 bg-transparent md:p-25"
    >
      <div className="w-1/5 flex-shrink-0 hidden md:block">
        <a href="#" className="flex items-center">
          <img src="#" className="h-8 mr-5" alt="Logo" />
        </a>
      </div>
      <div className="flex md:w-1/2">
        <div className="md:w-1/2 mr-7 lg:mr-36 whitespace-nowrap">
          <h2 className="mb-2 mt-6 font-semibold text-white uppercase ">
            Seuraa meitä
          </h2>
          <ul className="text-white">
            <li className="">
              <a
                href="https://t.me/serveriry"
                className="border-b-2 border-transparent text-white transition-all duration-300 ease-in-out hover:border-blue-500"
              >
                Telegram
              </a>
            </li>
            <li>
              <a
                href="#"
                className="border-b-2 border-transparent text-white transition-all duration-300 ease-in-out hover:border-blue-500"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/serveriry/"
                className="border-b-2 border-transparent text-white transition-all duration-300 ease-in-out hover:border-blue-500"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 mr-20">
          <h2 className="mb-2 mt-6 font-semibold text-white whitespace-nowrap uppercase ">
            Tutustu myös
          </h2>
          <ul className="text-white">
            <li className="mb-0">
              <a
                href="https://serveriry.fi/"
                className="border-b-2 border-transparent text-white transition-all duration-300 ease-in-out hover:border-blue-500"
              >
                Serveri.ry
              </a>
            </li>
            <li>
              <div className="whitespace-nowrap">
                <a
                  href="https://www.uef.fi/"
                  className="border-b-2 border-transparent text-white transition-all duration-300 ease-in-out hover:border-blue-500"
                >
                  Itä-Suomen yliopisto
                </a>
              </div>
            </li>
            <li>
              <a
                href="https://www.savonia.fi/"
                className="border-b-2 border-transparent text-white transition-all whitespace-nowrap duration-300 ease-in-out hover:border-blue-500"
              >
                Savonia AMK
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footeri;
