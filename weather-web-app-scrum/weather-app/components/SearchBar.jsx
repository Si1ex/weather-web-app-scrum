import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Footeri from './Footeri';
import { suggestions } from './Sääkuvakkeet';

export default function SearchBar() {
  const [userInput, setUserInput] = useState(''); // user input address
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [hoveredSuggestionIndex, setHoveredSuggestionIndex] = useState(-1);
  const router = useRouter();
  const inputRef = useRef(null);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const capitalize = (str) => {
    console.log(`Capitalize input:${str}`);
    if (str.length <= 1) {
      return str.charAt(0).toUpperCase();
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  function setInputValue(input, visible) {
    setUserInput(input);
    setIsDropdownVisible(visible);

    const element = document.getElementById('default-search');
    if (visible) {
      element.classList.add('rounded-t-3xl', 'p-4');
      element.classList.remove('rounded-b-3xl');
    } else {
      element.classList.add('rounded-b-3xl', 'rounded-t-3xl', 'p-4');
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setUserInput(suggestion);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setSelectedSuggestionIndex(-1);
    setInputValue(suggestion, false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router
      .push(`/kaupunki/${capitalize(userInput)}`)
      .then(() => window.scrollTo(0, 0));
    if (showSuggestions) {
      e.preventDefault();
      handleSuggestionClick(filteredSuggestions[selectedSuggestionIndex]);
    }
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    const onlyLetters = /^[a-öA-Ö]+$/.test(input);
    const isMatch = suggestions.some((suggestion) =>
      suggestion.toLowerCase().includes(input.toLowerCase()),
    );
    if (input === '') {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
      setInputValue(input, false);
      setIsDropdownVisible(false);
    } else if ((onlyLetters, isMatch)) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(input.toLowerCase()),
      );
      const isMatch = suggestions.some((suggestion) =>
        suggestion.toLowerCase().includes(input.toLowerCase()),
      );
      setIsDropdownVisible(isMatch && input !== '');
      if (isMatch) {
        setFilteredSuggestions(filtered);
        setShowSuggestions(true);
      } else {
        setFilteredSuggestions([]);
        setShowSuggestions(false);
      }
      setInputValue(input, isMatch);
      setSelectedSuggestionIndex(-1);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-repeat-space p-10 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300">
        <h1 className="text-5xl font-bold text-white text-center ">
          Tervetuloa
        </h1>
        <p className="mt-4 text-2xl font-medium text-white mb-7">
          Kirjoita kaupunki:
        </p>
        <div className="w-full md:w-1/2 lg:w-1/3 relative flex bg-transparent items-center">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500  dark:text-gray-400 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            name="IP"
            value={userInput}
            onChange={handleInputChange}
            id="default-search"
            data-testid="default-search"
            autoComplete="off"
            className={`w-full text flex p-3 pl-10 py-2.5 px-4 rounded-t-3xl shadow-xl outline-none overflow-y-auto scrollbar-thumb-purple-500 text-gray-900 bg-gray-50 focus:border-purple-400 dark:bg-white ${
              isDropdownVisible && userInput
                ? 'rounded-b-none'
                : 'rounded-b-3xl'
            }`}
            placeholder="Kaupunki"
            required
          />
          <div className="w-1/3 md:w-1/4 absolute inset-y-0 right-0 z-30 flex items-center pl-3">
            <button
              type="submit"
              data-testid="search-button"
              onClick={() =>
                router
                  .push(`/kaupunki/${capitalize(userInput)}`)
                  .then(() => window.scrollTo(0, 0))
              }
              className="text-white w-full hover:scale-105 ease-in-out duration-100 py-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-400 focus:ring-blue-300 font-medium rounded-full bg-gradient-to-r from-pink-300 to-purple-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Hae
            </button>
          </div>
          <div
            data-testid="suggestion-div"
            className={`absolute mt-1 text w-full top-10 left-0 lg:left-0 max-h-44 scrollbar scrollbar-thumb-rounded-xl scrollbar-corner-rounded-xl scrollbar-track-transparent scrollbar-thumb-purple-500 lg:right-0 bg-white overflow-y-auto ${
              showSuggestions ? '' : 'invisible'
            } ${isDropdownVisible ? 'rounded-b-2xl' : 'rounded-b-xl'}`}
            style={{ padding: '0.5rem 0.5rem' }}
          >
            {filteredSuggestions.map((suggestion, index) => (
              <div
                key={suggestion}
                className={`p-2 mr-2 pl-3 focus:bg-gray-200 hover:bg-gray-200 cursor-pointer dropdown-item ${
                  index === selectedSuggestionIndex
                    ? 'bg-gray-200 rounded-t-3xl rounded-b-3xl'
                    : 'rounded-t-3xl rounded-b-3xl'
                }`}
                onClick={() => handleSuggestionClick(suggestion)}
                onMouseEnter={() => setHoveredSuggestionIndex(index)}
              >
                {suggestion}
              </div>
            ))}
          </div>
        </div>
        <Footeri position="fixed" />
      </div>
    </form>
  );
}
