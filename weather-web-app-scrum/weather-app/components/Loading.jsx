import React, { useState, useEffect } from 'react';

function Loader() {
  const [randomNumber, setRandomNumber] = useState(0);

  // phrases array
  const loadingPhrases = [
    {
      phrase:
        'Lataamme sään uudelleen, jotta voimme syyttää sitä huonosta mielialasta',
    },
    { phrase: 'Älä huoli, sää on kohta ladattu.' },
    { phrase: 'Valmistaudu sadekuuroihin, lataus valmistuu kohta.' },
    { phrase: 'Lataamme sään uudelleen, ole hyvä ja odota hetki.' },
    {
      phrase:
        'Sää on kuin elämä, odota hetki ja näe mihin suuntaan se muuttuu.',
    },
    {
      phrase:
        'Sääennusteiden lataus käynnissä, aurinko ja sateet odottavat vuoroaan.',
    },
    { phrase: 'Sään lataus aloitetaan heti kun ukkonen lakkaa.' },
    {
      phrase:
        'Kärsivällisyyttä, sään lataus saattaa kestää yhtä kauan kuin Suomen talvi.',
    },
  ];

  // generate random number to pick phrase
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * loadingPhrases.length);
    setRandomNumber(randomNumber);
  };

  // run automatically
  useEffect(() => {
    generateRandomNumber();
  });

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-pink-200 via-purple-300 to-indigo-200">
      <h1 className="p-7 font-bold text-center text-white text-xl">
        {loadingPhrases[randomNumber].phrase}
      </h1>
      <div className="h-10 w-10 animate-spin">
        <svg viewBox="3 3 18 18">
          <path
            className="fill-gray-200"
            d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
          />
          <path
            className="fill-purple-500"
            d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Loader;
