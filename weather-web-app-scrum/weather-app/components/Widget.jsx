import React, { useState, useEffect } from 'react';
import Footeri from './Footeri';
import NavBar from './NavBar';
import dynamic from 'next/dynamic';
import { WEATHER_CONDITIONS } from './Sääkuvakkeet';
import { HumiditySVG } from './HumiditySVG';

function Widget(props) {
  const { data } = props;
  const weatherCondition = data.result.current.condition.text;
  const is_day = data.result.current.is_day;
  const iconPath =
    WEATHER_CONDITIONS[weatherCondition][is_day ? 'is_day' : 'night'];
  const weatherCondition1 =
    data.result.forecast.forecastday[1].day.condition.text;
  const iconPath1 =
    WEATHER_CONDITIONS[weatherCondition1][is_day ? 'is_day' : 'night'];
  const weatherCondition2 =
    data.result.forecast.forecastday[2].day.condition.text;
  const weatherCondition3 =
    data.result.forecast.forecastday[3].day.condition.text;
  const weatherCondition4 =
    data.result.forecast.forecastday[4].day.condition.text;
  const weatherCondition5 =
    data.result.forecast.forecastday[5].day.condition.text;
  const iconPath2 =
    WEATHER_CONDITIONS[weatherCondition2][is_day ? 'is_day' : 'night'];
  const iconPath3 =
    WEATHER_CONDITIONS[weatherCondition3][is_day ? 'is_day' : 'night'];
  const iconPath4 =
    WEATHER_CONDITIONS[weatherCondition4][is_day ? 'is_day' : 'night'];
  const iconPath5 =
    WEATHER_CONDITIONS[weatherCondition5][is_day ? 'is_day' : 'night'];

  const astrosunrise = data.result.forecast.forecastday[0].astro.sunrise; // e.g. "7:30 AM"
  const dateObj = new Date(`01/01/2000 ${astrosunrise}`); // create a date object from the time string
  const options = { hour: '2-digit', minute: '2-digit', hour12: false };
  const auringonnousuTänään = dateObj.toLocaleTimeString('fi-FI', options); // convert to European time format

  const astrosunset = data.result.forecast.forecastday[0].astro.sunset; // e.g. "7:30 AM"
  const dateObj1 = new Date(`01/01/2000 ${astrosunset}`); // create a date object from the time string
  const options1 = { hour: '2-digit', minute: '2-digit', hour12: false };
  const auringonlaskuTänään = dateObj1.toLocaleTimeString('fi-FI', options1); // convert to European time format

  const dates = [];
  const daysOfWeek = [];
  const datesWithoutYear = [];

  data.result.forecast.forecastday.forEach((day) => {
    const date = new Date(day.date);
    const dayOfWeek =
      date
        .toLocaleString('fi-FI', { weekday: 'short' })
        .slice(0, 1)
        .toUpperCase() +
      date.toLocaleString('fi-FI', { weekday: 'short' }).slice(1);
    const dateWithoutYear = date.toLocaleString('fi-FI', {
      month: 'short',
      day: 'numeric',
    });

    dates.push(day.date);
    daysOfWeek.push(dayOfWeek);
    datesWithoutYear.push(dateWithoutYear);
  });

  /**
   * Leaflet makes direct calls to the DOM when it is loaded, therefore React Leaflet is not compatible with server-side rendering.
   * @see https://stackoverflow.com/a/64634759/9244579
   */
  const WeatherMap = dynamic(() => import('@/components/WeatherMap'), {
    loading: () => <p>Ladataan...</p>,
    ssr: false,
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 bg-repeat-space bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300">
      <NavBar className="" />
      <p>Dataa apista:</p>
      {/* show data like this data.Object.Object.datafield */}
      <p>{data.result.location.localtime}</p>

      <div className="max-w-screen-sm bg-repeat-space bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-400 justify-center mx-20 mt-20 p-7 rounded-3xl ring-8 ring-white ring-opacity-40">
        <h1 className="text-2xl font-semibold mb-2">Sää nyt:</h1>
        <div className="flex space-x-28">
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-black mb-2">
              {data.result.location.name}
            </span>
            <span className="text-6xl font-bold">
              {Math.round(data.result.current.temp_c)}°C
            </span>
            <span className="text-md font-semibold whitespace-nowrap mt-2">
              Tuntuu kuin {Math.round(data.result.current.feelslike_c)}°C
            </span>
            <div className="mt-2">
              <span className="text-md font-semibold whitespace-nowrap">
                Y:{' '}
                {Math.round(data.result.forecast.forecastday[0].day.maxtemp_c)}
                °C
              </span>
              <span className="text-md font-semibold mx-2 whitespace-nowrap">
                A:{' '}
                {Math.round(data.result.forecast.forecastday[0].day.mintemp_c)}
                °C
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"
              />
            </svg>
            <div>
              <p className="font-semibold text-xl whitespace-nowrap ml-2">
                {data.result.current.wind_kph} km/h
              </p>
              <p className="font-semibold text-md text-gray-600 whitespace-nowrap ml-2">
                {(data.result.current.wind_kph * (5 / 18)).toFixed(1)} m/s
              </p>
            </div>
          </div>
          <div className="">
            <img
              className="w-full h-full scale-150"
              src={iconPath}
              decoding="async"
              data-nimg="true"
            />
          </div>
        </div>
        <div className="flex justify-between mt-7">
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg">
              {data.result.forecastday}°C
            </span>
            <svg
              className="h-10 w-10 fill-current text-gray-400 mt-3"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
            </svg>
            <span className="font-semibold mt-1 text-sm">11:00</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg">31°C</span>
            <svg
              className="h-10 w-10 fill-current text-gray-400 mt-3"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
            </svg>
            <span className="font-semibold mt-1 text-sm">1:00</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg">32°C</span>
            <svg
              className="h-10 w-10 fill-current text-gray-400 mt-3"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12.01 6c2.61 0 4.89 1.86 5.4 4.43l.3 1.5 1.52.11c1.56.11 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3h-13c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.95 6 12.01 6m0-2C9.12 4 6.6 5.64 5.35 8.04 2.35 8.36.01 10.91.01 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96C18.68 6.59 15.65 4 12.01 4z" />
            </svg>
            <span className="font-semibold mt-1 text-sm">3:00</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg">31°C</span>
            <svg
              className="h-10 w-10 fill-current text-gray-400 mt-3"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12.01 6c2.61 0 4.89 1.86 5.4 4.43l.3 1.5 1.52.11c1.56.11 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3h-13c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.95 6 12.01 6m0-2C9.12 4 6.6 5.64 5.35 8.04 2.35 8.36.01 10.91.01 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96C18.68 6.59 15.65 4 12.01 4z" />
            </svg>
            <span className="font-semibold mt-1 text-sm">5:00</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg">27°C</span>
            <svg
              className="h-10 w-10 fill-current text-gray-400 mt-3"
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <g>
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <g>
                  <path d="M19.78,17.51c-2.47,0-6.57-1.33-8.68-5.43C8.77,7.57,10.6,3.6,11.63,2.01C6.27,2.2,1.98,6.59,1.98,12 c0,0.14,0.02,0.28,0.02,0.42C2.61,12.16,3.28,12,3.98,12c0,0,0,0,0,0c0-3.09,1.73-5.77,4.3-7.1C7.78,7.09,7.74,9.94,9.32,13 c1.57,3.04,4.18,4.95,6.8,5.86c-1.23,0.74-2.65,1.15-4.13,1.15c-0.5,0-1-0.05-1.48-0.14c-0.37,0.7-0.94,1.27-1.64,1.64 c0.98,0.32,2.03,0.5,3.11,0.5c3.5,0,6.58-1.8,8.37-4.52C20.18,17.5,19.98,17.51,19.78,17.51z" />
                  <path d="M7,16l-0.18,0C6.4,14.84,5.3,14,4,14c-1.66,0-3,1.34-3,3s1.34,3,3,3c0.62,0,2.49,0,3,0c1.1,0,2-0.9,2-2 C9,16.9,8.1,16,7,16z" />
                </g>
              </g>
            </svg>
            <span className="font-semibold mt-1 text-sm">7:00</span>
          </div>
        </div>
      </div>

      <div className="max-w-screen-sm bg-repeat-space bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-400 justify-center mx-18 mt-10 md:mt-20 rounded-3xl ring-8 ring-white ring-opacity-40">
        <WeatherMap
          latitude={data.result.location.lat}
          longitude={data.result.location.lon}
        />
      </div>

      <div className="flex flex-col space-y-6 max-w-screen-sm mx-20 bg-repeat-space bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-400 p-8 mt-10 rounded-3xl ring-8 ring-white ring-opacity-40">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg  w-1/4">
            {daysOfWeek[1]}, {datesWithoutYear[1]}
          </span>
          <div className="flex items-center justify-center  w-1/4">
            <span className="font-semibold">
              {data.result.forecast.forecastday[1].day.avghumidity}%
            </span>
            <HumiditySVG />
          </div>
          <div className="w-12 h-12">
            <img
              className="w-full h-full scale-125 "
              src={iconPath1}
              decoding="async"
              data-nimg="true"
            />
          </div>
          <div className="flex items-center">
            <p className="font-semibold  text-xl ">
              {Math.round(data.result.forecast.forecastday[1].day.maxtemp_c)}°C
            </p>
            <div className="items-end">
              <p className="font-semibold  text-sm">
                &nbsp; &nbsp;{' '}
                {Math.round(data.result.forecast.forecastday[1].day.mintemp_c)}
                °C
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg  w-1/4">
            {daysOfWeek[2]}, {datesWithoutYear[2]}
          </span>
          <div className="flex items-center justify-center  w-1/4">
            <span className="font-semibold">
              {data.result.forecast.forecastday[2].day.avghumidity}%
            </span>
            <HumiditySVG />
          </div>
          <div className="w-12 h-12">
            <img
              className="w-full h-full scale-125 "
              src={iconPath2}
              decoding="async"
              data-nimg="true"
            />
          </div>
          <div className="flex items-center">
            <p className="font-semibold text-xl ">
              {Math.round(data.result.forecast.forecastday[2].day.maxtemp_c)}°C
            </p>
            <div className="items-end">
              <p className="font-semibold text-sm ">
                &nbsp; &nbsp;{' '}
                {Math.round(data.result.forecast.forecastday[2].day.mintemp_c)}
                °C
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg  w-1/4">
            {daysOfWeek[3]}, {datesWithoutYear[3]}
          </span>
          <div className="flex items-center justify-center  w-1/4">
            <span className="font-semibold">
              {data.result.forecast.forecastday[3].day.avghumidity}%
            </span>
            <HumiditySVG />
          </div>
          <div className="w-12 h-12">
            <img
              className="w-full h-full scale-125 "
              src={iconPath3}
              decoding="async"
              data-nimg="true"
            />
          </div>
          <div className="flex items-center">
            <p className="font-semibold text-xl ">
              {Math.round(data.result.forecast.forecastday[3].day.maxtemp_c)}°C
            </p>
            <div className="items-end">
              <p className="font-semibold text-sm ">
                &nbsp; &nbsp;{' '}
                {Math.round(data.result.forecast.forecastday[3].day.mintemp_c)}
                °C
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg  w-1/4">
            {daysOfWeek[4]}, {datesWithoutYear[4]}
          </span>
          <div className="flex items-center justify-center w-1/4">
            <span className="font-semibold">
              {data.result.forecast.forecastday[4].day.avghumidity}%
            </span>
            <HumiditySVG />
          </div>
          <div className="w-12 h-12">
            <img
              className="w-full h-full scale-125 "
              src={iconPath4}
              decoding="async"
              data-nimg="true"
            />
          </div>
          <div className="flex items-center">
            <p className="font-semibold text-xl ">
              {Math.round(data.result.forecast.forecastday[4].day.maxtemp_c)}°C
            </p>
            <div className="items-end">
              <p className="font-semibold text-sm">
                &nbsp; &nbsp;{' '}
                {Math.round(data.result.forecast.forecastday[4].day.mintemp_c)}
                °C
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold text-lg  w-1/4">
            {daysOfWeek[5]}, {datesWithoutYear[5]}
          </span>
          <div className="flex items-center justify-center w-1/4">
            <span className="font-semibold">
              {data.result.forecast.forecastday[5].day.avghumidity}%
            </span>
            <HumiditySVG />
          </div>
          <div className="w-12 h-12">
            <img
              className="w-full h-full scale-125 "
              src={iconPath5}
              decoding="async"
              data-nimg="true"
            />
          </div>
          <div className="flex items-center">
            <p className="font-semibold text-xl ">
              {Math.round(data.result.forecast.forecastday[5].day.maxtemp_c)}°C
            </p>
            <div className="items-end">
              <p className="font-semibold text-sm">
                &nbsp; &nbsp;{' '}
                {Math.round(data.result.forecast.forecastday[5].day.mintemp_c)}
                °C
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-6 max-w-screen-sm mx-18 bg-repeat-space bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-400 p-8 mt-10 rounded-3xl ring-8 ring-white ring-opacity-40">
        <h1 className="text-xl font-semibold mb-2">
          Tarkemmat säätiedot: {data.result.location.name}
        </h1>
        <div className="lg:flex justify-between items-center">
          <HumiditySVG />
          <div className="flex mr-auto">
            <p className="font-semibold text-lg whitespace-nowrap ml-2">
              Kosteus:{' '}
            </p>
            <p className="font-semibold text-lg whitespace-nowrap ml-2">
              {data.result.current.humidity} %
            </p>
          </div>
          <SunriseSVG />
          <div className="flex">
            <p className="font-semibold text-lg whitespace-nowrap ml-2">
              Auringonnousu:{' '}
            </p>
            <p className="font-semibold text-lg whitespace-nowrap ml-2">
              {auringonnousuTänään}
            </p>
          </div>
        </div>
        <div className="lg:flex justify-between items-center">
          <div>
            <svg
              className="w-12 h-12 scale-125"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <defs>
                <clipPath id="a">
                  <path fill="none" d="M7.5 7.5h49v28.06l-21-.06v21h-28v-49z" />
                </clipPath>
              </defs>
              <g clip-path="url(#a)">
                <g>
                  <path
                    fill="none"
                    stroke="#f59e0b"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="3"
                    d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"
                  />
                  <animateTransform
                    attributeName="transform"
                    dur="45s"
                    from="0 32 32"
                    repeatCount="indefinite"
                    to="360 32 32"
                    type="rotate"
                  />
                </g>
              </g>
              <path
                fill="#374151"
                d="M41.69 46.56A1.87 1.87 0 0043 47c1.17 0 1.76-.52 1.76-1.56v-5.87a.66.66 0 01.12-.45.64.64 0 01.44-.12h1.12a.46.46 0 01.57.57v5.77A3.5 3.5 0 0146 48a4.17 4.17 0 01-3 1 4.14 4.14 0 01-3-1 3.5 3.5 0 01-1-2.68v-5.75a.46.46 0 01.57-.57h1.12a.6.6 0 01.43.12.66.66 0 01.12.45v5.83a1.47 1.47 0 00.45 1.16zM57.44 39.56l-3.17 9a.72.72 0 01-.25.38.81.81 0 01-.45.1h-1.13a.89.89 0 01-.45-.09.63.63 0 01-.24-.36l-3.19-9c-.14-.37 0-.56.37-.56h1a1.6 1.6 0 01.73.11.67.67 0 01.3.41l1.63 5.25c.06.23.13.48.19.77s.1.5.13.67v.25h.11a9.3 9.3 0 01.35-1.67l1.6-5.27a.61.61 0 01.3-.41 1.51 1.51 0 01.71-.11h1c.48-.03.6.16.46.53z"
              />
            </svg>
          </div>
          <div className="flex mr-auto">
            <p className="font-semibold text-lg whitespace-nowrap ml-2">
              UV-indeksi:{' '}
            </p>
            <p className="font-semibold text-lg whitespace-nowrap ml-2">
              {data.result.current.uv}
            </p>
          </div>
          <div className="flex">
            <p className="font-semibold text-lg whitespace-nowrap ml-2">
              Auringonlasku:{' '}
            </p>
            <p className="font-semibold text-lg whitespace-nowrap ml-2">
              {auringonlaskuTänään}
            </p>
          </div>
        </div>
        <div className="lg:flex justify-between items-center">
          <div>
            <svg
              className="w-12 h-12 scale-125"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
            >
              <path
                fill="none"
                stroke="#e5e7eb"
                stroke-dasharray="35 22"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="3"
                d="M43.64 20a5 5 0 113.61 8.46h-35.5"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  dur="2s"
                  repeatCount="indefinite"
                  values="-57; 57"
                />
              </path>
              <path
                fill="none"
                stroke="#e5e7eb"
                stroke-dasharray="24 18"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="3"
                d="M29.14 44a5 5 0 103.61-8.46h-21"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  begin="-1.5s"
                  dur="2s"
                  repeatCount="indefinite"
                  values="-39; 39"
                />
              </path>
              <g>
                <path
                  fill="none"
                  stroke="#fde68a"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="3"
                  d="M21.5 39.5h9"
                />
                <animateTransform
                  attributeName="transform"
                  dur=".9s"
                  repeatCount="indefinite"
                  type="translate"
                  values="0 0; 15 0"
                />
                <animate
                  attributeName="opacity"
                  dur=".9s"
                  repeatCount="indefinite"
                  values="0; 1; 1; 1; 0"
                />
              </g>
              <g>
                <path
                  fill="none"
                  stroke="#fde68a"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="3"
                  d="M11.5 24.5h9"
                />
                <animateTransform
                  attributeName="transform"
                  begin="-.3s"
                  dur=".9s"
                  repeatCount="indefinite"
                  type="translate"
                  values="-3 0; 18 0"
                />
                <animate
                  attributeName="opacity"
                  begin="-.3s"
                  dur=".9s"
                  repeatCount="indefinite"
                  values="0; 1; 1; 1; 0"
                />
              </g>
              <g>
                <path
                  fill="none"
                  stroke="#fde68a"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="3"
                  d="M27.5 32h9"
                />
                <animateTransform
                  attributeName="transform"
                  begin="-.6s"
                  dur=".9s"
                  repeatCount="indefinite"
                  type="translate"
                  values="-6 0; 12 0"
                />
                <animate
                  attributeName="opacity"
                  begin="-.6s"
                  dur=".9s"
                  repeatCount="indefinite"
                  values="0; 1; 1; 1; 0"
                />
              </g>
            </svg>
          </div>
          <div className="flex items-center mr-auto">
            <p className="font-semibold text-lg whitespace-nowrap ml-2">
              Tuulenpuuskat:{' '}
            </p>
            <p className="font-semibold text-lg whitespace-nowrap ml-2">
              {Math.round(data.result.current.gust_kph)} km/h
            </p>
            <p className="font-semibold text-sm">
              {' '}
              &nbsp;(
              {Math.round(data.result.current.wind_kph * (5 / 18))} m/s)
            </p>
          </div>
          <svg
            className="w-12 h-12 scale-125"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
          >
            <defs>
              <linearGradient
                id="a"
                x1="14.85"
                y1="42.34"
                x2="124.18"
                y2="231.72"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#3392d6" />
                <stop offset="0.45" stop-color="#3392d6" />
                <stop offset="1" stop-color="#2477b2" />
              </linearGradient>
              <linearGradient
                id="b"
                x1="188.85"
                y1="170.77"
                x2="298.18"
                y2="360.15"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#f3f7fe" />
                <stop offset="0.45" stop-color="#f3f7fe" />
                <stop offset="1" stop-color="#deeafb" />
              </linearGradient>
              <linearGradient
                id="c"
                x1="310.54"
                y1="152.47"
                x2="425.46"
                y2="351.53"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#d4d7dd" />
                <stop offset="0.45" stop-color="#d4d7dd" />
                <stop offset="1" stop-color="#bec1c6" />
              </linearGradient>
              <clipPath id="d">
                <path fill="none">
                  <animate
                    attributeName="d"
                    values="
                            M168,252H344V380H168Z;
                            M168,220H376V380H168Z;
                            M168,252H344V380H168Z
                            "
                    dur="3s"
                    calcMode="spline"
                    keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                    repeatCount="indefinite"
                  />
                </path>
              </clipPath>
              <symbol id="e" viewBox="0 0 164 245.57">
                <path
                  d="M82,3.57c-48.7,72-80,117-80,160.75s35.79,79.25,80,79.25,80-35.47,80-79.25S130.7,75.54,82,3.57Z"
                  stroke="#2885c7"
                  stroke-miterlimit="10"
                  stroke-width="4"
                  fill="url(#a)"
                />
              </symbol>
            </defs>
            <path
              d="M256,132c-48.7,72-80,117-80,160.75S211.79,372,256,372s80-35.47,80-79.25S304.7,204,256,132Z"
              stroke="#2885c7"
              stroke-miterlimit="10"
              stroke-width="4"
              fill="url(#b)"
            />
            <path
              d="M352,132h32V372H352m8-120h24m-16,56h16M368,188h16"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="6"
              stroke="url(#c)"
            />
            <path
              fill="none"
              stroke="url(#a)"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="6"
              d="M352 132h32v240h-32m8-120h24m-16 56h16m-16-120h16"
            />
            <g clip-path="url(#d)">
              <use
                width="164"
                height="245.57"
                transform="translate(174.11 128.99)"
                xlinkHref="#e"
              />
            </g>
          </svg>
          <div className="flex">
            <p className="font-semibold text-lg whitespace-nowrap ml-2">
              Sademäärä:{' '}
            </p>
            <p className="font-semibold text-lg whitespace-nowrap ml-2">
              {data.result.current.precip_mm} mm
            </p>
          </div>
        </div>
        <div className="lg:flex justify-between items-center">
          <div className="flex mr-auto">
            <p className="font-semibold text-lg whitespace-nowrap ml-2">
              Pilvisyys:{' '}
            </p>
            <p className="font-semibold text-lg whitespace-nowrap ml-2">
              {data.result.current.cloud} %
            </p>
          </div>
          <div className="flex">
            <p className="font-semibold text-lg whitespace-nowrap ml-2">
              Näkyvyys:{' '}
            </p>
            <p className="font-semibold text-lg whitespace-nowrap ml-2">
              {data.result.current.vis_km} km
            </p>
          </div>
        </div>
      </div>
      <Footeri position="relative" />
    </div>
  );
}

export default Widget;
