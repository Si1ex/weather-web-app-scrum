import React, { useState } from 'react';
import NavBar from '@/components/NavBar';

const cityData = {
  Kuopio: [
    { year: 2023, months: [1, 2, 3] },
    { year: 2022, months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
    { year: 2021, months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  ],
  Helsinki: [
    { year: 2023, months: [1, 2, 3] },
    { year: 2022, months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
    { year: 2021, months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  ],
  Tampere: [
    { year: 2023, months: [1, 2, 3] },
    { year: 2022, months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
    { year: 2021, months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
  ],
};

function Weather() {
  const [selectedCity, setSelectedCity] = useState('Kuopio');
  const [selectedYear, setSelectedYear] = useState(2023);
  const [selectedMonth, setSelectedMonth] = useState(1);

  const handleChangeCity = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleChangeYear = (event) => {
    setSelectedYear(Number(event.target.value));
  };

  const handleChangeMonth = (event) => {
    setSelectedMonth(Number(event.target.value));
  };

  function TemperatureChart({ temperatures }) {
    const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Lämpötilat</h3>
        <div className="grid grid-cols-7 gap-4">
          <div className="font-bold text-center">Maanantai</div>
          <div className="font-bold text-center">Tiistai</div>
          <div className="font-bold text-center">Keskiviikko</div>
          <div className="font-bold text-center">Torstai</div>
          <div className="font-bold text-center">Perjantai</div>
          <div className="font-bold text-center">Lauantai</div>
          <div className="font-bold text-center">Sunnuntai</div>
          {days.map((day) => {
            const temperature = temperatures[day - 1];
            return (
              <div
                key={day}
                className="p-2 m-200 bg-gray-200 rounded-md text-center"
              >
                {temperature ? `${temperature} °C` : '-'}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const months = cityData[selectedCity].find(
    (city) => city.year === selectedYear,
  ).months;

  const temperatures = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    29, 30, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  ];

  return (
    <div className="p-10 h-screen w-screen bg-gray-50 flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300">
      <NavBar />
      <div className="bg-white rounded-lg shadow-lg p-10">
        <h2 className="text-xl font-bold mb-4 text-center">Säähistoria</h2>
        <div className="flex justify-between mb-4">
          <div className="w-1/10">
            <label
              htmlFor="city"
              className="block text-gray-700 font-bold mb-2 text-center"
            >
              Kaupunki
            </label>
            <select
              id="city"
              name="city"
              value={selectedCity}
              onChange={handleChangeCity}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4
              py-2 pr-12 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              {Object.keys(cityData).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/10">
            <label
              htmlFor="year"
              className="block text-gray-700 font-bold mb-2 text-center"
            >
              Vuosi
            </label>
            <select
              id="year"
              name="year"
              value={selectedYear}
              onChange={handleChangeYear}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-5 py-2 pr-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              {cityData[selectedCity].map((city) => (
                <option key={city.year} value={city.year}>
                  {city.year}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/10">
            <label
              htmlFor="month"
              className="block text-gray-700 font-bold mb-2 text-center"
            >
              Kuukausi
            </label>
            <select
              id="month"
              name="month"
              value={selectedMonth}
              onChange={handleChangeMonth}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-10 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>
        </div>
        <TemperatureChart temperatures={temperatures} />
      </div>
    </div>
  );
}

function CitySelector({ value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      {Object.keys(cityData).map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
}

export default Weather;
