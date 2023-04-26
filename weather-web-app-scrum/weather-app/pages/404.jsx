import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Error404() {
  return (
    <div className="p-10 h-screen w-screen bg-gray-50 flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300">
      <div className="container flex flex-col md:flex-col items-center justify-center px-5 text-gray-700 text-center">
        <div className="text-8xl text-white font-dark font-extrabold mb-8">
          {' '}
          404
        </div>
        <p className="text-2xl md:text-3xl text-white leading-normal mb-8">
          Sivua ei löydy tai ylläpitäjä on rikkonut jotain. Taas.
        </p>

        <Link
          href="/"
          class="px-5 inline py-3 text-white py-2.5 px-5 bg-purple-500 rounded-md"
        >
          Takaisin etusivulle
        </Link>
      </div>
    </div>
  );
}

export default Error404;
