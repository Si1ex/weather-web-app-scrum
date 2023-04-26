import React, { useState } from 'react';
import { WEATHER_CONDITIONS } from './Sääkuvakkeet';

export default function WidgetTop(props) {
  const { data } = props;

  const date = new Date();
  const showTime = date.getHours();
  const weatherCondition = data.result.current.condition.text;
  const is_day = data.result.current.is_day;
  const iconPath =
    WEATHER_CONDITIONS[weatherCondition][is_day ? 'is_day' : 'night'];

  return (
    <div class="grid grid-flow-dense content-start grid-cols-6 gap-4">
      <div id="temp" class="col-start-1 col-end-3">
        <div className="flex flex-col">
          <span className="text-xl font-semibold text-black mb-2">
            {data.result.location.name}
          </span>
          <span className="text-6xl font-bold">
            {Math.round(data.result.current.temp_c)}°C
          </span>
          <div className="whitespace-nowrap mt-2">
            <span className="text-md font-semibold mt-2">Tuntuu kuin: </span>
            <span className="text-md font-semibold mt-2">
              {Math.round(data.result.current.feelslike_c)}°C
            </span>
          </div>
          <div className="mt-2">
            <span className="text-md font-semibold whitespace-nowrap">
              Y: {Math.round(data.result.forecast.forecastday[0].day.maxtemp_c)}
              °C
            </span>
            <span className="text-md font-semibold whitespace-nowrap mx-2">
              A: {Math.round(data.result.forecast.forecastday[0].day.mintemp_c)}
              °C
            </span>
          </div>
        </div>
      </div>

      <div class="col-start-4 sm:col-start-3 gap-2 col-span-7 flex flex-wrap-reverse item-center pl-10 sm:pl-0 md:pl-14">
        <div class="flex flex-wrap-reverse">
          <div className="items-center flex flex-wrap ">
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
            </svg>

            <p className="font-semibold text-xl whitespace-nowrap ml-2">
              {Math.round(data.result.current.wind_kph)} km/h
            </p>
            <p className="font-semibold text-md text-gray-700 whitespace-nowrap ml-2">
              {Math.round(data.result.current.wind_kph * (5 / 18))} m/s
            </p>
          </div>
          <div class="items-center flex">
            <img
              className="flex h-36 w-36"
              src={iconPath}
              decoding="async"
              data-nimg="true"
            />
          </div>
        </div>
      </div>
      {/*  
      <div id="wind" class="col-start-3 col-span-2">
        03
        <svg
          className="w-7 h-7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
        </svg>
        <div>
          <p className="font-semibold text-xl whitespace-nowrap ml-2">
            {data.result.current.wind_kph} km/h
          </p>
          <p className="font-semibold text-md text-gray-500 whitespace-nowrap ml-2">
            {(data.result.current.wind_kph * (5 / 18)).toFixed(1)} m/s
          </p>
        </div>
      </div>
      <div id="icon" class="  col-start-5 col-end-7 ...">
        04
        <svg
          className=" flex h-24 w-24 fill-current text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
        </svg>
      </div>*/}
    </div>
  );
}
